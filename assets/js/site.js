/* ---------------------------------------------------------------------------
   site.js — scroll orchestration, chapter rail, cue words, cipher reveal.
--------------------------------------------------------------------------- */
(function () {
  'use strict';

  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var flock = window.Flock || { setMode: function () {}, setHeroFade: function () {} };
  var scene = window.Scene || { setChapter: function () {}, setFade: function () {} };
  var portrait = window.Portrait || { setProgress: function () {} };

  var hero = document.querySelector('.hero');
  var contactSection = document.getElementById('contact');
  var chapters = Array.prototype.slice.call(document.querySelectorAll('.chapter'));
  var rail = document.getElementById('rail');
  var hint = document.getElementById('scrollHint');
  var navWords = Array.prototype.slice.call(document.querySelectorAll('.nav-word'));

  /* ------------------------------------------------------- chapter rail */

  var BIRD = '<svg viewBox="0 0 12 12" fill="currentColor" aria-hidden="true">' +
             '<path d="M0 3.4 5.2 6 0 8.6 1.9 6z M5.6 5.4 12 2.2 6.6 6 12 9.8 5.6 6.6z"/></svg>';

  var ticks = [];
  var marker = null;

  function buildRail() {
    if (!rail) return;
    /* one tick per chapter, contact excluded — it gets its own nav word */
    var storyCount = chapters.filter(function (c) {
      return c.dataset.chapter !== 'contact';
    }).length;

    var html = '';
    for (var i = 0; i < storyCount; i++) html += '<span class="tick"></span>';
    rail.innerHTML = html + '<span class="marker">' + BIRD + '</span>';

    ticks = Array.prototype.slice.call(rail.querySelectorAll('.tick'));
    marker = rail.querySelector('.marker');
  }

  function paintRail(activeIndex) {
    if (!ticks.length) return;

    ticks.forEach(function (tick, i) {
      tick.classList.toggle('past', i < activeIndex);
      tick.classList.toggle('here', i === activeIndex);
    });

    if (marker && activeIndex >= 0 && ticks[activeIndex]) {
      var railBox = rail.getBoundingClientRect();
      var tickBox = ticks[activeIndex].getBoundingClientRect();
      var x = tickBox.left - railBox.left + tickBox.width / 2 - marker.offsetWidth / 2;
      marker.style.transform = 'translateX(' + x.toFixed(1) + 'px)';
      marker.style.opacity = '1';
    } else if (marker) {
      marker.style.opacity = '0';
    }
  }

  /* ----------------------------------------------------------- reveals */

  if ('IntersectionObserver' in window && !reduce) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -18% 0px', threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(function (el) { io.observe(el); });
  } else {
    document.querySelectorAll('.reveal').forEach(function (el) { el.classList.add('in'); });
  }

  /* ------------------------------------------------------ scroll state */

  var activeChapter = -1;
  var queued = false;

  function onScroll() {
    var y = window.scrollY || window.pageYOffset;
    var vh = window.innerHeight;

    /* hero glyph field fades out over the first screenful */
    var heroProgress = Math.min(1, y / (vh * 0.75));
    flock.setHeroFade(1 - heroProgress);

    /* The portrait gathers as the contact section comes up: nothing at the
       moment its top crosses the viewport bottom, fully assembled by the time
       that top has climbed to roughly the top of the screen. */
    var portraitP = 0;
    if (contactSection) {
      var top = contactSection.getBoundingClientRect().top;
      portraitP = Math.max(0, Math.min(1, (vh - top) / (vh * 0.85)));
    }
    portrait.setProgress(portraitP);

    /* The wireframe fades in as the hero leaves, then back out as the portrait
       takes over the same patch of screen. */
    var sceneFade = Math.max(0, Math.min(1, (y - vh * 0.35) / (vh * 0.45)));
    scene.setFade(sceneFade * Math.max(0, 1 - portraitP * 2.4));

    if (hint) hint.classList.toggle('gone', y > 60);

    /* whichever chapter's midpoint is closest to the viewport centre wins */
    var centre = y + vh / 2;
    var best = -1, bestDist = Infinity;
    chapters.forEach(function (c, i) {
      var top = c.offsetTop;
      var mid = top + c.offsetHeight / 2;
      var d = Math.abs(mid - centre);
      if (d < bestDist) { bestDist = d; best = i; }
    });

    var inStory = y > vh * 0.5;
    if (rail) rail.classList.toggle('on', inStory);

    if (best !== activeChapter) {
      activeChapter = best;
      scene.setChapter(best + 1);
      paintRail(inStory ? best : -1);
    } else if (inStory) {
      paintRail(best);
    }

    /* nav word highlighting */
    var atContact = chapters[best] && chapters[best].dataset.chapter === 'contact';
    navWords.forEach(function (w) {
      var key = w.dataset.nav;
      var on = key === 'top' ? !inStory
             : key === 'contact' ? atContact
             : inStory && !atContact;
      w.classList.toggle('active', !!on);
    });
  }

  function requestScroll() {
    if (queued) return;
    queued = true;
    requestAnimationFrame(function () { queued = false; onScroll(); });
  }

  /* --------------------------------------------------------- cue words */

  document.querySelectorAll('.cue').forEach(function (cue) {
    var behaviour = cue.dataset.cue;

    function engage() {
      cue.classList.add('live');
      flock.setMode(behaviour);
    }
    function release() {
      cue.classList.remove('live');
      flock.setMode('idle');
    }

    cue.addEventListener('mouseenter', engage);
    cue.addEventListener('mouseleave', release);
    cue.addEventListener('focus', engage);
    cue.addEventListener('blur', release);

    /* touch: tap to run the behaviour for a few seconds */
    cue.addEventListener('click', function (e) {
      e.preventDefault();
      engage();
      clearTimeout(cue._timer);
      cue._timer = setTimeout(release, 4200);
    });
  });

  /* ------------------------------------------------------------ cipher */

  function rot13(s) {
    return s.replace(/[a-z]/gi, function (c) {
      var base = c <= 'Z' ? 65 : 97;
      return String.fromCharCode((c.charCodeAt(0) - base + 13) % 26 + base);
    });
  }

  var cipher = document.getElementById('cipher');
  if (cipher) {
    /* wrap each character so they can turn over individually */
    function render(text) {
      cipher.innerHTML = text.split('').map(function (c) {
        return '<span class="ch">' + (c === ' ' ? '&nbsp;' : c) + '</span>';
      }).join('');
    }
    render(cipher.dataset.rot);

    var turned = false;
    cipher.addEventListener('click', function () {
      var plain = rot13(cipher.dataset.rot);

      if (turned) {
        window.location.href = 'mailto:' + plain;
        return;
      }
      turned = true;

      cipher.classList.add('turning');
      setTimeout(function () {
        render(plain);
        cipher.classList.remove('turning');
        cipher.classList.add('done');
        cipher.title = 'click again to send mail';
      }, 380);
    });
  }

  /* -------------------------------------------------------------- boot */

  buildRail();
  window.addEventListener('scroll', requestScroll, { passive: true });
  window.addEventListener('resize', requestScroll);
  onScroll();
})();
