var Xh=Object.defineProperty;var Yh=(i,e,t)=>e in i?Xh(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var se=(i,e,t)=>Yh(i,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function t(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(a){if(a.ep)return;a.ep=!0;const r=t(a);fetch(a.href,r)}})();const Hi=-1e4,Ar=2026.75,It=.2,Gs=-21e3,ya=157.5,bl=.8,qh=90,mi=[.25,.5,1,2,4],Kh=12e-5,is=32,na="./",Gc=[[0,Hi],[.18,-1e3],[.3,1e3],[.4,1500],[.5,1800],[.6,1900],[.72,1950],[.86,2e3],[1,Ar]],$h=[{key:"energy",name:"energy",unit:"EJ/yr",color:"#ff6b6b",points:[[-1e4,.045],[-5e3,.2],[-1e3,1.2],[1,3.5],[1e3,5],[1500,8],[1700,12],[1800,20],[1850,25],[1900,45],[1950,100],[1973,250],[2e3,420],[2023,620],[2026,640]],on:!0},{key:"city",name:"largest city",unit:"people",color:"#ffb347",points:[[-7e3,3e3],[-5e3,5e3],[-3500,2e4],[-3e3,4e4],[-2e3,65e3],[-1e3,1e5],[-500,2e5],[100,1e6],[400,8e5],[700,6e5],[900,9e5],[1200,1e6],[1500,7e5],[1700,7e5],[1800,11e5],[1850,23e5],[1900,65e5],[1950,12e6],[1975,22e6],[2e3,34e6],[2026,37e6]],on:!1},{key:"speed",name:"fastest travel",unit:"m/s",color:"#8fd3a1",points:[[-1e4,1.4],[-4e3,1.5],[-3500,6],[-2e3,8],[1500,9],[1800,10],[1830,15],[1850,25],[1900,40],[1920,80],[1935,150],[1947,340],[1955,700],[1961,7800],[1969,11e3],[2026,11e3]],on:!1},{key:"compute",name:"top computer",unit:"FLOP/s",color:"#78c8ff",points:[[1890,1],[1936,20],[1946,5e3],[1954,6e4],[1964,3e6],[1976,16e7],[1985,19e8],[1997,1e12],[2008,1e15],[2022,11e17],[2026,2e18]],on:!0},{key:"co2",name:"CO₂",unit:"ppm",color:"#e3ecff",points:[[-1e4,265],[-8e3,260],[-6e3,262],[-4e3,268],[-2e3,275],[1,278],[1e3,279],[1500,282],[1750,277],[1800,283],[1850,285],[1900,296],[1950,311],[1970,326],[1980,339],[1990,354],[2e3,369],[2010,390],[2020,413],[2023,421],[2026,428]],on:!0},{key:"life",name:"life expectancy",unit:"years",color:"#b5f0c8",on:!0,points:[[-1e4,26],[-3e3,27],[1,27],[1e3,27],[1500,28],[1700,30],[1800,31],[1850,32],[1900,32],[1920,36],[1950,46],[1970,58],[1990,64],[2e3,67],[2010,70],[2019,73],[2026,73]]},{key:"dc",name:"data centres",unit:"GW",color:"#7fe0ff",on:!0,points:[[1990,1],[2e3,7],[2005,14],[2010,22],[2015,26],[2018,28],[2020,32],[2022,40],[2023,48],[2024,55],[2025,70],[2026,88]]}],Zh={series:$h};function Ea(i){if(i<1)return`${Math.max(1,Math.round(-i)).toLocaleString()} BCE`;const e=Math.round(i);return e<1e3?`${e} CE`:String(e)}function Hc(i){return i>=1e9?`<b>${(i/1e9).toFixed(i>=1e10?0:1)} billion</b> people`:i>=1e6?`<b>${(i/1e6).toFixed(i>=1e8?0:1)} million</b> people`:`<b>${Math.round(i/1e3).toLocaleString()} thousand</b> people`}function _a(i){return i>=1e9?`${(i/1e9).toFixed(i>=1e10?0:1)} B`:i>=1e6?`${(i/1e6).toFixed(i>=1e8?0:1)} M`:i>=1e3?`${(i/1e3).toFixed(i>=1e5?0:1)} k`:i>=10?String(Math.round(i)):i.toFixed(1)}function El(i,e,t,n=!1){let a=0,r=i.length;for(;a<r;){const s=a+r>>1,o=t(i[s]);(n?o<=e:o<e)?a=s+1:r=s}return a}function Hs(i){let e=(i%360+360)%360;return e>180&&(e-=360),e}function Jh(i,e){if(e<=i[0][0])return i[0][1];const t=i[i.length-1];if(e>=t[0])return t[1];for(let n=1;n<i.length;n++)if(e<=i[n][0]){const[a,r]=i[n-1],[s,o]=i[n],c=(e-a)/(s-a);return r>0&&o>0?Math.exp(Math.log(r)+c*(Math.log(o)-Math.log(r))):r+(o-r)*c}return t[1]}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Vo="185",Xi={ROTATE:0,DOLLY:1,PAN:2},Wi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Qh=0,Tl=1,jh=2,_r=1,eu=2,va=3,Nn=0,Wt=1,Pn=2,Dn=0,Yi=1,Zt=2,wl=3,Al=4,tu=5,ci=100,nu=101,iu=102,au=103,ru=104,su=200,ou=201,lu=202,cu=203,Ws=204,Xs=205,hu=206,uu=207,du=208,fu=209,pu=210,mu=211,gu=212,_u=213,vu=214,Ys=0,qs=1,Ks=2,Zi=3,$s=4,Zs=5,Js=6,Qs=7,Wc=0,xu=1,Mu=2,Sn=0,Xc=1,Yc=2,qc=3,Kc=4,$c=5,Zc=6,Jc=7,Qc=300,_i=301,Ji=302,as=303,rs=304,Yr=306,Ta=1e3,Ln=1001,js=1002,At=1003,yu=1004,Fa=1005,kt=1006,ss=1007,ui=1008,en=1009,jc=1010,eh=1011,wa=1012,Go=1013,En=1014,Mn=1015,Fn=1016,Ho=1017,Wo=1018,Aa=1020,th=35902,nh=35899,ih=1021,ah=1022,hn=1023,On=1026,di=1027,rh=1028,Xo=1029,vi=1030,Yo=1031,qo=1033,vr=33776,xr=33777,Mr=33778,yr=33779,eo=35840,to=35841,no=35842,io=35843,ao=36196,ro=37492,so=37496,oo=37488,lo=37489,Rr=37490,co=37491,ho=37808,uo=37809,fo=37810,po=37811,mo=37812,go=37813,_o=37814,vo=37815,xo=37816,Mo=37817,yo=37818,So=37819,bo=37820,Eo=37821,To=36492,wo=36494,Ao=36495,Ro=36283,Co=36284,Cr=36285,Po=36286,Su=3200,Rl=0,bu=1,tn="",$t="srgb",Pr="srgb-linear",Lr="linear",et="srgb",Ei=7680,Cl=519,Eu=512,Tu=513,wu=514,Ko=515,Au=516,Ru=517,$o=518,Cu=519,Lo=35044,sh=35048,Pl="300 es",yn=2e3,Dr=2001;function Pu(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Ra(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Lu(){const i=Ra("canvas");return i.style.display="block",i}const Ll={};function Ir(...i){const e="THREE."+i.shift();console.log(e,...i)}function oh(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ce(...i){i=oh(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function $e(...i){i=oh(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function qi(...i){const e=i.join(" ");e in Ll||(Ll[e]=!0,Ce(...i))}function Du(i,e,t){return new Promise(function(n,a){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:a();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const Iu={[Ys]:qs,[Ks]:Js,[$s]:Qs,[Zi]:Zs,[qs]:Ys,[Js]:Ks,[Qs]:$s,[Zs]:Zi};class ii{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const a=n[e];if(a!==void 0){const r=a.indexOf(t);r!==-1&&a.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const a=n.slice(0);for(let r=0,s=a.length;r<s;r++)a[r].call(this,e);e.target=null}}}const Ot=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Sr=Math.PI/180,Do=180/Math.PI;function ti(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ot[i&255]+Ot[i>>8&255]+Ot[i>>16&255]+Ot[i>>24&255]+"-"+Ot[e&255]+Ot[e>>8&255]+"-"+Ot[e>>16&15|64]+Ot[e>>24&255]+"-"+Ot[t&63|128]+Ot[t>>8&255]+"-"+Ot[t>>16&255]+Ot[t>>24&255]+Ot[n&255]+Ot[n>>8&255]+Ot[n>>16&255]+Ot[n>>24&255]).toLowerCase()}function Ye(i,e,t){return Math.max(e,Math.min(t,i))}function Uu(i,e){return(i%e+e)%e}function os(i,e,t){return(1-t)*i+t*e}function xn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function it(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Nu={DEG2RAD:Sr},cl=class cl{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6],this.y=a[1]*t+a[4]*n+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ye(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ye(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),a=Math.sin(t),r=this.x-e.x,s=this.y-e.y;return this.x=r*n-s*a+e.x,this.y=r*a+s*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};cl.prototype.isVector2=!0;let Le=cl;class un{constructor(e=0,t=0,n=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=a}static slerpFlat(e,t,n,a,r,s,o){let c=n[a+0],l=n[a+1],u=n[a+2],f=n[a+3],h=r[s+0],m=r[s+1],_=r[s+2],y=r[s+3];if(f!==y||c!==h||l!==m||u!==_){let p=c*h+l*m+u*_+f*y;p<0&&(h=-h,m=-m,_=-_,y=-y,p=-p);let d=1-o;if(p<.9995){const b=Math.acos(p),R=Math.sin(b);d=Math.sin(d*b)/R,o=Math.sin(o*b)/R,c=c*d+h*o,l=l*d+m*o,u=u*d+_*o,f=f*d+y*o}else{c=c*d+h*o,l=l*d+m*o,u=u*d+_*o,f=f*d+y*o;const b=1/Math.sqrt(c*c+l*l+u*u+f*f);c*=b,l*=b,u*=b,f*=b}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,a,r,s){const o=n[a],c=n[a+1],l=n[a+2],u=n[a+3],f=r[s],h=r[s+1],m=r[s+2],_=r[s+3];return e[t]=o*_+u*f+c*m-l*h,e[t+1]=c*_+u*h+l*f-o*m,e[t+2]=l*_+u*m+o*h-c*f,e[t+3]=u*_-o*f-c*h-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,a){return this._x=e,this._y=t,this._z=n,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,a=e._y,r=e._z,s=e._order,o=Math.cos,c=Math.sin,l=o(n/2),u=o(a/2),f=o(r/2),h=c(n/2),m=c(a/2),_=c(r/2);switch(s){case"XYZ":this._x=h*u*f+l*m*_,this._y=l*m*f-h*u*_,this._z=l*u*_+h*m*f,this._w=l*u*f-h*m*_;break;case"YXZ":this._x=h*u*f+l*m*_,this._y=l*m*f-h*u*_,this._z=l*u*_-h*m*f,this._w=l*u*f+h*m*_;break;case"ZXY":this._x=h*u*f-l*m*_,this._y=l*m*f+h*u*_,this._z=l*u*_+h*m*f,this._w=l*u*f-h*m*_;break;case"ZYX":this._x=h*u*f-l*m*_,this._y=l*m*f+h*u*_,this._z=l*u*_-h*m*f,this._w=l*u*f+h*m*_;break;case"YZX":this._x=h*u*f+l*m*_,this._y=l*m*f+h*u*_,this._z=l*u*_-h*m*f,this._w=l*u*f-h*m*_;break;case"XZY":this._x=h*u*f-l*m*_,this._y=l*m*f-h*u*_,this._z=l*u*_+h*m*f,this._w=l*u*f+h*m*_;break;default:Ce("Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,a=Math.sin(n);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],a=t[4],r=t[8],s=t[1],o=t[5],c=t[9],l=t[2],u=t[6],f=t[10],h=n+o+f;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(u-c)*m,this._y=(r-l)*m,this._z=(s-a)*m}else if(n>o&&n>f){const m=2*Math.sqrt(1+n-o-f);this._w=(u-c)/m,this._x=.25*m,this._y=(a+s)/m,this._z=(r+l)/m}else if(o>f){const m=2*Math.sqrt(1+o-n-f);this._w=(r-l)/m,this._x=(a+s)/m,this._y=.25*m,this._z=(c+u)/m}else{const m=2*Math.sqrt(1+f-n-o);this._w=(s-a)/m,this._x=(r+l)/m,this._y=(c+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ye(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const a=Math.min(1,t/n);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,a=e._y,r=e._z,s=e._w,o=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+s*o+a*l-r*c,this._y=a*u+s*c+r*o-n*l,this._z=r*u+s*l+n*c-a*o,this._w=s*u-n*o-a*c-r*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,a=e._y,r=e._z,s=e._w,o=this.dot(e);o<0&&(n=-n,a=-a,r=-r,s=-s,o=-o);let c=1-t;if(o<.9995){const l=Math.acos(o),u=Math.sin(l);c=Math.sin(c*l)/u,t=Math.sin(t*l)/u,this._x=this._x*c+n*t,this._y=this._y*c+a*t,this._z=this._z*c+r*t,this._w=this._w*c+s*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+a*t,this._z=this._z*c+r*t,this._w=this._w*c+s*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),a=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(a*Math.sin(e),a*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const hl=class hl{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Dl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Dl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,a=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*a,this.y=r[1]*t+r[4]*n+r[7]*a,this.z=r[2]*t+r[5]*n+r[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,a=this.z,r=e.elements,s=1/(r[3]*t+r[7]*n+r[11]*a+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*a+r[12])*s,this.y=(r[1]*t+r[5]*n+r[9]*a+r[13])*s,this.z=(r[2]*t+r[6]*n+r[10]*a+r[14])*s,this}applyQuaternion(e){const t=this.x,n=this.y,a=this.z,r=e.x,s=e.y,o=e.z,c=e.w,l=2*(s*a-o*n),u=2*(o*t-r*a),f=2*(r*n-s*t);return this.x=t+c*l+s*f-o*u,this.y=n+c*u+o*l-r*f,this.z=a+c*f+r*u-s*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,a=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*a,this.y=r[1]*t+r[5]*n+r[9]*a,this.z=r[2]*t+r[6]*n+r[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this.z=Ye(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this.z=Ye(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ye(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,a=e.y,r=e.z,s=t.x,o=t.y,c=t.z;return this.x=a*c-r*o,this.y=r*s-n*c,this.z=n*o-a*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ls.copy(this).projectOnVector(e),this.sub(ls)}reflect(e){return this.sub(ls.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ye(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,a=this.z-e.z;return t*t+n*n+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const a=Math.sin(t)*e;return this.x=a*Math.sin(n),this.y=Math.cos(t)*e,this.z=a*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};hl.prototype.isVector3=!0;let P=hl;const ls=new P,Dl=new un,ul=class ul{constructor(e,t,n,a,r,s,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,a,r,s,o,c,l)}set(e,t,n,a,r,s,o,c,l){const u=this.elements;return u[0]=e,u[1]=a,u[2]=o,u[3]=t,u[4]=r,u[5]=c,u[6]=n,u[7]=s,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,a=t.elements,r=this.elements,s=n[0],o=n[3],c=n[6],l=n[1],u=n[4],f=n[7],h=n[2],m=n[5],_=n[8],y=a[0],p=a[3],d=a[6],b=a[1],R=a[4],M=a[7],w=a[2],E=a[5],C=a[8];return r[0]=s*y+o*b+c*w,r[3]=s*p+o*R+c*E,r[6]=s*d+o*M+c*C,r[1]=l*y+u*b+f*w,r[4]=l*p+u*R+f*E,r[7]=l*d+u*M+f*C,r[2]=h*y+m*b+_*w,r[5]=h*p+m*R+_*E,r[8]=h*d+m*M+_*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],a=e[2],r=e[3],s=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*s*u-t*o*l-n*r*u+n*o*c+a*r*l-a*s*c}invert(){const e=this.elements,t=e[0],n=e[1],a=e[2],r=e[3],s=e[4],o=e[5],c=e[6],l=e[7],u=e[8],f=u*s-o*l,h=o*c-u*r,m=l*r-s*c,_=t*f+n*h+a*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/_;return e[0]=f*y,e[1]=(a*l-u*n)*y,e[2]=(o*n-a*s)*y,e[3]=h*y,e[4]=(u*t-a*c)*y,e[5]=(a*r-o*t)*y,e[6]=m*y,e[7]=(n*c-l*t)*y,e[8]=(s*t-n*r)*y,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,a,r,s,o){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*s+l*o)+s+e,-a*l,a*c,-a*(-l*s+c*o)+o+t,0,0,1),this}scale(e,t){return qi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(cs.makeScale(e,t)),this}rotate(e){return qi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(cs.makeRotation(-e)),this}translate(e,t){return qi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(cs.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let a=0;a<9;a++)if(t[a]!==n[a])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};ul.prototype.isMatrix3=!0;let Fe=ul;const cs=new Fe,Il=new Fe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ul=new Fe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Fu(){const i={enabled:!0,workingColorSpace:Pr,spaces:{},convert:function(a,r,s){return this.enabled===!1||r===s||!r||!s||(this.spaces[r].transfer===et&&(a.r=In(a.r),a.g=In(a.g),a.b=In(a.b)),this.spaces[r].primaries!==this.spaces[s].primaries&&(a.applyMatrix3(this.spaces[r].toXYZ),a.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===et&&(a.r=Ki(a.r),a.g=Ki(a.g),a.b=Ki(a.b))),a},workingToColorSpace:function(a,r){return this.convert(a,this.workingColorSpace,r)},colorSpaceToWorking:function(a,r){return this.convert(a,r,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===tn?Lr:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,r=this.workingColorSpace){return a.fromArray(this.spaces[r].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,r,s){return a.copy(this.spaces[r].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,r){return qi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(a,r)},toWorkingColorSpace:function(a,r){return qi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(a,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Pr]:{primaries:e,whitePoint:n,transfer:Lr,toXYZ:Il,fromXYZ:Ul,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:$t},outputColorSpaceConfig:{drawingBufferColorSpace:$t}},[$t]:{primaries:e,whitePoint:n,transfer:et,toXYZ:Il,fromXYZ:Ul,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:$t}}}),i}const Ke=Fu();function In(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ki(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Ti;class Ou{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ti===void 0&&(Ti=Ra("canvas")),Ti.width=e.width,Ti.height=e.height;const a=Ti.getContext("2d");e instanceof ImageData?a.putImageData(e,0,0):a.drawImage(e,0,0,e.width,e.height),n=Ti}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ra("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const a=n.getImageData(0,0,e.width,e.height),r=a.data;for(let s=0;s<r.length;s++)r[s]=In(r[s]/255)*255;return n.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(In(t[n]/255)*255):t[n]=In(t[n]);return{data:t,width:e.width,height:e.height}}else return Ce("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Bu=0;class Zo{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Bu++}),this.uuid=ti(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},a=this.data;if(a!==null){let r;if(Array.isArray(a)){r=[];for(let s=0,o=a.length;s<o;s++)a[s].isDataTexture?r.push(hs(a[s].image)):r.push(hs(a[s]))}else r=hs(a);n.url=r}return t||(e.images[this.uuid]=n),n}}function hs(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ou.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ce("Texture: Unable to serialize Texture."),{})}let ku=0;const us=new P;class Ut extends ii{constructor(e=Ut.DEFAULT_IMAGE,t=Ut.DEFAULT_MAPPING,n=Ln,a=Ln,r=kt,s=ui,o=hn,c=en,l=Ut.DEFAULT_ANISOTROPY,u=tn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ku++}),this.uuid=ti(),this.name="",this.source=new Zo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=a,this.magFilter=r,this.minFilter=s,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Le(0,0),this.repeat=new Le(1,1),this.center=new Le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(us).x}get height(){return this.source.getSize(us).y}get depth(){return this.source.getSize(us).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Ce(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){Ce(`Texture.setValues(): property '${t}' does not exist.`);continue}a&&n&&a.isVector2&&n.isVector2||a&&n&&a.isVector3&&n.isVector3||a&&n&&a.isMatrix3&&n.isMatrix3?a.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Qc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ta:e.x=e.x-Math.floor(e.x);break;case Ln:e.x=e.x<0?0:1;break;case js:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ta:e.y=e.y-Math.floor(e.y);break;case Ln:e.y=e.y<0?0:1;break;case js:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ut.DEFAULT_IMAGE=null;Ut.DEFAULT_MAPPING=Qc;Ut.DEFAULT_ANISOTROPY=1;const dl=class dl{constructor(e=0,t=0,n=0,a=1){this.x=e,this.y=t,this.z=n,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,a){return this.x=e,this.y=t,this.z=n,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,a=this.z,r=this.w,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*a+s[12]*r,this.y=s[1]*t+s[5]*n+s[9]*a+s[13]*r,this.z=s[2]*t+s[6]*n+s[10]*a+s[14]*r,this.w=s[3]*t+s[7]*n+s[11]*a+s[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,a,r;const c=e.elements,l=c[0],u=c[4],f=c[8],h=c[1],m=c[5],_=c[9],y=c[2],p=c[6],d=c[10];if(Math.abs(u-h)<.01&&Math.abs(f-y)<.01&&Math.abs(_-p)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+y)<.1&&Math.abs(_+p)<.1&&Math.abs(l+m+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const R=(l+1)/2,M=(m+1)/2,w=(d+1)/2,E=(u+h)/4,C=(f+y)/4,v=(_+p)/4;return R>M&&R>w?R<.01?(n=0,a=.707106781,r=.707106781):(n=Math.sqrt(R),a=E/n,r=C/n):M>w?M<.01?(n=.707106781,a=0,r=.707106781):(a=Math.sqrt(M),n=E/a,r=v/a):w<.01?(n=.707106781,a=.707106781,r=0):(r=Math.sqrt(w),n=C/r,a=v/r),this.set(n,a,r,t),this}let b=Math.sqrt((p-_)*(p-_)+(f-y)*(f-y)+(h-u)*(h-u));return Math.abs(b)<.001&&(b=1),this.x=(p-_)/b,this.y=(f-y)/b,this.z=(h-u)/b,this.w=Math.acos((l+m+d-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this.z=Ye(this.z,e.z,t.z),this.w=Ye(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this.z=Ye(this.z,e,t),this.w=Ye(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ye(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};dl.prototype.isVector4=!0;let pt=dl;class zu extends ii{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:kt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new pt(0,0,e,t),this.scissorTest=!1,this.viewport=new pt(0,0,e,t),this.textures=[];const a={width:e,height:t,depth:n.depth},r=new Ut(a),s=n.count;for(let o=0;o<s;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:kt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let a=0,r=this.textures.length;a<r;a++)this.textures[a].image.width=e,this.textures[a].image.height=t,this.textures[a].image.depth=n,this.textures[a].isData3DTexture!==!0&&(this.textures[a].isArrayTexture=this.textures[a].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const a=Object.assign({},e.textures[t].image);this.textures[t].source=new Zo(a)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class bn extends zu{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class lh extends Ut{constructor(e=null,t=1,n=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:a},this.magFilter=At,this.minFilter=At,this.wrapR=Ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Vu extends Ut{constructor(e=null,t=1,n=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:a},this.magFilter=At,this.minFilter=At,this.wrapR=Ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Xr=class Xr{constructor(e,t,n,a,r,s,o,c,l,u,f,h,m,_,y,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,a,r,s,o,c,l,u,f,h,m,_,y,p)}set(e,t,n,a,r,s,o,c,l,u,f,h,m,_,y,p){const d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=a,d[1]=r,d[5]=s,d[9]=o,d[13]=c,d[2]=l,d[6]=u,d[10]=f,d[14]=h,d[3]=m,d[7]=_,d[11]=y,d[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Xr().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,a=1/wi.setFromMatrixColumn(e,0).length(),r=1/wi.setFromMatrixColumn(e,1).length(),s=1/wi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*a,t[1]=n[1]*a,t[2]=n[2]*a,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*s,t[9]=n[9]*s,t[10]=n[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,a=e.y,r=e.z,s=Math.cos(n),o=Math.sin(n),c=Math.cos(a),l=Math.sin(a),u=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){const h=s*u,m=s*f,_=o*u,y=o*f;t[0]=c*u,t[4]=-c*f,t[8]=l,t[1]=m+_*l,t[5]=h-y*l,t[9]=-o*c,t[2]=y-h*l,t[6]=_+m*l,t[10]=s*c}else if(e.order==="YXZ"){const h=c*u,m=c*f,_=l*u,y=l*f;t[0]=h+y*o,t[4]=_*o-m,t[8]=s*l,t[1]=s*f,t[5]=s*u,t[9]=-o,t[2]=m*o-_,t[6]=y+h*o,t[10]=s*c}else if(e.order==="ZXY"){const h=c*u,m=c*f,_=l*u,y=l*f;t[0]=h-y*o,t[4]=-s*f,t[8]=_+m*o,t[1]=m+_*o,t[5]=s*u,t[9]=y-h*o,t[2]=-s*l,t[6]=o,t[10]=s*c}else if(e.order==="ZYX"){const h=s*u,m=s*f,_=o*u,y=o*f;t[0]=c*u,t[4]=_*l-m,t[8]=h*l+y,t[1]=c*f,t[5]=y*l+h,t[9]=m*l-_,t[2]=-l,t[6]=o*c,t[10]=s*c}else if(e.order==="YZX"){const h=s*c,m=s*l,_=o*c,y=o*l;t[0]=c*u,t[4]=y-h*f,t[8]=_*f+m,t[1]=f,t[5]=s*u,t[9]=-o*u,t[2]=-l*u,t[6]=m*f+_,t[10]=h-y*f}else if(e.order==="XZY"){const h=s*c,m=s*l,_=o*c,y=o*l;t[0]=c*u,t[4]=-f,t[8]=l*u,t[1]=h*f+y,t[5]=s*u,t[9]=m*f-_,t[2]=_*f-m,t[6]=o*u,t[10]=y*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Gu,e,Hu)}lookAt(e,t,n){const a=this.elements;return qt.subVectors(e,t),qt.lengthSq()===0&&(qt.z=1),qt.normalize(),Wn.crossVectors(n,qt),Wn.lengthSq()===0&&(Math.abs(n.z)===1?qt.x+=1e-4:qt.z+=1e-4,qt.normalize(),Wn.crossVectors(n,qt)),Wn.normalize(),Oa.crossVectors(qt,Wn),a[0]=Wn.x,a[4]=Oa.x,a[8]=qt.x,a[1]=Wn.y,a[5]=Oa.y,a[9]=qt.y,a[2]=Wn.z,a[6]=Oa.z,a[10]=qt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,a=t.elements,r=this.elements,s=n[0],o=n[4],c=n[8],l=n[12],u=n[1],f=n[5],h=n[9],m=n[13],_=n[2],y=n[6],p=n[10],d=n[14],b=n[3],R=n[7],M=n[11],w=n[15],E=a[0],C=a[4],v=a[8],T=a[12],U=a[1],D=a[5],k=a[9],$=a[13],Q=a[2],z=a[6],Z=a[10],W=a[14],j=a[3],ne=a[7],ue=a[11],ce=a[15];return r[0]=s*E+o*U+c*Q+l*j,r[4]=s*C+o*D+c*z+l*ne,r[8]=s*v+o*k+c*Z+l*ue,r[12]=s*T+o*$+c*W+l*ce,r[1]=u*E+f*U+h*Q+m*j,r[5]=u*C+f*D+h*z+m*ne,r[9]=u*v+f*k+h*Z+m*ue,r[13]=u*T+f*$+h*W+m*ce,r[2]=_*E+y*U+p*Q+d*j,r[6]=_*C+y*D+p*z+d*ne,r[10]=_*v+y*k+p*Z+d*ue,r[14]=_*T+y*$+p*W+d*ce,r[3]=b*E+R*U+M*Q+w*j,r[7]=b*C+R*D+M*z+w*ne,r[11]=b*v+R*k+M*Z+w*ue,r[15]=b*T+R*$+M*W+w*ce,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],a=e[8],r=e[12],s=e[1],o=e[5],c=e[9],l=e[13],u=e[2],f=e[6],h=e[10],m=e[14],_=e[3],y=e[7],p=e[11],d=e[15],b=c*m-l*h,R=o*m-l*f,M=o*h-c*f,w=s*m-l*u,E=s*h-c*u,C=s*f-o*u;return t*(y*b-p*R+d*M)-n*(_*b-p*w+d*E)+a*(_*R-y*w+d*C)-r*(_*M-y*E+p*C)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],a=e[8],r=e[1],s=e[5],o=e[9],c=e[2],l=e[6],u=e[10];return t*(s*u-o*l)-n*(r*u-o*c)+a*(r*l-s*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],a=e[2],r=e[3],s=e[4],o=e[5],c=e[6],l=e[7],u=e[8],f=e[9],h=e[10],m=e[11],_=e[12],y=e[13],p=e[14],d=e[15],b=t*o-n*s,R=t*c-a*s,M=t*l-r*s,w=n*c-a*o,E=n*l-r*o,C=a*l-r*c,v=u*y-f*_,T=u*p-h*_,U=u*d-m*_,D=f*p-h*y,k=f*d-m*y,$=h*d-m*p,Q=b*$-R*k+M*D+w*U-E*T+C*v;if(Q===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/Q;return e[0]=(o*$-c*k+l*D)*z,e[1]=(a*k-n*$-r*D)*z,e[2]=(y*C-p*E+d*w)*z,e[3]=(h*E-f*C-m*w)*z,e[4]=(c*U-s*$-l*T)*z,e[5]=(t*$-a*U+r*T)*z,e[6]=(p*M-_*C-d*R)*z,e[7]=(u*C-h*M+m*R)*z,e[8]=(s*k-o*U+l*v)*z,e[9]=(n*U-t*k-r*v)*z,e[10]=(_*E-y*M+d*b)*z,e[11]=(f*M-u*E-m*b)*z,e[12]=(o*T-s*D-c*v)*z,e[13]=(t*D-n*T+a*v)*z,e[14]=(y*R-_*w-p*b)*z,e[15]=(u*w-f*R+h*b)*z,this}scale(e){const t=this.elements,n=e.x,a=e.y,r=e.z;return t[0]*=n,t[4]*=a,t[8]*=r,t[1]*=n,t[5]*=a,t[9]*=r,t[2]*=n,t[6]*=a,t[10]*=r,t[3]*=n,t[7]*=a,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,a))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),a=Math.sin(t),r=1-n,s=e.x,o=e.y,c=e.z,l=r*s,u=r*o;return this.set(l*s+n,l*o-a*c,l*c+a*o,0,l*o+a*c,u*o+n,u*c-a*s,0,l*c-a*o,u*c+a*s,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,a,r,s){return this.set(1,n,r,0,e,1,s,0,t,a,1,0,0,0,0,1),this}compose(e,t,n){const a=this.elements,r=t._x,s=t._y,o=t._z,c=t._w,l=r+r,u=s+s,f=o+o,h=r*l,m=r*u,_=r*f,y=s*u,p=s*f,d=o*f,b=c*l,R=c*u,M=c*f,w=n.x,E=n.y,C=n.z;return a[0]=(1-(y+d))*w,a[1]=(m+M)*w,a[2]=(_-R)*w,a[3]=0,a[4]=(m-M)*E,a[5]=(1-(h+d))*E,a[6]=(p+b)*E,a[7]=0,a[8]=(_+R)*C,a[9]=(p-b)*C,a[10]=(1-(h+y))*C,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,n){const a=this.elements;e.x=a[12],e.y=a[13],e.z=a[14];const r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let s=wi.set(a[0],a[1],a[2]).length();const o=wi.set(a[4],a[5],a[6]).length(),c=wi.set(a[8],a[9],a[10]).length();r<0&&(s=-s),sn.copy(this);const l=1/s,u=1/o,f=1/c;return sn.elements[0]*=l,sn.elements[1]*=l,sn.elements[2]*=l,sn.elements[4]*=u,sn.elements[5]*=u,sn.elements[6]*=u,sn.elements[8]*=f,sn.elements[9]*=f,sn.elements[10]*=f,t.setFromRotationMatrix(sn),n.x=s,n.y=o,n.z=c,this}makePerspective(e,t,n,a,r,s,o=yn,c=!1){const l=this.elements,u=2*r/(t-e),f=2*r/(n-a),h=(t+e)/(t-e),m=(n+a)/(n-a);let _,y;if(c)_=r/(s-r),y=s*r/(s-r);else if(o===yn)_=-(s+r)/(s-r),y=-2*s*r/(s-r);else if(o===Dr)_=-s/(s-r),y=-s*r/(s-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=f,l[9]=m,l[13]=0,l[2]=0,l[6]=0,l[10]=_,l[14]=y,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,a,r,s,o=yn,c=!1){const l=this.elements,u=2/(t-e),f=2/(n-a),h=-(t+e)/(t-e),m=-(n+a)/(n-a);let _,y;if(c)_=1/(s-r),y=s/(s-r);else if(o===yn)_=-2/(s-r),y=-(s+r)/(s-r);else if(o===Dr)_=-1/(s-r),y=-r/(s-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=0,l[12]=h,l[1]=0,l[5]=f,l[9]=0,l[13]=m,l[2]=0,l[6]=0,l[10]=_,l[14]=y,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let a=0;a<16;a++)if(t[a]!==n[a])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Xr.prototype.isMatrix4=!0;let mt=Xr;const wi=new P,sn=new mt,Gu=new P(0,0,0),Hu=new P(1,1,1),Wn=new P,Oa=new P,qt=new P,Nl=new mt,Fl=new un;class xi{constructor(e=0,t=0,n=0,a=xi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,a=this._order){return this._x=e,this._y=t,this._z=n,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const a=e.elements,r=a[0],s=a[4],o=a[8],c=a[1],l=a[5],u=a[9],f=a[2],h=a[6],m=a[10];switch(t){case"XYZ":this._y=Math.asin(Ye(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-s,r)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ye(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ye(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-s,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ye(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-s,l));break;case"YZX":this._z=Math.asin(Ye(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Ye(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,m),this._y=0);break;default:Ce("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Nl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Nl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Fl.setFromEuler(this),this.setFromQuaternion(Fl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}xi.DEFAULT_ORDER="XYZ";class ch{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Wu=0;const Ol=new P,Ai=new un,Tn=new mt,Ba=new P,aa=new P,Xu=new P,Yu=new un,Bl=new P(1,0,0),kl=new P(0,1,0),zl=new P(0,0,1),Vl={type:"added"},qu={type:"removed"},Ri={type:"childadded",child:null},ds={type:"childremoved",child:null};class zt extends ii{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Wu++}),this.uuid=ti(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=zt.DEFAULT_UP.clone();const e=new P,t=new xi,n=new un,a=new P(1,1,1);function r(){n.setFromEuler(t,!1)}function s(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new mt},normalMatrix:{value:new Fe}}),this.matrix=new mt,this.matrixWorld=new mt,this.matrixAutoUpdate=zt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ch,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ai.setFromAxisAngle(e,t),this.quaternion.multiply(Ai),this}rotateOnWorldAxis(e,t){return Ai.setFromAxisAngle(e,t),this.quaternion.premultiply(Ai),this}rotateX(e){return this.rotateOnAxis(Bl,e)}rotateY(e){return this.rotateOnAxis(kl,e)}rotateZ(e){return this.rotateOnAxis(zl,e)}translateOnAxis(e,t){return Ol.copy(e).applyQuaternion(this.quaternion),this.position.add(Ol.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Bl,e)}translateY(e){return this.translateOnAxis(kl,e)}translateZ(e){return this.translateOnAxis(zl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Tn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ba.copy(e):Ba.set(e,t,n);const a=this.parent;this.updateWorldMatrix(!0,!1),aa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Tn.lookAt(aa,Ba,this.up):Tn.lookAt(Ba,aa,this.up),this.quaternion.setFromRotationMatrix(Tn),a&&(Tn.extractRotation(a.matrixWorld),Ai.setFromRotationMatrix(Tn),this.quaternion.premultiply(Ai.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?($e("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Vl),Ri.child=e,this.dispatchEvent(Ri),Ri.child=null):$e("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(qu),ds.child=e,this.dispatchEvent(ds),ds.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Tn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Tn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Tn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Vl),Ri.child=e,this.dispatchEvent(Ri),Ri.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,a=this.children.length;n<a;n++){const s=this.children[n].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const a=this.children;for(let r=0,s=a.length;r<s;r++)a[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(aa,e,Xu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(aa,Yu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,a=t.length;n<a;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,a=t.length;n<a;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,a=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*a,r[13]+=n-r[1]*t-r[5]*n-r[9]*a,r[14]+=a-r[2]*t-r[6]*n-r[10]*a}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,a=t.length;n<a;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const a=this.parent;if(e===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),this.static!==!1&&(a.static=this.static),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.pivot!==null&&(a.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(a.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(a.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(o=>({...o})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(e),a.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const f=c[l];r(e.shapes,f)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));a.material=o}else a.material=r(e.materials,this.material);if(this.children.length>0){a.children=[];for(let o=0;o<this.children.length;o++)a.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];a.animations.push(r(e.animations,c))}}if(t){const o=s(e.geometries),c=s(e.materials),l=s(e.textures),u=s(e.images),f=s(e.shapes),h=s(e.skeletons),m=s(e.animations),_=s(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),m.length>0&&(n.animations=m),_.length>0&&(n.nodes=_)}return n.object=a,n;function s(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const a=e.children[n];this.add(a.clone())}return this}}zt.DEFAULT_UP=new P(0,1,0);zt.DEFAULT_MATRIX_AUTO_UPDATE=!0;zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class xa extends zt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ku={type:"move"};class fs{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xa,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xa,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xa,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let a=null,r=null,s=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){s=!0;for(const y of e.hand.values()){const p=t.getJointPose(y,n),d=this._getHandJoint(l,y);p!==null&&(d.matrix.fromArray(p.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=p.radius),d.visible=p!==null}const u=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],h=u.position.distanceTo(f.position),m=.02,_=.005;l.inputState.pinching&&h>m+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&h<=m-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(a=t.getPose(e.targetRaySpace,n),a===null&&r!==null&&(a=r),a!==null&&(o.matrix.fromArray(a.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,a.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(a.linearVelocity)):o.hasLinearVelocity=!1,a.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(a.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Ku)))}return o!==null&&(o.visible=a!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new xa;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const hh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xn={h:0,s:0,l:0},ka={h:0,s:0,l:0};function ps(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class qe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=$t){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ke.colorSpaceToWorking(this,t),this}setRGB(e,t,n,a=Ke.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ke.colorSpaceToWorking(this,a),this}setHSL(e,t,n,a=Ke.workingColorSpace){if(e=Uu(e,1),t=Ye(t,0,1),n=Ye(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,s=2*n-r;this.r=ps(s,r,e+1/3),this.g=ps(s,r,e),this.b=ps(s,r,e-1/3)}return Ke.colorSpaceToWorking(this,a),this}setStyle(e,t=$t){function n(r){r!==void 0&&parseFloat(r)<1&&Ce("Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const s=a[1],o=a[2];switch(s){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ce("Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=a[1],s=r.length;if(s===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(r,16),t);Ce("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=$t){const n=hh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ce("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=In(e.r),this.g=In(e.g),this.b=In(e.b),this}copyLinearToSRGB(e){return this.r=Ki(e.r),this.g=Ki(e.g),this.b=Ki(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=$t){return Ke.workingToColorSpace(Bt.copy(this),e),Math.round(Ye(Bt.r*255,0,255))*65536+Math.round(Ye(Bt.g*255,0,255))*256+Math.round(Ye(Bt.b*255,0,255))}getHexString(e=$t){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ke.workingColorSpace){Ke.workingToColorSpace(Bt.copy(this),t);const n=Bt.r,a=Bt.g,r=Bt.b,s=Math.max(n,a,r),o=Math.min(n,a,r);let c,l;const u=(o+s)/2;if(o===s)c=0,l=0;else{const f=s-o;switch(l=u<=.5?f/(s+o):f/(2-s-o),s){case n:c=(a-r)/f+(a<r?6:0);break;case a:c=(r-n)/f+2;break;case r:c=(n-a)/f+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=Ke.workingColorSpace){return Ke.workingToColorSpace(Bt.copy(this),t),e.r=Bt.r,e.g=Bt.g,e.b=Bt.b,e}getStyle(e=$t){Ke.workingToColorSpace(Bt.copy(this),e);const t=Bt.r,n=Bt.g,a=Bt.b;return e!==$t?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(a*255)})`}offsetHSL(e,t,n){return this.getHSL(Xn),this.setHSL(Xn.h+e,Xn.s+t,Xn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Xn),e.getHSL(ka);const n=os(Xn.h,ka.h,t),a=os(Xn.s,ka.s,t),r=os(Xn.l,ka.l,t);return this.setHSL(n,a,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,a=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*a,this.g=r[1]*t+r[4]*n+r[7]*a,this.b=r[2]*t+r[5]*n+r[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Bt=new qe;qe.NAMES=hh;class $u extends zt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new xi,this.environmentIntensity=1,this.environmentRotation=new xi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const on=new P,wn=new P,ms=new P,An=new P,Ci=new P,Pi=new P,Gl=new P,gs=new P,_s=new P,vs=new P,xs=new pt,Ms=new pt,ys=new pt;class nn{constructor(e=new P,t=new P,n=new P){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,a){a.subVectors(n,t),on.subVectors(e,t),a.cross(on);const r=a.lengthSq();return r>0?a.multiplyScalar(1/Math.sqrt(r)):a.set(0,0,0)}static getBarycoord(e,t,n,a,r){on.subVectors(a,t),wn.subVectors(n,t),ms.subVectors(e,t);const s=on.dot(on),o=on.dot(wn),c=on.dot(ms),l=wn.dot(wn),u=wn.dot(ms),f=s*l-o*o;if(f===0)return r.set(0,0,0),null;const h=1/f,m=(l*c-o*u)*h,_=(s*u-o*c)*h;return r.set(1-m-_,_,m)}static containsPoint(e,t,n,a){return this.getBarycoord(e,t,n,a,An)===null?!1:An.x>=0&&An.y>=0&&An.x+An.y<=1}static getInterpolation(e,t,n,a,r,s,o,c){return this.getBarycoord(e,t,n,a,An)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,An.x),c.addScaledVector(s,An.y),c.addScaledVector(o,An.z),c)}static getInterpolatedAttribute(e,t,n,a,r,s){return xs.setScalar(0),Ms.setScalar(0),ys.setScalar(0),xs.fromBufferAttribute(e,t),Ms.fromBufferAttribute(e,n),ys.fromBufferAttribute(e,a),s.setScalar(0),s.addScaledVector(xs,r.x),s.addScaledVector(Ms,r.y),s.addScaledVector(ys,r.z),s}static isFrontFacing(e,t,n,a){return on.subVectors(n,t),wn.subVectors(e,t),on.cross(wn).dot(a)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,a){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,n,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return on.subVectors(this.c,this.b),wn.subVectors(this.a,this.b),on.cross(wn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return nn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return nn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,a,r){return nn.getInterpolation(e,this.a,this.b,this.c,t,n,a,r)}containsPoint(e){return nn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return nn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,a=this.b,r=this.c;let s,o;Ci.subVectors(a,n),Pi.subVectors(r,n),gs.subVectors(e,n);const c=Ci.dot(gs),l=Pi.dot(gs);if(c<=0&&l<=0)return t.copy(n);_s.subVectors(e,a);const u=Ci.dot(_s),f=Pi.dot(_s);if(u>=0&&f<=u)return t.copy(a);const h=c*f-u*l;if(h<=0&&c>=0&&u<=0)return s=c/(c-u),t.copy(n).addScaledVector(Ci,s);vs.subVectors(e,r);const m=Ci.dot(vs),_=Pi.dot(vs);if(_>=0&&m<=_)return t.copy(r);const y=m*l-c*_;if(y<=0&&l>=0&&_<=0)return o=l/(l-_),t.copy(n).addScaledVector(Pi,o);const p=u*_-m*f;if(p<=0&&f-u>=0&&m-_>=0)return Gl.subVectors(r,a),o=(f-u)/(f-u+(m-_)),t.copy(a).addScaledVector(Gl,o);const d=1/(p+y+h);return s=y*d,o=h*d,t.copy(n).addScaledVector(Ci,s).addScaledVector(Pi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Pa{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ln.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ln.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=ln.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let s=0,o=r.count;s<o;s++)e.isMesh===!0?e.getVertexPosition(s,ln):ln.fromBufferAttribute(r,s),ln.applyMatrix4(e.matrixWorld),this.expandByPoint(ln);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),za.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),za.copy(n.boundingBox)),za.applyMatrix4(e.matrixWorld),this.union(za)}const a=e.children;for(let r=0,s=a.length;r<s;r++)this.expandByObject(a[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ln),ln.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ra),Va.subVectors(this.max,ra),Li.subVectors(e.a,ra),Di.subVectors(e.b,ra),Ii.subVectors(e.c,ra),Yn.subVectors(Di,Li),qn.subVectors(Ii,Di),ri.subVectors(Li,Ii);let t=[0,-Yn.z,Yn.y,0,-qn.z,qn.y,0,-ri.z,ri.y,Yn.z,0,-Yn.x,qn.z,0,-qn.x,ri.z,0,-ri.x,-Yn.y,Yn.x,0,-qn.y,qn.x,0,-ri.y,ri.x,0];return!Ss(t,Li,Di,Ii,Va)||(t=[1,0,0,0,1,0,0,0,1],!Ss(t,Li,Di,Ii,Va))?!1:(Ga.crossVectors(Yn,qn),t=[Ga.x,Ga.y,Ga.z],Ss(t,Li,Di,Ii,Va))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ln).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ln).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Rn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Rn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Rn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Rn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Rn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Rn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Rn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Rn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Rn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Rn=[new P,new P,new P,new P,new P,new P,new P,new P],ln=new P,za=new Pa,Li=new P,Di=new P,Ii=new P,Yn=new P,qn=new P,ri=new P,ra=new P,Va=new P,Ga=new P,si=new P;function Ss(i,e,t,n,a){for(let r=0,s=i.length-3;r<=s;r+=3){si.fromArray(i,r);const o=a.x*Math.abs(si.x)+a.y*Math.abs(si.y)+a.z*Math.abs(si.z),c=e.dot(si),l=t.dot(si),u=n.dot(si);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const Et=new P,Ha=new Le;let Zu=0;class ze extends ii{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Zu++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Lo,this.updateRanges=[],this.gpuType=Mn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let a=0,r=this.itemSize;a<r;a++)this.array[e+a]=t.array[n+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ha.fromBufferAttribute(this,t),Ha.applyMatrix3(e),this.setXY(t,Ha.x,Ha.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix3(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix4(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.applyNormalMatrix(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.transformDirection(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=xn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=it(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=xn(t,this.array)),t}setX(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=xn(t,this.array)),t}setY(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=xn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=xn(t,this.array)),t}setW(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=it(t,this.array),n=it(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,a){return e*=this.itemSize,this.normalized&&(t=it(t,this.array),n=it(n,this.array),a=it(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=a,this}setXYZW(e,t,n,a,r){return e*=this.itemSize,this.normalized&&(t=it(t,this.array),n=it(n,this.array),a=it(a,this.array),r=it(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=a,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Lo&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class uh extends ze{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class dh extends ze{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Nt extends ze{constructor(e,t,n){super(new Float32Array(e),t,n)}}const Ju=new Pa,sa=new P,bs=new P;class rn{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Ju.setFromPoints(e).getCenter(n);let a=0;for(let r=0,s=e.length;r<s;r++)a=Math.max(a,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;sa.subVectors(e,this.center);const t=sa.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),a=(n-this.radius)*.5;this.center.addScaledVector(sa,a/n),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(bs.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(sa.copy(e.center).add(bs)),this.expandByPoint(sa.copy(e.center).sub(bs))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Qu=0;const Qt=new mt,Es=new zt,Ui=new P,Kt=new Pa,oa=new Pa,Pt=new P;class dt extends ii{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Qu++}),this.uuid=ti(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Pu(e)?dh:uh)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Fe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Qt.makeRotationFromQuaternion(e),this.applyMatrix4(Qt),this}rotateX(e){return Qt.makeRotationX(e),this.applyMatrix4(Qt),this}rotateY(e){return Qt.makeRotationY(e),this.applyMatrix4(Qt),this}rotateZ(e){return Qt.makeRotationZ(e),this.applyMatrix4(Qt),this}translate(e,t,n){return Qt.makeTranslation(e,t,n),this.applyMatrix4(Qt),this}scale(e,t,n){return Qt.makeScale(e,t,n),this.applyMatrix4(Qt),this}lookAt(e){return Es.lookAt(e),Es.updateMatrix(),this.applyMatrix4(Es.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ui).negate(),this.translate(Ui.x,Ui.y,Ui.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let a=0,r=e.length;a<r;a++){const s=e[a];n.push(s.x,s.y,s.z||0)}this.setAttribute("position",new Nt(n,3))}else{const n=Math.min(e.length,t.count);for(let a=0;a<n;a++){const r=e[a];t.setXYZ(a,r.x,r.y,r.z||0)}e.length>t.count&&Ce("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Pa);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){$e("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,a=t.length;n<a;n++){const r=t[n];Kt.setFromBufferAttribute(r),this.morphTargetsRelative?(Pt.addVectors(this.boundingBox.min,Kt.min),this.boundingBox.expandByPoint(Pt),Pt.addVectors(this.boundingBox.max,Kt.max),this.boundingBox.expandByPoint(Pt)):(this.boundingBox.expandByPoint(Kt.min),this.boundingBox.expandByPoint(Kt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&$e('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new rn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){$e("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){const n=this.boundingSphere.center;if(Kt.setFromBufferAttribute(e),t)for(let r=0,s=t.length;r<s;r++){const o=t[r];oa.setFromBufferAttribute(o),this.morphTargetsRelative?(Pt.addVectors(Kt.min,oa.min),Kt.expandByPoint(Pt),Pt.addVectors(Kt.max,oa.max),Kt.expandByPoint(Pt)):(Kt.expandByPoint(oa.min),Kt.expandByPoint(oa.max))}Kt.getCenter(n);let a=0;for(let r=0,s=e.count;r<s;r++)Pt.fromBufferAttribute(e,r),a=Math.max(a,n.distanceToSquared(Pt));if(t)for(let r=0,s=t.length;r<s;r++){const o=t[r],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)Pt.fromBufferAttribute(o,l),c&&(Ui.fromBufferAttribute(e,l),Pt.add(Ui)),a=Math.max(a,n.distanceToSquared(Pt))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&$e('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){$e("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,a=t.normal,r=t.uv;let s=this.getAttribute("tangent");(s===void 0||s.count!==n.count)&&(s=new ze(new Float32Array(4*n.count),4),this.setAttribute("tangent",s));const o=[],c=[];for(let v=0;v<n.count;v++)o[v]=new P,c[v]=new P;const l=new P,u=new P,f=new P,h=new Le,m=new Le,_=new Le,y=new P,p=new P;function d(v,T,U){l.fromBufferAttribute(n,v),u.fromBufferAttribute(n,T),f.fromBufferAttribute(n,U),h.fromBufferAttribute(r,v),m.fromBufferAttribute(r,T),_.fromBufferAttribute(r,U),u.sub(l),f.sub(l),m.sub(h),_.sub(h);const D=1/(m.x*_.y-_.x*m.y);isFinite(D)&&(y.copy(u).multiplyScalar(_.y).addScaledVector(f,-m.y).multiplyScalar(D),p.copy(f).multiplyScalar(m.x).addScaledVector(u,-_.x).multiplyScalar(D),o[v].add(y),o[T].add(y),o[U].add(y),c[v].add(p),c[T].add(p),c[U].add(p))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let v=0,T=b.length;v<T;++v){const U=b[v],D=U.start,k=U.count;for(let $=D,Q=D+k;$<Q;$+=3)d(e.getX($+0),e.getX($+1),e.getX($+2))}const R=new P,M=new P,w=new P,E=new P;function C(v){w.fromBufferAttribute(a,v),E.copy(w);const T=o[v];R.copy(T),R.sub(w.multiplyScalar(w.dot(T))).normalize(),M.crossVectors(E,T);const D=M.dot(c[v])<0?-1:1;s.setXYZW(v,R.x,R.y,R.z,D)}for(let v=0,T=b.length;v<T;++v){const U=b[v],D=U.start,k=U.count;for(let $=D,Q=D+k;$<Q;$+=3)C(e.getX($+0)),C(e.getX($+1)),C(e.getX($+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new ze(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,m=n.count;h<m;h++)n.setXYZ(h,0,0,0);const a=new P,r=new P,s=new P,o=new P,c=new P,l=new P,u=new P,f=new P;if(e)for(let h=0,m=e.count;h<m;h+=3){const _=e.getX(h+0),y=e.getX(h+1),p=e.getX(h+2);a.fromBufferAttribute(t,_),r.fromBufferAttribute(t,y),s.fromBufferAttribute(t,p),u.subVectors(s,r),f.subVectors(a,r),u.cross(f),o.fromBufferAttribute(n,_),c.fromBufferAttribute(n,y),l.fromBufferAttribute(n,p),o.add(u),c.add(u),l.add(u),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(y,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let h=0,m=t.count;h<m;h+=3)a.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),s.fromBufferAttribute(t,h+2),u.subVectors(s,r),f.subVectors(a,r),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Pt.fromBufferAttribute(e,t),Pt.normalize(),e.setXYZ(t,Pt.x,Pt.y,Pt.z)}toNonIndexed(){function e(o,c){const l=o.array,u=o.itemSize,f=o.normalized,h=new l.constructor(c.length*u);let m=0,_=0;for(let y=0,p=c.length;y<p;y++){o.isInterleavedBufferAttribute?m=c[y]*o.data.stride+o.offset:m=c[y]*u;for(let d=0;d<u;d++)h[_++]=l[m++]}return new ze(h,u,f)}if(this.index===null)return Ce("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new dt,n=this.index.array,a=this.attributes;for(const o in a){const c=a[o],l=e(c,n);t.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let u=0,f=l.length;u<f;u++){const h=l[u],m=e(h,n);c.push(m)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,c=s.length;o<c;o++){const l=s[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const a={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let f=0,h=l.length;f<h;f++){const m=l[f];u.push(m.toJSON(e.data))}u.length>0&&(a[c]=u,r=!0)}r&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const a=e.attributes;for(const l in a){const u=a[l];this.setAttribute(l,u.clone(t))}const r=e.morphAttributes;for(const l in r){const u=[],f=r[l];for(let h=0,m=f.length;h<m;h++)u.push(f[h].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let l=0,u=s.length;l<u;l++){const f=s[l];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ju{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Lo,this.updateRanges=[],this.version=0,this.uuid=ti()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let a=0,r=this.stride;a<r;a++)this.array[e+a]=t.array[n+a];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ti()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ti()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Vt=new P;class Ur{constructor(e,t,n,a=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=a}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.applyMatrix4(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.applyNormalMatrix(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.transformDirection(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=xn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=it(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=xn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=xn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=xn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=xn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=it(t,this.array),n=it(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=it(t,this.array),n=it(n,this.array),a=it(a,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=a,this}setXYZW(e,t,n,a,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=it(t,this.array),n=it(n,this.array),a=it(a,this.array),r=it(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=a,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Ir("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const a=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[a+r])}return new ze(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Ur(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Ir("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const a=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[a+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let ed=0;class yi extends ii{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ed++}),this.uuid=ti(),this.name="",this.type="Material",this.blending=Yi,this.side=Nn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ws,this.blendDst=Xs,this.blendEquation=ci,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qe(0,0,0),this.blendAlpha=0,this.depthFunc=Zi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Cl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ei,this.stencilZFail=Ei,this.stencilZPass=Ei,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Ce(`Material: parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){Ce(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(n):a&&a.isVector2&&n&&n.isVector2||a&&a.isEuler&&n&&n.isEuler||a&&a.isVector3&&n&&n.isVector3?a.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Yi&&(n.blending=this.blending),this.side!==Nn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ws&&(n.blendSrc=this.blendSrc),this.blendDst!==Xs&&(n.blendDst=this.blendDst),this.blendEquation!==ci&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Zi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Cl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ei&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ei&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ei&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function a(r){const s=[];for(const o in r){const c=r[o];delete c.metadata,s.push(c)}return s}if(t){const r=a(e.textures),s=a(e.images);r.length>0&&(n.textures=r),s.length>0&&(n.images=s)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new qe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Le().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Le().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const a=t.length;n=new Array(a);for(let r=0;r!==a;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Io extends yi{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new qe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Ni;const la=new P,Fi=new P,Oi=new P,Bi=new Le,ca=new Le,fh=new mt,Wa=new P,ha=new P,Xa=new P,Hl=new Le,Ts=new Le,Wl=new Le;class Xl extends zt{constructor(e=new Io){if(super(),this.isSprite=!0,this.type="Sprite",Ni===void 0){Ni=new dt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new ju(t,5);Ni.setIndex([0,1,2,0,2,3]),Ni.setAttribute("position",new Ur(n,3,0,!1)),Ni.setAttribute("uv",new Ur(n,2,3,!1))}this.geometry=Ni,this.material=e,this.center=new Le(.5,.5),this.count=1}raycast(e,t){e.camera===null&&$e('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Fi.setFromMatrixScale(this.matrixWorld),fh.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Oi.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Fi.multiplyScalar(-Oi.z);const n=this.material.rotation;let a,r;n!==0&&(r=Math.cos(n),a=Math.sin(n));const s=this.center;Ya(Wa.set(-.5,-.5,0),Oi,s,Fi,a,r),Ya(ha.set(.5,-.5,0),Oi,s,Fi,a,r),Ya(Xa.set(.5,.5,0),Oi,s,Fi,a,r),Hl.set(0,0),Ts.set(1,0),Wl.set(1,1);let o=e.ray.intersectTriangle(Wa,ha,Xa,!1,la);if(o===null&&(Ya(ha.set(-.5,.5,0),Oi,s,Fi,a,r),Ts.set(0,1),o=e.ray.intersectTriangle(Wa,Xa,ha,!1,la),o===null))return;const c=e.ray.origin.distanceTo(la);c<e.near||c>e.far||t.push({distance:c,point:la.clone(),uv:nn.getInterpolation(la,Wa,ha,Xa,Hl,Ts,Wl,new Le),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Ya(i,e,t,n,a,r){Bi.subVectors(i,t).addScalar(.5).multiply(n),a!==void 0?(ca.x=r*Bi.x-a*Bi.y,ca.y=a*Bi.x+r*Bi.y):ca.copy(Bi),i.copy(e),i.x+=ca.x,i.y+=ca.y,i.applyMatrix4(fh)}const Cn=new P,ws=new P,qa=new P,Kn=new P,As=new P,Ka=new P,Rs=new P;class qr{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Cn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Cn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Cn.copy(this.origin).addScaledVector(this.direction,t),Cn.distanceToSquared(e))}distanceSqToSegment(e,t,n,a){ws.copy(e).add(t).multiplyScalar(.5),qa.copy(t).sub(e).normalize(),Kn.copy(this.origin).sub(ws);const r=e.distanceTo(t)*.5,s=-this.direction.dot(qa),o=Kn.dot(this.direction),c=-Kn.dot(qa),l=Kn.lengthSq(),u=Math.abs(1-s*s);let f,h,m,_;if(u>0)if(f=s*c-o,h=s*o-c,_=r*u,f>=0)if(h>=-_)if(h<=_){const y=1/u;f*=y,h*=y,m=f*(f+s*h+2*o)+h*(s*f+h+2*c)+l}else h=r,f=Math.max(0,-(s*h+o)),m=-f*f+h*(h+2*c)+l;else h=-r,f=Math.max(0,-(s*h+o)),m=-f*f+h*(h+2*c)+l;else h<=-_?(f=Math.max(0,-(-s*r+o)),h=f>0?-r:Math.min(Math.max(-r,-c),r),m=-f*f+h*(h+2*c)+l):h<=_?(f=0,h=Math.min(Math.max(-r,-c),r),m=h*(h+2*c)+l):(f=Math.max(0,-(s*r+o)),h=f>0?r:Math.min(Math.max(-r,-c),r),m=-f*f+h*(h+2*c)+l);else h=s>0?-r:r,f=Math.max(0,-(s*h+o)),m=-f*f+h*(h+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,f),a&&a.copy(ws).addScaledVector(qa,h),m}intersectSphere(e,t){Cn.subVectors(e.center,this.origin);const n=Cn.dot(this.direction),a=Cn.dot(Cn)-n*n,r=e.radius*e.radius;if(a>r)return null;const s=Math.sqrt(r-a),o=n-s,c=n+s;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,a,r,s,o,c;const l=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return l>=0?(n=(e.min.x-h.x)*l,a=(e.max.x-h.x)*l):(n=(e.max.x-h.x)*l,a=(e.min.x-h.x)*l),u>=0?(r=(e.min.y-h.y)*u,s=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,s=(e.min.y-h.y)*u),n>s||r>a||((r>n||isNaN(n))&&(n=r),(s<a||isNaN(a))&&(a=s),f>=0?(o=(e.min.z-h.z)*f,c=(e.max.z-h.z)*f):(o=(e.max.z-h.z)*f,c=(e.min.z-h.z)*f),n>c||o>a)||((o>n||n!==n)&&(n=o),(c<a||a!==a)&&(a=c),a<0)?null:this.at(n>=0?n:a,t)}intersectsBox(e){return this.intersectBox(e,Cn)!==null}intersectTriangle(e,t,n,a,r){As.subVectors(t,e),Ka.subVectors(n,e),Rs.crossVectors(As,Ka);let s=this.direction.dot(Rs),o;if(s>0){if(a)return null;o=1}else if(s<0)o=-1,s=-s;else return null;Kn.subVectors(this.origin,e);const c=o*this.direction.dot(Ka.crossVectors(Kn,Ka));if(c<0)return null;const l=o*this.direction.dot(As.cross(Kn));if(l<0||c+l>s)return null;const u=-o*Kn.dot(Rs);return u<0?null:this.at(u/s,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ph extends yi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xi,this.combine=Wc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Yl=new mt,oi=new qr,$a=new rn,ql=new P,Za=new P,Ja=new P,Qa=new P,Cs=new P,ja=new P,Kl=new P,er=new P;class Xt extends zt{constructor(e=new dt,t=new ph){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const a=t[n[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=a.length;r<s;r++){const o=a[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,a=n.attributes.position,r=n.morphAttributes.position,s=n.morphTargetsRelative;t.fromBufferAttribute(a,e);const o=this.morphTargetInfluences;if(r&&o){ja.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=o[c],f=r[c];u!==0&&(Cs.fromBufferAttribute(f,e),s?ja.addScaledVector(Cs,u):ja.addScaledVector(Cs.sub(t),u))}t.add(ja)}return t}raycast(e,t){const n=this.geometry,a=this.material,r=this.matrixWorld;a!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),$a.copy(n.boundingSphere),$a.applyMatrix4(r),oi.copy(e.ray).recast(e.near),!($a.containsPoint(oi.origin)===!1&&(oi.intersectSphere($a,ql)===null||oi.origin.distanceToSquared(ql)>(e.far-e.near)**2))&&(Yl.copy(r).invert(),oi.copy(e.ray).applyMatrix4(Yl),!(n.boundingBox!==null&&oi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,oi)))}_computeIntersections(e,t,n){let a;const r=this.geometry,s=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,h=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(s))for(let _=0,y=h.length;_<y;_++){const p=h[_],d=s[p.materialIndex],b=Math.max(p.start,m.start),R=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let M=b,w=R;M<w;M+=3){const E=o.getX(M),C=o.getX(M+1),v=o.getX(M+2);a=tr(this,d,e,n,l,u,f,E,C,v),a&&(a.faceIndex=Math.floor(M/3),a.face.materialIndex=p.materialIndex,t.push(a))}}else{const _=Math.max(0,m.start),y=Math.min(o.count,m.start+m.count);for(let p=_,d=y;p<d;p+=3){const b=o.getX(p),R=o.getX(p+1),M=o.getX(p+2);a=tr(this,s,e,n,l,u,f,b,R,M),a&&(a.faceIndex=Math.floor(p/3),t.push(a))}}else if(c!==void 0)if(Array.isArray(s))for(let _=0,y=h.length;_<y;_++){const p=h[_],d=s[p.materialIndex],b=Math.max(p.start,m.start),R=Math.min(c.count,Math.min(p.start+p.count,m.start+m.count));for(let M=b,w=R;M<w;M+=3){const E=M,C=M+1,v=M+2;a=tr(this,d,e,n,l,u,f,E,C,v),a&&(a.faceIndex=Math.floor(M/3),a.face.materialIndex=p.materialIndex,t.push(a))}}else{const _=Math.max(0,m.start),y=Math.min(c.count,m.start+m.count);for(let p=_,d=y;p<d;p+=3){const b=p,R=p+1,M=p+2;a=tr(this,s,e,n,l,u,f,b,R,M),a&&(a.faceIndex=Math.floor(p/3),t.push(a))}}}}function td(i,e,t,n,a,r,s,o){let c;if(e.side===Wt?c=n.intersectTriangle(s,r,a,!0,o):c=n.intersectTriangle(a,r,s,e.side===Nn,o),c===null)return null;er.copy(o),er.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(er);return l<t.near||l>t.far?null:{distance:l,point:er.clone(),object:i}}function tr(i,e,t,n,a,r,s,o,c,l){i.getVertexPosition(o,Za),i.getVertexPosition(c,Ja),i.getVertexPosition(l,Qa);const u=td(i,e,t,n,Za,Ja,Qa,Kl);if(u){const f=new P;nn.getBarycoord(Kl,Za,Ja,Qa,f),a&&(u.uv=nn.getInterpolatedAttribute(a,o,c,l,f,new Le)),r&&(u.uv1=nn.getInterpolatedAttribute(r,o,c,l,f,new Le)),s&&(u.normal=nn.getInterpolatedAttribute(s,o,c,l,f,new P),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:c,c:l,normal:new P,materialIndex:0};nn.getNormal(Za,Ja,Qa,h.normal),u.face=h,u.barycoord=f}return u}class nd extends Ut{constructor(e=null,t=1,n=1,a,r,s,o,c,l=At,u=At,f,h){super(null,s,o,c,l,u,a,r,f,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ps=new P,id=new P,ad=new Fe;class jn{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,a){return this.normal.set(e,t,n),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const a=Ps.subVectors(n,t).cross(id.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const a=e.delta(Ps),r=this.normal.dot(a);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(s<0||s>1)?null:t.copy(e.start).addScaledVector(a,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||ad.getNormalMatrix(e),a=this.coplanarPoint(Ps).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-a.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const li=new rn,rd=new Le(.5,.5),nr=new P;class mh{constructor(e=new jn,t=new jn,n=new jn,a=new jn,r=new jn,s=new jn){this.planes=[e,t,n,a,r,s]}set(e,t,n,a,r,s){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(a),o[4].copy(r),o[5].copy(s),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=yn,n=!1){const a=this.planes,r=e.elements,s=r[0],o=r[1],c=r[2],l=r[3],u=r[4],f=r[5],h=r[6],m=r[7],_=r[8],y=r[9],p=r[10],d=r[11],b=r[12],R=r[13],M=r[14],w=r[15];if(a[0].setComponents(l-s,m-u,d-_,w-b).normalize(),a[1].setComponents(l+s,m+u,d+_,w+b).normalize(),a[2].setComponents(l+o,m+f,d+y,w+R).normalize(),a[3].setComponents(l-o,m-f,d-y,w-R).normalize(),n)a[4].setComponents(c,h,p,M).normalize(),a[5].setComponents(l-c,m-h,d-p,w-M).normalize();else if(a[4].setComponents(l-c,m-h,d-p,w-M).normalize(),t===yn)a[5].setComponents(l+c,m+h,d+p,w+M).normalize();else if(t===Dr)a[5].setComponents(c,h,p,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),li.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),li.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(li)}intersectsSprite(e){li.center.set(0,0,0);const t=rd.distanceTo(e.center);return li.radius=.7071067811865476+t,li.applyMatrix4(e.matrixWorld),this.intersectsSphere(li)}intersectsSphere(e){const t=this.planes,n=e.center,a=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const a=t[n];if(nr.x=a.normal.x>0?e.max.x:e.min.x,nr.y=a.normal.y>0?e.max.y:e.min.y,nr.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(nr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Jo extends yi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new qe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Nr=new P,Fr=new P,$l=new mt,ua=new qr,ir=new rn,Ls=new P,Zl=new P;class Qo extends zt{constructor(e=new dt,t=new Jo){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let a=1,r=t.count;a<r;a++)Nr.fromBufferAttribute(t,a-1),Fr.fromBufferAttribute(t,a),n[a]=n[a-1],n[a]+=Nr.distanceTo(Fr);e.setAttribute("lineDistance",new Nt(n,1))}else Ce("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,a=this.matrixWorld,r=e.params.Line.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ir.copy(n.boundingSphere),ir.applyMatrix4(a),ir.radius+=r,e.ray.intersectsSphere(ir)===!1)return;$l.copy(a).invert(),ua.copy(e.ray).applyMatrix4($l);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,u=n.index,h=n.attributes.position;if(u!==null){const m=Math.max(0,s.start),_=Math.min(u.count,s.start+s.count);for(let y=m,p=_-1;y<p;y+=l){const d=u.getX(y),b=u.getX(y+1),R=ar(this,e,ua,c,d,b,y);R&&t.push(R)}if(this.isLineLoop){const y=u.getX(_-1),p=u.getX(m),d=ar(this,e,ua,c,y,p,_-1);d&&t.push(d)}}else{const m=Math.max(0,s.start),_=Math.min(h.count,s.start+s.count);for(let y=m,p=_-1;y<p;y+=l){const d=ar(this,e,ua,c,y,y+1,y);d&&t.push(d)}if(this.isLineLoop){const y=ar(this,e,ua,c,_-1,m,_-1);y&&t.push(y)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const a=t[n[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=a.length;r<s;r++){const o=a[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function ar(i,e,t,n,a,r,s){const o=i.geometry.attributes.position;if(Nr.fromBufferAttribute(o,a),Fr.fromBufferAttribute(o,r),t.distanceSqToSegment(Nr,Fr,Ls,Zl)>n)return;Ls.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(Ls);if(!(l<e.near||l>e.far))return{distance:l,point:Zl.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const Jl=new P,Ql=new P;class sd extends Qo{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let a=0,r=t.count;a<r;a+=2)Jl.fromBufferAttribute(t,a),Ql.fromBufferAttribute(t,a+1),n[a]=a===0?0:n[a-1],n[a+1]=n[a]+Jl.distanceTo(Ql);e.setAttribute("lineDistance",new Nt(n,1))}else Ce("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class od extends yi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new qe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const jl=new mt,Uo=new qr,rr=new rn,sr=new P;class Qi extends zt{constructor(e=new dt,t=new od){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,a=this.matrixWorld,r=e.params.Points.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),rr.copy(n.boundingSphere),rr.applyMatrix4(a),rr.radius+=r,e.ray.intersectsSphere(rr)===!1)return;jl.copy(a).invert(),Uo.copy(e.ray).applyMatrix4(jl);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,f=n.attributes.position;if(l!==null){const h=Math.max(0,s.start),m=Math.min(l.count,s.start+s.count);for(let _=h,y=m;_<y;_++){const p=l.getX(_);sr.fromBufferAttribute(f,p),ec(sr,p,c,a,e,t,this)}}else{const h=Math.max(0,s.start),m=Math.min(f.count,s.start+s.count);for(let _=h,y=m;_<y;_++)sr.fromBufferAttribute(f,_),ec(sr,_,c,a,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const a=t[n[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=a.length;r<s;r++){const o=a[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function ec(i,e,t,n,a,r,s){const o=Uo.distanceSqToPoint(i);if(o<t){const c=new P;Uo.closestPointToPoint(i,c),c.applyMatrix4(n);const l=a.ray.origin.distanceTo(c);if(l<a.near||l>a.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:s})}}class gh extends Ut{constructor(e=[],t=_i,n,a,r,s,o,c,l,u){super(e,t,n,a,r,s,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ld extends Ut{constructor(e,t,n,a,r,s,o,c,l){super(e,t,n,a,r,s,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ji extends Ut{constructor(e,t,n=En,a,r,s,o=At,c=At,l,u=On,f=1){if(u!==On&&u!==di)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:f};super(h,a,r,s,o,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Zo(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class cd extends ji{constructor(e,t=En,n=_i,a,r,s=At,o=At,c,l=On){const u={width:e,height:e,depth:1},f=[u,u,u,u,u,u];super(e,e,t,n,a,r,s,o,c,l),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class _h extends Ut{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class La extends dt{constructor(e=1,t=1,n=1,a=1,r=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:a,heightSegments:r,depthSegments:s};const o=this;a=Math.floor(a),r=Math.floor(r),s=Math.floor(s);const c=[],l=[],u=[],f=[];let h=0,m=0;_("z","y","x",-1,-1,n,t,e,s,r,0),_("z","y","x",1,-1,n,t,-e,s,r,1),_("x","z","y",1,1,e,n,t,a,s,2),_("x","z","y",1,-1,e,n,-t,a,s,3),_("x","y","z",1,-1,e,t,n,a,r,4),_("x","y","z",-1,-1,e,t,-n,a,r,5),this.setIndex(c),this.setAttribute("position",new Nt(l,3)),this.setAttribute("normal",new Nt(u,3)),this.setAttribute("uv",new Nt(f,2));function _(y,p,d,b,R,M,w,E,C,v,T){const U=M/C,D=w/v,k=M/2,$=w/2,Q=E/2,z=C+1,Z=v+1;let W=0,j=0;const ne=new P;for(let ue=0;ue<Z;ue++){const ce=ue*D-$;for(let ve=0;ve<z;ve++){const Ze=ve*U-k;ne[y]=Ze*b,ne[p]=ce*R,ne[d]=Q,l.push(ne.x,ne.y,ne.z),ne[y]=0,ne[p]=0,ne[d]=E>0?1:-1,u.push(ne.x,ne.y,ne.z),f.push(ve/C),f.push(1-ue/v),W+=1}}for(let ue=0;ue<v;ue++)for(let ce=0;ce<C;ce++){const ve=h+ce+z*ue,Ze=h+ce+z*(ue+1),ct=h+(ce+1)+z*(ue+1),Je=h+(ce+1)+z*ue;c.push(ve,Ze,Je),c.push(Ze,ct,Je),j+=6}o.addGroup(m,j,T),m+=j,h+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new La(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Kr extends dt{constructor(e=1,t=1,n=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:a};const r=e/2,s=t/2,o=Math.floor(n),c=Math.floor(a),l=o+1,u=c+1,f=e/o,h=t/c,m=[],_=[],y=[],p=[];for(let d=0;d<u;d++){const b=d*h-s;for(let R=0;R<l;R++){const M=R*f-r;_.push(M,-b,0),y.push(0,0,1),p.push(R/o),p.push(1-d/c)}}for(let d=0;d<c;d++)for(let b=0;b<o;b++){const R=b+l*d,M=b+l*(d+1),w=b+1+l*(d+1),E=b+1+l*d;m.push(R,M,E),m.push(M,w,E)}this.setIndex(m),this.setAttribute("position",new Nt(_,3)),this.setAttribute("normal",new Nt(y,3)),this.setAttribute("uv",new Nt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Kr(e.width,e.height,e.widthSegments,e.heightSegments)}}class Or extends dt{constructor(e=1,t=32,n=16,a=0,r=Math.PI*2,s=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:a,phiLength:r,thetaStart:s,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(s+o,Math.PI);let l=0;const u=[],f=new P,h=new P,m=[],_=[],y=[],p=[];for(let d=0;d<=n;d++){const b=[],R=d/n,M=s+R*o,w=e*Math.cos(M),E=Math.sqrt(e*e-w*w);let C=0;d===0&&s===0?C=.5/t:d===n&&c===Math.PI&&(C=-.5/t);for(let v=0;v<=t;v++){const T=v/t,U=a+T*r;f.x=-E*Math.cos(U),f.y=w,f.z=E*Math.sin(U),_.push(f.x,f.y,f.z),h.copy(f).normalize(),y.push(h.x,h.y,h.z),p.push(T+C,1-R),b.push(l++)}u.push(b)}for(let d=0;d<n;d++)for(let b=0;b<t;b++){const R=u[d][b+1],M=u[d][b],w=u[d+1][b],E=u[d+1][b+1];(d!==0||s>0)&&m.push(R,M,E),(d!==n-1||c<Math.PI)&&m.push(M,w,E)}this.setIndex(m),this.setAttribute("position",new Nt(_,3)),this.setAttribute("normal",new Nt(y,3)),this.setAttribute("uv",new Nt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Or(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function ea(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const a=i[t][n];if(tc(a))a.isRenderTargetTexture?(Ce("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=a.clone();else if(Array.isArray(a))if(tc(a[0])){const r=[];for(let s=0,o=a.length;s<o;s++)r[s]=a[s].clone();e[t][n]=r}else e[t][n]=a.slice();else e[t][n]=a}}return e}function Gt(i){const e={};for(let t=0;t<i.length;t++){const n=ea(i[t]);for(const a in n)e[a]=n[a]}return e}function tc(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function hd(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function vh(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ke.workingColorSpace}const ud={clone:ea,merge:Gt};var dd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,fd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class vt extends yi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=dd,this.fragmentShader=fd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ea(e.uniforms),this.uniformsGroups=hd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const s=this.uniforms[a].value;s&&s.isTexture?t.uniforms[a]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[a]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[a]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[a]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[a]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[a]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[a]={type:"m4",value:s.toArray()}:t.uniforms[a]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const a in this.extensions)this.extensions[a]===!0&&(n[a]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const a=e.uniforms[n];switch(this.uniforms[n]={},a.type){case"t":this.uniforms[n].value=t[a.value]||null;break;case"c":this.uniforms[n].value=new qe().setHex(a.value);break;case"v2":this.uniforms[n].value=new Le().fromArray(a.value);break;case"v3":this.uniforms[n].value=new P().fromArray(a.value);break;case"v4":this.uniforms[n].value=new pt().fromArray(a.value);break;case"m3":this.uniforms[n].value=new Fe().fromArray(a.value);break;case"m4":this.uniforms[n].value=new mt().fromArray(a.value);break;default:this.uniforms[n].value=a.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class pd extends vt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class md extends yi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Su,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class gd extends yi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Ds={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(nc(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!nc(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function nc(i){try{const e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class _d{constructor(e,t,n){const a=this;let r=!1,s=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){o++,r===!1&&a.onStart!==void 0&&a.onStart(u,s,o),r=!0},this.itemEnd=function(u){s++,a.onProgress!==void 0&&a.onProgress(u,s,o),s===o&&(r=!1,a.onLoad!==void 0&&a.onLoad())},this.itemError=function(u){a.onError!==void 0&&a.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,f){return l.push(u,f),this},this.removeHandler=function(u){const f=l.indexOf(u);return f!==-1&&l.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=l.length;f<h;f+=2){const m=l[f],_=l[f+1];if(m.global&&(m.lastIndex=0),m.test(u))return _}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const vd=new _d;class jo{constructor(e){this.manager=e!==void 0?e:vd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const n=this;return new Promise(function(a,r){n.load(e,a,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}jo.DEFAULT_MATERIAL_NAME="__DEFAULT";const ki=new WeakMap;class xd extends jo{constructor(e){super(e)}load(e,t,n,a){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,s=Ds.get(`image:${e}`);if(s!==void 0){if(s.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(s),r.manager.itemEnd(e)},0);else{let f=ki.get(s);f===void 0&&(f=[],ki.set(s,f)),f.push({onLoad:t,onError:a})}return s}const o=Ra("img");function c(){u(),t&&t(this);const f=ki.get(this)||[];for(let h=0;h<f.length;h++){const m=f[h];m.onLoad&&m.onLoad(this)}ki.delete(this),r.manager.itemEnd(e)}function l(f){u(),a&&a(f),Ds.remove(`image:${e}`);const h=ki.get(this)||[];for(let m=0;m<h.length;m++){const _=h[m];_.onError&&_.onError(f)}ki.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Ds.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}}class el extends jo{constructor(e){super(e)}load(e,t,n,a){const r=new Ut,s=new xd(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,a),r}}const or=new P,lr=new un,mn=new P;class xh extends zt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new mt,this.projectionMatrix=new mt,this.projectionMatrixInverse=new mt,this.coordinateSystem=yn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(or,lr,mn),mn.x===1&&mn.y===1&&mn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(or,lr,mn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(or,lr,mn),mn.x===1&&mn.y===1&&mn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(or,lr,mn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const $n=new P,ic=new Le,ac=new Le;class jt extends xh{constructor(e=50,t=1,n=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Do*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Sr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Do*2*Math.atan(Math.tan(Sr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){$n.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set($n.x,$n.y).multiplyScalar(-e/$n.z),$n.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set($n.x,$n.y).multiplyScalar(-e/$n.z)}getViewSize(e,t){return this.getViewBounds(e,ic,ac),t.subVectors(ac,ic)}setViewOffset(e,t,n,a,r,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=a,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Sr*.5*this.fov)/this.zoom,n=2*t,a=this.aspect*n,r=-.5*a;const s=this.view;if(this.view!==null&&this.view.enabled){const c=s.fullWidth,l=s.fullHeight;r+=s.offsetX*a/c,t-=s.offsetY*n/l,a*=s.width/c,n*=s.height/l}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+a,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Mh extends xh{constructor(e=-1,t=1,n=1,a=-1,r=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=a,this.near=r,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,a,r,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=a,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let r=n-e,s=n+e,o=a+t,c=a-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,s=r+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,s,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const zi=-90,Vi=1;class Md extends zt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new jt(zi,Vi,e,t);a.layers=this.layers,this.add(a);const r=new jt(zi,Vi,e,t);r.layers=this.layers,this.add(r);const s=new jt(zi,Vi,e,t);s.layers=this.layers,this.add(s);const o=new jt(zi,Vi,e,t);o.layers=this.layers,this.add(o);const c=new jt(zi,Vi,e,t);c.layers=this.layers,this.add(c);const l=new jt(zi,Vi,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,a,r,s,o,c]=t;for(const l of t)this.remove(l);if(e===yn)n.up.set(0,1,0),n.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Dr)n.up.set(0,-1,0),n.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,s,o,c,l,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(n,0,a),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,a),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,2,a),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,a),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,a),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.generateMipmaps=y,e.setRenderTarget(n,5,a),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(f,h,m),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class yd extends jt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class rc{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Ye(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Ye(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const fl=class fl{constructor(e,t,n,a){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,a)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,a){const r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=a,this}};fl.prototype.isMatrix2=!0;let sc=fl;class Sd extends ii{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){Ce("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function oc(i,e,t,n){const a=bd(n);switch(t){case ih:return i*e;case rh:return i*e/a.components*a.byteLength;case Xo:return i*e/a.components*a.byteLength;case vi:return i*e*2/a.components*a.byteLength;case Yo:return i*e*2/a.components*a.byteLength;case ah:return i*e*3/a.components*a.byteLength;case hn:return i*e*4/a.components*a.byteLength;case qo:return i*e*4/a.components*a.byteLength;case vr:case xr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Mr:case yr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case to:case io:return Math.max(i,16)*Math.max(e,8)/4;case eo:case no:return Math.max(i,8)*Math.max(e,8)/2;case ao:case ro:case oo:case lo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case so:case Rr:case co:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ho:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case uo:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case fo:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case po:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case mo:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case go:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case _o:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case vo:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case xo:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Mo:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case yo:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case So:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case bo:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Eo:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case To:case wo:case Ao:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Ro:case Co:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Cr:case Po:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function bd(i){switch(i){case en:case jc:return{byteLength:1,components:1};case wa:case eh:case Fn:return{byteLength:2,components:1};case Ho:case Wo:return{byteLength:2,components:4};case En:case Go:case Mn:return{byteLength:4,components:1};case th:case nh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Vo}}));typeof window<"u"&&(window.__THREE__?Ce("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Vo);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function yh(){let i=null,e=!1,t=null,n=null;function a(r,s){t(r,s),n=i.requestAnimationFrame(a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(a),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Ed(i){const e=new WeakMap;function t(o,c){const l=o.array,u=o.usage,f=l.byteLength,h=i.createBuffer();i.bindBuffer(c,h),i.bufferData(c,l,u),o.onUploadCallback();let m;if(l instanceof Float32Array)m=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)m=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)m=i.SHORT;else if(l instanceof Uint32Array)m=i.UNSIGNED_INT;else if(l instanceof Int32Array)m=i.INT;else if(l instanceof Int8Array)m=i.BYTE;else if(l instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:m,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,c,l){const u=c.array,f=c.updateRanges;if(i.bindBuffer(l,o),f.length===0)i.bufferSubData(l,0,u);else{f.sort((m,_)=>m.start-_.start);let h=0;for(let m=1;m<f.length;m++){const _=f[h],y=f[m];y.start<=_.start+_.count+1?_.count=Math.max(_.count,y.start+y.count-_.start):(++h,f[h]=y)}f.length=h+1;for(let m=0,_=f.length;m<_;m++){const y=f[m];i.bufferSubData(l,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}c.clearUpdateRanges()}c.onUploadCallback()}function a(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function s(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:a,remove:r,update:s}}var Td=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,wd=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Ad=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Rd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Cd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Pd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ld=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Dd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Id=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Ud=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Nd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Fd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Od=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Bd=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,kd=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,zd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Vd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Gd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Hd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Wd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Xd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Yd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,qd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Kd=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,$d=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Zd=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Jd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Qd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,jd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ef=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,tf="gl_FragColor = linearToOutputTexel( gl_FragColor );",nf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,af=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,rf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,sf=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,of=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,lf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,cf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,hf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,uf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,df=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ff=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,pf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,mf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,gf=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,_f=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,vf=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,xf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Mf=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,yf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Sf=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,bf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Ef=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Tf=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,wf=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Af=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Rf=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Cf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Pf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Lf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Df=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,If=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Uf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Nf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Ff=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Of=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Bf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,kf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,zf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Vf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Gf=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Hf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Wf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Xf=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Yf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Kf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,$f=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Zf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Jf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Qf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,jf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ep=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,tp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,np=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ip=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ap=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,rp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,sp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,op=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,lp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,cp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,hp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,up=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,dp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,fp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,pp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,mp=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,gp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,_p=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,vp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,xp=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Mp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,yp=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Sp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,bp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ep=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Tp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const wp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ap=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cp=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Lp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Ip=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Up=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Np=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Fp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Op=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bp=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,kp=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,zp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Vp=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gp=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Hp=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wp=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Xp=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yp=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,qp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Kp=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$p=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zp=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Jp=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qp=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jp=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,em=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,tm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,nm=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,im=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,am=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,rm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ve={alphahash_fragment:Td,alphahash_pars_fragment:wd,alphamap_fragment:Ad,alphamap_pars_fragment:Rd,alphatest_fragment:Cd,alphatest_pars_fragment:Pd,aomap_fragment:Ld,aomap_pars_fragment:Dd,batching_pars_vertex:Id,batching_vertex:Ud,begin_vertex:Nd,beginnormal_vertex:Fd,bsdfs:Od,iridescence_fragment:Bd,bumpmap_pars_fragment:kd,clipping_planes_fragment:zd,clipping_planes_pars_fragment:Vd,clipping_planes_pars_vertex:Gd,clipping_planes_vertex:Hd,color_fragment:Wd,color_pars_fragment:Xd,color_pars_vertex:Yd,color_vertex:qd,common:Kd,cube_uv_reflection_fragment:$d,defaultnormal_vertex:Zd,displacementmap_pars_vertex:Jd,displacementmap_vertex:Qd,emissivemap_fragment:jd,emissivemap_pars_fragment:ef,colorspace_fragment:tf,colorspace_pars_fragment:nf,envmap_fragment:af,envmap_common_pars_fragment:rf,envmap_pars_fragment:sf,envmap_pars_vertex:of,envmap_physical_pars_fragment:vf,envmap_vertex:lf,fog_vertex:cf,fog_pars_vertex:hf,fog_fragment:uf,fog_pars_fragment:df,gradientmap_pars_fragment:ff,lightmap_pars_fragment:pf,lights_lambert_fragment:mf,lights_lambert_pars_fragment:gf,lights_pars_begin:_f,lights_toon_fragment:xf,lights_toon_pars_fragment:Mf,lights_phong_fragment:yf,lights_phong_pars_fragment:Sf,lights_physical_fragment:bf,lights_physical_pars_fragment:Ef,lights_fragment_begin:Tf,lights_fragment_maps:wf,lights_fragment_end:Af,lightprobes_pars_fragment:Rf,logdepthbuf_fragment:Cf,logdepthbuf_pars_fragment:Pf,logdepthbuf_pars_vertex:Lf,logdepthbuf_vertex:Df,map_fragment:If,map_pars_fragment:Uf,map_particle_fragment:Nf,map_particle_pars_fragment:Ff,metalnessmap_fragment:Of,metalnessmap_pars_fragment:Bf,morphinstance_vertex:kf,morphcolor_vertex:zf,morphnormal_vertex:Vf,morphtarget_pars_vertex:Gf,morphtarget_vertex:Hf,normal_fragment_begin:Wf,normal_fragment_maps:Xf,normal_pars_fragment:Yf,normal_pars_vertex:qf,normal_vertex:Kf,normalmap_pars_fragment:$f,clearcoat_normal_fragment_begin:Zf,clearcoat_normal_fragment_maps:Jf,clearcoat_pars_fragment:Qf,iridescence_pars_fragment:jf,opaque_fragment:ep,packing:tp,premultiplied_alpha_fragment:np,project_vertex:ip,dithering_fragment:ap,dithering_pars_fragment:rp,roughnessmap_fragment:sp,roughnessmap_pars_fragment:op,shadowmap_pars_fragment:lp,shadowmap_pars_vertex:cp,shadowmap_vertex:hp,shadowmask_pars_fragment:up,skinbase_vertex:dp,skinning_pars_vertex:fp,skinning_vertex:pp,skinnormal_vertex:mp,specularmap_fragment:gp,specularmap_pars_fragment:_p,tonemapping_fragment:vp,tonemapping_pars_fragment:xp,transmission_fragment:Mp,transmission_pars_fragment:yp,uv_pars_fragment:Sp,uv_pars_vertex:bp,uv_vertex:Ep,worldpos_vertex:Tp,background_vert:wp,background_frag:Ap,backgroundCube_vert:Rp,backgroundCube_frag:Cp,cube_vert:Pp,cube_frag:Lp,depth_vert:Dp,depth_frag:Ip,distance_vert:Up,distance_frag:Np,equirect_vert:Fp,equirect_frag:Op,linedashed_vert:Bp,linedashed_frag:kp,meshbasic_vert:zp,meshbasic_frag:Vp,meshlambert_vert:Gp,meshlambert_frag:Hp,meshmatcap_vert:Wp,meshmatcap_frag:Xp,meshnormal_vert:Yp,meshnormal_frag:qp,meshphong_vert:Kp,meshphong_frag:$p,meshphysical_vert:Zp,meshphysical_frag:Jp,meshtoon_vert:Qp,meshtoon_frag:jp,points_vert:em,points_frag:tm,shadow_vert:nm,shadow_frag:im,sprite_vert:am,sprite_frag:rm},fe={common:{diffuse:{value:new qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Fe}},envmap:{envMap:{value:null},envMapRotation:{value:new Fe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Fe},normalScale:{value:new Le(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new P},probesMax:{value:new P},probesResolution:{value:new P}},points:{diffuse:{value:new qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0},uvTransform:{value:new Fe}},sprite:{diffuse:{value:new qe(16777215)},opacity:{value:1},center:{value:new Le(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}}},_n={basic:{uniforms:Gt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:Gt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new qe(0)},envMapIntensity:{value:1}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:Gt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new qe(0)},specular:{value:new qe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:Gt([fe.common,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.roughnessmap,fe.metalnessmap,fe.fog,fe.lights,{emissive:{value:new qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:Gt([fe.common,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.gradientmap,fe.fog,fe.lights,{emissive:{value:new qe(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:Gt([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:Gt([fe.points,fe.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:Gt([fe.common,fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:Gt([fe.common,fe.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:Gt([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:Gt([fe.sprite,fe.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new Fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Fe}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distance:{uniforms:Gt([fe.common,fe.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distance_vert,fragmentShader:Ve.distance_frag},shadow:{uniforms:Gt([fe.lights,fe.fog,{color:{value:new qe(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};_n.physical={uniforms:Gt([_n.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Fe},clearcoatNormalScale:{value:new Le(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Fe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Fe},sheen:{value:0},sheenColor:{value:new qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Fe},transmissionSamplerSize:{value:new Le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Fe},attenuationDistance:{value:0},attenuationColor:{value:new qe(0)},specularColor:{value:new qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Fe},anisotropyVector:{value:new Le},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Fe}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};const cr={r:0,b:0,g:0},sm=new mt,Sh=new Fe;Sh.set(-1,0,0,0,1,0,0,0,1);function om(i,e,t,n,a,r){const s=new qe(0);let o=a===!0?0:1,c,l,u=null,f=0,h=null;function m(b){let R=b.isScene===!0?b.background:null;if(R&&R.isTexture){const M=b.backgroundBlurriness>0;R=e.get(R,M)}return R}function _(b){let R=!1;const M=m(b);M===null?p(s,o):M&&M.isColor&&(p(M,1),R=!0);const w=i.xr.getEnvironmentBlendMode();w==="additive"?t.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||R)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function y(b,R){const M=m(R);M&&(M.isCubeTexture||M.mapping===Yr)?(l===void 0&&(l=new Xt(new La(1,1,1),new vt({name:"BackgroundCubeMaterial",uniforms:ea(_n.backgroundCube.uniforms),vertexShader:_n.backgroundCube.vertexShader,fragmentShader:_n.backgroundCube.fragmentShader,side:Wt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(w,E,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=M,l.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(sm.makeRotationFromEuler(R.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Sh),l.material.toneMapped=Ke.getTransfer(M.colorSpace)!==et,(u!==M||f!==M.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,u=M,f=M.version,h=i.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new Xt(new Kr(2,2),new vt({name:"BackgroundMaterial",uniforms:ea(_n.background.uniforms),vertexShader:_n.background.vertexShader,fragmentShader:_n.background.fragmentShader,side:Nn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,c.material.toneMapped=Ke.getTransfer(M.colorSpace)!==et,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||f!==M.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,u=M,f=M.version,h=i.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function p(b,R){b.getRGB(cr,vh(i)),t.buffers.color.setClear(cr.r,cr.g,cr.b,R,r)}function d(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return s},setClearColor:function(b,R=1){s.set(b),o=R,p(s,o)},getClearAlpha:function(){return o},setClearAlpha:function(b){o=b,p(s,o)},render:_,addToRenderList:y,dispose:d}}function lm(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},a=h(null);let r=a,s=!1;function o(D,k,$,Q,z){let Z=!1;const W=f(D,Q,$,k);r!==W&&(r=W,l(r.object)),Z=m(D,Q,$,z),Z&&_(D,Q,$,z),z!==null&&e.update(z,i.ELEMENT_ARRAY_BUFFER),(Z||s)&&(s=!1,M(D,k,$,Q),z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function c(){return i.createVertexArray()}function l(D){return i.bindVertexArray(D)}function u(D){return i.deleteVertexArray(D)}function f(D,k,$,Q){const z=Q.wireframe===!0;let Z=n[k.id];Z===void 0&&(Z={},n[k.id]=Z);const W=D.isInstancedMesh===!0?D.id:0;let j=Z[W];j===void 0&&(j={},Z[W]=j);let ne=j[$.id];ne===void 0&&(ne={},j[$.id]=ne);let ue=ne[z];return ue===void 0&&(ue=h(c()),ne[z]=ue),ue}function h(D){const k=[],$=[],Q=[];for(let z=0;z<t;z++)k[z]=0,$[z]=0,Q[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:$,attributeDivisors:Q,object:D,attributes:{},index:null}}function m(D,k,$,Q){const z=r.attributes,Z=k.attributes;let W=0;const j=$.getAttributes();for(const ne in j)if(j[ne].location>=0){const ce=z[ne];let ve=Z[ne];if(ve===void 0&&(ne==="instanceMatrix"&&D.instanceMatrix&&(ve=D.instanceMatrix),ne==="instanceColor"&&D.instanceColor&&(ve=D.instanceColor)),ce===void 0||ce.attribute!==ve||ve&&ce.data!==ve.data)return!0;W++}return r.attributesNum!==W||r.index!==Q}function _(D,k,$,Q){const z={},Z=k.attributes;let W=0;const j=$.getAttributes();for(const ne in j)if(j[ne].location>=0){let ce=Z[ne];ce===void 0&&(ne==="instanceMatrix"&&D.instanceMatrix&&(ce=D.instanceMatrix),ne==="instanceColor"&&D.instanceColor&&(ce=D.instanceColor));const ve={};ve.attribute=ce,ce&&ce.data&&(ve.data=ce.data),z[ne]=ve,W++}r.attributes=z,r.attributesNum=W,r.index=Q}function y(){const D=r.newAttributes;for(let k=0,$=D.length;k<$;k++)D[k]=0}function p(D){d(D,0)}function d(D,k){const $=r.newAttributes,Q=r.enabledAttributes,z=r.attributeDivisors;$[D]=1,Q[D]===0&&(i.enableVertexAttribArray(D),Q[D]=1),z[D]!==k&&(i.vertexAttribDivisor(D,k),z[D]=k)}function b(){const D=r.newAttributes,k=r.enabledAttributes;for(let $=0,Q=k.length;$<Q;$++)k[$]!==D[$]&&(i.disableVertexAttribArray($),k[$]=0)}function R(D,k,$,Q,z,Z,W){W===!0?i.vertexAttribIPointer(D,k,$,z,Z):i.vertexAttribPointer(D,k,$,Q,z,Z)}function M(D,k,$,Q){y();const z=Q.attributes,Z=$.getAttributes(),W=k.defaultAttributeValues;for(const j in Z){const ne=Z[j];if(ne.location>=0){let ue=z[j];if(ue===void 0&&(j==="instanceMatrix"&&D.instanceMatrix&&(ue=D.instanceMatrix),j==="instanceColor"&&D.instanceColor&&(ue=D.instanceColor)),ue!==void 0){const ce=ue.normalized,ve=ue.itemSize,Ze=e.get(ue);if(Ze===void 0)continue;const ct=Ze.buffer,Je=Ze.type,q=Ze.bytesPerElement,oe=Je===i.INT||Je===i.UNSIGNED_INT||ue.gpuType===Go;if(ue.isInterleavedBufferAttribute){const ie=ue.data,Pe=ie.stride,Ue=ue.offset;if(ie.isInstancedInterleavedBuffer){for(let Re=0;Re<ne.locationSize;Re++)d(ne.location+Re,ie.meshPerAttribute);D.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let Re=0;Re<ne.locationSize;Re++)p(ne.location+Re);i.bindBuffer(i.ARRAY_BUFFER,ct);for(let Re=0;Re<ne.locationSize;Re++)R(ne.location+Re,ve/ne.locationSize,Je,ce,Pe*q,(Ue+ve/ne.locationSize*Re)*q,oe)}else{if(ue.isInstancedBufferAttribute){for(let ie=0;ie<ne.locationSize;ie++)d(ne.location+ie,ue.meshPerAttribute);D.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let ie=0;ie<ne.locationSize;ie++)p(ne.location+ie);i.bindBuffer(i.ARRAY_BUFFER,ct);for(let ie=0;ie<ne.locationSize;ie++)R(ne.location+ie,ve/ne.locationSize,Je,ce,ve*q,ve/ne.locationSize*ie*q,oe)}}else if(W!==void 0){const ce=W[j];if(ce!==void 0)switch(ce.length){case 2:i.vertexAttrib2fv(ne.location,ce);break;case 3:i.vertexAttrib3fv(ne.location,ce);break;case 4:i.vertexAttrib4fv(ne.location,ce);break;default:i.vertexAttrib1fv(ne.location,ce)}}}}b()}function w(){T();for(const D in n){const k=n[D];for(const $ in k){const Q=k[$];for(const z in Q){const Z=Q[z];for(const W in Z)u(Z[W].object),delete Z[W];delete Q[z]}}delete n[D]}}function E(D){if(n[D.id]===void 0)return;const k=n[D.id];for(const $ in k){const Q=k[$];for(const z in Q){const Z=Q[z];for(const W in Z)u(Z[W].object),delete Z[W];delete Q[z]}}delete n[D.id]}function C(D){for(const k in n){const $=n[k];for(const Q in $){const z=$[Q];if(z[D.id]===void 0)continue;const Z=z[D.id];for(const W in Z)u(Z[W].object),delete Z[W];delete z[D.id]}}}function v(D){for(const k in n){const $=n[k],Q=D.isInstancedMesh===!0?D.id:0,z=$[Q];if(z!==void 0){for(const Z in z){const W=z[Z];for(const j in W)u(W[j].object),delete W[j];delete z[Z]}delete $[Q],Object.keys($).length===0&&delete n[k]}}}function T(){U(),s=!0,r!==a&&(r=a,l(r.object))}function U(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:o,reset:T,resetDefaultState:U,dispose:w,releaseStatesOfGeometry:E,releaseStatesOfObject:v,releaseStatesOfProgram:C,initAttributes:y,enableAttribute:p,disableUnusedAttributes:b}}function cm(i,e,t){let n;function a(c){n=c}function r(c,l){i.drawArrays(n,c,l),t.update(l,n,1)}function s(c,l,u){u!==0&&(i.drawArraysInstanced(n,c,l,u),t.update(l,n,u))}function o(c,l,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,u);let h=0;for(let m=0;m<u;m++)h+=l[m];t.update(h,n,1)}this.setMode=a,this.render=r,this.renderInstances=s,this.renderMultiDraw=o}function hm(i,e,t,n){let a;function r(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");a=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function s(C){return!(C!==hn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const v=C===Fn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==en&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Mn&&!v)}function c(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(Ce("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const f=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&h===!1&&Ce("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),R=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),w=i.getParameter(i.MAX_SAMPLES),E=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:s,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:m,maxVertexTextures:_,maxTextureSize:y,maxCubemapSize:p,maxAttributes:d,maxVertexUniforms:b,maxVaryings:R,maxFragmentUniforms:M,maxSamples:w,samples:E}}function um(i){const e=this;let t=null,n=0,a=!1,r=!1;const s=new jn,o=new Fe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const m=f.length!==0||h||n!==0||a;return a=h,n=f.length,m},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,m){const _=f.clippingPlanes,y=f.clipIntersection,p=f.clipShadows,d=i.get(f);if(!a||_===null||_.length===0||r&&!p)r?u(null):l();else{const b=r?0:n,R=b*4;let M=d.clippingState||null;c.value=M,M=u(_,h,R,m);for(let w=0;w!==R;++w)M[w]=t[w];d.clippingState=M,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=b}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,h,m,_){const y=f!==null?f.length:0;let p=null;if(y!==0){if(p=c.value,_!==!0||p===null){const d=m+y*4,b=h.matrixWorldInverse;o.getNormalMatrix(b),(p===null||p.length<d)&&(p=new Float32Array(d));for(let R=0,M=m;R!==y;++R,M+=4)s.copy(f[R]).applyMatrix4(b,o),s.normal.toArray(p,M),p[M+3]=s.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,p}}const ei=4,lc=[.125,.215,.35,.446,.526,.582],hi=20,dm=256,da=new Mh,cc=new qe;let Is=null,Us=0,Ns=0,Fs=!1;const fm=new P;class hc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,a=100,r={}){const{size:s=256,position:o=fm}=r;Is=this._renderer.getRenderTarget(),Us=this._renderer.getActiveCubeFace(),Ns=this._renderer.getActiveMipmapLevel(),Fs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,a,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=fc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=dc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Is,Us,Ns),this._renderer.xr.enabled=Fs,e.scissorTest=!1,Gi(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===_i||e.mapping===Ji?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Is=this._renderer.getRenderTarget(),Us=this._renderer.getActiveCubeFace(),Ns=this._renderer.getActiveMipmapLevel(),Fs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:kt,minFilter:kt,generateMipmaps:!1,type:Fn,format:hn,colorSpace:Pr,depthBuffer:!1},a=uc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=uc(e,t,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=pm(r)),this._blurMaterial=gm(r,e,t),this._ggxMaterial=mm(r,e,t)}return a}_compileMaterial(e){const t=new Xt(new dt,e);this._renderer.compile(t,da)}_sceneToCubeUV(e,t,n,a,r){const c=new jt(90,1,t,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,m=f.toneMapping;f.getClearColor(cc),f.toneMapping=Sn,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(a),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Xt(new La,new ph({name:"PMREM.Background",side:Wt,depthWrite:!1,depthTest:!1})));const y=this._backgroundBox,p=y.material;let d=!1;const b=e.background;b?b.isColor&&(p.color.copy(b),e.background=null,d=!0):(p.color.copy(cc),d=!0);for(let R=0;R<6;R++){const M=R%3;M===0?(c.up.set(0,l[R],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+u[R],r.y,r.z)):M===1?(c.up.set(0,0,l[R]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+u[R],r.z)):(c.up.set(0,l[R],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+u[R]));const w=this._cubeSize;Gi(a,M*w,R>2?w:0,w,w),f.setRenderTarget(a),d&&f.render(y,c),f.render(e,c)}f.toneMapping=m,f.autoClear=h,e.background=b}_textureToCubeUV(e,t){const n=this._renderer,a=e.mapping===_i||e.mapping===Ji;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=fc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=dc());const r=a?this._cubemapMaterial:this._equirectMaterial,s=this._lodMeshes[0];s.material=r;const o=r.uniforms;o.envMap.value=e;const c=this._cubeSize;Gi(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(s,da)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const a=this._lodMeshes.length;for(let r=1;r<a;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){const a=this._renderer,r=this._pingPongRenderTarget,s=this._ggxMaterial,o=this._lodMeshes[n];o.material=s;const c=s.uniforms,l=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),f=Math.sqrt(l*l-u*u),h=0+l*1.25,m=f*h,{_lodMax:_}=this,y=this._sizeLods[n],p=3*y*(n>_-ei?n-_+ei:0),d=4*(this._cubeSize-y);c.envMap.value=e.texture,c.roughness.value=m,c.mipInt.value=_-t,Gi(r,p,d,3*y,2*y),a.setRenderTarget(r),a.render(o,da),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=_-n,Gi(e,p,d,3*y,2*y),a.setRenderTarget(e),a.render(o,da)}_blur(e,t,n,a,r){const s=this._pingPongRenderTarget;this._halfBlur(e,s,t,n,a,"latitudinal",r),this._halfBlur(s,e,n,n,a,"longitudinal",r)}_halfBlur(e,t,n,a,r,s,o){const c=this._renderer,l=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&$e("blur direction must be either latitudinal or longitudinal!");const u=3,f=this._lodMeshes[a];f.material=l;const h=l.uniforms,m=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*hi-1),y=r/_,p=isFinite(r)?1+Math.floor(u*y):hi;p>hi&&Ce(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${hi}`);const d=[];let b=0;for(let C=0;C<hi;++C){const v=C/y,T=Math.exp(-v*v/2);d.push(T),C===0?b+=T:C<p&&(b+=2*T)}for(let C=0;C<d.length;C++)d[C]=d[C]/b;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=d,h.latitudinal.value=s==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:R}=this;h.dTheta.value=_,h.mipInt.value=R-n;const M=this._sizeLods[a],w=3*M*(a>R-ei?a-R+ei:0),E=4*(this._cubeSize-M);Gi(t,w,E,3*M,2*M),c.setRenderTarget(t),c.render(f,da)}}function pm(i){const e=[],t=[],n=[];let a=i;const r=i-ei+1+lc.length;for(let s=0;s<r;s++){const o=Math.pow(2,a);e.push(o);let c=1/o;s>i-ei?c=lc[s-i+ei-1]:s===0&&(c=0),t.push(c);const l=1/(o-2),u=-l,f=1+l,h=[u,u,f,u,f,f,u,u,f,f,u,f],m=6,_=6,y=3,p=2,d=1,b=new Float32Array(y*_*m),R=new Float32Array(p*_*m),M=new Float32Array(d*_*m);for(let E=0;E<m;E++){const C=E%3*2/3-1,v=E>2?0:-1,T=[C,v,0,C+2/3,v,0,C+2/3,v+1,0,C,v,0,C+2/3,v+1,0,C,v+1,0];b.set(T,y*_*E),R.set(h,p*_*E);const U=[E,E,E,E,E,E];M.set(U,d*_*E)}const w=new dt;w.setAttribute("position",new ze(b,y)),w.setAttribute("uv",new ze(R,p)),w.setAttribute("faceIndex",new ze(M,d)),n.push(new Xt(w,null)),a>ei&&a--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function uc(i,e,t){const n=new bn(i,e,t);return n.texture.mapping=Yr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Gi(i,e,t,n,a){i.viewport.set(e,t,n,a),i.scissor.set(e,t,n,a)}function mm(i,e,t){return new vt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:dm,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:$r(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function gm(i,e,t){const n=new Float32Array(hi),a=new P(0,1,0);return new vt({name:"SphericalGaussianBlur",defines:{n:hi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:$r(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function dc(){return new vt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:$r(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function fc(){return new vt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:$r(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function $r(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class bh extends bn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},a=[n,n,n,n,n,n];this.texture=new gh(a),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},a=new La(5,5,5),r=new vt({name:"CubemapFromEquirect",uniforms:ea(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Wt,blending:Dn});r.uniforms.tEquirect.value=t;const s=new Xt(a,r),o=t.minFilter;return t.minFilter===ui&&(t.minFilter=kt),new Md(1,10,this).update(e,s),t.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(e,t=!0,n=!0,a=!0){const r=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,n,a);e.setRenderTarget(r)}}function _m(i){let e=new WeakMap,t=new WeakMap,n=null;function a(h,m=!1){return h==null?null:m?s(h):r(h)}function r(h){if(h&&h.isTexture){const m=h.mapping;if(m===as||m===rs)if(e.has(h)){const _=e.get(h).texture;return o(_,h.mapping)}else{const _=h.image;if(_&&_.height>0){const y=new bh(_.height);return y.fromEquirectangularTexture(i,h),e.set(h,y),h.addEventListener("dispose",l),o(y.texture,h.mapping)}else return null}}return h}function s(h){if(h&&h.isTexture){const m=h.mapping,_=m===as||m===rs,y=m===_i||m===Ji;if(_||y){let p=t.get(h);const d=p!==void 0?p.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==d)return n===null&&(n=new hc(i)),p=_?n.fromEquirectangular(h,p):n.fromCubemap(h,p),p.texture.pmremVersion=h.pmremVersion,t.set(h,p),p.texture;if(p!==void 0)return p.texture;{const b=h.image;return _&&b&&b.height>0||y&&b&&c(b)?(n===null&&(n=new hc(i)),p=_?n.fromEquirectangular(h):n.fromCubemap(h),p.texture.pmremVersion=h.pmremVersion,t.set(h,p),h.addEventListener("dispose",u),p.texture):null}}}return h}function o(h,m){return m===as?h.mapping=_i:m===rs&&(h.mapping=Ji),h}function c(h){let m=0;const _=6;for(let y=0;y<_;y++)h[y]!==void 0&&m++;return m===_}function l(h){const m=h.target;m.removeEventListener("dispose",l);const _=e.get(m);_!==void 0&&(e.delete(m),_.dispose())}function u(h){const m=h.target;m.removeEventListener("dispose",u);const _=t.get(m);_!==void 0&&(t.delete(m),_.dispose())}function f(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:a,dispose:f}}function vm(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const a=i.getExtension(n);return e[n]=a,a}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const a=t(n);return a===null&&qi("WebGLRenderer: "+n+" extension not supported."),a}}}function xm(i,e,t,n){const a={},r=new WeakMap;function s(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);h.removeEventListener("dispose",s),delete a[h.id];const m=r.get(h);m&&(e.remove(m),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(f,h){return a[h.id]===!0||(h.addEventListener("dispose",s),a[h.id]=!0,t.memory.geometries++),h}function c(f){const h=f.attributes;for(const m in h)e.update(h[m],i.ARRAY_BUFFER)}function l(f){const h=[],m=f.index,_=f.attributes.position;let y=0;if(_===void 0)return;if(m!==null){const b=m.array;y=m.version;for(let R=0,M=b.length;R<M;R+=3){const w=b[R+0],E=b[R+1],C=b[R+2];h.push(w,E,E,C,C,w)}}else{const b=_.array;y=_.version;for(let R=0,M=b.length/3-1;R<M;R+=3){const w=R+0,E=R+1,C=R+2;h.push(w,E,E,C,C,w)}}const p=new(_.count>=65535?dh:uh)(h,1);p.version=y;const d=r.get(f);d&&e.remove(d),r.set(f,p)}function u(f){const h=r.get(f);if(h){const m=f.index;m!==null&&h.version<m.version&&l(f)}else l(f);return r.get(f)}return{get:o,update:c,getWireframeAttribute:u}}function Mm(i,e,t){let n;function a(f){n=f}let r,s;function o(f){r=f.type,s=f.bytesPerElement}function c(f,h){i.drawElements(n,h,r,f*s),t.update(h,n,1)}function l(f,h,m){m!==0&&(i.drawElementsInstanced(n,h,r,f*s,m),t.update(h,n,m))}function u(f,h,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,r,f,0,m);let y=0;for(let p=0;p<m;p++)y+=h[p];t.update(y,n,1)}this.setMode=a,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function ym(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,s,o){switch(t.calls++,s){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:$e("WebGLInfo: Unknown draw mode:",s);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:n}}function Sm(i,e,t){const n=new WeakMap,a=new pt;function r(s,o,c){const l=s.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0;let h=n.get(o);if(h===void 0||h.count!==f){let U=function(){v.dispose(),n.delete(o),o.removeEventListener("dispose",U)};var m=U;h!==void 0&&h.texture.dispose();const _=o.morphAttributes.position!==void 0,y=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,d=o.morphAttributes.position||[],b=o.morphAttributes.normal||[],R=o.morphAttributes.color||[];let M=0;_===!0&&(M=1),y===!0&&(M=2),p===!0&&(M=3);let w=o.attributes.position.count*M,E=1;w>e.maxTextureSize&&(E=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const C=new Float32Array(w*E*4*f),v=new lh(C,w,E,f);v.type=Mn,v.needsUpdate=!0;const T=M*4;for(let D=0;D<f;D++){const k=d[D],$=b[D],Q=R[D],z=w*E*4*D;for(let Z=0;Z<k.count;Z++){const W=Z*T;_===!0&&(a.fromBufferAttribute(k,Z),C[z+W+0]=a.x,C[z+W+1]=a.y,C[z+W+2]=a.z,C[z+W+3]=0),y===!0&&(a.fromBufferAttribute($,Z),C[z+W+4]=a.x,C[z+W+5]=a.y,C[z+W+6]=a.z,C[z+W+7]=0),p===!0&&(a.fromBufferAttribute(Q,Z),C[z+W+8]=a.x,C[z+W+9]=a.y,C[z+W+10]=a.z,C[z+W+11]=Q.itemSize===4?a.w:1)}}h={count:f,texture:v,size:new Le(w,E)},n.set(o,h),o.addEventListener("dispose",U)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",s.morphTexture,t);else{let _=0;for(let p=0;p<l.length;p++)_+=l[p];const y=o.morphTargetsRelative?1:1-_;c.getUniforms().setValue(i,"morphTargetBaseInfluence",y),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",h.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function bm(i,e,t,n,a){let r=new WeakMap;function s(l){const u=a.render.frame,f=l.geometry,h=e.get(l,f);if(r.get(h)!==u&&(e.update(h),r.set(h,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==u&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const m=l.skeleton;r.get(m)!==u&&(m.update(),r.set(m,u))}return h}function o(){r=new WeakMap}function c(l){const u=l.target;u.removeEventListener("dispose",c),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:s,dispose:o}}const Em={[Xc]:"LINEAR_TONE_MAPPING",[Yc]:"REINHARD_TONE_MAPPING",[qc]:"CINEON_TONE_MAPPING",[Kc]:"ACES_FILMIC_TONE_MAPPING",[Zc]:"AGX_TONE_MAPPING",[Jc]:"NEUTRAL_TONE_MAPPING",[$c]:"CUSTOM_TONE_MAPPING"};function Tm(i,e,t,n,a,r){const s=new bn(e,t,{type:i,depthBuffer:a,stencilBuffer:r,samples:n?4:0,depthTexture:a?new ji(e,t):void 0}),o=new bn(e,t,{type:Fn,depthBuffer:!1,stencilBuffer:!1}),c=new dt;c.setAttribute("position",new Nt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Nt([0,2,0,0,2,0],2));const l=new pd({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new Xt(c,l),f=new Mh(-1,1,1,-1,0,1);let h=null,m=null,_=!1,y,p=null,d=[],b=!1;this.setSize=function(R,M){s.setSize(R,M),o.setSize(R,M);for(let w=0;w<d.length;w++){const E=d[w];E.setSize&&E.setSize(R,M)}},this.setEffects=function(R){d=R,b=d.length>0&&d[0].isRenderPass===!0;const M=s.width,w=s.height;for(let E=0;E<d.length;E++){const C=d[E];C.setSize&&C.setSize(M,w)}},this.begin=function(R,M){if(_||R.toneMapping===Sn&&d.length===0)return!1;if(p=M,M!==null){const w=M.width,E=M.height;(s.width!==w||s.height!==E)&&this.setSize(w,E)}return b===!1&&R.setRenderTarget(s),y=R.toneMapping,R.toneMapping=Sn,!0},this.hasRenderPass=function(){return b},this.end=function(R,M){R.toneMapping=y,_=!0;let w=s,E=o;for(let C=0;C<d.length;C++){const v=d[C];if(v.enabled!==!1&&(v.render(R,E,w,M),v.needsSwap!==!1)){const T=w;w=E,E=T}}if(h!==R.outputColorSpace||m!==R.toneMapping){h=R.outputColorSpace,m=R.toneMapping,l.defines={},Ke.getTransfer(h)===et&&(l.defines.SRGB_TRANSFER="");const C=Em[m];C&&(l.defines[C]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=w.texture,R.setRenderTarget(p),R.render(u,f),p=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){s.depthTexture&&s.depthTexture.dispose(),s.dispose(),o.dispose(),c.dispose(),l.dispose()}}const Eh=new Ut,No=new ji(1,1),Th=new lh,wh=new Vu,Ah=new gh,pc=[],mc=[],gc=new Float32Array(16),_c=new Float32Array(9),vc=new Float32Array(4);function ia(i,e,t){const n=i[0];if(n<=0||n>0)return i;const a=e*t;let r=pc[a];if(r===void 0&&(r=new Float32Array(a),pc[a]=r),e!==0){n.toArray(r,0);for(let s=1,o=0;s!==e;++s)o+=t,i[s].toArray(r,o)}return r}function Rt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Ct(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Zr(i,e){let t=mc[e];t===void 0&&(t=new Int32Array(e),mc[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function wm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Am(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;i.uniform2fv(this.addr,e),Ct(t,e)}}function Rm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Rt(t,e))return;i.uniform3fv(this.addr,e),Ct(t,e)}}function Cm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;i.uniform4fv(this.addr,e),Ct(t,e)}}function Pm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Rt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Ct(t,e)}else{if(Rt(t,n))return;vc.set(n),i.uniformMatrix2fv(this.addr,!1,vc),Ct(t,n)}}function Lm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Rt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Ct(t,e)}else{if(Rt(t,n))return;_c.set(n),i.uniformMatrix3fv(this.addr,!1,_c),Ct(t,n)}}function Dm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Rt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Ct(t,e)}else{if(Rt(t,n))return;gc.set(n),i.uniformMatrix4fv(this.addr,!1,gc),Ct(t,n)}}function Im(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Um(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;i.uniform2iv(this.addr,e),Ct(t,e)}}function Nm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Rt(t,e))return;i.uniform3iv(this.addr,e),Ct(t,e)}}function Fm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;i.uniform4iv(this.addr,e),Ct(t,e)}}function Om(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Bm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;i.uniform2uiv(this.addr,e),Ct(t,e)}}function km(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Rt(t,e))return;i.uniform3uiv(this.addr,e),Ct(t,e)}}function zm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;i.uniform4uiv(this.addr,e),Ct(t,e)}}function Vm(i,e,t){const n=this.cache,a=t.allocateTextureUnit();n[0]!==a&&(i.uniform1i(this.addr,a),n[0]=a);let r;this.type===i.SAMPLER_2D_SHADOW?(No.compareFunction=t.isReversedDepthBuffer()?$o:Ko,r=No):r=Eh,t.setTexture2D(e||r,a)}function Gm(i,e,t){const n=this.cache,a=t.allocateTextureUnit();n[0]!==a&&(i.uniform1i(this.addr,a),n[0]=a),t.setTexture3D(e||wh,a)}function Hm(i,e,t){const n=this.cache,a=t.allocateTextureUnit();n[0]!==a&&(i.uniform1i(this.addr,a),n[0]=a),t.setTextureCube(e||Ah,a)}function Wm(i,e,t){const n=this.cache,a=t.allocateTextureUnit();n[0]!==a&&(i.uniform1i(this.addr,a),n[0]=a),t.setTexture2DArray(e||Th,a)}function Xm(i){switch(i){case 5126:return wm;case 35664:return Am;case 35665:return Rm;case 35666:return Cm;case 35674:return Pm;case 35675:return Lm;case 35676:return Dm;case 5124:case 35670:return Im;case 35667:case 35671:return Um;case 35668:case 35672:return Nm;case 35669:case 35673:return Fm;case 5125:return Om;case 36294:return Bm;case 36295:return km;case 36296:return zm;case 35678:case 36198:case 36298:case 36306:case 35682:return Vm;case 35679:case 36299:case 36307:return Gm;case 35680:case 36300:case 36308:case 36293:return Hm;case 36289:case 36303:case 36311:case 36292:return Wm}}function Ym(i,e){i.uniform1fv(this.addr,e)}function qm(i,e){const t=ia(e,this.size,2);i.uniform2fv(this.addr,t)}function Km(i,e){const t=ia(e,this.size,3);i.uniform3fv(this.addr,t)}function $m(i,e){const t=ia(e,this.size,4);i.uniform4fv(this.addr,t)}function Zm(i,e){const t=ia(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Jm(i,e){const t=ia(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Qm(i,e){const t=ia(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function jm(i,e){i.uniform1iv(this.addr,e)}function e0(i,e){i.uniform2iv(this.addr,e)}function t0(i,e){i.uniform3iv(this.addr,e)}function n0(i,e){i.uniform4iv(this.addr,e)}function i0(i,e){i.uniform1uiv(this.addr,e)}function a0(i,e){i.uniform2uiv(this.addr,e)}function r0(i,e){i.uniform3uiv(this.addr,e)}function s0(i,e){i.uniform4uiv(this.addr,e)}function o0(i,e,t){const n=this.cache,a=e.length,r=Zr(t,a);Rt(n,r)||(i.uniform1iv(this.addr,r),Ct(n,r));let s;this.type===i.SAMPLER_2D_SHADOW?s=No:s=Eh;for(let o=0;o!==a;++o)t.setTexture2D(e[o]||s,r[o])}function l0(i,e,t){const n=this.cache,a=e.length,r=Zr(t,a);Rt(n,r)||(i.uniform1iv(this.addr,r),Ct(n,r));for(let s=0;s!==a;++s)t.setTexture3D(e[s]||wh,r[s])}function c0(i,e,t){const n=this.cache,a=e.length,r=Zr(t,a);Rt(n,r)||(i.uniform1iv(this.addr,r),Ct(n,r));for(let s=0;s!==a;++s)t.setTextureCube(e[s]||Ah,r[s])}function h0(i,e,t){const n=this.cache,a=e.length,r=Zr(t,a);Rt(n,r)||(i.uniform1iv(this.addr,r),Ct(n,r));for(let s=0;s!==a;++s)t.setTexture2DArray(e[s]||Th,r[s])}function u0(i){switch(i){case 5126:return Ym;case 35664:return qm;case 35665:return Km;case 35666:return $m;case 35674:return Zm;case 35675:return Jm;case 35676:return Qm;case 5124:case 35670:return jm;case 35667:case 35671:return e0;case 35668:case 35672:return t0;case 35669:case 35673:return n0;case 5125:return i0;case 36294:return a0;case 36295:return r0;case 36296:return s0;case 35678:case 36198:case 36298:case 36306:case 35682:return o0;case 35679:case 36299:case 36307:return l0;case 35680:case 36300:case 36308:case 36293:return c0;case 36289:case 36303:case 36311:case 36292:return h0}}class d0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Xm(t.type)}}class f0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=u0(t.type)}}class p0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const a=this.seq;for(let r=0,s=a.length;r!==s;++r){const o=a[r];o.setValue(e,t[o.id],n)}}}const Os=/(\w+)(\])?(\[|\.)?/g;function xc(i,e){i.seq.push(e),i.map[e.id]=e}function m0(i,e,t){const n=i.name,a=n.length;for(Os.lastIndex=0;;){const r=Os.exec(n),s=Os.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&s+2===a){xc(t,l===void 0?new d0(o,i,e):new f0(o,i,e));break}else{let f=t.map[o];f===void 0&&(f=new p0(o),xc(t,f)),t=f}}}class br{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const o=e.getActiveUniform(t,s),c=e.getUniformLocation(t,o.name);m0(o,c,this)}const a=[],r=[];for(const s of this.seq)s.type===e.SAMPLER_2D_SHADOW||s.type===e.SAMPLER_CUBE_SHADOW||s.type===e.SAMPLER_2D_ARRAY_SHADOW?a.push(s):r.push(s);a.length>0&&(this.seq=a.concat(r))}setValue(e,t,n,a){const r=this.map[t];r!==void 0&&r.setValue(e,n,a)}setOptional(e,t,n){const a=t[n];a!==void 0&&this.setValue(e,n,a)}static upload(e,t,n,a){for(let r=0,s=t.length;r!==s;++r){const o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,a)}}static seqWithValue(e,t){const n=[];for(let a=0,r=e.length;a!==r;++a){const s=e[a];s.id in t&&n.push(s)}return n}}function Mc(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const g0=37297;let _0=0;function v0(i,e){const t=i.split(`
`),n=[],a=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let s=a;s<r;s++){const o=s+1;n.push(`${o===e?">":" "} ${o}: ${t[s]}`)}return n.join(`
`)}const yc=new Fe;function x0(i){Ke._getMatrix(yc,Ke.workingColorSpace,i);const e=`mat3( ${yc.elements.map(t=>t.toFixed(4))} )`;switch(Ke.getTransfer(i)){case Lr:return[e,"LinearTransferOETF"];case et:return[e,"sRGBTransferOETF"];default:return Ce("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Sc(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+v0(i.getShaderSource(e),o)}else return r}function M0(i,e){const t=x0(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const y0={[Xc]:"Linear",[Yc]:"Reinhard",[qc]:"Cineon",[Kc]:"ACESFilmic",[Zc]:"AgX",[Jc]:"Neutral",[$c]:"Custom"};function S0(i,e){const t=y0[e];return t===void 0?(Ce("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const hr=new P;function b0(){Ke.getLuminanceCoefficients(hr);const i=hr.x.toFixed(4),e=hr.y.toFixed(4),t=hr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function E0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ma).join(`
`)}function T0(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function w0(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let a=0;a<n;a++){const r=i.getActiveAttrib(e,a),s=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[s]={type:r.type,location:i.getAttribLocation(e,s),locationSize:o}}return t}function Ma(i){return i!==""}function bc(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ec(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const A0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Fo(i){return i.replace(A0,C0)}const R0=new Map;function C0(i,e){let t=Ve[e];if(t===void 0){const n=R0.get(e);if(n!==void 0)t=Ve[n],Ce('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Fo(t)}const P0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Tc(i){return i.replace(P0,L0)}function L0(i,e,t,n){let a="";for(let r=parseInt(e);r<parseInt(t);r++)a+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return a}function wc(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const D0={[_r]:"SHADOWMAP_TYPE_PCF",[va]:"SHADOWMAP_TYPE_VSM"};function I0(i){return D0[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const U0={[_i]:"ENVMAP_TYPE_CUBE",[Ji]:"ENVMAP_TYPE_CUBE",[Yr]:"ENVMAP_TYPE_CUBE_UV"};function N0(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":U0[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const F0={[Ji]:"ENVMAP_MODE_REFRACTION"};function O0(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":F0[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const B0={[Wc]:"ENVMAP_BLENDING_MULTIPLY",[xu]:"ENVMAP_BLENDING_MIX",[Mu]:"ENVMAP_BLENDING_ADD"};function k0(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":B0[i.combine]||"ENVMAP_BLENDING_NONE"}function z0(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function V0(i,e,t,n){const a=i.getContext(),r=t.defines;let s=t.vertexShader,o=t.fragmentShader;const c=I0(t),l=N0(t),u=O0(t),f=k0(t),h=z0(t),m=E0(t),_=T0(r),y=a.createProgram();let p,d,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Ma).join(`
`),p.length>0&&(p+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Ma).join(`
`),d.length>0&&(d+=`
`)):(p=[wc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ma).join(`
`),d=[wc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Sn?"#define TONE_MAPPING":"",t.toneMapping!==Sn?Ve.tonemapping_pars_fragment:"",t.toneMapping!==Sn?S0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ve.colorspace_pars_fragment,M0("linearToOutputTexel",t.outputColorSpace),b0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ma).join(`
`)),s=Fo(s),s=bc(s,t),s=Ec(s,t),o=Fo(o),o=bc(o,t),o=Ec(o,t),s=Tc(s),o=Tc(o),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,d=["#define varying in",t.glslVersion===Pl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Pl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const R=b+p+s,M=b+d+o,w=Mc(a,a.VERTEX_SHADER,R),E=Mc(a,a.FRAGMENT_SHADER,M);a.attachShader(y,w),a.attachShader(y,E),t.index0AttributeName!==void 0?a.bindAttribLocation(y,0,t.index0AttributeName):t.hasPositionAttribute===!0&&a.bindAttribLocation(y,0,"position"),a.linkProgram(y);function C(D){if(i.debug.checkShaderErrors){const k=a.getProgramInfoLog(y)||"",$=a.getShaderInfoLog(w)||"",Q=a.getShaderInfoLog(E)||"",z=k.trim(),Z=$.trim(),W=Q.trim();let j=!0,ne=!0;if(a.getProgramParameter(y,a.LINK_STATUS)===!1)if(j=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(a,y,w,E);else{const ue=Sc(a,w,"vertex"),ce=Sc(a,E,"fragment");$e("WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(y,a.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+z+`
`+ue+`
`+ce)}else z!==""?Ce("WebGLProgram: Program Info Log:",z):(Z===""||W==="")&&(ne=!1);ne&&(D.diagnostics={runnable:j,programLog:z,vertexShader:{log:Z,prefix:p},fragmentShader:{log:W,prefix:d}})}a.deleteShader(w),a.deleteShader(E),v=new br(a,y),T=w0(a,y)}let v;this.getUniforms=function(){return v===void 0&&C(this),v};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let U=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=a.getProgramParameter(y,g0)),U},this.destroy=function(){n.releaseStatesOfProgram(this),a.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=_0++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=w,this.fragmentShader=E,this}let G0=0;class H0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const a=this._getShaderCacheForMaterial(e);return a.has(t)===!1&&(a.add(t),t.usedTimes++),a.has(n)===!1&&(a.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new W0(e),t.set(e,n)),n}}class W0{constructor(e){this.id=G0++,this.code=e,this.usedTimes=0}}function X0(i){return i===vi||i===Rr||i===Cr}function Y0(i,e,t,n,a,r){const s=new ch,o=new H0,c=new Set,l=[],u=new Map,f=n.logarithmicDepthBuffer;let h=n.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(v){return c.add(v),v===0?"uv":`uv${v}`}function y(v,T,U,D,k,$){const Q=D.fog,z=k.geometry,Z=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?D.environment:null,W=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,j=e.get(v.envMap||Z,W),ne=j&&j.mapping===Yr?j.image.height:null,ue=m[v.type];v.precision!==null&&(h=n.getMaxPrecision(v.precision),h!==v.precision&&Ce("WebGLProgram.getParameters:",v.precision,"not supported, using",h,"instead."));const ce=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,ve=ce!==void 0?ce.length:0;let Ze=0;z.morphAttributes.position!==void 0&&(Ze=1),z.morphAttributes.normal!==void 0&&(Ze=2),z.morphAttributes.color!==void 0&&(Ze=3);let ct,Je,q,oe;if(ue){const Me=_n[ue];ct=Me.vertexShader,Je=Me.fragmentShader}else{ct=v.vertexShader,Je=v.fragmentShader;const Me=o.getVertexShaderStage(v),gt=o.getFragmentShaderStage(v);o.update(v,Me,gt),q=Me.id,oe=gt.id}const ie=i.getRenderTarget(),Pe=i.state.buffers.depth.getReversed(),Ue=k.isInstancedMesh===!0,Re=k.isBatchedMesh===!0,tt=!!v.map,He=!!v.matcap,be=!!j,We=!!v.aoMap,Xe=!!v.lightMap,ft=!!v.bumpMap&&v.wireframe===!1,xt=!!v.normalMap,bt=!!v.displacementMap,Mt=!!v.emissiveMap,ht=!!v.metalnessMap,Oe=!!v.roughnessMap,L=v.anisotropy>0,Lt=v.clearcoat>0,je=v.dispersion>0,S=v.iridescence>0,g=v.sheen>0,O=v.transmission>0,B=L&&!!v.anisotropyMap,A=Lt&&!!v.clearcoatMap,V=Lt&&!!v.clearcoatNormalMap,K=Lt&&!!v.clearcoatRoughnessMap,F=S&&!!v.iridescenceMap,Y=S&&!!v.iridescenceThicknessMap,te=g&&!!v.sheenColorMap,de=g&&!!v.sheenRoughnessMap,ae=!!v.specularMap,re=!!v.specularColorMap,Se=!!v.specularIntensityMap,Ae=O&&!!v.transmissionMap,Ne=O&&!!v.thicknessMap,I=!!v.gradientMap,le=!!v.alphaMap,J=v.alphaTest>0,he=!!v.alphaHash,ge=!!v.extensions;let ee=Sn;v.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(ee=i.toneMapping);const Ee={shaderID:ue,shaderType:v.type,shaderName:v.name,vertexShader:ct,fragmentShader:Je,defines:v.defines,customVertexShaderID:q,customFragmentShaderID:oe,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:h,batching:Re,batchingColor:Re&&k._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&k.instanceColor!==null,instancingMorph:Ue&&k.morphTexture!==null,outputColorSpace:ie===null?i.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:Ke.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:tt,matcap:He,envMap:be,envMapMode:be&&j.mapping,envMapCubeUVHeight:ne,aoMap:We,lightMap:Xe,bumpMap:ft,normalMap:xt,displacementMap:bt,emissiveMap:Mt,normalMapObjectSpace:xt&&v.normalMapType===bu,normalMapTangentSpace:xt&&v.normalMapType===Rl,packedNormalMap:xt&&v.normalMapType===Rl&&X0(v.normalMap.format),metalnessMap:ht,roughnessMap:Oe,anisotropy:L,anisotropyMap:B,clearcoat:Lt,clearcoatMap:A,clearcoatNormalMap:V,clearcoatRoughnessMap:K,dispersion:je,iridescence:S,iridescenceMap:F,iridescenceThicknessMap:Y,sheen:g,sheenColorMap:te,sheenRoughnessMap:de,specularMap:ae,specularColorMap:re,specularIntensityMap:Se,transmission:O,transmissionMap:Ae,thicknessMap:Ne,gradientMap:I,opaque:v.transparent===!1&&v.blending===Yi&&v.alphaToCoverage===!1,alphaMap:le,alphaTest:J,alphaHash:he,combine:v.combine,mapUv:tt&&_(v.map.channel),aoMapUv:We&&_(v.aoMap.channel),lightMapUv:Xe&&_(v.lightMap.channel),bumpMapUv:ft&&_(v.bumpMap.channel),normalMapUv:xt&&_(v.normalMap.channel),displacementMapUv:bt&&_(v.displacementMap.channel),emissiveMapUv:Mt&&_(v.emissiveMap.channel),metalnessMapUv:ht&&_(v.metalnessMap.channel),roughnessMapUv:Oe&&_(v.roughnessMap.channel),anisotropyMapUv:B&&_(v.anisotropyMap.channel),clearcoatMapUv:A&&_(v.clearcoatMap.channel),clearcoatNormalMapUv:V&&_(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:K&&_(v.clearcoatRoughnessMap.channel),iridescenceMapUv:F&&_(v.iridescenceMap.channel),iridescenceThicknessMapUv:Y&&_(v.iridescenceThicknessMap.channel),sheenColorMapUv:te&&_(v.sheenColorMap.channel),sheenRoughnessMapUv:de&&_(v.sheenRoughnessMap.channel),specularMapUv:ae&&_(v.specularMap.channel),specularColorMapUv:re&&_(v.specularColorMap.channel),specularIntensityMapUv:Se&&_(v.specularIntensityMap.channel),transmissionMapUv:Ae&&_(v.transmissionMap.channel),thicknessMapUv:Ne&&_(v.thicknessMap.channel),alphaMapUv:le&&_(v.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(xt||L),vertexNormals:!!z.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!z.attributes.uv&&(tt||le),fog:!!Q,useFog:v.fog===!0,fogExp2:!!Q&&Q.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||z.attributes.normal===void 0&&xt===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:Pe,skinning:k.isSkinnedMesh===!0,hasPositionAttribute:z.attributes.position!==void 0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:ve,morphTextureStride:Ze,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:$.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&U.length>0,shadowMapType:i.shadowMap.type,toneMapping:ee,decodeVideoTexture:tt&&v.map.isVideoTexture===!0&&Ke.getTransfer(v.map.colorSpace)===et,decodeVideoTextureEmissive:Mt&&v.emissiveMap.isVideoTexture===!0&&Ke.getTransfer(v.emissiveMap.colorSpace)===et,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Pn,flipSided:v.side===Wt,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:ge&&v.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ge&&v.extensions.multiDraw===!0||Re)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Ee.vertexUv1s=c.has(1),Ee.vertexUv2s=c.has(2),Ee.vertexUv3s=c.has(3),c.clear(),Ee}function p(v){const T=[];if(v.shaderID?T.push(v.shaderID):(T.push(v.customVertexShaderID),T.push(v.customFragmentShaderID)),v.defines!==void 0)for(const U in v.defines)T.push(U),T.push(v.defines[U]);return v.isRawShaderMaterial===!1&&(d(T,v),b(T,v),T.push(i.outputColorSpace)),T.push(v.customProgramCacheKey),T.join()}function d(v,T){v.push(T.precision),v.push(T.outputColorSpace),v.push(T.envMapMode),v.push(T.envMapCubeUVHeight),v.push(T.mapUv),v.push(T.alphaMapUv),v.push(T.lightMapUv),v.push(T.aoMapUv),v.push(T.bumpMapUv),v.push(T.normalMapUv),v.push(T.displacementMapUv),v.push(T.emissiveMapUv),v.push(T.metalnessMapUv),v.push(T.roughnessMapUv),v.push(T.anisotropyMapUv),v.push(T.clearcoatMapUv),v.push(T.clearcoatNormalMapUv),v.push(T.clearcoatRoughnessMapUv),v.push(T.iridescenceMapUv),v.push(T.iridescenceThicknessMapUv),v.push(T.sheenColorMapUv),v.push(T.sheenRoughnessMapUv),v.push(T.specularMapUv),v.push(T.specularColorMapUv),v.push(T.specularIntensityMapUv),v.push(T.transmissionMapUv),v.push(T.thicknessMapUv),v.push(T.combine),v.push(T.fogExp2),v.push(T.sizeAttenuation),v.push(T.morphTargetsCount),v.push(T.morphAttributeCount),v.push(T.numDirLights),v.push(T.numPointLights),v.push(T.numSpotLights),v.push(T.numSpotLightMaps),v.push(T.numHemiLights),v.push(T.numRectAreaLights),v.push(T.numDirLightShadows),v.push(T.numPointLightShadows),v.push(T.numSpotLightShadows),v.push(T.numSpotLightShadowsWithMaps),v.push(T.numLightProbes),v.push(T.shadowMapType),v.push(T.toneMapping),v.push(T.numClippingPlanes),v.push(T.numClipIntersection),v.push(T.depthPacking)}function b(v,T){s.disableAll(),T.instancing&&s.enable(0),T.instancingColor&&s.enable(1),T.instancingMorph&&s.enable(2),T.matcap&&s.enable(3),T.envMap&&s.enable(4),T.normalMapObjectSpace&&s.enable(5),T.normalMapTangentSpace&&s.enable(6),T.clearcoat&&s.enable(7),T.iridescence&&s.enable(8),T.alphaTest&&s.enable(9),T.vertexColors&&s.enable(10),T.vertexAlphas&&s.enable(11),T.vertexUv1s&&s.enable(12),T.vertexUv2s&&s.enable(13),T.vertexUv3s&&s.enable(14),T.vertexTangents&&s.enable(15),T.anisotropy&&s.enable(16),T.alphaHash&&s.enable(17),T.batching&&s.enable(18),T.dispersion&&s.enable(19),T.batchingColor&&s.enable(20),T.gradientMap&&s.enable(21),T.packedNormalMap&&s.enable(22),T.vertexNormals&&s.enable(23),v.push(s.mask),s.disableAll(),T.fog&&s.enable(0),T.useFog&&s.enable(1),T.flatShading&&s.enable(2),T.logarithmicDepthBuffer&&s.enable(3),T.reversedDepthBuffer&&s.enable(4),T.skinning&&s.enable(5),T.morphTargets&&s.enable(6),T.morphNormals&&s.enable(7),T.morphColors&&s.enable(8),T.premultipliedAlpha&&s.enable(9),T.shadowMapEnabled&&s.enable(10),T.doubleSided&&s.enable(11),T.flipSided&&s.enable(12),T.useDepthPacking&&s.enable(13),T.dithering&&s.enable(14),T.transmission&&s.enable(15),T.sheen&&s.enable(16),T.opaque&&s.enable(17),T.pointsUvs&&s.enable(18),T.decodeVideoTexture&&s.enable(19),T.decodeVideoTextureEmissive&&s.enable(20),T.alphaToCoverage&&s.enable(21),T.numLightProbeGrids>0&&s.enable(22),T.hasPositionAttribute&&s.enable(23),v.push(s.mask)}function R(v){const T=m[v.type];let U;if(T){const D=_n[T];U=ud.clone(D.uniforms)}else U=v.uniforms;return U}function M(v,T){let U=u.get(T);return U!==void 0?++U.usedTimes:(U=new V0(i,T,v,a),l.push(U),u.set(T,U)),U}function w(v){if(--v.usedTimes===0){const T=l.indexOf(v);l[T]=l[l.length-1],l.pop(),u.delete(v.cacheKey),v.destroy()}}function E(v){o.remove(v)}function C(){o.dispose()}return{getParameters:y,getProgramCacheKey:p,getUniforms:R,acquireProgram:M,releaseProgram:w,releaseShaderCache:E,programs:l,dispose:C}}function q0(){let i=new WeakMap;function e(s){return i.has(s)}function t(s){let o=i.get(s);return o===void 0&&(o={},i.set(s,o)),o}function n(s){i.delete(s)}function a(s,o,c){i.get(s)[o]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:a,dispose:r}}function K0(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Ac(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Rc(){const i=[];let e=0;const t=[],n=[],a=[];function r(){e=0,t.length=0,n.length=0,a.length=0}function s(h){let m=0;return h.isInstancedMesh&&(m+=2),h.isSkinnedMesh&&(m+=1),m}function o(h,m,_,y,p,d){let b=i[e];return b===void 0?(b={id:h.id,object:h,geometry:m,material:_,materialVariant:s(h),groupOrder:y,renderOrder:h.renderOrder,z:p,group:d},i[e]=b):(b.id=h.id,b.object=h,b.geometry=m,b.material=_,b.materialVariant=s(h),b.groupOrder=y,b.renderOrder=h.renderOrder,b.z=p,b.group=d),e++,b}function c(h,m,_,y,p,d){const b=o(h,m,_,y,p,d);_.transmission>0?n.push(b):_.transparent===!0?a.push(b):t.push(b)}function l(h,m,_,y,p,d){const b=o(h,m,_,y,p,d);_.transmission>0?n.unshift(b):_.transparent===!0?a.unshift(b):t.unshift(b)}function u(h,m,_){t.length>1&&t.sort(h||K0),n.length>1&&n.sort(m||Ac),a.length>1&&a.sort(m||Ac),_&&(t.reverse(),n.reverse(),a.reverse())}function f(){for(let h=e,m=i.length;h<m;h++){const _=i[h];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:n,transparent:a,init:r,push:c,unshift:l,finish:f,sort:u}}function $0(){let i=new WeakMap;function e(n,a){const r=i.get(n);let s;return r===void 0?(s=new Rc,i.set(n,[s])):a>=r.length?(s=new Rc,r.push(s)):s=r[a],s}function t(){i=new WeakMap}return{get:e,dispose:t}}function Z0(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new qe};break;case"SpotLight":t={position:new P,direction:new P,color:new qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new qe,groundColor:new qe};break;case"RectAreaLight":t={color:new qe,position:new P,halfWidth:new P,halfHeight:new P};break}return i[e.id]=t,t}}}function J0(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Q0=0;function j0(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function eg(i){const e=new Z0,t=J0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new P);const a=new P,r=new mt,s=new mt;function o(l){let u=0,f=0,h=0;for(let T=0;T<9;T++)n.probe[T].set(0,0,0);let m=0,_=0,y=0,p=0,d=0,b=0,R=0,M=0,w=0,E=0,C=0;l.sort(j0);for(let T=0,U=l.length;T<U;T++){const D=l[T],k=D.color,$=D.intensity,Q=D.distance;let z=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===vi?z=D.shadow.map.texture:z=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)u+=k.r*$,f+=k.g*$,h+=k.b*$;else if(D.isLightProbe){for(let Z=0;Z<9;Z++)n.probe[Z].addScaledVector(D.sh.coefficients[Z],$);C++}else if(D.isDirectionalLight){const Z=e.get(D);if(Z.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const W=D.shadow,j=t.get(D);j.shadowIntensity=W.intensity,j.shadowBias=W.bias,j.shadowNormalBias=W.normalBias,j.shadowRadius=W.radius,j.shadowMapSize=W.mapSize,n.directionalShadow[m]=j,n.directionalShadowMap[m]=z,n.directionalShadowMatrix[m]=D.shadow.matrix,b++}n.directional[m]=Z,m++}else if(D.isSpotLight){const Z=e.get(D);Z.position.setFromMatrixPosition(D.matrixWorld),Z.color.copy(k).multiplyScalar($),Z.distance=Q,Z.coneCos=Math.cos(D.angle),Z.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),Z.decay=D.decay,n.spot[y]=Z;const W=D.shadow;if(D.map&&(n.spotLightMap[w]=D.map,w++,W.updateMatrices(D),D.castShadow&&E++),n.spotLightMatrix[y]=W.matrix,D.castShadow){const j=t.get(D);j.shadowIntensity=W.intensity,j.shadowBias=W.bias,j.shadowNormalBias=W.normalBias,j.shadowRadius=W.radius,j.shadowMapSize=W.mapSize,n.spotShadow[y]=j,n.spotShadowMap[y]=z,M++}y++}else if(D.isRectAreaLight){const Z=e.get(D);Z.color.copy(k).multiplyScalar($),Z.halfWidth.set(D.width*.5,0,0),Z.halfHeight.set(0,D.height*.5,0),n.rectArea[p]=Z,p++}else if(D.isPointLight){const Z=e.get(D);if(Z.color.copy(D.color).multiplyScalar(D.intensity),Z.distance=D.distance,Z.decay=D.decay,D.castShadow){const W=D.shadow,j=t.get(D);j.shadowIntensity=W.intensity,j.shadowBias=W.bias,j.shadowNormalBias=W.normalBias,j.shadowRadius=W.radius,j.shadowMapSize=W.mapSize,j.shadowCameraNear=W.camera.near,j.shadowCameraFar=W.camera.far,n.pointShadow[_]=j,n.pointShadowMap[_]=z,n.pointShadowMatrix[_]=D.shadow.matrix,R++}n.point[_]=Z,_++}else if(D.isHemisphereLight){const Z=e.get(D);Z.skyColor.copy(D.color).multiplyScalar($),Z.groundColor.copy(D.groundColor).multiplyScalar($),n.hemi[d]=Z,d++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=fe.LTC_FLOAT_1,n.rectAreaLTC2=fe.LTC_FLOAT_2):(n.rectAreaLTC1=fe.LTC_HALF_1,n.rectAreaLTC2=fe.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=h;const v=n.hash;(v.directionalLength!==m||v.pointLength!==_||v.spotLength!==y||v.rectAreaLength!==p||v.hemiLength!==d||v.numDirectionalShadows!==b||v.numPointShadows!==R||v.numSpotShadows!==M||v.numSpotMaps!==w||v.numLightProbes!==C)&&(n.directional.length=m,n.spot.length=y,n.rectArea.length=p,n.point.length=_,n.hemi.length=d,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=R,n.pointShadowMap.length=R,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=R,n.spotLightMatrix.length=M+w-E,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=C,v.directionalLength=m,v.pointLength=_,v.spotLength=y,v.rectAreaLength=p,v.hemiLength=d,v.numDirectionalShadows=b,v.numPointShadows=R,v.numSpotShadows=M,v.numSpotMaps=w,v.numLightProbes=C,n.version=Q0++)}function c(l,u){let f=0,h=0,m=0,_=0,y=0;const p=u.matrixWorldInverse;for(let d=0,b=l.length;d<b;d++){const R=l[d];if(R.isDirectionalLight){const M=n.directional[f];M.direction.setFromMatrixPosition(R.matrixWorld),a.setFromMatrixPosition(R.target.matrixWorld),M.direction.sub(a),M.direction.transformDirection(p),f++}else if(R.isSpotLight){const M=n.spot[m];M.position.setFromMatrixPosition(R.matrixWorld),M.position.applyMatrix4(p),M.direction.setFromMatrixPosition(R.matrixWorld),a.setFromMatrixPosition(R.target.matrixWorld),M.direction.sub(a),M.direction.transformDirection(p),m++}else if(R.isRectAreaLight){const M=n.rectArea[_];M.position.setFromMatrixPosition(R.matrixWorld),M.position.applyMatrix4(p),s.identity(),r.copy(R.matrixWorld),r.premultiply(p),s.extractRotation(r),M.halfWidth.set(R.width*.5,0,0),M.halfHeight.set(0,R.height*.5,0),M.halfWidth.applyMatrix4(s),M.halfHeight.applyMatrix4(s),_++}else if(R.isPointLight){const M=n.point[h];M.position.setFromMatrixPosition(R.matrixWorld),M.position.applyMatrix4(p),h++}else if(R.isHemisphereLight){const M=n.hemi[y];M.direction.setFromMatrixPosition(R.matrixWorld),M.direction.transformDirection(p),y++}}}return{setup:o,setupView:c,state:n}}function Cc(i){const e=new eg(i),t=[],n=[],a=[];function r(h){f.camera=h,t.length=0,n.length=0,a.length=0}function s(h){t.push(h)}function o(h){n.push(h)}function c(h){a.push(h)}function l(){e.setup(t)}function u(h){e.setupView(t,h)}const f={lightsArray:t,shadowsArray:n,lightProbeGridArray:a,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:l,setupLightsView:u,pushLight:s,pushShadow:o,pushLightProbeGrid:c}}function tg(i){let e=new WeakMap;function t(a,r=0){const s=e.get(a);let o;return s===void 0?(o=new Cc(i),e.set(a,[o])):r>=s.length?(o=new Cc(i),s.push(o)):o=s[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const ng=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ig=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,ag=[new P(1,0,0),new P(-1,0,0),new P(0,1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1)],rg=[new P(0,-1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1),new P(0,-1,0),new P(0,-1,0)],Pc=new mt,fa=new P,Bs=new P;function sg(i,e,t){let n=new mh;const a=new Le,r=new Le,s=new pt,o=new md,c=new gd,l={},u=t.maxTextureSize,f={[Nn]:Wt,[Wt]:Nn,[Pn]:Pn},h=new vt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Le},radius:{value:4}},vertexShader:ng,fragmentShader:ig}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const _=new dt;_.setAttribute("position",new ze(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new Xt(_,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=_r;let d=this.type;this.render=function(E,C,v){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||E.length===0)return;this.type===eu&&(Ce("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=_r);const T=i.getRenderTarget(),U=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),k=i.state;k.setBlending(Dn),k.buffers.depth.getReversed()===!0?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const $=d!==this.type;$&&C.traverse(function(Q){Q.material&&(Array.isArray(Q.material)?Q.material.forEach(z=>z.needsUpdate=!0):Q.material.needsUpdate=!0)});for(let Q=0,z=E.length;Q<z;Q++){const Z=E[Q],W=Z.shadow;if(W===void 0){Ce("WebGLShadowMap:",Z,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;a.copy(W.mapSize);const j=W.getFrameExtents();a.multiply(j),r.copy(W.mapSize),(a.x>u||a.y>u)&&(a.x>u&&(r.x=Math.floor(u/j.x),a.x=r.x*j.x,W.mapSize.x=r.x),a.y>u&&(r.y=Math.floor(u/j.y),a.y=r.y*j.y,W.mapSize.y=r.y));const ne=i.state.buffers.depth.getReversed();if(W.camera._reversedDepth=ne,W.map===null||$===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===va){if(Z.isPointLight){Ce("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new bn(a.x,a.y,{format:vi,type:Fn,minFilter:kt,magFilter:kt,generateMipmaps:!1}),W.map.texture.name=Z.name+".shadowMap",W.map.depthTexture=new ji(a.x,a.y,Mn),W.map.depthTexture.name=Z.name+".shadowMapDepth",W.map.depthTexture.format=On,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=At,W.map.depthTexture.magFilter=At}else Z.isPointLight?(W.map=new bh(a.x),W.map.depthTexture=new cd(a.x,En)):(W.map=new bn(a.x,a.y),W.map.depthTexture=new ji(a.x,a.y,En)),W.map.depthTexture.name=Z.name+".shadowMap",W.map.depthTexture.format=On,this.type===_r?(W.map.depthTexture.compareFunction=ne?$o:Ko,W.map.depthTexture.minFilter=kt,W.map.depthTexture.magFilter=kt):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=At,W.map.depthTexture.magFilter=At);W.camera.updateProjectionMatrix()}const ue=W.map.isWebGLCubeRenderTarget?6:1;for(let ce=0;ce<ue;ce++){if(W.map.isWebGLCubeRenderTarget)i.setRenderTarget(W.map,ce),i.clear();else{ce===0&&(i.setRenderTarget(W.map),i.clear());const ve=W.getViewport(ce);s.set(r.x*ve.x,r.y*ve.y,r.x*ve.z,r.y*ve.w),k.viewport(s)}if(Z.isPointLight){const ve=W.camera,Ze=W.matrix,ct=Z.distance||ve.far;ct!==ve.far&&(ve.far=ct,ve.updateProjectionMatrix()),fa.setFromMatrixPosition(Z.matrixWorld),ve.position.copy(fa),Bs.copy(ve.position),Bs.add(ag[ce]),ve.up.copy(rg[ce]),ve.lookAt(Bs),ve.updateMatrixWorld(),Ze.makeTranslation(-fa.x,-fa.y,-fa.z),Pc.multiplyMatrices(ve.projectionMatrix,ve.matrixWorldInverse),W._frustum.setFromProjectionMatrix(Pc,ve.coordinateSystem,ve.reversedDepth)}else W.updateMatrices(Z);n=W.getFrustum(),M(C,v,W.camera,Z,this.type)}W.isPointLightShadow!==!0&&this.type===va&&b(W,v),W.needsUpdate=!1}d=this.type,p.needsUpdate=!1,i.setRenderTarget(T,U,D)};function b(E,C){const v=e.update(y);h.defines.VSM_SAMPLES!==E.blurSamples&&(h.defines.VSM_SAMPLES=E.blurSamples,m.defines.VSM_SAMPLES=E.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new bn(a.x,a.y,{format:vi,type:Fn})),h.uniforms.shadow_pass.value=E.map.depthTexture,h.uniforms.resolution.value=E.mapSize,h.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(C,null,v,h,y,null),m.uniforms.shadow_pass.value=E.mapPass.texture,m.uniforms.resolution.value=E.mapSize,m.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(C,null,v,m,y,null)}function R(E,C,v,T){let U=null;const D=v.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(D!==void 0)U=D;else if(U=v.isPointLight===!0?c:o,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const k=U.uuid,$=C.uuid;let Q=l[k];Q===void 0&&(Q={},l[k]=Q);let z=Q[$];z===void 0&&(z=U.clone(),Q[$]=z,C.addEventListener("dispose",w)),U=z}if(U.visible=C.visible,U.wireframe=C.wireframe,T===va?U.side=C.shadowSide!==null?C.shadowSide:C.side:U.side=C.shadowSide!==null?C.shadowSide:f[C.side],U.alphaMap=C.alphaMap,U.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,U.map=C.map,U.clipShadows=C.clipShadows,U.clippingPlanes=C.clippingPlanes,U.clipIntersection=C.clipIntersection,U.displacementMap=C.displacementMap,U.displacementScale=C.displacementScale,U.displacementBias=C.displacementBias,U.wireframeLinewidth=C.wireframeLinewidth,U.linewidth=C.linewidth,v.isPointLight===!0&&U.isMeshDistanceMaterial===!0){const k=i.properties.get(U);k.light=v}return U}function M(E,C,v,T,U){if(E.visible===!1)return;if(E.layers.test(C.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&U===va)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,E.matrixWorld);const $=e.update(E),Q=E.material;if(Array.isArray(Q)){const z=$.groups;for(let Z=0,W=z.length;Z<W;Z++){const j=z[Z],ne=Q[j.materialIndex];if(ne&&ne.visible){const ue=R(E,ne,T,U);E.onBeforeShadow(i,E,C,v,$,ue,j),i.renderBufferDirect(v,null,$,ue,E,j),E.onAfterShadow(i,E,C,v,$,ue,j)}}}else if(Q.visible){const z=R(E,Q,T,U);E.onBeforeShadow(i,E,C,v,$,z,null),i.renderBufferDirect(v,null,$,z,E,null),E.onAfterShadow(i,E,C,v,$,z,null)}}const k=E.children;for(let $=0,Q=k.length;$<Q;$++)M(k[$],C,v,T,U)}function w(E){E.target.removeEventListener("dispose",w);for(const v in l){const T=l[v],U=E.target.uuid;U in T&&(T[U].dispose(),delete T[U])}}}function og(i,e){function t(){let I=!1;const le=new pt;let J=null;const he=new pt(0,0,0,0);return{setMask:function(ge){J!==ge&&!I&&(i.colorMask(ge,ge,ge,ge),J=ge)},setLocked:function(ge){I=ge},setClear:function(ge,ee,Ee,Me,gt){gt===!0&&(ge*=Me,ee*=Me,Ee*=Me),le.set(ge,ee,Ee,Me),he.equals(le)===!1&&(i.clearColor(ge,ee,Ee,Me),he.copy(le))},reset:function(){I=!1,J=null,he.set(-1,0,0,0)}}}function n(){let I=!1,le=!1,J=null,he=null,ge=null;return{setReversed:function(ee){if(le!==ee){const Ee=e.get("EXT_clip_control");ee?Ee.clipControlEXT(Ee.LOWER_LEFT_EXT,Ee.ZERO_TO_ONE_EXT):Ee.clipControlEXT(Ee.LOWER_LEFT_EXT,Ee.NEGATIVE_ONE_TO_ONE_EXT),le=ee;const Me=ge;ge=null,this.setClear(Me)}},getReversed:function(){return le},setTest:function(ee){ee?ie(i.DEPTH_TEST):Pe(i.DEPTH_TEST)},setMask:function(ee){J!==ee&&!I&&(i.depthMask(ee),J=ee)},setFunc:function(ee){if(le&&(ee=Iu[ee]),he!==ee){switch(ee){case Ys:i.depthFunc(i.NEVER);break;case qs:i.depthFunc(i.ALWAYS);break;case Ks:i.depthFunc(i.LESS);break;case Zi:i.depthFunc(i.LEQUAL);break;case $s:i.depthFunc(i.EQUAL);break;case Zs:i.depthFunc(i.GEQUAL);break;case Js:i.depthFunc(i.GREATER);break;case Qs:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}he=ee}},setLocked:function(ee){I=ee},setClear:function(ee){ge!==ee&&(ge=ee,le&&(ee=1-ee),i.clearDepth(ee))},reset:function(){I=!1,J=null,he=null,ge=null,le=!1}}}function a(){let I=!1,le=null,J=null,he=null,ge=null,ee=null,Ee=null,Me=null,gt=null;return{setTest:function(ot){I||(ot?ie(i.STENCIL_TEST):Pe(i.STENCIL_TEST))},setMask:function(ot){le!==ot&&!I&&(i.stencilMask(ot),le=ot)},setFunc:function(ot,dn,fn){(J!==ot||he!==dn||ge!==fn)&&(i.stencilFunc(ot,dn,fn),J=ot,he=dn,ge=fn)},setOp:function(ot,dn,fn){(ee!==ot||Ee!==dn||Me!==fn)&&(i.stencilOp(ot,dn,fn),ee=ot,Ee=dn,Me=fn)},setLocked:function(ot){I=ot},setClear:function(ot){gt!==ot&&(i.clearStencil(ot),gt=ot)},reset:function(){I=!1,le=null,J=null,he=null,ge=null,ee=null,Ee=null,Me=null,gt=null}}}const r=new t,s=new n,o=new a,c=new WeakMap,l=new WeakMap;let u={},f={},h={},m=new WeakMap,_=[],y=null,p=!1,d=null,b=null,R=null,M=null,w=null,E=null,C=null,v=new qe(0,0,0),T=0,U=!1,D=null,k=null,$=null,Q=null,z=null;const Z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,j=0;const ne=i.getParameter(i.VERSION);ne.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(ne)[1]),W=j>=1):ne.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(ne)[1]),W=j>=2);let ue=null,ce={};const ve=i.getParameter(i.SCISSOR_BOX),Ze=i.getParameter(i.VIEWPORT),ct=new pt().fromArray(ve),Je=new pt().fromArray(Ze);function q(I,le,J,he){const ge=new Uint8Array(4),ee=i.createTexture();i.bindTexture(I,ee),i.texParameteri(I,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(I,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ee=0;Ee<J;Ee++)I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY?i.texImage3D(le,0,i.RGBA,1,1,he,0,i.RGBA,i.UNSIGNED_BYTE,ge):i.texImage2D(le+Ee,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ge);return ee}const oe={};oe[i.TEXTURE_2D]=q(i.TEXTURE_2D,i.TEXTURE_2D,1),oe[i.TEXTURE_CUBE_MAP]=q(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),oe[i.TEXTURE_2D_ARRAY]=q(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),oe[i.TEXTURE_3D]=q(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),ie(i.DEPTH_TEST),s.setFunc(Zi),ft(!1),xt(Tl),ie(i.CULL_FACE),We(Dn);function ie(I){u[I]!==!0&&(i.enable(I),u[I]=!0)}function Pe(I){u[I]!==!1&&(i.disable(I),u[I]=!1)}function Ue(I,le){return h[I]!==le?(i.bindFramebuffer(I,le),h[I]=le,I===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=le),I===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=le),!0):!1}function Re(I,le){let J=_,he=!1;if(I){J=m.get(le),J===void 0&&(J=[],m.set(le,J));const ge=I.textures;if(J.length!==ge.length||J[0]!==i.COLOR_ATTACHMENT0){for(let ee=0,Ee=ge.length;ee<Ee;ee++)J[ee]=i.COLOR_ATTACHMENT0+ee;J.length=ge.length,he=!0}}else J[0]!==i.BACK&&(J[0]=i.BACK,he=!0);he&&i.drawBuffers(J)}function tt(I){return y!==I?(i.useProgram(I),y=I,!0):!1}const He={[ci]:i.FUNC_ADD,[nu]:i.FUNC_SUBTRACT,[iu]:i.FUNC_REVERSE_SUBTRACT};He[au]=i.MIN,He[ru]=i.MAX;const be={[su]:i.ZERO,[ou]:i.ONE,[lu]:i.SRC_COLOR,[Ws]:i.SRC_ALPHA,[pu]:i.SRC_ALPHA_SATURATE,[du]:i.DST_COLOR,[hu]:i.DST_ALPHA,[cu]:i.ONE_MINUS_SRC_COLOR,[Xs]:i.ONE_MINUS_SRC_ALPHA,[fu]:i.ONE_MINUS_DST_COLOR,[uu]:i.ONE_MINUS_DST_ALPHA,[mu]:i.CONSTANT_COLOR,[gu]:i.ONE_MINUS_CONSTANT_COLOR,[_u]:i.CONSTANT_ALPHA,[vu]:i.ONE_MINUS_CONSTANT_ALPHA};function We(I,le,J,he,ge,ee,Ee,Me,gt,ot){if(I===Dn){p===!0&&(Pe(i.BLEND),p=!1);return}if(p===!1&&(ie(i.BLEND),p=!0),I!==tu){if(I!==d||ot!==U){if((b!==ci||w!==ci)&&(i.blendEquation(i.FUNC_ADD),b=ci,w=ci),ot)switch(I){case Yi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Zt:i.blendFunc(i.ONE,i.ONE);break;case wl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Al:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:$e("WebGLState: Invalid blending: ",I);break}else switch(I){case Yi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Zt:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case wl:$e("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Al:$e("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:$e("WebGLState: Invalid blending: ",I);break}R=null,M=null,E=null,C=null,v.set(0,0,0),T=0,d=I,U=ot}return}ge=ge||le,ee=ee||J,Ee=Ee||he,(le!==b||ge!==w)&&(i.blendEquationSeparate(He[le],He[ge]),b=le,w=ge),(J!==R||he!==M||ee!==E||Ee!==C)&&(i.blendFuncSeparate(be[J],be[he],be[ee],be[Ee]),R=J,M=he,E=ee,C=Ee),(Me.equals(v)===!1||gt!==T)&&(i.blendColor(Me.r,Me.g,Me.b,gt),v.copy(Me),T=gt),d=I,U=!1}function Xe(I,le){I.side===Pn?Pe(i.CULL_FACE):ie(i.CULL_FACE);let J=I.side===Wt;le&&(J=!J),ft(J),I.blending===Yi&&I.transparent===!1?We(Dn):We(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),s.setFunc(I.depthFunc),s.setTest(I.depthTest),s.setMask(I.depthWrite),r.setMask(I.colorWrite);const he=I.stencilWrite;o.setTest(he),he&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Mt(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?ie(i.SAMPLE_ALPHA_TO_COVERAGE):Pe(i.SAMPLE_ALPHA_TO_COVERAGE)}function ft(I){D!==I&&(I?i.frontFace(i.CW):i.frontFace(i.CCW),D=I)}function xt(I){I!==Qh?(ie(i.CULL_FACE),I!==k&&(I===Tl?i.cullFace(i.BACK):I===jh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Pe(i.CULL_FACE),k=I}function bt(I){I!==$&&(W&&i.lineWidth(I),$=I)}function Mt(I,le,J){I?(ie(i.POLYGON_OFFSET_FILL),(Q!==le||z!==J)&&(Q=le,z=J,s.getReversed()&&(le=-le),i.polygonOffset(le,J))):Pe(i.POLYGON_OFFSET_FILL)}function ht(I){I?ie(i.SCISSOR_TEST):Pe(i.SCISSOR_TEST)}function Oe(I){I===void 0&&(I=i.TEXTURE0+Z-1),ue!==I&&(i.activeTexture(I),ue=I)}function L(I,le,J){J===void 0&&(ue===null?J=i.TEXTURE0+Z-1:J=ue);let he=ce[J];he===void 0&&(he={type:void 0,texture:void 0},ce[J]=he),(he.type!==I||he.texture!==le)&&(ue!==J&&(i.activeTexture(J),ue=J),i.bindTexture(I,le||oe[I]),he.type=I,he.texture=le)}function Lt(){const I=ce[ue];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function je(){try{i.compressedTexImage2D(...arguments)}catch(I){$e("WebGLState:",I)}}function S(){try{i.compressedTexImage3D(...arguments)}catch(I){$e("WebGLState:",I)}}function g(){try{i.texSubImage2D(...arguments)}catch(I){$e("WebGLState:",I)}}function O(){try{i.texSubImage3D(...arguments)}catch(I){$e("WebGLState:",I)}}function B(){try{i.compressedTexSubImage2D(...arguments)}catch(I){$e("WebGLState:",I)}}function A(){try{i.compressedTexSubImage3D(...arguments)}catch(I){$e("WebGLState:",I)}}function V(){try{i.texStorage2D(...arguments)}catch(I){$e("WebGLState:",I)}}function K(){try{i.texStorage3D(...arguments)}catch(I){$e("WebGLState:",I)}}function F(){try{i.texImage2D(...arguments)}catch(I){$e("WebGLState:",I)}}function Y(){try{i.texImage3D(...arguments)}catch(I){$e("WebGLState:",I)}}function te(I){return f[I]!==void 0?f[I]:i.getParameter(I)}function de(I,le){f[I]!==le&&(i.pixelStorei(I,le),f[I]=le)}function ae(I){ct.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),ct.copy(I))}function re(I){Je.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),Je.copy(I))}function Se(I,le){let J=l.get(le);J===void 0&&(J=new WeakMap,l.set(le,J));let he=J.get(I);he===void 0&&(he=i.getUniformBlockIndex(le,I.name),J.set(I,he))}function Ae(I,le){const he=l.get(le).get(I);c.get(le)!==he&&(i.uniformBlockBinding(le,he,I.__bindingPointIndex),c.set(le,he))}function Ne(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),s.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},f={},ue=null,ce={},h={},m=new WeakMap,_=[],y=null,p=!1,d=null,b=null,R=null,M=null,w=null,E=null,C=null,v=new qe(0,0,0),T=0,U=!1,D=null,k=null,$=null,Q=null,z=null,ct.set(0,0,i.canvas.width,i.canvas.height),Je.set(0,0,i.canvas.width,i.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:ie,disable:Pe,bindFramebuffer:Ue,drawBuffers:Re,useProgram:tt,setBlending:We,setMaterial:Xe,setFlipSided:ft,setCullFace:xt,setLineWidth:bt,setPolygonOffset:Mt,setScissorTest:ht,activeTexture:Oe,bindTexture:L,unbindTexture:Lt,compressedTexImage2D:je,compressedTexImage3D:S,texImage2D:F,texImage3D:Y,pixelStorei:de,getParameter:te,updateUBOMapping:Se,uniformBlockBinding:Ae,texStorage2D:V,texStorage3D:K,texSubImage2D:g,texSubImage3D:O,compressedTexSubImage2D:B,compressedTexSubImage3D:A,scissor:ae,viewport:re,reset:Ne}}function lg(i,e,t,n,a,r,s){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Le,u=new WeakMap,f=new Set;let h;const m=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(S,g){return _?new OffscreenCanvas(S,g):Ra("canvas")}function p(S,g,O){let B=1;const A=je(S);if((A.width>O||A.height>O)&&(B=O/Math.max(A.width,A.height)),B<1)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap||typeof VideoFrame<"u"&&S instanceof VideoFrame){const V=Math.floor(B*A.width),K=Math.floor(B*A.height);h===void 0&&(h=y(V,K));const F=g?y(V,K):h;return F.width=V,F.height=K,F.getContext("2d").drawImage(S,0,0,V,K),Ce("WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+V+"x"+K+")."),F}else return"data"in S&&Ce("WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),S;return S}function d(S){return S.generateMipmaps}function b(S){i.generateMipmap(S)}function R(S){return S.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:S.isWebGL3DRenderTarget?i.TEXTURE_3D:S.isWebGLArrayRenderTarget||S.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(S,g,O,B,A,V=!1){if(S!==null){if(i[S]!==void 0)return i[S];Ce("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let K;B&&(K=e.get("EXT_texture_norm16"),K||Ce("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let F=g;if(g===i.RED&&(O===i.FLOAT&&(F=i.R32F),O===i.HALF_FLOAT&&(F=i.R16F),O===i.UNSIGNED_BYTE&&(F=i.R8),O===i.UNSIGNED_SHORT&&K&&(F=K.R16_EXT),O===i.SHORT&&K&&(F=K.R16_SNORM_EXT)),g===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(F=i.R8UI),O===i.UNSIGNED_SHORT&&(F=i.R16UI),O===i.UNSIGNED_INT&&(F=i.R32UI),O===i.BYTE&&(F=i.R8I),O===i.SHORT&&(F=i.R16I),O===i.INT&&(F=i.R32I)),g===i.RG&&(O===i.FLOAT&&(F=i.RG32F),O===i.HALF_FLOAT&&(F=i.RG16F),O===i.UNSIGNED_BYTE&&(F=i.RG8),O===i.UNSIGNED_SHORT&&K&&(F=K.RG16_EXT),O===i.SHORT&&K&&(F=K.RG16_SNORM_EXT)),g===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&(F=i.RG8UI),O===i.UNSIGNED_SHORT&&(F=i.RG16UI),O===i.UNSIGNED_INT&&(F=i.RG32UI),O===i.BYTE&&(F=i.RG8I),O===i.SHORT&&(F=i.RG16I),O===i.INT&&(F=i.RG32I)),g===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&(F=i.RGB8UI),O===i.UNSIGNED_SHORT&&(F=i.RGB16UI),O===i.UNSIGNED_INT&&(F=i.RGB32UI),O===i.BYTE&&(F=i.RGB8I),O===i.SHORT&&(F=i.RGB16I),O===i.INT&&(F=i.RGB32I)),g===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&(F=i.RGBA8UI),O===i.UNSIGNED_SHORT&&(F=i.RGBA16UI),O===i.UNSIGNED_INT&&(F=i.RGBA32UI),O===i.BYTE&&(F=i.RGBA8I),O===i.SHORT&&(F=i.RGBA16I),O===i.INT&&(F=i.RGBA32I)),g===i.RGB&&(O===i.UNSIGNED_SHORT&&K&&(F=K.RGB16_EXT),O===i.SHORT&&K&&(F=K.RGB16_SNORM_EXT),O===i.UNSIGNED_INT_5_9_9_9_REV&&(F=i.RGB9_E5),O===i.UNSIGNED_INT_10F_11F_11F_REV&&(F=i.R11F_G11F_B10F)),g===i.RGBA){const Y=V?Lr:Ke.getTransfer(A);O===i.FLOAT&&(F=i.RGBA32F),O===i.HALF_FLOAT&&(F=i.RGBA16F),O===i.UNSIGNED_BYTE&&(F=Y===et?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT&&K&&(F=K.RGBA16_EXT),O===i.SHORT&&K&&(F=K.RGBA16_SNORM_EXT),O===i.UNSIGNED_SHORT_4_4_4_4&&(F=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(F=i.RGB5_A1)}return(F===i.R16F||F===i.R32F||F===i.RG16F||F===i.RG32F||F===i.RGBA16F||F===i.RGBA32F)&&e.get("EXT_color_buffer_float"),F}function w(S,g){let O;return S?g===null||g===En||g===Aa?O=i.DEPTH24_STENCIL8:g===Mn?O=i.DEPTH32F_STENCIL8:g===wa&&(O=i.DEPTH24_STENCIL8,Ce("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===En||g===Aa?O=i.DEPTH_COMPONENT24:g===Mn?O=i.DEPTH_COMPONENT32F:g===wa&&(O=i.DEPTH_COMPONENT16),O}function E(S,g){return d(S)===!0||S.isFramebufferTexture&&S.minFilter!==At&&S.minFilter!==kt?Math.log2(Math.max(g.width,g.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?g.mipmaps.length:1}function C(S){const g=S.target;g.removeEventListener("dispose",C),T(g),g.isVideoTexture&&u.delete(g),g.isHTMLTexture&&f.delete(g)}function v(S){const g=S.target;g.removeEventListener("dispose",v),D(g)}function T(S){const g=n.get(S);if(g.__webglInit===void 0)return;const O=S.source,B=m.get(O);if(B){const A=B[g.__cacheKey];A.usedTimes--,A.usedTimes===0&&U(S),Object.keys(B).length===0&&m.delete(O)}n.remove(S)}function U(S){const g=n.get(S);i.deleteTexture(g.__webglTexture);const O=S.source,B=m.get(O);delete B[g.__cacheKey],s.memory.textures--}function D(S){const g=n.get(S);if(S.depthTexture&&(S.depthTexture.dispose(),n.remove(S.depthTexture)),S.isWebGLCubeRenderTarget)for(let B=0;B<6;B++){if(Array.isArray(g.__webglFramebuffer[B]))for(let A=0;A<g.__webglFramebuffer[B].length;A++)i.deleteFramebuffer(g.__webglFramebuffer[B][A]);else i.deleteFramebuffer(g.__webglFramebuffer[B]);g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer[B])}else{if(Array.isArray(g.__webglFramebuffer))for(let B=0;B<g.__webglFramebuffer.length;B++)i.deleteFramebuffer(g.__webglFramebuffer[B]);else i.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&i.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let B=0;B<g.__webglColorRenderbuffer.length;B++)g.__webglColorRenderbuffer[B]&&i.deleteRenderbuffer(g.__webglColorRenderbuffer[B]);g.__webglDepthRenderbuffer&&i.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const O=S.textures;for(let B=0,A=O.length;B<A;B++){const V=n.get(O[B]);V.__webglTexture&&(i.deleteTexture(V.__webglTexture),s.memory.textures--),n.remove(O[B])}n.remove(S)}let k=0;function $(){k=0}function Q(){return k}function z(S){k=S}function Z(){const S=k;return S>=a.maxTextures&&Ce("WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+a.maxTextures),k+=1,S}function W(S){const g=[];return g.push(S.wrapS),g.push(S.wrapT),g.push(S.wrapR||0),g.push(S.magFilter),g.push(S.minFilter),g.push(S.anisotropy),g.push(S.internalFormat),g.push(S.format),g.push(S.type),g.push(S.generateMipmaps),g.push(S.premultiplyAlpha),g.push(S.flipY),g.push(S.unpackAlignment),g.push(S.colorSpace),g.join()}function j(S,g){const O=n.get(S);if(S.isVideoTexture&&L(S),S.isRenderTargetTexture===!1&&S.isExternalTexture!==!0&&S.version>0&&O.__version!==S.version){const B=S.image;if(B===null)Ce("WebGLRenderer: Texture marked for update but no image data found.");else if(B.complete===!1)Ce("WebGLRenderer: Texture marked for update but image is incomplete");else{Pe(O,S,g);return}}else S.isExternalTexture&&(O.__webglTexture=S.sourceTexture?S.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+g)}function ne(S,g){const O=n.get(S);if(S.isRenderTargetTexture===!1&&S.version>0&&O.__version!==S.version){Pe(O,S,g);return}else S.isExternalTexture&&(O.__webglTexture=S.sourceTexture?S.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+g)}function ue(S,g){const O=n.get(S);if(S.isRenderTargetTexture===!1&&S.version>0&&O.__version!==S.version){Pe(O,S,g);return}t.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+g)}function ce(S,g){const O=n.get(S);if(S.isCubeDepthTexture!==!0&&S.version>0&&O.__version!==S.version){Ue(O,S,g);return}t.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+g)}const ve={[Ta]:i.REPEAT,[Ln]:i.CLAMP_TO_EDGE,[js]:i.MIRRORED_REPEAT},Ze={[At]:i.NEAREST,[yu]:i.NEAREST_MIPMAP_NEAREST,[Fa]:i.NEAREST_MIPMAP_LINEAR,[kt]:i.LINEAR,[ss]:i.LINEAR_MIPMAP_NEAREST,[ui]:i.LINEAR_MIPMAP_LINEAR},ct={[Eu]:i.NEVER,[Cu]:i.ALWAYS,[Tu]:i.LESS,[Ko]:i.LEQUAL,[wu]:i.EQUAL,[$o]:i.GEQUAL,[Au]:i.GREATER,[Ru]:i.NOTEQUAL};function Je(S,g){if(g.type===Mn&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===kt||g.magFilter===ss||g.magFilter===Fa||g.magFilter===ui||g.minFilter===kt||g.minFilter===ss||g.minFilter===Fa||g.minFilter===ui)&&Ce("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(S,i.TEXTURE_WRAP_S,ve[g.wrapS]),i.texParameteri(S,i.TEXTURE_WRAP_T,ve[g.wrapT]),(S===i.TEXTURE_3D||S===i.TEXTURE_2D_ARRAY)&&i.texParameteri(S,i.TEXTURE_WRAP_R,ve[g.wrapR]),i.texParameteri(S,i.TEXTURE_MAG_FILTER,Ze[g.magFilter]),i.texParameteri(S,i.TEXTURE_MIN_FILTER,Ze[g.minFilter]),g.compareFunction&&(i.texParameteri(S,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(S,i.TEXTURE_COMPARE_FUNC,ct[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===At||g.minFilter!==Fa&&g.minFilter!==ui||g.type===Mn&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||n.get(g).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");i.texParameterf(S,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,a.getMaxAnisotropy())),n.get(g).__currentAnisotropy=g.anisotropy}}}function q(S,g){let O=!1;S.__webglInit===void 0&&(S.__webglInit=!0,g.addEventListener("dispose",C));const B=g.source;let A=m.get(B);A===void 0&&(A={},m.set(B,A));const V=W(g);if(V!==S.__cacheKey){A[V]===void 0&&(A[V]={texture:i.createTexture(),usedTimes:0},s.memory.textures++,O=!0),A[V].usedTimes++;const K=A[S.__cacheKey];K!==void 0&&(A[S.__cacheKey].usedTimes--,K.usedTimes===0&&U(g)),S.__cacheKey=V,S.__webglTexture=A[V].texture}return O}function oe(S,g,O){return Math.floor(Math.floor(S/O)/g)}function ie(S,g,O,B){const V=S.updateRanges;if(V.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,g.width,g.height,O,B,g.data);else{V.sort((de,ae)=>de.start-ae.start);let K=0;for(let de=1;de<V.length;de++){const ae=V[K],re=V[de],Se=ae.start+ae.count,Ae=oe(re.start,g.width,4),Ne=oe(ae.start,g.width,4);re.start<=Se+1&&Ae===Ne&&oe(re.start+re.count-1,g.width,4)===Ae?ae.count=Math.max(ae.count,re.start+re.count-ae.start):(++K,V[K]=re)}V.length=K+1;const F=t.getParameter(i.UNPACK_ROW_LENGTH),Y=t.getParameter(i.UNPACK_SKIP_PIXELS),te=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,g.width);for(let de=0,ae=V.length;de<ae;de++){const re=V[de],Se=Math.floor(re.start/4),Ae=Math.ceil(re.count/4),Ne=Se%g.width,I=Math.floor(Se/g.width),le=Ae,J=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,Ne),t.pixelStorei(i.UNPACK_SKIP_ROWS,I),t.texSubImage2D(i.TEXTURE_2D,0,Ne,I,le,J,O,B,g.data)}S.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,F),t.pixelStorei(i.UNPACK_SKIP_PIXELS,Y),t.pixelStorei(i.UNPACK_SKIP_ROWS,te)}}function Pe(S,g,O){let B=i.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(B=i.TEXTURE_2D_ARRAY),g.isData3DTexture&&(B=i.TEXTURE_3D);const A=q(S,g),V=g.source;t.bindTexture(B,S.__webglTexture,i.TEXTURE0+O);const K=n.get(V);if(V.version!==K.__version||A===!0){if(t.activeTexture(i.TEXTURE0+O),(typeof ImageBitmap<"u"&&g.image instanceof ImageBitmap)===!1){const J=Ke.getPrimaries(Ke.workingColorSpace),he=g.colorSpace===tn?null:Ke.getPrimaries(g.colorSpace),ge=g.colorSpace===tn||J===he?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge)}t.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment);let Y=p(g.image,!1,a.maxTextureSize);Y=Lt(g,Y);const te=r.convert(g.format,g.colorSpace),de=r.convert(g.type);let ae=M(g.internalFormat,te,de,g.normalized,g.colorSpace,g.isVideoTexture);Je(B,g);let re;const Se=g.mipmaps,Ae=g.isVideoTexture!==!0,Ne=K.__version===void 0||A===!0,I=V.dataReady,le=E(g,Y);if(g.isDepthTexture)ae=w(g.format===di,g.type),Ne&&(Ae?t.texStorage2D(i.TEXTURE_2D,1,ae,Y.width,Y.height):t.texImage2D(i.TEXTURE_2D,0,ae,Y.width,Y.height,0,te,de,null));else if(g.isDataTexture)if(Se.length>0){Ae&&Ne&&t.texStorage2D(i.TEXTURE_2D,le,ae,Se[0].width,Se[0].height);for(let J=0,he=Se.length;J<he;J++)re=Se[J],Ae?I&&t.texSubImage2D(i.TEXTURE_2D,J,0,0,re.width,re.height,te,de,re.data):t.texImage2D(i.TEXTURE_2D,J,ae,re.width,re.height,0,te,de,re.data);g.generateMipmaps=!1}else Ae?(Ne&&t.texStorage2D(i.TEXTURE_2D,le,ae,Y.width,Y.height),I&&ie(g,Y,te,de)):t.texImage2D(i.TEXTURE_2D,0,ae,Y.width,Y.height,0,te,de,Y.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){Ae&&Ne&&t.texStorage3D(i.TEXTURE_2D_ARRAY,le,ae,Se[0].width,Se[0].height,Y.depth);for(let J=0,he=Se.length;J<he;J++)if(re=Se[J],g.format!==hn)if(te!==null)if(Ae){if(I)if(g.layerUpdates.size>0){const ge=oc(re.width,re.height,g.format,g.type);for(const ee of g.layerUpdates){const Ee=re.data.subarray(ee*ge/re.data.BYTES_PER_ELEMENT,(ee+1)*ge/re.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,ee,re.width,re.height,1,te,Ee)}g.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,0,re.width,re.height,Y.depth,te,re.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,J,ae,re.width,re.height,Y.depth,0,re.data,0,0);else Ce("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ae?I&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,0,re.width,re.height,Y.depth,te,de,re.data):t.texImage3D(i.TEXTURE_2D_ARRAY,J,ae,re.width,re.height,Y.depth,0,te,de,re.data)}else{Ae&&Ne&&t.texStorage2D(i.TEXTURE_2D,le,ae,Se[0].width,Se[0].height);for(let J=0,he=Se.length;J<he;J++)re=Se[J],g.format!==hn?te!==null?Ae?I&&t.compressedTexSubImage2D(i.TEXTURE_2D,J,0,0,re.width,re.height,te,re.data):t.compressedTexImage2D(i.TEXTURE_2D,J,ae,re.width,re.height,0,re.data):Ce("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ae?I&&t.texSubImage2D(i.TEXTURE_2D,J,0,0,re.width,re.height,te,de,re.data):t.texImage2D(i.TEXTURE_2D,J,ae,re.width,re.height,0,te,de,re.data)}else if(g.isDataArrayTexture)if(Ae){if(Ne&&t.texStorage3D(i.TEXTURE_2D_ARRAY,le,ae,Y.width,Y.height,Y.depth),I)if(g.layerUpdates.size>0){const J=oc(Y.width,Y.height,g.format,g.type);for(const he of g.layerUpdates){const ge=Y.data.subarray(he*J/Y.data.BYTES_PER_ELEMENT,(he+1)*J/Y.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,he,Y.width,Y.height,1,te,de,ge)}g.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Y.width,Y.height,Y.depth,te,de,Y.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ae,Y.width,Y.height,Y.depth,0,te,de,Y.data);else if(g.isData3DTexture)Ae?(Ne&&t.texStorage3D(i.TEXTURE_3D,le,ae,Y.width,Y.height,Y.depth),I&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Y.width,Y.height,Y.depth,te,de,Y.data)):t.texImage3D(i.TEXTURE_3D,0,ae,Y.width,Y.height,Y.depth,0,te,de,Y.data);else if(g.isFramebufferTexture){if(Ne)if(Ae)t.texStorage2D(i.TEXTURE_2D,le,ae,Y.width,Y.height);else{let J=Y.width,he=Y.height;for(let ge=0;ge<le;ge++)t.texImage2D(i.TEXTURE_2D,ge,ae,J,he,0,te,de,null),J>>=1,he>>=1}}else if(g.isHTMLTexture){if("texElementImage2D"in i){const J=i.canvas;if(J.hasAttribute("layoutsubtree")||J.setAttribute("layoutsubtree","true"),Y.parentNode!==J){J.appendChild(Y),f.add(g),J.onpaint=he=>{const ge=he.changedElements;for(const ee of f)ge.includes(ee.image)&&(ee.needsUpdate=!0)},J.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,Y);else{const ge=i.RGBA,ee=i.RGBA,Ee=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,ge,ee,Ee,Y)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Se.length>0){if(Ae&&Ne){const J=je(Se[0]);t.texStorage2D(i.TEXTURE_2D,le,ae,J.width,J.height)}for(let J=0,he=Se.length;J<he;J++)re=Se[J],Ae?I&&t.texSubImage2D(i.TEXTURE_2D,J,0,0,te,de,re):t.texImage2D(i.TEXTURE_2D,J,ae,te,de,re);g.generateMipmaps=!1}else if(Ae){if(Ne){const J=je(Y);t.texStorage2D(i.TEXTURE_2D,le,ae,J.width,J.height)}I&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,te,de,Y)}else t.texImage2D(i.TEXTURE_2D,0,ae,te,de,Y);d(g)&&b(B),K.__version=V.version,g.onUpdate&&g.onUpdate(g)}S.__version=g.version}function Ue(S,g,O){if(g.image.length!==6)return;const B=q(S,g),A=g.source;t.bindTexture(i.TEXTURE_CUBE_MAP,S.__webglTexture,i.TEXTURE0+O);const V=n.get(A);if(A.version!==V.__version||B===!0){t.activeTexture(i.TEXTURE0+O);const K=Ke.getPrimaries(Ke.workingColorSpace),F=g.colorSpace===tn?null:Ke.getPrimaries(g.colorSpace),Y=g.colorSpace===tn||K===F?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Y);const te=g.isCompressedTexture||g.image[0].isCompressedTexture,de=g.image[0]&&g.image[0].isDataTexture,ae=[];for(let ee=0;ee<6;ee++)!te&&!de?ae[ee]=p(g.image[ee],!0,a.maxCubemapSize):ae[ee]=de?g.image[ee].image:g.image[ee],ae[ee]=Lt(g,ae[ee]);const re=ae[0],Se=r.convert(g.format,g.colorSpace),Ae=r.convert(g.type),Ne=M(g.internalFormat,Se,Ae,g.normalized,g.colorSpace),I=g.isVideoTexture!==!0,le=V.__version===void 0||B===!0,J=A.dataReady;let he=E(g,re);Je(i.TEXTURE_CUBE_MAP,g);let ge;if(te){I&&le&&t.texStorage2D(i.TEXTURE_CUBE_MAP,he,Ne,re.width,re.height);for(let ee=0;ee<6;ee++){ge=ae[ee].mipmaps;for(let Ee=0;Ee<ge.length;Ee++){const Me=ge[Ee];g.format!==hn?Se!==null?I?J&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ee,0,0,Me.width,Me.height,Se,Me.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ee,Ne,Me.width,Me.height,0,Me.data):Ce("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?J&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ee,0,0,Me.width,Me.height,Se,Ae,Me.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ee,Ne,Me.width,Me.height,0,Se,Ae,Me.data)}}}else{if(ge=g.mipmaps,I&&le){ge.length>0&&he++;const ee=je(ae[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,he,Ne,ee.width,ee.height)}for(let ee=0;ee<6;ee++)if(de){I?J&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,ae[ee].width,ae[ee].height,Se,Ae,ae[ee].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Ne,ae[ee].width,ae[ee].height,0,Se,Ae,ae[ee].data);for(let Ee=0;Ee<ge.length;Ee++){const gt=ge[Ee].image[ee].image;I?J&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ee+1,0,0,gt.width,gt.height,Se,Ae,gt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ee+1,Ne,gt.width,gt.height,0,Se,Ae,gt.data)}}else{I?J&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,Se,Ae,ae[ee]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Ne,Se,Ae,ae[ee]);for(let Ee=0;Ee<ge.length;Ee++){const Me=ge[Ee];I?J&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ee+1,0,0,Se,Ae,Me.image[ee]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ee+1,Ne,Se,Ae,Me.image[ee])}}}d(g)&&b(i.TEXTURE_CUBE_MAP),V.__version=A.version,g.onUpdate&&g.onUpdate(g)}S.__version=g.version}function Re(S,g,O,B,A,V){const K=r.convert(O.format,O.colorSpace),F=r.convert(O.type),Y=M(O.internalFormat,K,F,O.normalized,O.colorSpace),te=n.get(g),de=n.get(O);if(de.__renderTarget=g,!te.__hasExternalTextures){const ae=Math.max(1,g.width>>V),re=Math.max(1,g.height>>V);A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY?t.texImage3D(A,V,Y,ae,re,g.depth,0,K,F,null):t.texImage2D(A,V,Y,ae,re,0,K,F,null)}t.bindFramebuffer(i.FRAMEBUFFER,S),Oe(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,B,A,de.__webglTexture,0,ht(g)):(A===i.TEXTURE_2D||A>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&A<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,B,A,de.__webglTexture,V),t.bindFramebuffer(i.FRAMEBUFFER,null)}function tt(S,g,O){if(i.bindRenderbuffer(i.RENDERBUFFER,S),g.depthBuffer){const B=g.depthTexture,A=B&&B.isDepthTexture?B.type:null,V=w(g.stencilBuffer,A),K=g.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Oe(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ht(g),V,g.width,g.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,ht(g),V,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,V,g.width,g.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,S)}else{const B=g.textures;for(let A=0;A<B.length;A++){const V=B[A],K=r.convert(V.format,V.colorSpace),F=r.convert(V.type),Y=M(V.internalFormat,K,F,V.normalized,V.colorSpace);Oe(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ht(g),Y,g.width,g.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,ht(g),Y,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,Y,g.width,g.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function He(S,g,O){const B=g.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,S),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const A=n.get(g.depthTexture);if(A.__renderTarget=g,(!A.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),B){if(A.__webglInit===void 0&&(A.__webglInit=!0,g.depthTexture.addEventListener("dispose",C)),A.__webglTexture===void 0){A.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture),Je(i.TEXTURE_CUBE_MAP,g.depthTexture);const te=r.convert(g.depthTexture.format),de=r.convert(g.depthTexture.type);let ae;g.depthTexture.format===On?ae=i.DEPTH_COMPONENT24:g.depthTexture.format===di&&(ae=i.DEPTH24_STENCIL8);for(let re=0;re<6;re++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,ae,g.width,g.height,0,te,de,null)}}else j(g.depthTexture,0);const V=A.__webglTexture,K=ht(g),F=B?i.TEXTURE_CUBE_MAP_POSITIVE_X+O:i.TEXTURE_2D,Y=g.depthTexture.format===di?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(g.depthTexture.format===On)Oe(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Y,F,V,0,K):i.framebufferTexture2D(i.FRAMEBUFFER,Y,F,V,0);else if(g.depthTexture.format===di)Oe(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Y,F,V,0,K):i.framebufferTexture2D(i.FRAMEBUFFER,Y,F,V,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function be(S){const g=n.get(S),O=S.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==S.depthTexture){const B=S.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),B){const A=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,B.removeEventListener("dispose",A)};B.addEventListener("dispose",A),g.__depthDisposeCallback=A}g.__boundDepthTexture=B}if(S.depthTexture&&!g.__autoAllocateDepthBuffer)if(O)for(let B=0;B<6;B++)He(g.__webglFramebuffer[B],S,B);else{const B=S.texture.mipmaps;B&&B.length>0?He(g.__webglFramebuffer[0],S,0):He(g.__webglFramebuffer,S,0)}else if(O){g.__webglDepthbuffer=[];for(let B=0;B<6;B++)if(t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[B]),g.__webglDepthbuffer[B]===void 0)g.__webglDepthbuffer[B]=i.createRenderbuffer(),tt(g.__webglDepthbuffer[B],S,!1);else{const A=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,V=g.__webglDepthbuffer[B];i.bindRenderbuffer(i.RENDERBUFFER,V),i.framebufferRenderbuffer(i.FRAMEBUFFER,A,i.RENDERBUFFER,V)}}else{const B=S.texture.mipmaps;if(B&&B.length>0?t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=i.createRenderbuffer(),tt(g.__webglDepthbuffer,S,!1);else{const A=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,V=g.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,V),i.framebufferRenderbuffer(i.FRAMEBUFFER,A,i.RENDERBUFFER,V)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function We(S,g,O){const B=n.get(S);g!==void 0&&Re(B.__webglFramebuffer,S,S.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&be(S)}function Xe(S){const g=S.texture,O=n.get(S),B=n.get(g);S.addEventListener("dispose",v);const A=S.textures,V=S.isWebGLCubeRenderTarget===!0,K=A.length>1;if(K||(B.__webglTexture===void 0&&(B.__webglTexture=i.createTexture()),B.__version=g.version,s.memory.textures++),V){O.__webglFramebuffer=[];for(let F=0;F<6;F++)if(g.mipmaps&&g.mipmaps.length>0){O.__webglFramebuffer[F]=[];for(let Y=0;Y<g.mipmaps.length;Y++)O.__webglFramebuffer[F][Y]=i.createFramebuffer()}else O.__webglFramebuffer[F]=i.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){O.__webglFramebuffer=[];for(let F=0;F<g.mipmaps.length;F++)O.__webglFramebuffer[F]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(K)for(let F=0,Y=A.length;F<Y;F++){const te=n.get(A[F]);te.__webglTexture===void 0&&(te.__webglTexture=i.createTexture(),s.memory.textures++)}if(S.samples>0&&Oe(S)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let F=0;F<A.length;F++){const Y=A[F];O.__webglColorRenderbuffer[F]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[F]);const te=r.convert(Y.format,Y.colorSpace),de=r.convert(Y.type),ae=M(Y.internalFormat,te,de,Y.normalized,Y.colorSpace,S.isXRRenderTarget===!0),re=ht(S);i.renderbufferStorageMultisample(i.RENDERBUFFER,re,ae,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+F,i.RENDERBUFFER,O.__webglColorRenderbuffer[F])}i.bindRenderbuffer(i.RENDERBUFFER,null),S.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),tt(O.__webglDepthRenderbuffer,S,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(V){t.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture),Je(i.TEXTURE_CUBE_MAP,g);for(let F=0;F<6;F++)if(g.mipmaps&&g.mipmaps.length>0)for(let Y=0;Y<g.mipmaps.length;Y++)Re(O.__webglFramebuffer[F][Y],S,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+F,Y);else Re(O.__webglFramebuffer[F],S,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+F,0);d(g)&&b(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(K){for(let F=0,Y=A.length;F<Y;F++){const te=A[F],de=n.get(te);let ae=i.TEXTURE_2D;(S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(ae=S.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ae,de.__webglTexture),Je(ae,te),Re(O.__webglFramebuffer,S,te,i.COLOR_ATTACHMENT0+F,ae,0),d(te)&&b(ae)}t.unbindTexture()}else{let F=i.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(F=S.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(F,B.__webglTexture),Je(F,g),g.mipmaps&&g.mipmaps.length>0)for(let Y=0;Y<g.mipmaps.length;Y++)Re(O.__webglFramebuffer[Y],S,g,i.COLOR_ATTACHMENT0,F,Y);else Re(O.__webglFramebuffer,S,g,i.COLOR_ATTACHMENT0,F,0);d(g)&&b(F),t.unbindTexture()}S.depthBuffer&&be(S)}function ft(S){const g=S.textures;for(let O=0,B=g.length;O<B;O++){const A=g[O];if(d(A)){const V=R(S),K=n.get(A).__webglTexture;t.bindTexture(V,K),b(V),t.unbindTexture()}}}const xt=[],bt=[];function Mt(S){if(S.samples>0){if(Oe(S)===!1){const g=S.textures,O=S.width,B=S.height;let A=i.COLOR_BUFFER_BIT;const V=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,K=n.get(S),F=g.length>1;if(F)for(let te=0;te<g.length;te++)t.bindFramebuffer(i.FRAMEBUFFER,K.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+te,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,K.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+te,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,K.__webglMultisampledFramebuffer);const Y=S.texture.mipmaps;Y&&Y.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,K.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,K.__webglFramebuffer);for(let te=0;te<g.length;te++){if(S.resolveDepthBuffer&&(S.depthBuffer&&(A|=i.DEPTH_BUFFER_BIT),S.stencilBuffer&&S.resolveStencilBuffer&&(A|=i.STENCIL_BUFFER_BIT)),F){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,K.__webglColorRenderbuffer[te]);const de=n.get(g[te]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,de,0)}i.blitFramebuffer(0,0,O,B,0,0,O,B,A,i.NEAREST),c===!0&&(xt.length=0,bt.length=0,xt.push(i.COLOR_ATTACHMENT0+te),S.depthBuffer&&S.resolveDepthBuffer===!1&&(xt.push(V),bt.push(V),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,bt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,xt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),F)for(let te=0;te<g.length;te++){t.bindFramebuffer(i.FRAMEBUFFER,K.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+te,i.RENDERBUFFER,K.__webglColorRenderbuffer[te]);const de=n.get(g[te]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,K.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+te,i.TEXTURE_2D,de,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,K.__webglMultisampledFramebuffer)}else if(S.depthBuffer&&S.resolveDepthBuffer===!1&&c){const g=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[g])}}}function ht(S){return Math.min(a.maxSamples,S.samples)}function Oe(S){const g=n.get(S);return S.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function L(S){const g=s.render.frame;u.get(S)!==g&&(u.set(S,g),S.update())}function Lt(S,g){const O=S.colorSpace,B=S.format,A=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||O!==Pr&&O!==tn&&(Ke.getTransfer(O)===et?(B!==hn||A!==en)&&Ce("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):$e("WebGLTextures: Unsupported texture color space:",O)),g}function je(S){return typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement?(l.width=S.naturalWidth||S.width,l.height=S.naturalHeight||S.height):typeof VideoFrame<"u"&&S instanceof VideoFrame?(l.width=S.displayWidth,l.height=S.displayHeight):(l.width=S.width,l.height=S.height),l}this.allocateTextureUnit=Z,this.resetTextureUnits=$,this.getTextureUnits=Q,this.setTextureUnits=z,this.setTexture2D=j,this.setTexture2DArray=ne,this.setTexture3D=ue,this.setTextureCube=ce,this.rebindTextures=We,this.setupRenderTarget=Xe,this.updateRenderTargetMipmap=ft,this.updateMultisampleRenderTarget=Mt,this.setupDepthRenderbuffer=be,this.setupFrameBufferTexture=Re,this.useMultisampledRTT=Oe,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function cg(i,e){function t(n,a=tn){let r;const s=Ke.getTransfer(a);if(n===en)return i.UNSIGNED_BYTE;if(n===Ho)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Wo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===th)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===nh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===jc)return i.BYTE;if(n===eh)return i.SHORT;if(n===wa)return i.UNSIGNED_SHORT;if(n===Go)return i.INT;if(n===En)return i.UNSIGNED_INT;if(n===Mn)return i.FLOAT;if(n===Fn)return i.HALF_FLOAT;if(n===ih)return i.ALPHA;if(n===ah)return i.RGB;if(n===hn)return i.RGBA;if(n===On)return i.DEPTH_COMPONENT;if(n===di)return i.DEPTH_STENCIL;if(n===rh)return i.RED;if(n===Xo)return i.RED_INTEGER;if(n===vi)return i.RG;if(n===Yo)return i.RG_INTEGER;if(n===qo)return i.RGBA_INTEGER;if(n===vr||n===xr||n===Mr||n===yr)if(s===et)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===vr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===xr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Mr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===yr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===vr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===xr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Mr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===yr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===eo||n===to||n===no||n===io)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===eo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===to)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===no)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===io)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ao||n===ro||n===so||n===oo||n===lo||n===Rr||n===co)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ao||n===ro)return s===et?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===so)return s===et?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===oo)return r.COMPRESSED_R11_EAC;if(n===lo)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Rr)return r.COMPRESSED_RG11_EAC;if(n===co)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===ho||n===uo||n===fo||n===po||n===mo||n===go||n===_o||n===vo||n===xo||n===Mo||n===yo||n===So||n===bo||n===Eo)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ho)return s===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===uo)return s===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===fo)return s===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===po)return s===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===mo)return s===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===go)return s===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===_o)return s===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===vo)return s===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===xo)return s===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Mo)return s===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===yo)return s===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===So)return s===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===bo)return s===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Eo)return s===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===To||n===wo||n===Ao)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===To)return s===et?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===wo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ao)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ro||n===Co||n===Cr||n===Po)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ro)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Co)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Cr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Po)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Aa?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const hg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ug=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class dg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new _h(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new vt({vertexShader:hg,fragmentShader:ug,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Xt(new Kr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class fg extends ii{constructor(e,t){super();const n=this;let a=null,r=1,s=null,o="local-floor",c=1,l=null,u=null,f=null,h=null,m=null,_=null;const y=typeof XRWebGLBinding<"u",p=new dg,d={},b=t.getContextAttributes();let R=null,M=null;const w=[],E=[],C=new Le;let v=null;const T=new jt;T.viewport=new pt;const U=new jt;U.viewport=new pt;const D=[T,U],k=new yd;let $=null,Q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let oe=w[q];return oe===void 0&&(oe=new fs,w[q]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function(q){let oe=w[q];return oe===void 0&&(oe=new fs,w[q]=oe),oe.getGripSpace()},this.getHand=function(q){let oe=w[q];return oe===void 0&&(oe=new fs,w[q]=oe),oe.getHandSpace()};function z(q){const oe=E.indexOf(q.inputSource);if(oe===-1)return;const ie=w[oe];ie!==void 0&&(ie.update(q.inputSource,q.frame,l||s),ie.dispatchEvent({type:q.type,data:q.inputSource}))}function Z(){a.removeEventListener("select",z),a.removeEventListener("selectstart",z),a.removeEventListener("selectend",z),a.removeEventListener("squeeze",z),a.removeEventListener("squeezestart",z),a.removeEventListener("squeezeend",z),a.removeEventListener("end",Z),a.removeEventListener("inputsourceschange",W);for(let q=0;q<w.length;q++){const oe=E[q];oe!==null&&(E[q]=null,w[q].disconnect(oe))}$=null,Q=null,p.reset();for(const q in d)delete d[q];e.setRenderTarget(R),m=null,h=null,f=null,a=null,M=null,Je.stop(),n.isPresenting=!1,e.setPixelRatio(v),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&Ce("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,n.isPresenting===!0&&Ce("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||s},this.setReferenceSpace=function(q){l=q},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return f===null&&y&&(f=new XRWebGLBinding(a,t)),f},this.getFrame=function(){return _},this.getSession=function(){return a},this.setSession=async function(q){if(a=q,a!==null){if(R=e.getRenderTarget(),a.addEventListener("select",z),a.addEventListener("selectstart",z),a.addEventListener("selectend",z),a.addEventListener("squeeze",z),a.addEventListener("squeezestart",z),a.addEventListener("squeezeend",z),a.addEventListener("end",Z),a.addEventListener("inputsourceschange",W),b.xrCompatible!==!0&&await t.makeXRCompatible(),v=e.getPixelRatio(),e.getSize(C),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let ie=null,Pe=null,Ue=null;b.depth&&(Ue=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ie=b.stencil?di:On,Pe=b.stencil?Aa:En);const Re={colorFormat:t.RGBA8,depthFormat:Ue,scaleFactor:r};f=this.getBinding(),h=f.createProjectionLayer(Re),a.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),M=new bn(h.textureWidth,h.textureHeight,{format:hn,type:en,depthTexture:new ji(h.textureWidth,h.textureHeight,Pe,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const ie={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(a,t,ie),a.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),M=new bn(m.framebufferWidth,m.framebufferHeight,{format:hn,type:en,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(c),l=null,s=await a.requestReferenceSpace(o),Je.setContext(a),Je.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function W(q){for(let oe=0;oe<q.removed.length;oe++){const ie=q.removed[oe],Pe=E.indexOf(ie);Pe>=0&&(E[Pe]=null,w[Pe].disconnect(ie))}for(let oe=0;oe<q.added.length;oe++){const ie=q.added[oe];let Pe=E.indexOf(ie);if(Pe===-1){for(let Re=0;Re<w.length;Re++)if(Re>=E.length){E.push(ie),Pe=Re;break}else if(E[Re]===null){E[Re]=ie,Pe=Re;break}if(Pe===-1)break}const Ue=w[Pe];Ue&&Ue.connect(ie)}}const j=new P,ne=new P;function ue(q,oe,ie){j.setFromMatrixPosition(oe.matrixWorld),ne.setFromMatrixPosition(ie.matrixWorld);const Pe=j.distanceTo(ne),Ue=oe.projectionMatrix.elements,Re=ie.projectionMatrix.elements,tt=Ue[14]/(Ue[10]-1),He=Ue[14]/(Ue[10]+1),be=(Ue[9]+1)/Ue[5],We=(Ue[9]-1)/Ue[5],Xe=(Ue[8]-1)/Ue[0],ft=(Re[8]+1)/Re[0],xt=tt*Xe,bt=tt*ft,Mt=Pe/(-Xe+ft),ht=Mt*-Xe;if(oe.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(ht),q.translateZ(Mt),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Ue[10]===-1)q.projectionMatrix.copy(oe.projectionMatrix),q.projectionMatrixInverse.copy(oe.projectionMatrixInverse);else{const Oe=tt+Mt,L=He+Mt,Lt=xt-ht,je=bt+(Pe-ht),S=be*He/L*Oe,g=We*He/L*Oe;q.projectionMatrix.makePerspective(Lt,je,S,g,Oe,L),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function ce(q,oe){oe===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(oe.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(a===null)return;let oe=q.near,ie=q.far;p.texture!==null&&(p.depthNear>0&&(oe=p.depthNear),p.depthFar>0&&(ie=p.depthFar)),k.near=U.near=T.near=oe,k.far=U.far=T.far=ie,($!==k.near||Q!==k.far)&&(a.updateRenderState({depthNear:k.near,depthFar:k.far}),$=k.near,Q=k.far),k.layers.mask=q.layers.mask|6,T.layers.mask=k.layers.mask&-5,U.layers.mask=k.layers.mask&-3;const Pe=q.parent,Ue=k.cameras;ce(k,Pe);for(let Re=0;Re<Ue.length;Re++)ce(Ue[Re],Pe);Ue.length===2?ue(k,T,U):k.projectionMatrix.copy(T.projectionMatrix),ve(q,k,Pe)};function ve(q,oe,ie){ie===null?q.matrix.copy(oe.matrixWorld):(q.matrix.copy(ie.matrixWorld),q.matrix.invert(),q.matrix.multiply(oe.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(oe.projectionMatrix),q.projectionMatrixInverse.copy(oe.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Do*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(h===null&&m===null))return c},this.setFoveation=function(q){c=q,h!==null&&(h.fixedFoveation=q),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=q)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(k)},this.getCameraTexture=function(q){return d[q]};let Ze=null;function ct(q,oe){if(u=oe.getViewerPose(l||s),_=oe,u!==null){const ie=u.views;m!==null&&(e.setRenderTargetFramebuffer(M,m.framebuffer),e.setRenderTarget(M));let Pe=!1;ie.length!==k.cameras.length&&(k.cameras.length=0,Pe=!0);for(let He=0;He<ie.length;He++){const be=ie[He];let We=null;if(m!==null)We=m.getViewport(be);else{const ft=f.getViewSubImage(h,be);We=ft.viewport,He===0&&(e.setRenderTargetTextures(M,ft.colorTexture,ft.depthStencilTexture),e.setRenderTarget(M))}let Xe=D[He];Xe===void 0&&(Xe=new jt,Xe.layers.enable(He),Xe.viewport=new pt,D[He]=Xe),Xe.matrix.fromArray(be.transform.matrix),Xe.matrix.decompose(Xe.position,Xe.quaternion,Xe.scale),Xe.projectionMatrix.fromArray(be.projectionMatrix),Xe.projectionMatrixInverse.copy(Xe.projectionMatrix).invert(),Xe.viewport.set(We.x,We.y,We.width,We.height),He===0&&(k.matrix.copy(Xe.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),Pe===!0&&k.cameras.push(Xe)}const Ue=a.enabledFeatures;if(Ue&&Ue.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&y){f=n.getBinding();const He=f.getDepthInformation(ie[0]);He&&He.isValid&&He.texture&&p.init(He,a.renderState)}if(Ue&&Ue.includes("camera-access")&&y){e.state.unbindTexture(),f=n.getBinding();for(let He=0;He<ie.length;He++){const be=ie[He].camera;if(be){let We=d[be];We||(We=new _h,d[be]=We);const Xe=f.getCameraImage(be);We.sourceTexture=Xe}}}}for(let ie=0;ie<w.length;ie++){const Pe=E[ie],Ue=w[ie];Pe!==null&&Ue!==void 0&&Ue.update(Pe,oe,l||s)}Ze&&Ze(q,oe),oe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:oe}),_=null}const Je=new yh;Je.setAnimationLoop(ct),this.setAnimationLoop=function(q){Ze=q},this.dispose=function(){}}}const pg=new mt,Rh=new Fe;Rh.set(-1,0,0,0,1,0,0,0,1);function mg(i,e){function t(p,d){p.matrixAutoUpdate===!0&&p.updateMatrix(),d.value.copy(p.matrix)}function n(p,d){d.color.getRGB(p.fogColor.value,vh(i)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function a(p,d,b,R,M){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?r(p,d):d.isMeshLambertMaterial?(r(p,d),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(r(p,d),f(p,d)):d.isMeshPhongMaterial?(r(p,d),u(p,d),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(r(p,d),h(p,d),d.isMeshPhysicalMaterial&&m(p,d,M)):d.isMeshMatcapMaterial?(r(p,d),_(p,d)):d.isMeshDepthMaterial?r(p,d):d.isMeshDistanceMaterial?(r(p,d),y(p,d)):d.isMeshNormalMaterial?r(p,d):d.isLineBasicMaterial?(s(p,d),d.isLineDashedMaterial&&o(p,d)):d.isPointsMaterial?c(p,d,b,R):d.isSpriteMaterial?l(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.bumpMap&&(p.bumpMap.value=d.bumpMap,t(d.bumpMap,p.bumpMapTransform),p.bumpScale.value=d.bumpScale,d.side===Wt&&(p.bumpScale.value*=-1)),d.normalMap&&(p.normalMap.value=d.normalMap,t(d.normalMap,p.normalMapTransform),p.normalScale.value.copy(d.normalScale),d.side===Wt&&p.normalScale.value.negate()),d.displacementMap&&(p.displacementMap.value=d.displacementMap,t(d.displacementMap,p.displacementMapTransform),p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,p.emissiveMapTransform)),d.specularMap&&(p.specularMap.value=d.specularMap,t(d.specularMap,p.specularMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);const b=e.get(d),R=b.envMap,M=b.envMapRotation;R&&(p.envMap.value=R,p.envMapRotation.value.setFromMatrix4(pg.makeRotationFromEuler(M)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(Rh),p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap&&(p.lightMap.value=d.lightMap,p.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,p.lightMapTransform)),d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,p.aoMapTransform))}function s(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform))}function o(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function c(p,d,b,R){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*b,p.scale.value=R*.5,d.map&&(p.map.value=d.map,t(d.map,p.uvTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function l(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function u(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function f(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function h(p,d){p.metalness.value=d.metalness,d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,p.metalnessMapTransform)),p.roughness.value=d.roughness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,p.roughnessMapTransform)),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function m(p,d,b){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,p.sheenColorMapTransform)),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,p.sheenRoughnessMapTransform))),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,p.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(p.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Wt&&p.clearcoatNormalScale.value.negate())),d.dispersion>0&&(p.dispersion.value=d.dispersion),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,p.iridescenceMapTransform)),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=b.texture,p.transmissionSamplerSize.value.set(b.width,b.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,p.transmissionMapTransform)),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(p.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(p.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,p.specularColorMapTransform)),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,d){d.matcap&&(p.matcap.value=d.matcap)}function y(p,d){const b=e.get(d).light;p.referencePosition.value.setFromMatrixPosition(b.matrixWorld),p.nearDistance.value=b.shadow.camera.near,p.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:a}}function gg(i,e,t,n){let a={},r={},s=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(M,w){const E=w.program;n.uniformBlockBinding(M,E)}function l(M,w){let E=a[M.id];E===void 0&&(p(M),E=u(M),a[M.id]=E,M.addEventListener("dispose",b));const C=w.program;n.updateUBOMapping(M,C);const v=e.render.frame;r[M.id]!==v&&(h(M),r[M.id]=v)}function u(M){const w=f();M.__bindingPointIndex=w;const E=i.createBuffer(),C=M.__size,v=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,C,v),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,w,E),E}function f(){for(let M=0;M<o;M++)if(s.indexOf(M)===-1)return s.push(M),M;return $e("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(M){const w=a[M.id],E=M.uniforms,C=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,w);for(let v=0,T=E.length;v<T;v++){const U=E[v];if(Array.isArray(U))for(let D=0,k=U.length;D<k;D++)m(U[D],v,D,C);else m(U,v,0,C)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(M,w,E,C){if(y(M,w,E,C)===!0){const v=M.__offset,T=M.value;if(Array.isArray(T)){let U=0;for(let D=0;D<T.length;D++){const k=T[D],$=d(k);_(k,M.__data,U),typeof k!="number"&&typeof k!="boolean"&&!k.isMatrix3&&!ArrayBuffer.isView(k)&&(U+=$.storage/Float32Array.BYTES_PER_ELEMENT)}}else _(T,M.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,v,M.__data)}}function _(M,w,E){typeof M=="number"||typeof M=="boolean"?w[0]=M:M.isMatrix3?(w[0]=M.elements[0],w[1]=M.elements[1],w[2]=M.elements[2],w[3]=0,w[4]=M.elements[3],w[5]=M.elements[4],w[6]=M.elements[5],w[7]=0,w[8]=M.elements[6],w[9]=M.elements[7],w[10]=M.elements[8],w[11]=0):ArrayBuffer.isView(M)?w.set(new M.constructor(M.buffer,M.byteOffset,w.length)):M.toArray(w,E)}function y(M,w,E,C){const v=M.value,T=w+"_"+E;if(C[T]===void 0)return typeof v=="number"||typeof v=="boolean"?C[T]=v:ArrayBuffer.isView(v)?C[T]=v.slice():C[T]=v.clone(),!0;{const U=C[T];if(typeof v=="number"||typeof v=="boolean"){if(U!==v)return C[T]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(U.equals(v)===!1)return U.copy(v),!0}}return!1}function p(M){const w=M.uniforms;let E=0;const C=16;for(let T=0,U=w.length;T<U;T++){const D=Array.isArray(w[T])?w[T]:[w[T]];for(let k=0,$=D.length;k<$;k++){const Q=D[k],z=Array.isArray(Q.value)?Q.value:[Q.value];for(let Z=0,W=z.length;Z<W;Z++){const j=z[Z],ne=d(j),ue=E%C,ce=ue%ne.boundary,ve=ue+ce;E+=ce,ve!==0&&C-ve<ne.storage&&(E+=C-ve),Q.__data=new Float32Array(ne.storage/Float32Array.BYTES_PER_ELEMENT),Q.__offset=E,E+=ne.storage}}}const v=E%C;return v>0&&(E+=C-v),M.__size=E,M.__cache={},this}function d(M){const w={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(w.boundary=4,w.storage=4):M.isVector2?(w.boundary=8,w.storage=8):M.isVector3||M.isColor?(w.boundary=16,w.storage=12):M.isVector4?(w.boundary=16,w.storage=16):M.isMatrix3?(w.boundary=48,w.storage=48):M.isMatrix4?(w.boundary=64,w.storage=64):M.isTexture?Ce("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(w.boundary=16,w.storage=M.byteLength):Ce("WebGLRenderer: Unsupported uniform value type.",M),w}function b(M){const w=M.target;w.removeEventListener("dispose",b);const E=s.indexOf(w.__bindingPointIndex);s.splice(E,1),i.deleteBuffer(a[w.id]),delete a[w.id],delete r[w.id]}function R(){for(const M in a)i.deleteBuffer(a[M]);s=[],a={},r={}}return{bind:c,update:l,dispose:R}}const _g=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let gn=null;function vg(){return gn===null&&(gn=new nd(_g,16,16,vi,Fn),gn.name="DFG_LUT",gn.minFilter=kt,gn.magFilter=kt,gn.wrapS=Ln,gn.wrapT=Ln,gn.generateMipmaps=!1,gn.needsUpdate=!0),gn}class xg{constructor(e={}){const{canvas:t=Lu(),context:n=null,depth:a=!0,stencil:r=!1,alpha:s=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1,outputBufferType:m=en}=e;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=n.getContextAttributes().alpha}else _=s;const y=m,p=new Set([qo,Yo,Xo]),d=new Set([en,En,wa,Aa,Ho,Wo]),b=new Uint32Array(4),R=new Int32Array(4),M=new P;let w=null,E=null;const C=[],v=[];let T=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Sn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const U=this;let D=!1,k=null,$=null,Q=null,z=null;this._outputColorSpace=$t;let Z=0,W=0,j=null,ne=-1,ue=null;const ce=new pt,ve=new pt;let Ze=null;const ct=new qe(0);let Je=0,q=t.width,oe=t.height,ie=1,Pe=null,Ue=null;const Re=new pt(0,0,q,oe),tt=new pt(0,0,q,oe);let He=!1;const be=new mh;let We=!1,Xe=!1;const ft=new mt,xt=new P,bt=new pt,Mt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ht=!1;function Oe(){return j===null?ie:1}let L=n;function Lt(x,N){return t.getContext(x,N)}try{const x={alpha:!0,depth:a,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Vo}`),t.addEventListener("webglcontextlost",gt,!1),t.addEventListener("webglcontextrestored",ot,!1),t.addEventListener("webglcontextcreationerror",dn,!1),L===null){const N="webgl2";if(L=Lt(N,x),L===null)throw Lt(N)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(x){throw $e("WebGLRenderer: "+x.message),x}let je,S,g,O,B,A,V,K,F,Y,te,de,ae,re,Se,Ae,Ne,I,le,J,he,ge,ee;function Ee(){je=new vm(L),je.init(),he=new cg(L,je),S=new hm(L,je,e,he),g=new og(L,je),S.reversedDepthBuffer&&h&&g.buffers.depth.setReversed(!0),$=L.createFramebuffer(),Q=L.createFramebuffer(),z=L.createFramebuffer(),O=new ym(L),B=new q0,A=new lg(L,je,g,B,S,he,O),V=new _m(U),K=new Ed(L),ge=new lm(L,K),F=new xm(L,K,O,ge),Y=new bm(L,F,K,ge,O),I=new Sm(L,S,A),Se=new um(B),te=new Y0(U,V,je,S,ge,Se),de=new mg(U,B),ae=new $0,re=new tg(je),Ne=new om(U,V,g,Y,_,c),Ae=new sg(U,Y,S),ee=new gg(L,O,S,g),le=new cm(L,je,O),J=new Mm(L,je,O),O.programs=te.programs,U.capabilities=S,U.extensions=je,U.properties=B,U.renderLists=ae,U.shadowMap=Ae,U.state=g,U.info=O}Ee(),y!==en&&(T=new Tm(y,t.width,t.height,o,a,r));const Me=new fg(U,L);this.xr=Me,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const x=je.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){const x=je.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return ie},this.setPixelRatio=function(x){x!==void 0&&(ie=x,this.setSize(q,oe,!1))},this.getSize=function(x){return x.set(q,oe)},this.setSize=function(x,N,X=!0){if(Me.isPresenting){Ce("WebGLRenderer: Can't change size while VR device is presenting.");return}q=x,oe=N,t.width=Math.floor(x*ie),t.height=Math.floor(N*ie),X===!0&&(t.style.width=x+"px",t.style.height=N+"px"),T!==null&&T.setSize(t.width,t.height),this.setViewport(0,0,x,N)},this.getDrawingBufferSize=function(x){return x.set(q*ie,oe*ie).floor()},this.setDrawingBufferSize=function(x,N,X){q=x,oe=N,ie=X,t.width=Math.floor(x*X),t.height=Math.floor(N*X),this.setViewport(0,0,x,N)},this.setEffects=function(x){if(y===en){$e("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(x){for(let N=0;N<x.length;N++)if(x[N].isOutputPass===!0){Ce("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(x||[])},this.getCurrentViewport=function(x){return x.copy(ce)},this.getViewport=function(x){return x.copy(Re)},this.setViewport=function(x,N,X,G){x.isVector4?Re.set(x.x,x.y,x.z,x.w):Re.set(x,N,X,G),g.viewport(ce.copy(Re).multiplyScalar(ie).round())},this.getScissor=function(x){return x.copy(tt)},this.setScissor=function(x,N,X,G){x.isVector4?tt.set(x.x,x.y,x.z,x.w):tt.set(x,N,X,G),g.scissor(ve.copy(tt).multiplyScalar(ie).round())},this.getScissorTest=function(){return He},this.setScissorTest=function(x){g.setScissorTest(He=x)},this.setOpaqueSort=function(x){Pe=x},this.setTransparentSort=function(x){Ue=x},this.getClearColor=function(x){return x.copy(Ne.getClearColor())},this.setClearColor=function(){Ne.setClearColor(...arguments)},this.getClearAlpha=function(){return Ne.getClearAlpha()},this.setClearAlpha=function(){Ne.setClearAlpha(...arguments)},this.clear=function(x=!0,N=!0,X=!0){let G=0;if(x){let H=!1;if(j!==null){const me=j.texture.format;H=p.has(me)}if(H){const me=j.texture.type,xe=d.has(me),pe=Ne.getClearColor(),ye=Ne.getClearAlpha(),Te=pe.r,Be=pe.g,Ge=pe.b;xe?(b[0]=Te,b[1]=Be,b[2]=Ge,b[3]=ye,L.clearBufferuiv(L.COLOR,0,b)):(R[0]=Te,R[1]=Be,R[2]=Ge,R[3]=ye,L.clearBufferiv(L.COLOR,0,R))}else G|=L.COLOR_BUFFER_BIT}N&&(G|=L.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),X&&(G|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G!==0&&L.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(x){x.setRenderer(this),k=x},this.dispose=function(){t.removeEventListener("webglcontextlost",gt,!1),t.removeEventListener("webglcontextrestored",ot,!1),t.removeEventListener("webglcontextcreationerror",dn,!1),Ne.dispose(),ae.dispose(),re.dispose(),B.dispose(),V.dispose(),Y.dispose(),ge.dispose(),ee.dispose(),te.dispose(),Me.dispose(),Me.removeEventListener("sessionstart",ml),Me.removeEventListener("sessionend",gl),ai.stop()};function gt(x){x.preventDefault(),Ir("WebGLRenderer: Context Lost."),D=!0}function ot(){Ir("WebGLRenderer: Context Restored."),D=!1;const x=O.autoReset,N=Ae.enabled,X=Ae.autoUpdate,G=Ae.needsUpdate,H=Ae.type;Ee(),O.autoReset=x,Ae.enabled=N,Ae.autoUpdate=X,Ae.needsUpdate=G,Ae.type=H}function dn(x){$e("WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function fn(x){const N=x.target;N.removeEventListener("dispose",fn),Bh(N)}function Bh(x){kh(x),B.remove(x)}function kh(x){const N=B.get(x).programs;N!==void 0&&(N.forEach(function(X){te.releaseProgram(X)}),x.isShaderMaterial&&te.releaseShaderCache(x))}this.renderBufferDirect=function(x,N,X,G,H,me){N===null&&(N=Mt);const xe=H.isMesh&&H.matrixWorld.determinantAffine()<0,pe=Gh(x,N,X,G,H);g.setMaterial(G,xe);let ye=X.index,Te=1;if(G.wireframe===!0){if(ye=F.getWireframeAttribute(X),ye===void 0)return;Te=2}const Be=X.drawRange,Ge=X.attributes.position;let we=Be.start*Te,nt=(Be.start+Be.count)*Te;me!==null&&(we=Math.max(we,me.start*Te),nt=Math.min(nt,(me.start+me.count)*Te)),ye!==null?(we=Math.max(we,0),nt=Math.min(nt,ye.count)):Ge!=null&&(we=Math.max(we,0),nt=Math.min(nt,Ge.count));const yt=nt-we;if(yt<0||yt===1/0)return;ge.setup(H,G,pe,X,ye);let _t,rt=le;if(ye!==null&&(_t=K.get(ye),rt=J,rt.setIndex(_t)),H.isMesh)G.wireframe===!0?(g.setLineWidth(G.wireframeLinewidth*Oe()),rt.setMode(L.LINES)):rt.setMode(L.TRIANGLES);else if(H.isLine){let Ft=G.linewidth;Ft===void 0&&(Ft=1),g.setLineWidth(Ft*Oe()),H.isLineSegments?rt.setMode(L.LINES):H.isLineLoop?rt.setMode(L.LINE_LOOP):rt.setMode(L.LINE_STRIP)}else H.isPoints?rt.setMode(L.POINTS):H.isSprite&&rt.setMode(L.TRIANGLES);if(H.isBatchedMesh)if(je.get("WEBGL_multi_draw"))rt.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const Ft=H._multiDrawStarts,_e=H._multiDrawCounts,Yt=H._multiDrawCount,Qe=ye?K.get(ye).bytesPerElement:1,Jt=B.get(G).currentProgram.getUniforms();for(let pn=0;pn<Yt;pn++)Jt.setValue(L,"_gl_DrawID",pn),rt.render(Ft[pn]/Qe,_e[pn])}else if(H.isInstancedMesh)rt.renderInstances(we,yt,H.count);else if(X.isInstancedBufferGeometry){const Ft=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,_e=Math.min(X.instanceCount,Ft);rt.renderInstances(we,yt,_e)}else rt.render(we,yt)};function pl(x,N,X){x.transparent===!0&&x.side===Pn&&x.forceSinglePass===!1?(x.side=Wt,x.needsUpdate=!0,Na(x,N,X),x.side=Nn,x.needsUpdate=!0,Na(x,N,X),x.side=Pn):Na(x,N,X)}this.compile=function(x,N,X=null){X===null&&(X=x),E=re.get(X),E.init(N),v.push(E),X.traverseVisible(function(H){H.isLight&&H.layers.test(N.layers)&&(E.pushLight(H),H.castShadow&&E.pushShadow(H))}),x!==X&&x.traverseVisible(function(H){H.isLight&&H.layers.test(N.layers)&&(E.pushLight(H),H.castShadow&&E.pushShadow(H))}),E.setupLights();const G=new Set;return x.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const me=H.material;if(me)if(Array.isArray(me))for(let xe=0;xe<me.length;xe++){const pe=me[xe];pl(pe,X,H),G.add(pe)}else pl(me,X,H),G.add(me)}),E=v.pop(),G},this.compileAsync=function(x,N,X=null){const G=this.compile(x,N,X);return new Promise(H=>{function me(){if(G.forEach(function(xe){B.get(xe).currentProgram.isReady()&&G.delete(xe)}),G.size===0){H(x);return}setTimeout(me,10)}je.get("KHR_parallel_shader_compile")!==null?me():setTimeout(me,10)})};let ts=null;function zh(x){ts&&ts(x)}function ml(){ai.stop()}function gl(){ai.start()}const ai=new yh;ai.setAnimationLoop(zh),typeof self<"u"&&ai.setContext(self),this.setAnimationLoop=function(x){ts=x,Me.setAnimationLoop(x),x===null?ai.stop():ai.start()},Me.addEventListener("sessionstart",ml),Me.addEventListener("sessionend",gl),this.render=function(x,N){if(N!==void 0&&N.isCamera!==!0){$e("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;k!==null&&k.renderStart(x,N);const X=Me.enabled===!0&&Me.isPresenting===!0,G=T!==null&&(j===null||X)&&T.begin(U,j);if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),Me.enabled===!0&&Me.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(Me.cameraAutoUpdate===!0&&Me.updateCamera(N),N=Me.getCamera()),x.isScene===!0&&x.onBeforeRender(U,x,N,j),E=re.get(x,v.length),E.init(N),E.state.textureUnits=A.getTextureUnits(),v.push(E),ft.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),be.setFromProjectionMatrix(ft,yn,N.reversedDepth),Xe=this.localClippingEnabled,We=Se.init(this.clippingPlanes,Xe),w=ae.get(x,C.length),w.init(),C.push(w),Me.enabled===!0&&Me.isPresenting===!0){const xe=U.xr.getDepthSensingMesh();xe!==null&&ns(xe,N,-1/0,U.sortObjects)}ns(x,N,0,U.sortObjects),w.finish(),U.sortObjects===!0&&w.sort(Pe,Ue,N.reversedDepth),ht=Me.enabled===!1||Me.isPresenting===!1||Me.hasDepthSensing()===!1,ht&&Ne.addToRenderList(w,x),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),We===!0&&Se.beginShadows();const H=E.state.shadowsArray;if(Ae.render(H,x,N),We===!0&&Se.endShadows(),(G&&T.hasRenderPass())===!1){const xe=w.opaque,pe=w.transmissive;if(E.setupLights(),N.isArrayCamera){const ye=N.cameras;if(pe.length>0)for(let Te=0,Be=ye.length;Te<Be;Te++){const Ge=ye[Te];vl(xe,pe,x,Ge)}ht&&Ne.render(x);for(let Te=0,Be=ye.length;Te<Be;Te++){const Ge=ye[Te];_l(w,x,Ge,Ge.viewport)}}else pe.length>0&&vl(xe,pe,x,N),ht&&Ne.render(x),_l(w,x,N)}j!==null&&W===0&&(A.updateMultisampleRenderTarget(j),A.updateRenderTargetMipmap(j)),G&&T.end(U),x.isScene===!0&&x.onAfterRender(U,x,N),ge.resetDefaultState(),ne=-1,ue=null,v.pop(),v.length>0?(E=v[v.length-1],A.setTextureUnits(E.state.textureUnits),We===!0&&Se.setGlobalState(U.clippingPlanes,E.state.camera)):E=null,C.pop(),C.length>0?w=C[C.length-1]:w=null,k!==null&&k.renderEnd()};function ns(x,N,X,G){if(x.visible===!1)return;if(x.layers.test(N.layers)){if(x.isGroup)X=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(N);else if(x.isLightProbeGrid)E.pushLightProbeGrid(x);else if(x.isLight)E.pushLight(x),x.castShadow&&E.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||be.intersectsSprite(x)){G&&bt.setFromMatrixPosition(x.matrixWorld).applyMatrix4(ft);const xe=Y.update(x),pe=x.material;pe.visible&&w.push(x,xe,pe,X,bt.z,null)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||be.intersectsObject(x))){const xe=Y.update(x),pe=x.material;if(G&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),bt.copy(x.boundingSphere.center)):(xe.boundingSphere===null&&xe.computeBoundingSphere(),bt.copy(xe.boundingSphere.center)),bt.applyMatrix4(x.matrixWorld).applyMatrix4(ft)),Array.isArray(pe)){const ye=xe.groups;for(let Te=0,Be=ye.length;Te<Be;Te++){const Ge=ye[Te],we=pe[Ge.materialIndex];we&&we.visible&&w.push(x,xe,we,X,bt.z,Ge)}}else pe.visible&&w.push(x,xe,pe,X,bt.z,null)}}const me=x.children;for(let xe=0,pe=me.length;xe<pe;xe++)ns(me[xe],N,X,G)}function _l(x,N,X,G){const{opaque:H,transmissive:me,transparent:xe}=x;E.setupLightsView(X),We===!0&&Se.setGlobalState(U.clippingPlanes,X),G&&g.viewport(ce.copy(G)),H.length>0&&Ua(H,N,X),me.length>0&&Ua(me,N,X),xe.length>0&&Ua(xe,N,X),g.buffers.depth.setTest(!0),g.buffers.depth.setMask(!0),g.buffers.color.setMask(!0),g.setPolygonOffset(!1)}function vl(x,N,X,G){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[G.id]===void 0){const we=je.has("EXT_color_buffer_half_float")||je.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[G.id]=new bn(1,1,{generateMipmaps:!0,type:we?Fn:en,minFilter:ui,samples:Math.max(4,S.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ke.workingColorSpace})}const me=E.state.transmissionRenderTarget[G.id],xe=G.viewport||ce;me.setSize(xe.z*U.transmissionResolutionScale,xe.w*U.transmissionResolutionScale);const pe=U.getRenderTarget(),ye=U.getActiveCubeFace(),Te=U.getActiveMipmapLevel();U.setRenderTarget(me),U.getClearColor(ct),Je=U.getClearAlpha(),Je<1&&U.setClearColor(16777215,.5),U.clear(),ht&&Ne.render(X);const Be=U.toneMapping;U.toneMapping=Sn;const Ge=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),E.setupLightsView(G),We===!0&&Se.setGlobalState(U.clippingPlanes,G),Ua(x,X,G),A.updateMultisampleRenderTarget(me),A.updateRenderTargetMipmap(me),je.has("WEBGL_multisampled_render_to_texture")===!1){let we=!1;for(let nt=0,yt=N.length;nt<yt;nt++){const _t=N[nt],{object:rt,geometry:Ft,material:_e,group:Yt}=_t;if(_e.side===Pn&&rt.layers.test(G.layers)){const Qe=_e.side;_e.side=Wt,_e.needsUpdate=!0,xl(rt,X,G,Ft,_e,Yt),_e.side=Qe,_e.needsUpdate=!0,we=!0}}we===!0&&(A.updateMultisampleRenderTarget(me),A.updateRenderTargetMipmap(me))}U.setRenderTarget(pe,ye,Te),U.setClearColor(ct,Je),Ge!==void 0&&(G.viewport=Ge),U.toneMapping=Be}function Ua(x,N,X){const G=N.isScene===!0?N.overrideMaterial:null;for(let H=0,me=x.length;H<me;H++){const xe=x[H],{object:pe,geometry:ye,group:Te}=xe;let Be=xe.material;Be.allowOverride===!0&&G!==null&&(Be=G),pe.layers.test(X.layers)&&xl(pe,N,X,ye,Be,Te)}}function xl(x,N,X,G,H,me){x.onBeforeRender(U,N,X,G,H,me),x.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),H.onBeforeRender(U,N,X,G,x,me),H.transparent===!0&&H.side===Pn&&H.forceSinglePass===!1?(H.side=Wt,H.needsUpdate=!0,U.renderBufferDirect(X,N,G,H,x,me),H.side=Nn,H.needsUpdate=!0,U.renderBufferDirect(X,N,G,H,x,me),H.side=Pn):U.renderBufferDirect(X,N,G,H,x,me),x.onAfterRender(U,N,X,G,H,me)}function Na(x,N,X){N.isScene!==!0&&(N=Mt);const G=B.get(x),H=E.state.lights,me=E.state.shadowsArray,xe=H.state.version,pe=te.getParameters(x,H.state,me,N,X,E.state.lightProbeGridArray),ye=te.getProgramCacheKey(pe);let Te=G.programs;G.environment=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?N.environment:null,G.fog=N.fog;const Be=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap;G.envMap=V.get(x.envMap||G.environment,Be),G.envMapRotation=G.environment!==null&&x.envMap===null?N.environmentRotation:x.envMapRotation,Te===void 0&&(x.addEventListener("dispose",fn),Te=new Map,G.programs=Te);let Ge=Te.get(ye);if(Ge!==void 0){if(G.currentProgram===Ge&&G.lightsStateVersion===xe)return yl(x,pe),Ge}else pe.uniforms=te.getUniforms(x),k!==null&&x.isNodeMaterial&&k.build(x,X,pe),x.onBeforeCompile(pe,U),Ge=te.acquireProgram(pe,ye),Te.set(ye,Ge),G.uniforms=pe.uniforms;const we=G.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(we.clippingPlanes=Se.uniform),yl(x,pe),G.needsLights=Wh(x),G.lightsStateVersion=xe,G.needsLights&&(we.ambientLightColor.value=H.state.ambient,we.lightProbe.value=H.state.probe,we.directionalLights.value=H.state.directional,we.directionalLightShadows.value=H.state.directionalShadow,we.spotLights.value=H.state.spot,we.spotLightShadows.value=H.state.spotShadow,we.rectAreaLights.value=H.state.rectArea,we.ltc_1.value=H.state.rectAreaLTC1,we.ltc_2.value=H.state.rectAreaLTC2,we.pointLights.value=H.state.point,we.pointLightShadows.value=H.state.pointShadow,we.hemisphereLights.value=H.state.hemi,we.directionalShadowMatrix.value=H.state.directionalShadowMatrix,we.spotLightMatrix.value=H.state.spotLightMatrix,we.spotLightMap.value=H.state.spotLightMap,we.pointShadowMatrix.value=H.state.pointShadowMatrix),G.lightProbeGrid=E.state.lightProbeGridArray.length>0,G.currentProgram=Ge,G.uniformsList=null,Ge}function Ml(x){if(x.uniformsList===null){const N=x.currentProgram.getUniforms();x.uniformsList=br.seqWithValue(N.seq,x.uniforms)}return x.uniformsList}function yl(x,N){const X=B.get(x);X.outputColorSpace=N.outputColorSpace,X.batching=N.batching,X.batchingColor=N.batchingColor,X.instancing=N.instancing,X.instancingColor=N.instancingColor,X.instancingMorph=N.instancingMorph,X.skinning=N.skinning,X.morphTargets=N.morphTargets,X.morphNormals=N.morphNormals,X.morphColors=N.morphColors,X.morphTargetsCount=N.morphTargetsCount,X.numClippingPlanes=N.numClippingPlanes,X.numIntersection=N.numClipIntersection,X.vertexAlphas=N.vertexAlphas,X.vertexTangents=N.vertexTangents,X.toneMapping=N.toneMapping}function Vh(x,N){if(x.length===0)return null;if(x.length===1)return x[0].texture!==null?x[0]:null;M.setFromMatrixPosition(N.matrixWorld);for(let X=0,G=x.length;X<G;X++){const H=x[X];if(H.texture!==null&&H.boundingBox.containsPoint(M))return H}return null}function Gh(x,N,X,G,H){N.isScene!==!0&&(N=Mt),A.resetTextureUnits();const me=N.fog,xe=G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial?N.environment:null,pe=j===null?U.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:Ke.workingColorSpace,ye=G.isMeshStandardMaterial||G.isMeshLambertMaterial&&!G.envMap||G.isMeshPhongMaterial&&!G.envMap,Te=V.get(G.envMap||xe,ye),Be=G.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Ge=!!X.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),we=!!X.morphAttributes.position,nt=!!X.morphAttributes.normal,yt=!!X.morphAttributes.color;let _t=Sn;G.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(_t=U.toneMapping);const rt=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Ft=rt!==void 0?rt.length:0,_e=B.get(G),Yt=E.state.lights;if(We===!0&&(Xe===!0||x!==ue)){const lt=x===ue&&G.id===ne;Se.setState(G,x,lt)}let Qe=!1;G.version===_e.__version?(_e.needsLights&&_e.lightsStateVersion!==Yt.state.version||_e.outputColorSpace!==pe||H.isBatchedMesh&&_e.batching===!1||!H.isBatchedMesh&&_e.batching===!0||H.isBatchedMesh&&_e.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&_e.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&_e.instancing===!1||!H.isInstancedMesh&&_e.instancing===!0||H.isSkinnedMesh&&_e.skinning===!1||!H.isSkinnedMesh&&_e.skinning===!0||H.isInstancedMesh&&_e.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&_e.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&_e.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&_e.instancingMorph===!1&&H.morphTexture!==null||_e.envMap!==Te||G.fog===!0&&_e.fog!==me||_e.numClippingPlanes!==void 0&&(_e.numClippingPlanes!==Se.numPlanes||_e.numIntersection!==Se.numIntersection)||_e.vertexAlphas!==Be||_e.vertexTangents!==Ge||_e.morphTargets!==we||_e.morphNormals!==nt||_e.morphColors!==yt||_e.toneMapping!==_t||_e.morphTargetsCount!==Ft||!!_e.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(Qe=!0):(Qe=!0,_e.__version=G.version);let Jt=_e.currentProgram;Qe===!0&&(Jt=Na(G,N,H),k&&G.isNodeMaterial&&k.onUpdateProgram(G,Jt,_e));let pn=!1,Vn=!1,Si=!1;const st=Jt.getUniforms(),St=_e.uniforms;if(g.useProgram(Jt.program)&&(pn=!0,Vn=!0,Si=!0),G.id!==ne&&(ne=G.id,Vn=!0),_e.needsLights){const lt=Vh(E.state.lightProbeGridArray,H);_e.lightProbeGrid!==lt&&(_e.lightProbeGrid=lt,Vn=!0)}if(pn||ue!==x){g.buffers.depth.getReversed()&&x.reversedDepth!==!0&&(x._reversedDepth=!0,x.updateProjectionMatrix()),st.setValue(L,"projectionMatrix",x.projectionMatrix),st.setValue(L,"viewMatrix",x.matrixWorldInverse);const Hn=st.map.cameraPosition;Hn!==void 0&&Hn.setValue(L,xt.setFromMatrixPosition(x.matrixWorld)),S.logarithmicDepthBuffer&&st.setValue(L,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&st.setValue(L,"isOrthographic",x.isOrthographicCamera===!0),ue!==x&&(ue=x,Vn=!0,Si=!0)}if(_e.needsLights&&(Yt.state.directionalShadowMap.length>0&&st.setValue(L,"directionalShadowMap",Yt.state.directionalShadowMap,A),Yt.state.spotShadowMap.length>0&&st.setValue(L,"spotShadowMap",Yt.state.spotShadowMap,A),Yt.state.pointShadowMap.length>0&&st.setValue(L,"pointShadowMap",Yt.state.pointShadowMap,A)),H.isSkinnedMesh){st.setOptional(L,H,"bindMatrix"),st.setOptional(L,H,"bindMatrixInverse");const lt=H.skeleton;lt&&(lt.boneTexture===null&&lt.computeBoneTexture(),st.setValue(L,"boneTexture",lt.boneTexture,A))}H.isBatchedMesh&&(st.setOptional(L,H,"batchingTexture"),st.setValue(L,"batchingTexture",H._matricesTexture,A),st.setOptional(L,H,"batchingIdTexture"),st.setValue(L,"batchingIdTexture",H._indirectTexture,A),st.setOptional(L,H,"batchingColorTexture"),H._colorsTexture!==null&&st.setValue(L,"batchingColorTexture",H._colorsTexture,A));const Gn=X.morphAttributes;if((Gn.position!==void 0||Gn.normal!==void 0||Gn.color!==void 0)&&I.update(H,X,Jt),(Vn||_e.receiveShadow!==H.receiveShadow)&&(_e.receiveShadow=H.receiveShadow,st.setValue(L,"receiveShadow",H.receiveShadow)),(G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial)&&G.envMap===null&&N.environment!==null&&(St.envMapIntensity.value=N.environmentIntensity),St.dfgLUT!==void 0&&(St.dfgLUT.value=vg()),Vn){if(st.setValue(L,"toneMappingExposure",U.toneMappingExposure),_e.needsLights&&Hh(St,Si),me&&G.fog===!0&&de.refreshFogUniforms(St,me),de.refreshMaterialUniforms(St,G,ie,oe,E.state.transmissionRenderTarget[x.id]),_e.needsLights&&_e.lightProbeGrid){const lt=_e.lightProbeGrid;St.probesSH.value=lt.texture,St.probesMin.value.copy(lt.boundingBox.min),St.probesMax.value.copy(lt.boundingBox.max),St.probesResolution.value.copy(lt.resolution)}br.upload(L,Ml(_e),St,A)}if(G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(br.upload(L,Ml(_e),St,A),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&st.setValue(L,"center",H.center),st.setValue(L,"modelViewMatrix",H.modelViewMatrix),st.setValue(L,"normalMatrix",H.normalMatrix),st.setValue(L,"modelMatrix",H.matrixWorld),G.uniformsGroups!==void 0){const lt=G.uniformsGroups;for(let Hn=0,bi=lt.length;Hn<bi;Hn++){const Sl=lt[Hn];ee.update(Sl,Jt),ee.bind(Sl,Jt)}}return Jt}function Hh(x,N){x.ambientLightColor.needsUpdate=N,x.lightProbe.needsUpdate=N,x.directionalLights.needsUpdate=N,x.directionalLightShadows.needsUpdate=N,x.pointLights.needsUpdate=N,x.pointLightShadows.needsUpdate=N,x.spotLights.needsUpdate=N,x.spotLightShadows.needsUpdate=N,x.rectAreaLights.needsUpdate=N,x.hemisphereLights.needsUpdate=N}function Wh(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return Z},this.getActiveMipmapLevel=function(){return W},this.getRenderTarget=function(){return j},this.setRenderTargetTextures=function(x,N,X){const G=B.get(x);G.__autoAllocateDepthBuffer=x.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),B.get(x.texture).__webglTexture=N,B.get(x.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:X,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(x,N){const X=B.get(x);X.__webglFramebuffer=N,X.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(x,N=0,X=0){j=x,Z=N,W=X;let G=null,H=!1,me=!1;if(x){const pe=B.get(x);if(pe.__useDefaultFramebuffer!==void 0){g.bindFramebuffer(L.FRAMEBUFFER,pe.__webglFramebuffer),ce.copy(x.viewport),ve.copy(x.scissor),Ze=x.scissorTest,g.viewport(ce),g.scissor(ve),g.setScissorTest(Ze),ne=-1;return}else if(pe.__webglFramebuffer===void 0)A.setupRenderTarget(x);else if(pe.__hasExternalTextures)A.rebindTextures(x,B.get(x.texture).__webglTexture,B.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){const Be=x.depthTexture;if(pe.__boundDepthTexture!==Be){if(Be!==null&&B.has(Be)&&(x.width!==Be.image.width||x.height!==Be.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(x)}}const ye=x.texture;(ye.isData3DTexture||ye.isDataArrayTexture||ye.isCompressedArrayTexture)&&(me=!0);const Te=B.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(Te[N])?G=Te[N][X]:G=Te[N],H=!0):x.samples>0&&A.useMultisampledRTT(x)===!1?G=B.get(x).__webglMultisampledFramebuffer:Array.isArray(Te)?G=Te[X]:G=Te,ce.copy(x.viewport),ve.copy(x.scissor),Ze=x.scissorTest}else ce.copy(Re).multiplyScalar(ie).floor(),ve.copy(tt).multiplyScalar(ie).floor(),Ze=He;if(X!==0&&(G=$),g.bindFramebuffer(L.FRAMEBUFFER,G)&&g.drawBuffers(x,G),g.viewport(ce),g.scissor(ve),g.setScissorTest(Ze),H){const pe=B.get(x.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+N,pe.__webglTexture,X)}else if(me){const pe=N;for(let ye=0;ye<x.textures.length;ye++){const Te=B.get(x.textures[ye]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+ye,Te.__webglTexture,X,pe)}}else if(x!==null&&X!==0){const pe=B.get(x.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,pe.__webglTexture,X)}ne=-1},this.readRenderTargetPixels=function(x,N,X,G,H,me,xe,pe=0){if(!(x&&x.isWebGLRenderTarget)){$e("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ye=B.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&xe!==void 0&&(ye=ye[xe]),ye){g.bindFramebuffer(L.FRAMEBUFFER,ye);try{const Te=x.textures[pe],Be=Te.format,Ge=Te.type;if(x.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+pe),!S.textureFormatReadable(Be)){$e("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!S.textureTypeReadable(Ge)){$e("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=x.width-G&&X>=0&&X<=x.height-H&&L.readPixels(N,X,G,H,he.convert(Be),he.convert(Ge),me)}finally{const Te=j!==null?B.get(j).__webglFramebuffer:null;g.bindFramebuffer(L.FRAMEBUFFER,Te)}}},this.readRenderTargetPixelsAsync=async function(x,N,X,G,H,me,xe,pe=0){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ye=B.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&xe!==void 0&&(ye=ye[xe]),ye)if(N>=0&&N<=x.width-G&&X>=0&&X<=x.height-H){g.bindFramebuffer(L.FRAMEBUFFER,ye);const Te=x.textures[pe],Be=Te.format,Ge=Te.type;if(x.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+pe),!S.textureFormatReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!S.textureTypeReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const we=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,we),L.bufferData(L.PIXEL_PACK_BUFFER,me.byteLength,L.STREAM_READ),L.readPixels(N,X,G,H,he.convert(Be),he.convert(Ge),0);const nt=j!==null?B.get(j).__webglFramebuffer:null;g.bindFramebuffer(L.FRAMEBUFFER,nt);const yt=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Du(L,yt,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,we),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,me),L.deleteBuffer(we),L.deleteSync(yt),me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(x,N=null,X=0){const G=Math.pow(2,-X),H=Math.floor(x.image.width*G),me=Math.floor(x.image.height*G),xe=N!==null?N.x:0,pe=N!==null?N.y:0;A.setTexture2D(x,0),L.copyTexSubImage2D(L.TEXTURE_2D,X,0,0,xe,pe,H,me),g.unbindTexture()},this.copyTextureToTexture=function(x,N,X=null,G=null,H=0,me=0){let xe,pe,ye,Te,Be,Ge,we,nt,yt;const _t=x.isCompressedTexture?x.mipmaps[me]:x.image;if(X!==null)xe=X.max.x-X.min.x,pe=X.max.y-X.min.y,ye=X.isBox3?X.max.z-X.min.z:1,Te=X.min.x,Be=X.min.y,Ge=X.isBox3?X.min.z:0;else{const St=Math.pow(2,-H);xe=Math.floor(_t.width*St),pe=Math.floor(_t.height*St),x.isDataArrayTexture?ye=_t.depth:x.isData3DTexture?ye=Math.floor(_t.depth*St):ye=1,Te=0,Be=0,Ge=0}G!==null?(we=G.x,nt=G.y,yt=G.z):(we=0,nt=0,yt=0);const rt=he.convert(N.format),Ft=he.convert(N.type);let _e;N.isData3DTexture?(A.setTexture3D(N,0),_e=L.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(A.setTexture2DArray(N,0),_e=L.TEXTURE_2D_ARRAY):(A.setTexture2D(N,0),_e=L.TEXTURE_2D),g.activeTexture(L.TEXTURE0),g.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,N.flipY),g.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),g.pixelStorei(L.UNPACK_ALIGNMENT,N.unpackAlignment);const Yt=g.getParameter(L.UNPACK_ROW_LENGTH),Qe=g.getParameter(L.UNPACK_IMAGE_HEIGHT),Jt=g.getParameter(L.UNPACK_SKIP_PIXELS),pn=g.getParameter(L.UNPACK_SKIP_ROWS),Vn=g.getParameter(L.UNPACK_SKIP_IMAGES);g.pixelStorei(L.UNPACK_ROW_LENGTH,_t.width),g.pixelStorei(L.UNPACK_IMAGE_HEIGHT,_t.height),g.pixelStorei(L.UNPACK_SKIP_PIXELS,Te),g.pixelStorei(L.UNPACK_SKIP_ROWS,Be),g.pixelStorei(L.UNPACK_SKIP_IMAGES,Ge);const Si=x.isDataArrayTexture||x.isData3DTexture,st=N.isDataArrayTexture||N.isData3DTexture;if(x.isDepthTexture){const St=B.get(x),Gn=B.get(N),lt=B.get(St.__renderTarget),Hn=B.get(Gn.__renderTarget);g.bindFramebuffer(L.READ_FRAMEBUFFER,lt.__webglFramebuffer),g.bindFramebuffer(L.DRAW_FRAMEBUFFER,Hn.__webglFramebuffer);for(let bi=0;bi<ye;bi++)Si&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,B.get(x).__webglTexture,H,Ge+bi),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,B.get(N).__webglTexture,me,yt+bi)),L.blitFramebuffer(Te,Be,xe,pe,we,nt,xe,pe,L.DEPTH_BUFFER_BIT,L.NEAREST);g.bindFramebuffer(L.READ_FRAMEBUFFER,null),g.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(H!==0||x.isRenderTargetTexture||B.has(x)){const St=B.get(x),Gn=B.get(N);g.bindFramebuffer(L.READ_FRAMEBUFFER,Q),g.bindFramebuffer(L.DRAW_FRAMEBUFFER,z);for(let lt=0;lt<ye;lt++)Si?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,St.__webglTexture,H,Ge+lt):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,St.__webglTexture,H),st?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Gn.__webglTexture,me,yt+lt):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Gn.__webglTexture,me),H!==0?L.blitFramebuffer(Te,Be,xe,pe,we,nt,xe,pe,L.COLOR_BUFFER_BIT,L.NEAREST):st?L.copyTexSubImage3D(_e,me,we,nt,yt+lt,Te,Be,xe,pe):L.copyTexSubImage2D(_e,me,we,nt,Te,Be,xe,pe);g.bindFramebuffer(L.READ_FRAMEBUFFER,null),g.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else st?x.isDataTexture||x.isData3DTexture?L.texSubImage3D(_e,me,we,nt,yt,xe,pe,ye,rt,Ft,_t.data):N.isCompressedArrayTexture?L.compressedTexSubImage3D(_e,me,we,nt,yt,xe,pe,ye,rt,_t.data):L.texSubImage3D(_e,me,we,nt,yt,xe,pe,ye,rt,Ft,_t):x.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,me,we,nt,xe,pe,rt,Ft,_t.data):x.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,me,we,nt,_t.width,_t.height,rt,_t.data):L.texSubImage2D(L.TEXTURE_2D,me,we,nt,xe,pe,rt,Ft,_t);g.pixelStorei(L.UNPACK_ROW_LENGTH,Yt),g.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Qe),g.pixelStorei(L.UNPACK_SKIP_PIXELS,Jt),g.pixelStorei(L.UNPACK_SKIP_ROWS,pn),g.pixelStorei(L.UNPACK_SKIP_IMAGES,Vn),me===0&&N.generateMipmaps&&L.generateMipmap(_e),g.unbindTexture()},this.initRenderTarget=function(x){B.get(x).__webglFramebuffer===void 0&&A.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?A.setTextureCube(x,0):x.isData3DTexture?A.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?A.setTexture2DArray(x,0):A.setTexture2D(x,0),g.unbindTexture()},this.resetState=function(){Z=0,W=0,j=null,g.reset(),ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return yn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ke._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ke._getUnpackColorSpace()}}const Lc={type:"change"},tl={type:"start"},Ch={type:"end"},ur=new qr,Dc=new jn,Mg=Math.cos(70*Nu.DEG2RAD),wt=new P,Ht=2*Math.PI,at={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},ks=1e-6;class yg extends Sd{constructor(e,t=null){super(e,t),this.state=at.NONE,this.target=new P,this.cursor=new P,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Xi.ROTATE,MIDDLE:Xi.DOLLY,RIGHT:Xi.PAN},this.touches={ONE:Wi.ROTATE,TWO:Wi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new P,this._lastQuaternion=new un,this._lastTargetPosition=new P,this._quat=new un().setFromUnitVectors(e.up,new P(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new rc,this._sphericalDelta=new rc,this._scale=1,this._panOffset=new P,this._rotateStart=new Le,this._rotateEnd=new Le,this._rotateDelta=new Le,this._panStart=new Le,this._panEnd=new Le,this._panDelta=new Le,this._dollyStart=new Le,this._dollyEnd=new Le,this._dollyDelta=new Le,this._dollyDirection=new P,this._mouse=new Le,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=bg.bind(this),this._onPointerDown=Sg.bind(this),this._onPointerUp=Eg.bind(this),this._onContextMenu=Lg.bind(this),this._onMouseWheel=Ag.bind(this),this._onKeyDown=Rg.bind(this),this._onTouchStart=Cg.bind(this),this._onTouchMove=Pg.bind(this),this._onMouseDown=Tg.bind(this),this._onMouseMove=wg.bind(this),this._interceptControlDown=Dg.bind(this),this._interceptControlUp=Ig.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction=""}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Lc),this.update(),this.state=at.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){const t=this.object.position;wt.copy(t).sub(this.target),wt.applyQuaternion(this._quat),this._spherical.setFromVector3(wt),this.autoRotate&&this.state===at.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,a=this.maxAzimuthAngle;isFinite(n)&&isFinite(a)&&(n<-Math.PI?n+=Ht:n>Math.PI&&(n-=Ht),a<-Math.PI?a+=Ht:a>Math.PI&&(a-=Ht),n<=a?this._spherical.theta=Math.max(n,Math.min(a,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+a)/2?Math.max(n,this._spherical.theta):Math.min(a,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const s=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=s!=this._spherical.radius}if(wt.setFromSpherical(this._spherical),wt.applyQuaternion(this._quatInverse),t.copy(this.target).add(wt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let s=null;if(this.object.isPerspectiveCamera){const o=wt.length();s=this._clampDistance(o*this._scale);const c=o-s;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){const o=new P(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;const l=new P(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(o),this.object.updateMatrixWorld(),s=wt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;s!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(s).add(this.object.position):(ur.origin.copy(this.object.position),ur.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(ur.direction))<Mg?this.object.lookAt(this.target):(Dc.setFromNormalAndCoplanarPoint(this.object.up,this.target),ur.intersectPlane(Dc,this.target))))}else if(this.object.isOrthographicCamera){const s=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),s!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>ks||8*(1-this._lastQuaternion.dot(this.object.quaternion))>ks||this._lastTargetPosition.distanceToSquared(this.target)>ks?(this.dispatchEvent(Lc),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Ht/60*this.autoRotateSpeed*e:Ht/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){wt.setFromMatrixColumn(t,0),wt.multiplyScalar(-e),this._panOffset.add(wt)}_panUp(e,t){this.screenSpacePanning===!0?wt.setFromMatrixColumn(t,1):(wt.setFromMatrixColumn(t,0),wt.crossVectors(this.object.up,wt)),wt.multiplyScalar(e),this._panOffset.add(wt)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const a=this.object.position;wt.copy(a).sub(this.target);let r=wt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),a=e-n.left,r=t-n.top,s=n.width,o=n.height;this._mouse.x=a/s*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Ht*this._rotateDelta.x/t.clientHeight),this._rotateUp(Ht*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Ht*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Ht*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Ht*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Ht*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),a=.5*(e.pageY+t.y);this._rotateStart.set(n,a)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),a=.5*(e.pageY+t.y);this._panStart.set(n,a)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,a=e.pageY-t.y,r=Math.sqrt(n*n+a*a);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),a=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(a,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Ht*this._rotateDelta.x/t.clientHeight),this._rotateUp(Ht*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),a=.5*(e.pageY+t.y);this._panEnd.set(n,a)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,a=e.pageY-t.y,r=Math.sqrt(n*n+a*a);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const s=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(s,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Le,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function Sg(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function bg(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function Eg(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Ch),this.state=at.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function Tg(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Xi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=at.DOLLY;break;case Xi.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=at.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=at.ROTATE}break;case Xi.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=at.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=at.PAN}break;default:this.state=at.NONE}this.state!==at.NONE&&this.dispatchEvent(tl)}function wg(i){switch(this.state){case at.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case at.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case at.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function Ag(i){this.enabled===!1||this.enableZoom===!1||this.state!==at.NONE||(i.preventDefault(),this.dispatchEvent(tl),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Ch))}function Rg(i){this.enabled!==!1&&this._handleKeyDown(i)}function Cg(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Wi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=at.TOUCH_ROTATE;break;case Wi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=at.TOUCH_PAN;break;default:this.state=at.NONE}break;case 2:switch(this.touches.TWO){case Wi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=at.TOUCH_DOLLY_PAN;break;case Wi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=at.TOUCH_DOLLY_ROTATE;break;default:this.state=at.NONE}break;default:this.state=at.NONE}this.state!==at.NONE&&this.dispatchEvent(tl)}function Pg(i){switch(this._trackPointer(i),this.state){case at.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case at.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case at.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case at.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=at.NONE}}function Lg(i){this.enabled!==!1&&i.preventDefault()}function Dg(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Ig(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const Ug=`uniform float uFlat, uLon0;
  vec3 hfSphere(float lat, float lon, float r) {
    float phi = radians(90.0 - lat), th = radians(lon + 180.0);
    return vec3(-r * cos(th) * sin(phi), r * cos(phi), r * sin(th) * sin(phi));
  }
  vec2 hfEqualEarth(float lat, float lon) {
    float lam = radians(mod(lon - uLon0 + 540.0, 360.0) - 180.0);
    float th = asin(0.8660254 * sin(radians(lat)));
    float t2 = th * th, t6 = t2 * t2 * t2;
    const float A1 = 1.340264, A2 = -0.081106, A3 = 0.000893, A4 = 0.003796;
    float x = 2.0 * 1.7320508 * lam * cos(th) / (3.0 * (A1 + 3.0 * A2 * t2 + t6 * (7.0 * A3 + 9.0 * A4 * t2)));
    float y = th * (A1 + A2 * t2 + t6 * (A3 + A4 * t2));
    return vec2(x, y) * 0.800;
  }
  // The map lies in the plane facing the globe's point (0, uLon0); this rotation takes map-plane
  // coordinates (x east, y north, z out) into world space.
  mat3 hfMapRot() {
    float psi = radians(uLon0 + 90.0), c = cos(psi), s = sin(psi);
    return mat3(c, 0.0, -s,  0.0, 1.0, 0.0,  s, 0.0, c);
  }
  // Map-plane coordinates for a point (before rotation): Equal Earth x, y, and height. The sheet is
  // tangent to the globe at its centre (z = 1), so the map's middle never moves during the morph.
  vec3 hfSheet(float lat, float lon, float r) { return vec3(hfEqualEarth(lat, lon), r); }
  // Between map (uFlat = 1) and globe (0) the sheet rolls around a sphere whose radius shrinks
  // from infinite to one: the near face stays put and the edges fold away behind it.
  vec3 hfPosition(float lat, float lon, float r) {
    float s = 1.0 - uFlat;
    if (s >= 0.9995) return hfSphere(lat, lon, r);
    vec3 f = hfSheet(lat, lon, r);
    if (s < 0.0005) return hfMapRot() * f;
    float lam = radians(mod(lon - uLon0 + 540.0, 360.0) - 180.0), phi = radians(lat);
    float a = mix(f.x, lam, s) * s, b = mix(f.y, phi, s) * s;
    float R = 1.0 / s;
    vec3 dir = vec3(sin(a) * cos(b), sin(b), cos(a) * cos(b));
    return hfMapRot() * (vec3(0.0, 0.0, 1.0 - R) + dir * (R + r - 1.0));
  }
  vec3 hfNormal(float lat, float lon) {
    float s = 1.0 - uFlat;
    if (s >= 0.9995) return hfSphere(lat, lon, 1.0);
    if (s < 0.0005) return hfMapRot() * vec3(0.0, 0.0, 1.0);
    float lam = radians(mod(lon - uLon0 + 540.0, 360.0) - 180.0), phi = radians(lat);
    vec2 f = hfEqualEarth(lat, lon);
    float a = mix(f.x, lam, s) * s, b = mix(f.y, phi, s) * s;
    return hfMapRot() * vec3(sin(a) * cos(b), sin(b), cos(a) * cos(b));
  }
  // Local frame (east, north, up) at a point, blended between sphere and map.
  mat3 hfFrame(float lat, float lon) {
    vec3 up = hfSphere(lat, lon, 1.0);
    vec3 east = normalize(cross(vec3(0.0, 1.0, 0.0), up));
    vec3 north = cross(up, east);
    mat3 M = hfMapRot();
    return mat3(mix(east, M * vec3(1.0, 0.0, 0.0), uFlat), mix(north, vec3(0.0, 1.0, 0.0), uFlat), mix(up, M * vec3(0.0, 0.0, 1.0), uFlat));
  }
`,Ng=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Fg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Og=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Bg=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,kg=`
  \${wu}
  attribute vec2 aLatLon; // lat, longitude relative to the map's centre
  varying vec2 vUv; varying vec3 vNormal; varying vec3 vView;
  void main() {
    float lon = uLon0 + aLatLon.y;
    vUv = vec2((lon + 180.0) / 360.0, uv.y); // may leave 0..1; the texture repeats
    vNormal = normalize(normalMatrix * hfNormal(aLatLon.x, lon));
    vec4 mv = modelViewMatrix * vec4(hfPosition(aLatLon.x, lon, 1.0), 1.0);
    vView = -mv.xyz;
    gl_Position = projectionMatrix * mv;
  }`,zg=`
  uniform sampler2D uLand, uRelief; uniform float uFlat;
  varying vec2 vUv; varying vec3 vNormal; varying vec3 vView;
  void main() {
    vec4 land = texture2D(uLand, vUv);
    float relief = texture2D(uRelief, vUv).r;          // shaded relief, mid-grey on flat ground
    vec3 ocean = vec3(0.020, 0.030, 0.062);
    vec3 soil  = vec3(0.075, 0.088, 0.115) * (0.55 + 0.9 * relief) + vec3(0.06, 0.05, 0.03) * smoothstep(0.6, 1.0, relief);
    vec3 c = mix(ocean, soil, smoothstep(0.3, 0.7, land.r));
    c += vec3(0.18, 0.22, 0.30) * land.g * 0.7;
    float facing = max(dot(normalize(vNormal), normalize(vView)), 0.0);
    float rim = pow(1.0 - facing, 3.0) * (1.0 - uFlat);
    c += vec3(0.10, 0.20, 0.42) * rim * 0.7;
    c *= 0.75 + 0.25 * facing;
    gl_FragColor = vec4(c, 1.0);
  }`,Vg=`
  varying vec3 vNormal; varying vec3 vView;
  void main() {
    vNormal = normalize(normalMatrix * normal);
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    vView = -mv.xyz;
    gl_Position = projectionMatrix * mv;
  }`,Gg=`
  uniform float uFlash, uFlat;
  varying vec3 vNormal; varying vec3 vView;
  void main() {
    float f = max(dot(normalize(vNormal), normalize(vView)), 0.0);
    float glow = pow(1.0 - f, 4.5) * smoothstep(0.0, 0.25, f) * (1.0 - uFlat);
    vec3 c = mix(vec3(0.30, 0.50, 1.0), vec3(1.0, 0.75, 0.55), uFlash) * glow * (1.0 + 1.5 * uFlash);
    gl_FragColor = vec4(c, 1.0);
  }`,Hg=`
  \${wu}
  uniform float uTime, uScale;
  attribute vec2 aLatLon;
  attribute vec3 aVel, aColor;
  attribute float aBirth, aLife, aSize, aKind, aSeed;
  varying vec4 vColor; varying float vKind;
  void main() {
    vKind = aKind;
    float age = uTime - aBirth;
    float t = age / aLife;
    if (age < 0.0 || t >= 1.0 || aLife <= 0.0) { gl_Position = vec4(2.0, 2.0, 2.0, 1.0); gl_PointSize = 0.0; vColor = vec4(0.0); return; }
    mat3 F = hfFrame(aLatLon.x, aLatLon.y);            // east, north, up
    vec3 origin = hfPosition(aLatLon.x, aLatLon.y, 1.006);
    float k = 4.0;
    float d = (1.0 - exp(-k * t)) / (1.0 - exp(-k));
    vec3 p = origin + F * aVel * d;
    if (aKind != 2.0) p -= F[2] * (0.06 * t * t * length(aVel));
    float h = dot(p - hfPosition(aLatLon.x, aLatLon.y, 1.0), F[2]);
    if (h < 0.004) p += F[2] * (0.004 - h);
    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    gl_Position = projectionMatrix * mv;
    float fade; float s = aSize;
    if (aKind == 2.0) { fade = pow(1.0 - t, 2.2) * smoothstep(0.0, 0.1, t) * 0.18; s *= 0.35 + 1.2 * t; }
    else if (aKind == 1.0) { fade = smoothstep(1.0, 0.5, t) * (0.6 + 0.4 * sin(uTime * 28.0 + aSeed * 50.0)) * 0.45; s *= 1.0 - 0.35 * t; }
    else { fade = smoothstep(1.0, 0.35, t) * smoothstep(0.0, 0.12, t) * 0.35; s *= 1.0 + 1.2 * t; }
    gl_PointSize = s * uScale / -mv.z;
    vColor = vec4(aColor, fade);
  }`,Wg=`
  varying vec4 vColor; varying float vKind;
  void main() {
    float d = length(gl_PointCoord - 0.5) * 2.0;
    if (d > 1.0 || vColor.a <= 0.0) discard;
    float a = vKind == 1.0 ? 0.12 * (1.0 - d) + 0.65 * smoothstep(0.3, 0.0, d) : pow(1.0 - d, 2.4) * 0.7;
    gl_FragColor = vec4(vColor.rgb * a * vColor.a, 1.0);
  }`,Xg=`
  \${wu}
  uniform float uYear, uPixelRatio;
  attribute float aFirstYear; attribute vec2 aLatLon;
  varying float vA;
  void main() {
    vA = smoothstep(aFirstYear, aFirstYear + 120.0, uYear);
    vec4 mv = modelViewMatrix * vec4(hfPosition(aLatLon.x, aLatLon.y, 1.003), 1.0);
    gl_PointSize = 2.6 * uPixelRatio * (vA > 0.0 ? 1.0 : 0.0);
    gl_Position = projectionMatrix * mv;
  }`,Yg=`
  varying float vA;
  void main() { float d = length(gl_PointCoord - 0.5) * 2.0; if (d > 1.0) discard; gl_FragColor = vec4(vec3(0.95, 0.65, 0.4) * (1.0 - d) * vA * 0.35, 1.0); }`,qg=`
  \${wu}
  attribute vec2 aLatLon; // lat, longitude relative to the map's centre
  uniform int uCivCount;
  uniform vec4 uCiv[\${Sd}];      // lat, lon, reach (degrees), alpha
  uniform vec3 uCivColor[\${Sd}];
  varying vec2 vUv; varying vec3 vNormal; varying vec3 vView; varying vec4 vTint;
  // Angular distance in degrees between two lat/lon points.
  float arc(vec2 a, vec2 b) {
    vec2 ra = radians(a), rb = radians(b);
    float h = sin((rb.x - ra.x) * 0.5); float g = sin((rb.y - ra.y) * 0.5);
    float s = h * h + cos(ra.x) * cos(rb.x) * g * g;
    return degrees(2.0 * asin(sqrt(clamp(s, 0.0, 1.0))));
  }
  void main() {
    float lon = uLon0 + aLatLon.y;
    vUv = vec2((lon + 180.0) / 360.0, uv.y);
    vNormal = normalize(normalMatrix * hfNormal(aLatLon.x, lon));
    vec4 mv = modelViewMatrix * vec4(hfPosition(aLatLon.x, lon, 1.002), 1.0); vView = -mv.xyz;
    gl_Position = projectionMatrix * mv;
    // Civilization tint, computed per vertex (the fields are smooth at this grid's spacing).
    vec2 here = vec2(aLatLon.x, mod(lon + 540.0, 360.0) - 180.0);
    vec3 tint = vec3(0.0); float wsum = 0.0;
    for (int i = 0; i < \${Sd}; i++) {
      if (i >= uCivCount) break;
      float d = arc(here, uCiv[i].xy);
      float w = smoothstep(uCiv[i].z, uCiv[i].z * 0.45, d) * uCiv[i].w;
      tint += uCivColor[i] * w; wsum += w;
    }
    vTint = wsum > 0.0 ? vec4(tint / wsum, min(1.0, wsum)) : vec4(0.0);
  }`,Kg=`
  uniform sampler2D uAtlas;
  uniform float uCols, uRows, uStep0, uStep1, uMix, uGain;
  uniform vec2 uTexel;
  varying vec2 vUv; varying vec3 vNormal; varying vec3 vView; varying vec4 vTint;
  vec2 tileUv(float i, vec2 uv) {
    float c = mod(i, uCols), r = floor(i / uCols);
    float m = 1.5 * uTexel.y * uRows;                 // stay inside the tile
    return vec2((c + fract(uv.x)) / uCols, 1.0 - (r + 1.0 - clamp(uv.y, m, 1.0 - m)) / uRows);
  }
  // Bilinear with smoothed weights: hides the cell grid without the cost of bicubic.
  float smoothSample(vec2 t) {
    vec2 size = 1.0 / uTexel;
    vec2 p = t * size - 0.5;
    vec2 f = fract(p);
    p = floor(p) + f * f * (3.0 - 2.0 * f) + 0.5;
    return texture2D(uAtlas, p * uTexel).r;
  }
  float sampleStep(float i, vec2 uv) {
    vec2 t = tileUv(i, uv);
    vec2 o = uTexel * 0.6;
    return 0.4 * smoothSample(t)
         + 0.15 * (smoothSample(t + vec2(o.x, o.y)) + smoothSample(t + vec2(-o.x, o.y))
                 + smoothSample(t + vec2(o.x, -o.y)) + smoothSample(t + vec2(-o.x, -o.y)));
  }
  // (five smoothed taps: the blur that hides the half-degree grid)
  void main() {
    float v = mix(sampleStep(uStep0, vUv), sampleStep(uStep1, vUv), uMix);
    float e = min(pow(v, 1.3) * uGain, 1.25);
    vec3 ember = vec3(0.85, 0.30, 0.07), lamp = vec3(1.0, 0.72, 0.36), white = vec3(1.0, 0.95, 0.85);
    vec3 c = mix(ember, lamp, smoothstep(0.10, 0.55, v));
    c = mix(c, white, smoothstep(0.55, 0.90, v));
    // Recolour the people, never paint where there are none: the hue changes, the density pattern stays.
    if (vTint.a > 0.0) c = mix(c, vTint.rgb * (1.25 + 0.4 * smoothstep(0.55, 0.9, v)), vTint.a * 0.9);
    float facing = max(dot(normalize(vNormal), normalize(vView)), 0.0);
    gl_FragColor = vec4(c * e * (0.6 + 0.4 * facing), 1.0);
  }`,$g=`
  \${wu}
  uniform float uTime, uLaunched, uPixelRatio;
  attribute float aOn, aInclination, aNode, aPhase, aRadius, aSpeed, aSize;
  varying float vA;
  vec3 orbit(float t) {
    vec3 p = vec3(cos(t), 0.0, sin(t)) * aRadius;
    float ci = cos(aInclination), si = sin(aInclination);
    p = vec3(p.x, p.z * si, p.z * ci);
    float cn = cos(aNode), sn = sin(aNode);
    return vec3(p.x * cn - p.z * sn, p.y, p.x * sn + p.z * cn);
  }
  void main() {
    if (aOn >= uLaunched) { gl_Position = vec4(2.0, 2.0, 2.0, 1.0); gl_PointSize = 0.0; vA = 0.0; return; }
    vec3 p = orbit(aPhase + uTime * aSpeed);
    float lat = degrees(asin(p.y / aRadius)), lon = degrees(atan(p.z, -p.x)) - 180.0;
    vec4 mv = modelViewMatrix * vec4(hfPosition(lat, lon, mix(aRadius, 1.02 + (aRadius - 1.0) * 0.12, uFlat)), 1.0);
    gl_Position = projectionMatrix * mv;
    gl_PointSize = aSize * uPixelRatio * 6.0 / -mv.z;
    vA = smoothstep(0.0, 30.0, uLaunched - aOn) * mix(0.28, 1.0, smoothstep(1.2, 2.6, aSize)); // the small ones are faint
  }`,Zg=`
  varying float vA;
  void main() { float d = length(gl_PointCoord - 0.5) * 2.0; if (d > 1.0) discard; gl_FragColor = vec4(vec3(0.8, 0.92, 1.0) * pow(1.0 - d, 1.5) * vA, 1.0); }`,Jg=`
  \${wu}
  uniform float uLaunched;
  attribute vec2 aLatLon; attribute float aOn, aRadius, aPartnerLon;
  varying float vA;
  float side(float lon) { return mod(lon - uLon0 + 540.0, 360.0) - 180.0; }
  void main() {
    if (uFlat > 0.5 && abs(side(aLatLon.y) - side(aPartnerLon)) > 180.0) { gl_Position = vec4(2.0, 2.0, 2.0, 1.0); vA = 0.0; return; }
    vec4 mv = modelViewMatrix * vec4(hfPosition(aLatLon.x, aLatLon.y, mix(aRadius, 1.02 + (aRadius - 1.0) * 0.12, uFlat)), 1.0);
    gl_Position = projectionMatrix * mv;
    vA = smoothstep(0.0, 60.0, uLaunched - aOn) * (1.0 - 0.6 * uFlat);
  }`,Qg=`
  varying float vA;
  void main() { gl_FragColor = vec4(vec3(0.6, 0.8, 1.0) * vA * 0.09, 1.0); }`,jg=`
  \${wu}
  attribute vec2 aLatLon; attribute float aT, aPartnerLon, aFlow;
  uniform float uFront[\${bf.length}], uFade[\${bf.length}];
  varying float vA;
  float side(float lon) { return mod(lon - uLon0 + 540.0, 360.0) - 180.0; }
  void main() {
    int i = int(aFlow + 0.5);
    float front = uFront[i], fade = uFade[i];
    vA = fade * smoothstep(front, front - 0.06, aT) * (0.45 + 0.25 * (1.0 - aT));
    if (uFlat > 0.5 && abs(side(aLatLon.y) - side(aPartnerLon)) > 180.0) { gl_Position = vec4(2.0, 2.0, 2.0, 1.0); return; }
    gl_Position = projectionMatrix * modelViewMatrix * vec4(hfPosition(aLatLon.x, aLatLon.y, 1.006), 1.0);
  }`,e_=`
  uniform vec3 uColor;
  varying float vA;
  void main() { if (vA <= 0.0) discard; gl_FragColor = vec4(uColor * vA, 1.0); }`,t_=`
  attribute float aAlpha, aSize;
  uniform float uPixelRatio;
  varying float vA;
  void main() {
    vA = aAlpha;
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix * mv;
    gl_PointSize = aSize * uPixelRatio * 11.0 / -mv.z;
  }`,n_=`
  uniform vec3 uColor;
  varying float vA;
  void main() { float d = length(gl_PointCoord - 0.5) * 2.0; if (d > 1.0 || vA <= 0.0) discard; gl_FragColor = vec4(uColor * pow(1.0 - d, 1.6) * vA, 1.0); }`,i_=`
  \${wu}
  attribute vec2 aLatLon; attribute float aBright;
  uniform float uPixelRatio;
  varying float vB;
  void main() {
    vB = aBright;
    if (aBright <= 0.0) { gl_Position = vec4(2.0, 2.0, 2.0, 1.0); gl_PointSize = 0.0; return; }
    vec4 mv = modelViewMatrix * vec4(hfPosition(aLatLon.x, aLatLon.y, 1.004), 1.0);
    gl_Position = projectionMatrix * mv;
    gl_PointSize = (2.0 + 9.0 * aBright) * uPixelRatio * 3.2 / -mv.z;
  }`,a_=`
  varying float vB;
  void main() {
    float d = length(gl_PointCoord - 0.5) * 2.0;
    if (d > 1.0) discard;
    float core = smoothstep(0.35, 0.0, d), halo = pow(1.0 - d, 2.5);
    vec3 c = mix(vec3(1.0, 0.85, 0.55), vec3(1.0, 0.97, 0.9), vB);
    gl_FragColor = vec4(c * (core * 0.9 + halo * 0.35) * (0.35 + 0.65 * vB), 1.0);
  }`,r_=`
  \${wu}
  uniform float uLatMin;
  attribute vec2 aLatLon;
  varying vec2 vUv; varying vec3 vNormal; varying vec3 vView;
  void main() {
    float lon = uLon0 + aLatLon.y;
    vUv = vec2((lon + 180.0) / 360.0, (aLatLon.x - uLatMin) / (90.0 - uLatMin));
    vNormal = normalize(normalMatrix * hfNormal(aLatLon.x, lon));
    vec4 mv = modelViewMatrix * vec4(hfPosition(aLatLon.x, lon, 1.0015), 1.0); vView = -mv.xyz;
    gl_Position = projectionMatrix * mv;
  }`,s_=`
  uniform sampler2D uAtlas;
  uniform float uCols, uRows, uStep0, uStep1, uMix, uAlpha;
  uniform vec2 uTexel; uniform vec3 uTintThin, uTintThick;
  varying vec2 vUv; varying vec3 vNormal; varying vec3 vView;
  vec2 tileUv(float i, vec2 uv) {
    float c = mod(i, uCols), r = floor(i / uCols);
    float m = 1.5 * uTexel.y * uRows;                 // stay inside the tile: the one above ends in Antarctica
    return vec2((c + fract(uv.x)) / uCols, 1.0 - (r + 1.0 - clamp(uv.y, m, 1.0 - m)) / uRows);
  }
  float smoothSample(vec2 t) {
    vec2 size = 1.0 / uTexel;
    vec2 p = t * size - 0.5;
    vec2 f = fract(p);
    p = floor(p) + f * f * (3.0 - 2.0 * f) + 0.5;
    return texture2D(uAtlas, p * uTexel).r;
  }
  float sampleStep(float i) {
    vec2 t = tileUv(i, vUv), o = uTexel * 0.7;
    return 0.4 * smoothSample(t) + 0.15 * (smoothSample(t + o) + smoothSample(t - o) + smoothSample(t + vec2(o.x, -o.y)) + smoothSample(t + vec2(-o.x, o.y)));
  }
  void main() {
    if (vUv.y < 0.0) discard;
    float ice = mix(sampleStep(uStep0), sampleStep(uStep1), uMix);
    float cover = smoothstep(0.04, 0.16, ice);   // thin edge, then solid
    if (cover <= 0.0) discard;
    float facing = max(dot(normalize(vNormal), normalize(vView)), 0.0);
    vec3 c = mix(uTintThin, uTintThick, smoothstep(0.1, 0.8, ice));
    c *= 0.55 + 0.45 * facing;
    gl_FragColor = vec4(c, cover * uAlpha);
  }`,o_=`
  \${wu}
  attribute vec2 aLatLon; attribute float aYear, aGW;
  uniform float uYear, uTime, uPixelRatio;
  varying float vA, vRing, vGW;
  void main() {
    float age = uYear - aYear;
    vA = smoothstep(0.0, 1.5, age);
    vGW = aGW;
    if (vA <= 0.0) { gl_Position = vec4(2.0, 2.0, 2.0, 1.0); gl_PointSize = 0.0; return; }
    vRing = fract(uTime * 0.18 + aLatLon.y * 0.013 + aLatLon.x * 0.007); // a slow ripple, each site on its own beat
    vec4 mv = modelViewMatrix * vec4(hfPosition(aLatLon.x, aLatLon.y, 1.006), 1.0);
    gl_Position = projectionMatrix * mv;
    gl_PointSize = (16.0 + 18.0 * sqrt(aGW)) * uPixelRatio * 3.2 / -mv.z;
  }`,l_=`
  varying float vA, vRing, vGW;
  void main() {
    float d = length(gl_PointCoord - 0.5) * 2.0;
    if (d > 1.0) discard;
    float core = smoothstep(0.2, 0.0, d);                         // a hot pinpoint
    float bloom = pow(1.0 - d, 2.5) * 0.55;                        // a cool glow on the ground
    float ring = smoothstep(0.06, 0.0, abs(d - vRing)) * (1.0 - vRing) * 0.5; // the hum
    vec3 c = vec3(0.85, 0.97, 1.0) * core + vec3(0.35, 0.75, 1.0) * (bloom + ring);
    gl_FragColor = vec4(c * vA, 1.0);
  }`,c_=`
  \${wu}
  attribute vec2 aLatLon; attribute float aT, aBirth, aPartnerLon, aSeed;
  uniform float uYear, uTime;
  varying float vA, vPulse;
  float side(float lon) { return mod(lon - uLon0 + 540.0, 360.0) - 180.0; }
  void main() {
    float age = uYear - aBirth;
    vA = smoothstep(0.0, 2.0, age);
    if (vA <= 0.0 || (uFlat > 0.5 && abs(side(aLatLon.y) - side(aPartnerLon)) > 180.0)) { gl_Position = vec4(2.0, 2.0, 2.0, 1.0); return; }
    vPulse = smoothstep(0.12, 0.0, abs(aT - fract(uTime * 0.25 + aSeed))); // a packet of light travelling the link
    gl_Position = projectionMatrix * modelViewMatrix * vec4(hfPosition(aLatLon.x, aLatLon.y, 1.006), 1.0);
  }`,h_=`
  varying float vA, vPulse;
  void main() { gl_FragColor = vec4(vec3(0.45, 0.8, 1.0) * vA * (0.22 + 0.7 * vPulse), 1.0); }`,u_={kl:Ng,Al:Fg,Bl:Og,Vl:Bg,Lu:kg,Ru:zg,zu:Vg,Bu:Gg,fd:Hg,pd:Wg,md:Xg,hd:Yg,Cd:qg,wd:Kg,Jd:$g,Yd:Zg,Xd:Jg,Zd:Qg,Ef:jg,Df:e_,wf:t_,Tf:n_,Mf:i_,Nf:a_,Rf:r_,zf:s_,Hf:o_,Uf:l_,Gf:c_,Kf:h_},d_=32,f_=Ug.replace(/\$\{Su\.toFixed\(3\)}/g,"0.800");function Tt(i){const e=u_[i];if(!e)throw new Error(`missing shader ${i}`);return e.replace(/\$\{wu}/g,f_).replace(/\$\{Sd}/g,String(d_))}const De={uFlat:{value:0},uLon0:{value:ya}},Bn=Math.PI/180,gi=new Fe;function fi(i,e,t=1,n=new P){const a=(90-i)*Bn,r=(e+180)*Bn;return n.set(-t*Math.cos(r)*Math.sin(a),t*Math.cos(a),t*Math.sin(r)*Math.sin(a))}function Br(i,e,t=De.uLon0.value){const n=((e-t+540)%360-180)*Bn,a=Math.asin(.8660254*Math.sin(i*Bn)),r=a*a,s=r*r*r,o=1.340264,c=-.081106,l=893e-6,u=.003796,f=3.4641016*n*Math.cos(a)/(3*(o+3*c*r+s*(7*l+9*u*r))),h=a*(o+c*r+s*(l+u*r));return[f*bl,h*bl]}function nl(i=De.uLon0.value,e=gi){const t=(i+90)*Bn,n=Math.cos(t),a=Math.sin(t);return e.set(n,0,a,0,1,0,-a,0,n)}function p_(i=De.uLon0.value,e=new P){return fi(0,i,1,e)}function kr(i,e,t=1,n=new P){const a=1-De.uFlat.value;if(a>=.9995)return fi(i,e,t,n);const[r,s]=Br(i,e);if(nl(De.uLon0.value,gi),a<5e-4)return n.set(r,s,t).applyMatrix3(gi);const o=((e-De.uLon0.value+540)%360-180)*Bn,c=i*Bn,l=(r+(o-r)*a)*a,u=(s+(c-s)*a)*a,f=1/a,h=Math.sin(l)*Math.cos(u),m=Math.sin(u),_=Math.cos(l)*Math.cos(u);return n.set(h*(f+t-1),m*(f+t-1),1-f+_*(f+t-1)).applyMatrix3(gi)}function m_(i,e,t=new P){const n=1-De.uFlat.value;if(n>=.9995)return fi(i,e,1,t);if(nl(De.uLon0.value,gi),n<5e-4)return t.set(0,0,1).applyMatrix3(gi);const[a,r]=Br(i,e),s=((e-De.uLon0.value+540)%360-180)*Bn,o=i*Bn,c=(a+(s-a)*n)*n,l=(r+(o-r)*n)*n;return t.set(Math.sin(c)*Math.cos(l),Math.sin(l),Math.cos(c)*Math.cos(l)).applyMatrix3(gi)}const pa={x:Br(0,337.499999,ya)[0],y:Br(90,ya,ya)[1]};function il(i=128,e=96){const t=[],n=[],a=[],r=i+1;for(let o=0;o<=e;o++){const c=90-o*180/e;for(let l=0;l<=i;l++)t.push(c,-180+l*360/i),n.push(l/i,1-o/e)}for(let o=0;o<e;o++)for(let c=0;c<i;c++){const l=o*r+c,u=l+1,f=l+r,h=f+1;a.push(l,f,u,u,f,h)}const s=new dt;return s.setAttribute("aLatLon",new Nt(t,2)),s.setAttribute("uv",new Nt(n,2)),s.setAttribute("position",new Nt(new Float32Array(t.length/2*3),3)),s.setIndex(a),s.boundingSphere=new rn(new P,3),s}const zs=45,g_=.12,dr=new P(0,1,0);function Ic(){const i=document.createElement("canvas");i.width=i.height=128;const e=i.getContext("2d"),t=e.createRadialGradient(64,64,0,64,64,64);t.addColorStop(0,"rgba(255,245,220,1)"),t.addColorStop(.12,"rgba(255,235,190,0.9)"),t.addColorStop(.4,"rgba(255,200,120,0.25)"),t.addColorStop(1,"rgba(255,180,90,0)"),e.fillStyle=t,e.fillRect(0,0,128,128);const n=new ld(i);return n.colorSpace=$t,n}function __(i){const e=new Float32Array(i*3),t=new Float32Array(i),n=new Float32Array(i*3),a=new P;for(let s=0;s<i;s++){a.randomDirection().multiplyScalar(700),e.set([a.x,a.y,a.z],s*3),t[s]=.6+Math.random()**4*2.4;const o=Math.random();n.set([.75+.25*o,.8,.9+.1*(1-o)],s*3)}const r=new dt;return r.setAttribute("position",new ze(e,3)),r.setAttribute("aSize",new ze(t,1)),r.setAttribute("aColor",new ze(n,3)),new Qi(r,new vt({uniforms:{uPixelRatio:{value:1},uTime:{value:0}},vertexShader:`attribute float aSize; attribute vec3 aColor; uniform float uPixelRatio, uTime; varying vec3 vColor; varying float vA;
        void main() {
          vColor = aColor;
          float twinkle = 0.75 + 0.25 * sin(uTime * (0.8 + aSize) + position.x * 7.0 + position.y * 3.0);
          vA = aSize / 3.0 * twinkle;
          gl_PointSize = aSize * uPixelRatio * (0.85 + 0.15 * twinkle);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }`,fragmentShader:`varying vec3 vColor; varying float vA;
        void main() { float d = length(gl_PointCoord - 0.5) * 2.0; if (d > 1.0) discard; gl_FragColor = vec4(vColor, (1.0 - d * d) * (0.35 + 0.65 * vA)); }`,transparent:!0,depthWrite:!1,blending:Zt}))}function v_(i,{reducedMotion:e=!1,base:t=na}={}){const n=new xg({canvas:i,antialias:!0,powerPreference:"high-performance"});let a=Math.min(window.devicePixelRatio||1,2);n.setPixelRatio(a),n.setClearColor(131850,1);const r=new $u,s=new jt(38,1,.05,2e3);s.position.set(.4,1,3.5);const o=new yg(s,i);o.enableDamping=!0,o.dampingFactor=.06,o.enablePan=!1,o.minDistance=1.45,o.maxDistance=7,o.rotateSpeed=.55,o.zoomSpeed=.7,o.autoRotate=!e,o.autoRotateSpeed=.3,o.target.set(0,0,0);const c=new vt({uniforms:{uLand:{value:null},uRelief:{value:null},uFlat:De.uFlat,uLon0:De.uLon0},vertexShader:Tt("Lu"),fragmentShader:Tt("Ru")}),l=new el;l.load(`${t}data/land.png`,A=>{A.colorSpace=tn,A.wrapS=Ta,A.flipY=!0,c.uniforms.uLand.value=A}),l.load(`${t}data/relief.jpg`,A=>{A.colorSpace=tn,A.wrapS=Ta,A.flipY=!0,c.uniforms.uRelief.value=A});const u=new Xt(il(),c);u.frustumCulled=!1,r.add(u);const f=new Xt(new Or(1.035,96,64),new vt({uniforms:{uFlash:{value:0},uFlat:De.uFlat},vertexShader:Tt("zu"),fragmentShader:Tt("Bu"),transparent:!0,depthWrite:!1,side:Nn,blending:Zt}));r.add(f);const h=__(2400);h.material.uniforms.uPixelRatio.value=a,r.add(h);const m=new Xt(new Or(.27,128,96),new vt({uniforms:{uSun:{value:new P(1,.4,.6).normalize()},uFade:{value:1}},vertexShader:"varying vec3 vN; varying vec3 vP; void main() { vN = normalize(normalMatrix * normal); vP = normal; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
        uniform vec3 uSun; uniform float uFade; varying vec3 vN; varying vec3 vP;
        float hash(vec3 p) { return fract(sin(dot(p, vec3(12.9898, 78.233, 37.719))) * 43758.5453); }
        void main() {
          float lit = max(dot(normalize(vN), normalize((viewMatrix * vec4(uSun, 0.0)).xyz)), 0.0);
          float mottle = 0.85 + 0.15 * hash(floor(vP * 9.0));
          vec3 c = vec3(0.72, 0.71, 0.68) * mottle * (0.06 + 0.94 * lit);
          gl_FragColor = vec4(c, uFade);
        }`,transparent:!0}));m.visible=!1,r.add(m);const _=new Xl(new Io({color:12439423,transparent:!0,opacity:0,depthWrite:!1,blending:Zt,map:Ic()}));_.visible=!1,r.add(_);const y=new Xl(new Io({color:16771272,transparent:!0,opacity:.9,depthWrite:!1,blending:Zt,map:Ic()}));y.scale.set(14,14,1),y.position.set(90,36,54),y.visible=!1,r.add(y);let p="globe",d=null;function b(A){De.uLon0.value=Hs(A)}const R=new P,M=new P,w=new P,E={D:new P(1,0,0),E:new P(0,0,-1)};function C(){return p_(De.uLon0.value,R),M.set(1,0,0).applyMatrix3(nl()),{D:R,E:M}}let v=1,T=1;const U=()=>Math.tan(s.fov*Math.PI/360),D=()=>Math.min(.6,B.bottomInset/T),k=()=>D()*1.6;function $(){const A=1-D();return Math.max(pa.y*1.12/(U()*A),pa.x*1.04/(U()*s.aspect))+.1}function Q(A){return-A*U()*D()}function z(){o.maxDistance=$();const A=Math.min(s.position.distanceTo(o.target),o.maxDistance);w.copy(o.target).sub(E.D);const V=w.dot(E.E),K=w.y,{D:F,E:Y}=C();o.target.copy(F).addScaledVector(Y,V).addScaledVector(dr,K),s.position.copy(o.target).addScaledVector(F,A),s.lookAt(o.target),E.D.copy(F),E.E.copy(Y)}function Z(){const A=p==="map";o.enableRotate=!A,o.enablePan=!1,o.screenSpacePanning=!0,o.zoomToCursor=A,o.autoRotate=!A&&!e&&!q,o.minDistance=A?.5:1.45,o.maxDistance=A?$():7}function W(A,{seconds:V=e?0:1.4}={}){if(A===p)return Promise.resolve();p=A,q=null;const K=s.position.clone().sub(o.target),F=s.position.clone(),Y=o.target.clone();let te,de;if(A==="map"){b(Math.atan2(K.z,-K.x)*180/Math.PI-180);const ae=$(),{D:re,E:Se}=C();E.D.copy(re),E.E.copy(Se),de=re.clone().addScaledVector(dr,Q(ae)),te=de.clone().addScaledVector(re,ae)}else te=fi(20,De.uLon0.value,3.5+k()*2),de=new P(0,0,0);return new Promise(ae=>{d={t:0,seconds:Math.max(V,.001),from:De.uFlat.value,to:A==="map"?1:0,fromPos:F,toPos:te,fromTarget:Y,toTarget:de,onDone:ae},Z()})}function j(){const A=i.clientWidth,V=i.clientHeight;if(!A||!V)return;v=A,T=V;const K=Math.min(window.devicePixelRatio||1,2);K!==a&&(a=K,n.setPixelRatio(K),h.material.uniforms.uPixelRatio.value=K,B.pixelRatio=K),n.setSize(A,V,!1),s.aspect=A/V;const F=Math.min(1,Math.max(0,(1.15-A/V)/.35));s.fov=38+F*(Math.min(80,38/Math.min(1,A/V)*.95)-38),p==="globe"&&(o.target.y=0),s.updateProjectionMatrix(),ne()}function ne(){if(v<2||T<2)return;const A=g_+.23*Math.min(1,Math.max(0,(1.15-v/T)/.35))+k(),V=3.5+k()*2,K=s.position.distanceTo(o.target),F=Math.min(1,K/V),Y=Math.min(.3,A/(2*V*U()))*F*(1-De.uFlat.value);s.setViewOffset(v,T,0,Math.round(Y*T),v,T)}window.addEventListener("resize",j);function ue(){if(j(),p==="map"&&!d){const A=$();o.target.copy(E.D).addScaledVector(dr,Q(A)),s.position.copy(o.target).addScaledVector(E.D,A),z()}}const ce=new P,ve=new P,Ze=new P;function ct(A,V,K=1){kr(A,V,K,ce),ve.copy(s.position).sub(ce).normalize();const F=m_(A,V,Ze).dot(ve);return ce.project(s),{x:(ce.x+1)/2*i.clientWidth,y:(1-ce.y)/2*i.clientHeight,facing:F}}function Je(A,V,K=3.5){fi(A,V,K,s.position).add(o.target),o.update()}let q=null;const oe=new un,ie=new un,Pe=new un,Ue=new P;function Re(A,V,K=1.6){if(e||p!=="globe"||d)return;const F=s.position.clone().sub(o.target),Y=F.length(),te=fi(A,V,Y);F.angleTo(te)<.05||(q={from:F.normalize(),to:te.normalize(),dist:Y,t:0,seconds:K})}let tt=null;function He(A){p==="map"&&(tt=A)}const be={start:new P,end:new P,target:new P,mapPos:new P,mapTarget:new P,lon0:null,returnMode:"map",side:new P,lines:[]};let We=!1,Xe=!1;function ft(){const A=s.position.distanceTo(o.target),V=Math.min(1,Math.max(0,(A-14)/40));_.visible=V>0,_.material.opacity=V,_.scale.setScalar(A*.018),y.material.opacity=.9*Math.min(1,Math.max(0,(110-A)/60))}function xt(){const A=De.uLon0.value;be.lon0=A,be.returnMode=p,be.target.set(0,0,0),be.end.copy(fi(20,A,3.5)).add(be.target);const V=be.end.clone().normalize(),K=new P(-V.z,0,V.x).normalize();be.start.copy(V).multiplyScalar(zs).addScaledVector(K,zs*.28).add(new P(0,zs*.1,0)),be.side.copy(K),m.position.copy(be.start).lerp(be.end,.42).addScaledVector(K,-1.7).add(new P(0,-.8,0));const F=V.clone().multiplyScalar(-.45).addScaledVector(K,.85).add(new P(0,.3,0)).normalize();y.position.copy(m.position).addScaledVector(F,70),m.material.uniforms.uSun.value.copy(F);const Y=$(),{D:te}=C();be.mapTarget.copy(te).addScaledVector(dr,Q(Y)),be.mapPos.copy(be.mapTarget).addScaledVector(te,Y),E.D.copy(te),E.E.copy(C().E)}function bt(A){for(const V of be.lines)V.el.remove();be.lines=A.map(V=>{const K=document.createElement("div");return K.className="skywrite",K.innerHTML=V.credit?`${V.text}<small>${V.credit}</small>`:V.text,K.style.opacity="0",document.body.appendChild(K),{el:K,from:V.from,to:V.to,x:V.x??.5,y:V.y??.4,drift:V.drift??.04}})}function Mt(A){for(const V of be.lines){const K=Math.min(1,(A-V.from)/.08,(V.to-A)/.08);if(K<=0){V.el.style.opacity!=="0"&&(V.el.style.opacity="0");continue}const F=(A-(V.from+V.to)/2)/(V.to-V.from),Y=(V.x+F*V.drift)*v,te=(V.y-F*V.drift*.4)*T;V.el.style.transform=`translate(${Y.toFixed(1)}px, ${te.toFixed(1)}px) translate(-50%, -50%)`,V.el.style.opacity=String(Math.max(0,Math.min(1,K)).toFixed(2))}}function ht(A){if(A>=1){We&&(We=!1,Xe=!0,Mt(-1),p=be.returnMode,p==="map"?(De.uFlat.value=1,s.position.copy(be.mapPos),o.target.copy(be.mapTarget)):(De.uFlat.value=0,s.position.copy(be.end),o.target.copy(be.target)),Z(),s.lookAt(o.target));return}(!We||be.lon0!==De.uLon0.value)&&(xt(),We=!0,Xe=!1,m.visible=!0,m.material.uniforms.uFade.value=1,y.visible=!0,p="globe",q=null,d=null,o.autoRotate=!1,o.maxDistance=55);const V=be.returnMode==="globe"?1:.7;if(A<V){const K=A/V,F=K*K*K*(K*(K*6-15)+10);De.uFlat.value=0,s.position.lerpVectors(be.start,be.end,F),o.target.copy(be.target),s.lookAt(o.target),Mt(K),ft()}else{Mt(A/V),ft();const K=(A-V)/(1-V),F=K*K*(3-2*K);De.uFlat.value=F,s.position.lerpVectors(be.end,be.mapPos,F),o.target.lerpVectors(be.target,be.mapTarget,F)}s.lookAt(o.target)}let Oe=null;const L={vLon:0,vY:0},Lt=A=>{s.position.y+=A-o.target.y,o.target.y=A};i.addEventListener("wheel",A=>{var V;A.ctrlKey||A.metaKey||(A.preventDefault(),A.stopImmediatePropagation(),(V=B.onScroll)==null||V.call(B,A.deltaX,A.deltaY,A))},{capture:!0,passive:!1}),i.addEventListener("pointerdown",A=>{q=null,tt=null,p==="map"&&A.isPrimary&&A.button===0&&(Oe={x:A.clientX,y:A.clientY,id:A.pointerId,t:performance.now(),vLon:0,vY:0},L.vLon=0,L.vY=0,i.setPointerCapture(A.pointerId))}),i.addEventListener("pointermove",A=>{var Ne;if(!Oe||A.pointerId!==Oe.id)return;const V=s.position.distanceTo(o.target),K=2*V*Math.tan(s.fov*Math.PI/360)/i.clientHeight,F=K*360/(2*pa.x),Y=-(A.clientX-Oe.x)*F;b(De.uLon0.value+Y);const te=Q(V),de=Math.max(0,pa.y+.05-V*U()*(1-D()));let ae=de>0?(A.clientY-Oe.y)*K:0;const re=Math.max(0,Math.abs(o.target.y-te)-de);re>0&&Math.sign(ae)===Math.sign(o.target.y-te)&&(ae*=.35/(1+re*6)),ae!==0&&Lt(o.target.y+ae);const Se=performance.now(),Ae=Math.max(1,Se-Oe.t)/1e3;Oe.vLon=.6*Oe.vLon+.4*(Y/Ae),Oe.vY=.6*Oe.vY+.4*(ae/Ae),Oe.t=Se,Math.abs(A.clientX-Oe.x)>0&&((Ne=B.onDrag)==null||Ne.call(B)),Oe.x=A.clientX,Oe.y=A.clientY});const je=A=>{!Oe||A.pointerId!==Oe.id||(Object.assign(L,performance.now()-Oe.t>80?{vLon:0,vY:0}:{vLon:Oe.vLon,vY:Oe.vY}),Oe=null)};i.addEventListener("pointerup",je),i.addEventListener("pointercancel",je);let S=0;function g(A){S=Math.max(S,A)}function O(A,V){if(h.material.uniforms.uTime.value=V,We){S=0,ne(),n.render(r,s);return}const K=tt??B.followLon0;if(p==="map"&&!Oe&&!d&&K!==null){const F=Hs(K-De.uLon0.value);Math.abs(F)>.02?b(De.uLon0.value+F*Math.min(1,A*(tt===null?1.2:2.5))):tt!==null&&(tt=null)}if(p==="map"&&!Oe&&!d){Math.abs(L.vLon)>.5?(b(De.uLon0.value+L.vLon*A),L.vLon*=Math.exp(-A*3.5)):L.vLon=0;const F=s.position.distanceTo(o.target),Y=Q(F),te=Math.max(0,pa.y+.05-F*U()*(1-D()));let de=o.target.y;te<=0?L.vY=0:Math.abs(L.vY)>.02?(de+=L.vY*A,L.vY*=Math.exp(-A*3.5)):L.vY=0;const ae=Y-te,re=Y+te;de<ae?(de+=(ae-de)*Math.min(1,A*9),L.vY=0):de>re&&(de+=(re-de)*Math.min(1,A*9),L.vY=0),de!==o.target.y&&Lt(de)}if(S=Math.max(0,S-A*.9),f.material.uniforms.uFlash.value=S*S,d){d.t+=A/d.seconds;const F=Math.min(1,d.t),Y=F*F*(3-2*F);if(De.uFlat.value=d.from+(d.to-d.from)*Y,s.position.lerpVectors(d.fromPos,d.toPos,Y),o.target.lerpVectors(d.fromTarget,d.toTarget,Y),F>=1){const te=d.onDone;d=null,te==null||te()}}if(Xe){const F=m.material.uniforms.uFade;F.value=Math.max(0,F.value-A*.7),F.value<=0&&(m.visible=!1,Xe=!1)}else if(q){q.t+=A/q.seconds;const F=Math.min(1,q.t),Y=F*F*(3-2*F);ie.setFromUnitVectors(q.from,q.to),Pe.slerpQuaternions(oe.identity(),ie,Y),Ue.copy(q.from).applyQuaternion(Pe).multiplyScalar(q.dist),s.position.copy(Ue).add(o.target),F>=1&&(q=null)}o.autoRotate=p==="globe"&&!e&&!q&&!d,o.update(),p==="map"&&!d&&z(),ne(),n.render(r,s)}const B={bottomInset:0,followLon0:null,onDrag:null,onScroll:null,renderer:n,scene:r,camera:s,controls:o,earth:u,atmosphere:f,stars:h,pixelRatio:a,resize:j,reframe:ue,project:ct,lookAt:Je,flyTo:Re,turnTo:He,flashAtmosphere:g,update:O,reducedMotion:e,setMode:W,setPrologue:ht,setPrologueLines:bt,get inPrologue(){return We},get mode(){return p},get morphing(){return!!d},get dragging(){return!!Oe},setLon0:b,projection:{DEFAULT_LON0:ya,uniforms:De}};return j(),B}const x_=[{year:1851,name:"Dover to Calais",from:[51.1,1.3],to:[50.9,1.9],note:"The first working cable across a sea. The 1850 attempt lasted a day before a fisherman hauled it up, thinking it was seaweed with gold in it."},{year:1858,name:"First transatlantic cable",from:[51.6,-9.9],to:[47.6,-53.2],note:"Queen Victoria's ninety-eight-word greeting to President Buchanan takes sixteen hours. The cable is dead within a month."},{year:1866,name:"Transatlantic, the one that lasted",from:[51.6,-9.9],to:[47.6,-53.2],note:"The Great Eastern, the largest ship in the world, lays it in two weeks. A message now crosses in minutes instead of ten days by ship."},{year:1870,name:"London to Bombay",from:[50.1,-5.7],to:[18.9,72.8],note:"India is five hours from London instead of five weeks. The empire starts to be run by wire."},{year:1871,name:"Java to Darwin",from:[-7.2,112.7],to:[-12.5,130.8],note:"Australia joins the world's conversation. A telegram to London costs a week's wages."},{year:1874,name:"Brazil to Europe",from:[-8.1,-34.9],to:[38.7,-9.1],note:"Coffee prices in Rio and London move together for the first time."},{year:1876,name:"Australia to New Zealand",from:[-33.9,151.2],to:[-41.3,174.8],note:"Across the Tasman, so Wellington hears from Sydney the same day."},{year:1879,name:"Aden to Zanzibar",from:[12.8,45],to:[-6.2,39.2],note:"The east coast of Africa joins the network on the way to the Cape."},{year:1884,name:"Bombay to Hong Kong",from:[18.9,72.8],to:[22.3,114.2],note:"The wire reaches the China coast. Tea and silk prices are quoted in London the next morning."},{year:1891,name:"Halifax to Bermuda",from:[44.6,-63.6],to:[32.3,-64.8],note:"One of the small links that turned the Atlantic cables into a mesh."},{year:1902,name:"First transpacific cable",from:[37.8,-122.4],to:[21.3,-157.9],note:"San Francisco to Honolulu, working on New Year's Day 1903. The Pacific starts to shrink."},{year:1903,name:"Honolulu to Manila",from:[21.3,-157.9],to:[14.6,121],note:"On the day it opens, President Roosevelt sends a message around the world in nine minutes."},{year:1902,name:"Vancouver to Brisbane",from:[49.3,-123.1],to:[-27.5,153],note:"The All Red Line: an imperial route touching only British soil, so no rival could cut it."},{year:1956,name:"TAT-1, the first telephone cable",from:[57.6,-6.4],to:[47.6,-53.2],note:"Thirty-six telephone calls at once across the Atlantic. Before this you shouted over shortwave radio."},{year:1964,name:"Transpacific telephone",from:[21.3,-157.9],to:[35.7,139.7],note:"Tokyo and Hawaiʻi by voice, in time for the Olympics."},{year:1988,name:"TAT-8, the first fibre",from:[40.5,-74],to:[50.1,-5.7],note:"Forty thousand calls at once on hairs of glass. Within two years the satellites lose the telephone business for good."},{year:1989,name:"Fibre across the Pacific",from:[37.8,-122.4],to:[35.7,139.7],note:"Glass under the Pacific, with Japan's electronics boom riding on it."},{year:1997,name:"FLAG, London to Tokyo",from:[50.1,-5.7],to:[35.7,139.7],note:"Twenty-eight thousand kilometres, the longest cable yet. The web goes global on its back."},{year:2e3,name:"Africa's west coast",from:[38.7,-9.1],to:[-33.9,18.4],note:"SAT-3, the first fibre down Africa's Atlantic coast, and for a decade almost the only one."},{year:2009,name:"East Africa comes online",from:[-4,39.7],to:[19,72.8],note:"SEACOM. Until this cable, a whole coast of countries reached the internet by satellite."},{year:2018,name:"Marea, the fattest pipe yet",from:[36.9,-76.3],to:[43.4,-3.8],note:"Two hundred terabits a second on a cable the width of a garden hose, enough for seventy million video streams at once."}];function M_(i,e,t=48){const n=[],a=(e[1]-i[1]+540)%360-180;for(let r=0;r<=t;r++){const s=r/t;n.push([i[0]+(e[0]-i[0])*s,i[1]+a*s])}return n}class y_{constructor(){se(this,"items",x_);se(this,"cursor",0);se(this,"onCable",null);se(this,"lines",[])}attach(e){const t=new P;this.items.forEach(n=>{const a=M_(n.from,n.to),r=new Float32Array(a.length*3);a.forEach((c,l)=>{kr(c[0],c[1],1.005,t),r.set([t.x,t.y,t.z],l*3)});const s=new dt;s.setAttribute("position",new ze(r,3));const o=new Qo(s,new Jo({color:new qe(.45,.85,1),transparent:!0,opacity:0,depthWrite:!1}));o.frustumCulled=!1,o.userData={pts:a},e.scene.add(o),this.lines.push(o)})}update(e,t,{seek:n=!1}={}){var r;for(t<e&&(this.cursor=0);this.cursor<this.items.length&&this.items[this.cursor].year<=t;)t>=e&&!n&&((r=this.onCable)==null||r.call(this,this.items[this.cursor])),this.cursor++;const a=new P;this.lines.forEach((s,o)=>{const c=this.items[o],l=t>=c.year,u=s.material;u.opacity=l?.55:0;const f=s.userData.pts,h=s.geometry.getAttribute("position");f.forEach((m,_)=>{kr(m[0],m[1],1.005,a),h.setXYZ(_,a.x,a.y,a.z)}),h.needsUpdate=!0})}}const Uc=Math.log(2e3),S_=Math.log(3e7);class b_{constructor(e,t=na){se(this,"cities",[]);se(this,"points",null);se(this,"material",null);se(this,"labels",[]);se(this,"bright");this.labelsEl=e,this.base=t}async load(){const e=await fetch(`${this.base}data/cities.json`).then(r=>r.json());this.cities=e.cities.map(([r,s,o,c])=>({name:r,lat:s,lon:o,series:c,first:c[0][0]}));const t=this.cities.length,n=new Float32Array(t*2);this.cities.forEach((r,s)=>{n[s*2]=r.lat,n[s*2+1]=r.lon}),this.bright=new ze(new Float32Array(t),1),this.bright.setUsage(sh);const a=new dt;a.setAttribute("position",new ze(new Float32Array(t*3),3)),a.setAttribute("aLatLon",new ze(n,2)),a.setAttribute("aBright",this.bright),a.boundingSphere=new rn(new P,3),this.material=new vt({uniforms:{uPixelRatio:{value:1},uFlat:De.uFlat,uLon0:De.uLon0},vertexShader:Tt("Mf"),fragmentShader:Tt("Nf"),transparent:!0,depthWrite:!1,blending:Zt}),this.points=new Qi(a,this.material),this.points.frustumCulled=!1;for(let r=0;r<8;r++){const s=document.createElement("div");s.className="label city",this.labelsEl.appendChild(s),this.labels.push(s)}}attach(e){this.points&&e.scene.add(this.points),this.material&&(this.material.uniforms.uPixelRatio.value=e.pixelRatio)}popAt(e,t){const n=e.series;if(t<n[0][0])return 0;if(t>=n[n.length-1][0])return n[n.length-1][1];for(let a=1;a<n.length;a++)if(t<=n[a][0]){const r=(t-n[a-1][0])/(n[a][0]-n[a-1][0]),s=Math.max(1,n[a-1][1]),o=Math.max(1,n[a][1]);return Math.exp(Math.log(s)+(Math.log(o)-Math.log(s))*r)}return n[n.length-1][1]}largestAt(e){let t=0,n="";for(const a of this.cities){const r=this.popAt(a,e);r>t&&(t=r,n=a.name)}return{name:n,pop:t}}update(e,t){const n=[];this.cities.forEach((a,r)=>{let s=0,o=0;e>=a.first&&(o=this.popAt(a,e),s=Math.min(1,Math.max(0,(Math.log(Math.max(1,o))-Uc)/(S_-Uc))),s*=Math.min(1,(e-a.first)/40+.05),s>.3&&n.push({c:a,pop:o})),this.bright.setX(r,s)}),this.bright.needsUpdate=!0,n.sort((a,r)=>r.pop-a.pop),n.length=Math.min(8,n.length),this.labels.forEach((a,r)=>{const s=n[r];if(!s){a.style.opacity="0";return}const o=t(s.c.lat,s.c.lon);if(o.facing<.08){a.style.opacity="0";return}a.textContent=s.c.name,a.style.transform=`translate(${o.x.toFixed(1)}px, ${o.y.toFixed(1)}px) translate(-50%, -50%)`,a.style.opacity="1"})}}const E_=JSON.parse(`[{"name":"Natufians","lat":32.5,"lon":35.3,"start":-12500,"end":-9500,"note":"The first villages, before farming.","reach":3,"color":"#ffc2a1"},{"name":"Jōmon Japan","lat":36.5,"lon":139,"start":-10000,"end":-300,"note":"The world's oldest pottery, ten thousand years before rice.","reach":5,"color":"#ffb347"},{"name":"Göbekli Tepe","lat":37.2,"lon":38.9,"start":-9500,"end":-8000,"note":"Carved stone circles raised by people who had not yet farmed.","reach":2.5,"color":"#8fd3a1"},{"name":"Jericho","lat":31.9,"lon":35.4,"start":-9000,"end":-7000,"note":"The first town with a wall.","reach":2,"color":"#78c8ff"},{"name":"Pengtoushan","lat":29.6,"lon":111.6,"start":-7500,"end":-6100,"note":"Some of the first rice farmers, on the middle Yangtze.","reach":3,"color":"#ffb3a1"},{"name":"Nabta Playa","lat":22.5,"lon":30.7,"start":-7500,"end":-3500,"note":"Cattle herders and a stone calendar in a greener Sahara.","reach":3,"color":"#ffb347"},{"name":"Çatalhöyük","lat":37.7,"lon":32.8,"start":-7100,"end":-5700,"note":"A town of thousands with no streets; people walked across the roofs and climbed in.","reach":2.5,"color":"#ff8fa3"},{"name":"Peiligang","lat":34.6,"lon":113.6,"start":-7000,"end":-5000,"note":"Millet villages on the Yellow River.","reach":4,"color":"#ff9e7a"},{"name":"Mehrgarh","lat":29.4,"lon":67.6,"start":-7000,"end":-2500,"note":"Farming, herding and the first drilled teeth, at the edge of the Indus.","reach":3,"color":"#e6c07b"},{"name":"Ubaid","lat":31,"lon":46,"start":-6500,"end":-4000,"note":"Irrigation, temples and towns before Sumer.","reach":4,"color":"#8fd3a1"},{"name":"Halaf","lat":36.8,"lon":40,"start":-6100,"end":-5100,"note":"Painted pottery across northern Mesopotamia.","reach":3,"color":"#78c8ff"},{"name":"Vinča","lat":44.8,"lon":20.6,"start":-5700,"end":-4500,"note":"Europe's first copper, and marks that may be writing.","reach":4,"color":"#ff8fa3"},{"name":"Yangshao","lat":34.5,"lon":110,"start":-5000,"end":-3000,"note":"Painted pottery villages along the Yellow River.","reach":6,"color":"#c9a6ff"},{"name":"Cucuteni–Trypillia","lat":48.5,"lon":28.5,"start":-5000,"end":-2750,"note":"Settlements of ten thousand people, burned and rebuilt on purpose.","reach":5,"color":"#ffe08a"},{"name":"Hemudu","lat":30,"lon":121.4,"start":-5000,"end":-3300,"note":"Rice paddies and stilt houses on the Yangtze delta.","reach":3,"color":"#ffc9a3"},{"name":"Hongshan","lat":41.3,"lon":119.3,"start":-4700,"end":-2900,"note":"Jade dragons and a goddess temple in the northeast.","reach":3.5,"color":"#c9a6ff"},{"name":"Sumer","lat":31.3,"lon":45.6,"start":-4500,"end":-1900,"note":"First cities, first writing, first complaints in writing.","reach":4,"color":"#f6c177"},{"name":"Maykop","lat":44.6,"lon":40.1,"start":-3700,"end":-3000,"note":"Gold, wheels and the Caucasus.","reach":3,"color":"#ffe08a"},{"name":"Valdivia","lat":-2.2,"lon":-80.6,"start":-3500,"end":-1800,"note":"The Americas' oldest pottery, on the Ecuadorian coast.","reach":3,"color":"#7fe3d6"},{"name":"Indus Valley","lat":27.5,"lon":69.5,"start":-3300,"end":-1300,"note":"Planned cities with drains, and a script nobody can read.","reach":7,"color":"#f4a261"},{"name":"Liangzhu","lat":30.4,"lon":120,"start":-3300,"end":-2300,"note":"A jade city with dams on the Yangtze delta.","reach":3,"color":"#f7a072"},{"name":"Yamnaya","lat":48,"lon":40,"start":-3300,"end":-2600,"note":"Horse and wagon people of the steppe; half of Europe's languages descend from theirs.","reach":7,"color":"#b5d99c"},{"name":"Ancient Egypt","lat":26.5,"lon":31.5,"start":-3100,"end":-30,"note":"Three kingdoms along one river.","reach":6,"color":"#ffd166"},{"name":"Minoans","lat":35.3,"lon":25.1,"start":-3000,"end":-1450,"note":"Palace society on Crete, with running water and bull-leaping.","reach":2.5,"color":"#f0a6ff"},{"name":"Norte Chico","lat":-10.9,"lon":-77.5,"start":-3000,"end":-1800,"note":"Monumental mounds in Peru before pottery.","reach":3,"color":"#9ad0ff"},{"name":"Neolithic Britain","lat":51.2,"lon":-1.8,"start":-3000,"end":-1500,"note":"Stonehenge and its neighbours.","reach":4,"color":"#ffc2a1"},{"name":"Longshan","lat":35.5,"lon":118.5,"start":-3000,"end":-1900,"note":"Black pottery and the first walled towns in China.","reach":5,"color":"#f0a6ff"},{"name":"Ebla","lat":35.8,"lon":36.8,"start":-3000,"end":-2300,"note":"An archive of seventeen thousand tablets in Syria.","reach":3,"color":"#9ad0ff"},{"name":"Elam","lat":32.2,"lon":48.3,"start":-2700,"end":-540,"note":"Susa, Sumer's eastern rival for two thousand years.","reach":4,"color":"#ffc2a1"},{"name":"Kerma","lat":19.6,"lon":30.4,"start":-2500,"end":-1500,"note":"Nubia's first kingdom.","reach":3,"color":"#ffb347"},{"name":"Akkad","lat":33.5,"lon":44,"start":-2334,"end":-2154,"note":"The first empire, and the first empire to fall.","reach":5,"color":"#ffb347"},{"name":"Oxus cities","lat":37.5,"lon":62,"start":-2300,"end":-1700,"note":"Walled oasis towns between the Indus and Mesopotamia.","reach":4,"color":"#8fd3a1"},{"name":"Xia–Shang China","lat":34.7,"lon":113.5,"start":-1900,"end":-1046,"note":"Oracle bones: questions to ancestors, scratched on turtle shells.","reach":6,"color":"#8fd3a1"},{"name":"Poverty Point","lat":32.6,"lon":-91.4,"start":-1700,"end":-1100,"note":"Earthworks on the Mississippi by hunter-gatherers.","reach":3,"color":"#78c8ff"},{"name":"Hittites","lat":40,"lon":34.6,"start":-1650,"end":-1180,"note":"Iron and chariots in Anatolia.","reach":5,"color":"#ff8fa3"},{"name":"Mycenaeans","lat":37.7,"lon":22.8,"start":-1600,"end":-1100,"note":"Homer's Greeks, roughly.","reach":3,"color":"#c9a6ff"},{"name":"Sanxingdui","lat":31,"lon":104.4,"start":-1600,"end":-1100,"note":"Bronze masks unlike anything else in China.","reach":3,"color":"#78c8ff"},{"name":"Lapita","lat":-8.5,"lon":150,"start":-1600,"end":-500,"note":"Canoe-borne ancestors of the Polynesians.","reach":6,"color":"#ff8fa3"},{"name":"Olmec","lat":18,"lon":-94.5,"start":-1500,"end":-400,"note":"Colossal stone heads on the Gulf coast.","reach":3.5,"color":"#ffe08a"},{"name":"Vedic India","lat":30,"lon":76,"start":-1500,"end":-500,"note":"The Vedas composed; the Ganges plain cleared with iron.","reach":6,"color":"#c9a6ff"},{"name":"Phoenicia","lat":33.9,"lon":35.5,"start":-1200,"end":-300,"note":"The alphabet, and the ships to spread it.","reach":3,"color":"#7fe3d6"},{"name":"Kush","lat":18.5,"lon":31.8,"start":-1070,"end":350,"note":"Nubian kings who ruled Egypt for a century.","reach":4,"color":"#f7a072"},{"name":"Zhou China","lat":34.3,"lon":108.9,"start":-1046,"end":-256,"note":"The Mandate of Heaven, and Confucius.","reach":7,"color":"#b5d99c"},{"name":"Nok","lat":9.5,"lon":8.5,"start":-1000,"end":300,"note":"Terracotta heads and early iron in Nigeria.","reach":3.5,"color":"#f0a6ff"},{"name":"Israel and Judah","lat":31.8,"lon":35.2,"start":-1000,"end":-586,"note":"Jerusalem, and a book that outlived the kingdoms.","reach":2.5,"color":"#ffe08a"},{"name":"Assyria","lat":36.4,"lon":43.2,"start":-911,"end":-609,"note":"Libraries and siege engines.","reach":6,"color":"#ffc2a1"},{"name":"Chavín","lat":-9.6,"lon":-77.2,"start":-900,"end":-200,"note":"A temple in the Andes people walked weeks to reach.","reach":3.5,"color":"#9ad0ff"},{"name":"Urartu","lat":38.5,"lon":43.4,"start":-860,"end":-590,"note":"A kingdom around Lake Van.","reach":3,"color":"#b5d99c"},{"name":"Carthage","lat":36.9,"lon":10.3,"start":-814,"end":-146,"note":"Phoenicia's daughter, Rome's rival.","reach":4,"color":"#7fe3d6"},{"name":"Etruscans","lat":42.8,"lon":11.8,"start":-800,"end":-100,"note":"Rome's teachers, later Rome's subjects.","reach":3,"color":"#ffb347"},{"name":"Scythians","lat":48,"lon":35,"start":-800,"end":300,"note":"Horse archers of the steppe, gold in their graves.","reach":8,"color":"#f7a072"},{"name":"Persia","lat":29.9,"lon":52.9,"start":-550,"end":-330,"note":"Roads and post-riders from the Aegean to the Indus.","reach":12,"color":"#7fd0ff"},{"name":"Classical Greece","lat":38,"lon":23.7,"start":-510,"end":-323,"note":"Democracy, tragedy, geometry, gossip.","reach":3.5,"color":"#8fd8ff"},{"name":"Zapotecs","lat":17,"lon":-96.8,"start":-500,"end":800,"note":"Monte Albán, a city on a flattened mountain.","reach":3,"color":"#f0a6ff"},{"name":"Celts","lat":47.5,"lon":7,"start":-450,"end":50,"note":"Iron Age Europe north of the Alps.","reach":6,"color":"#9ad0ff"},{"name":"Maurya","lat":25.6,"lon":85.1,"start":-322,"end":-185,"note":"Ashoka's edicts carved on rocks across India.","reach":10,"color":"#b3e36b"},{"name":"Nabataeans","lat":30.3,"lon":35.4,"start":-300,"end":106,"note":"Petra, carved from the cliff.","reach":2.5,"color":"#ffc2a1"},{"name":"Han China","lat":34.3,"lon":108.9,"start":-206,"end":220,"note":"Paper, the Silk Road, and officials chosen by examination.","reach":12,"color":"#ff6b6b"},{"name":"Nazca","lat":-14.7,"lon":-75.1,"start":-100,"end":800,"note":"Lines in the desert, visible only from the sky.","reach":3,"color":"#7fe3d6"},{"name":"Hopewell","lat":39.5,"lon":-83,"start":-100,"end":500,"note":"Earthworks and a trade network across half a continent.","reach":4,"color":"#ffb347"},{"name":"Three Kingdoms of Korea","lat":36.5,"lon":127.5,"start":-57,"end":668,"note":"Goguryeo, Baekje and Silla.","reach":3.5,"color":"#8fd3a1"},{"name":"Rome","lat":41.9,"lon":12.5,"start":-27,"end":476,"note":"Roads, law, concrete, and a city of a million people.","reach":12,"color":"#c58bff"},{"name":"Kushans","lat":34.5,"lon":69.2,"start":30,"end":375,"note":"Silk Road empire; Buddhism goes east.","reach":6,"color":"#78c8ff"},{"name":"Teotihuacan","lat":19.7,"lon":-98.8,"start":100,"end":550,"note":"A city of a hundred thousand with no known king.","reach":3.5,"color":"#f7a072"},{"name":"Moche","lat":-8.1,"lon":-79,"start":100,"end":700,"note":"Adobe pyramids on the Peruvian coast.","reach":3,"color":"#b5d99c"},{"name":"Aksum","lat":14.1,"lon":38.7,"start":100,"end":940,"note":"Obelisks and coinage in the Ethiopian highlands.","reach":4,"color":"#f0a6ff"},{"name":"Funan","lat":10.5,"lon":105,"start":100,"end":600,"note":"The Mekong delta's first state.","reach":3,"color":"#ff8fa3"},{"name":"Sasanian Persia","lat":33.1,"lon":44.6,"start":224,"end":651,"note":"Rome's rival for four centuries.","reach":9,"color":"#66b8ff"},{"name":"Classic Maya","lat":17.2,"lon":-89.6,"start":250,"end":900,"note":"Calendars, eclipse tables, and a Long Count.","reach":4,"color":"#5ce1a1"},{"name":"Yamato Japan","lat":34.7,"lon":135.8,"start":250,"end":710,"note":"Keyhole tombs and the first emperors.","reach":3.5,"color":"#c9a6ff"},{"name":"Ghana Empire","lat":15.5,"lon":-8,"start":300,"end":1200,"note":"Gold south, salt north, across the Sahara.","reach":6,"color":"#ffe08a"},{"name":"Gupta","lat":25.4,"lon":83,"start":320,"end":550,"note":"Zero, and the decimal system.","reach":8,"color":"#d0f07a"},{"name":"Byzantium","lat":41,"lon":29,"start":330,"end":1453,"note":"Rome, continued.","reach":6,"color":"#b56cff"},{"name":"Tiwanaku","lat":-16.6,"lon":-68.7,"start":500,"end":1000,"note":"A capital at 3,800 metres.","reach":3.5,"color":"#78c8ff"},{"name":"Tang China","lat":34.3,"lon":108.9,"start":618,"end":907,"note":"The world's largest city, and poetry to match.","reach":12,"color":"#ff7a5c"},{"name":"Srivijaya","lat":-2.9,"lon":104.7,"start":650,"end":1275,"note":"A trading empire on the Sumatran coast, astride the Straits of Malacca.","reach":6,"color":"#c9a6ff"},{"name":"Kanem–Bornu","lat":13.5,"lon":14.5,"start":700,"end":1900,"note":"A thousand years around Lake Chad.","reach":5,"color":"#f7a072"},{"name":"Abbasid Caliphate","lat":33.3,"lon":44.4,"start":750,"end":1258,"note":"Baghdad's House of Wisdom.","reach":11,"color":"#5fe0d8"},{"name":"Franks","lat":50.8,"lon":6.1,"start":751,"end":888,"note":"Charlemagne, and an empire that made Europe.","reach":6,"color":"#7fe3d6"},{"name":"Norse","lat":60.4,"lon":5.3,"start":793,"end":1066,"note":"Longships to Iceland, Greenland, and briefly Newfoundland.","reach":6,"color":"#a8e6ff"},{"name":"Swahili coast","lat":-6.2,"lon":39.2,"start":800,"end":1500,"note":"Kilwa and Zanzibar, trading with India and China.","reach":4,"color":"#b5d99c"},{"name":"Khmer","lat":13.4,"lon":103.9,"start":802,"end":1431,"note":"Angkor, the largest city before the industrial age.","reach":4,"color":"#f7a072"},{"name":"Chola","lat":10.9,"lon":79.4,"start":848,"end":1279,"note":"A navy across the Bay of Bengal.","reach":4,"color":"#ffc2a1"},{"name":"Pagan","lat":21.2,"lon":94.9,"start":849,"end":1297,"note":"Ten thousand temples on the Irrawaddy.","reach":3.5,"color":"#f0a6ff"},{"name":"Chaco Canyon","lat":36.1,"lon":-107.9,"start":850,"end":1150,"note":"Great houses aligned to the sun and moon.","reach":3,"color":"#b5d99c"},{"name":"Kievan Rus'","lat":50.4,"lon":30.5,"start":882,"end":1240,"note":"Where Russia, Ukraine and Belarus begin.","reach":6,"color":"#9ad0ff"},{"name":"Toltecs","lat":20.1,"lon":-99.3,"start":900,"end":1150,"note":"Tula, and the stories the Aztecs told about it.","reach":3,"color":"#ffb347"},{"name":"Chimú","lat":-8.1,"lon":-79.1,"start":900,"end":1470,"note":"Chan Chan, the largest adobe city ever built.","reach":3.5,"color":"#78c8ff"},{"name":"Fatimids","lat":30,"lon":31.2,"start":909,"end":1171,"note":"Cairo founded.","reach":5,"color":"#8fd3a1"},{"name":"Song China","lat":34.8,"lon":114.3,"start":960,"end":1279,"note":"Printing, gunpowder, paper money, the compass.","reach":10,"color":"#ff8fa3"},{"name":"Polynesian voyagers","lat":-17.6,"lon":-149.4,"start":1000,"end":1300,"note":"Canoes reach Hawaiʻi, Rapa Nui, and Aotearoa.","reach":8,"color":"#9ad0ff"},{"name":"Cahokia","lat":38.7,"lon":-90.1,"start":1050,"end":1350,"note":"Earthen pyramids across the river from modern St. Louis.","reach":3.5,"color":"#ffc2a1"},{"name":"Great Zimbabwe","lat":-20.3,"lon":30.9,"start":1100,"end":1450,"note":"Stone walls without mortar, gold traded to the coast.","reach":4,"color":"#ffb347"},{"name":"Benin","lat":6.3,"lon":5.6,"start":1180,"end":1897,"note":"Bronze plaques and earthen walls longer than any in the world.","reach":2.5,"color":"#b5d99c"},{"name":"Mongol Empire","lat":47.9,"lon":106.9,"start":1206,"end":1368,"note":"The largest land empire, from one steppe.","reach":16,"color":"#a3c9ff"},{"name":"Delhi Sultanate","lat":28.6,"lon":77.2,"start":1206,"end":1526,"note":"Three centuries of sultans on the Yamuna.","reach":7,"color":"#ff8fa3"},{"name":"Mali","lat":14.5,"lon":-4.2,"start":1235,"end":1600,"note":"Mansa Musa's gold crashed the price in Cairo.","reach":7,"color":"#ffcc66"},{"name":"Ethiopia","lat":12.6,"lon":37.5,"start":1270,"end":1974,"note":"The Solomonic line, seven hundred years.","reach":4,"color":"#b5d99c"},{"name":"Majapahit","lat":-7.6,"lon":112.4,"start":1293,"end":1527,"note":"Java's empire, whose reach the modern republic claims as its own.","reach":5,"color":"#ff8fa3"},{"name":"Vijayanagara","lat":15.3,"lon":76.5,"start":1336,"end":1646,"note":"The city of victory, in the south.","reach":5,"color":"#c9a6ff"},{"name":"Ming China","lat":39.9,"lon":116.4,"start":1368,"end":1644,"note":"The Forbidden City and Zheng He's fleets.","reach":12,"color":"#ff5c7a"},{"name":"Timurids","lat":39.7,"lon":66.9,"start":1370,"end":1507,"note":"Samarkand's blue domes.","reach":6,"color":"#ffe08a"},{"name":"Kingdom of Kongo","lat":-6.3,"lon":14.7,"start":1390,"end":1914,"note":"A kingdom that sent ambassadors to Rome.","reach":4,"color":"#7fe3d6"},{"name":"Joseon Korea","lat":37.6,"lon":127,"start":1392,"end":1897,"note":"Five centuries of one dynasty, and an alphabet designed in a decade.","reach":3.5,"color":"#9ad0ff"},{"name":"Aztecs","lat":19.4,"lon":-99.1,"start":1428,"end":1521,"note":"Tenochtitlan on a lake, bigger than any city in Spain.","reach":3.5,"color":"#4dd6b0"},{"name":"Đại Việt","lat":21,"lon":105.8,"start":1428,"end":1802,"note":"Independent Vietnam after the Ming.","reach":3,"color":"#7fe3d6"},{"name":"Inca","lat":-13.5,"lon":-72,"start":1438,"end":1533,"note":"Roads over the Andes, records in knotted string.","reach":8,"color":"#ffb84d"},{"name":"Ottomans","lat":41,"lon":29,"start":1453,"end":1922,"note":"Constantinople becomes Istanbul.","reach":9,"color":"#e04a5a"},{"name":"Songhai","lat":16.3,"lon":-0.1,"start":1464,"end":1591,"note":"Timbuktu's libraries at their height.","reach":6,"color":"#f7a072"},{"name":"Spanish Empire","lat":40.4,"lon":-3.7,"start":1492,"end":1898,"note":"Silver from Potosí, and the first empire with land on every continent.","reach":5,"color":"#ffcc66"},{"name":"Safavid Persia","lat":32.7,"lon":51.7,"start":1501,"end":1736,"note":"Isfahan is half the world, the saying went.","reach":7,"color":"#66b8ff"},{"name":"Mughals","lat":28.6,"lon":77.2,"start":1526,"end":1857,"note":"The Taj Mahal, and a fifth of the world's people.","reach":10,"color":"#7dd87d"},{"name":"Edo Japan","lat":35.7,"lon":139.7,"start":1603,"end":1868,"note":"Two centuries of peace behind a closed door; Edo becomes the world's largest city.","reach":5,"color":"#ff9ec6"},{"name":"Qing China","lat":39.9,"lon":116.4,"start":1644,"end":1912,"note":"A third of the world's people under one court.","reach":12,"color":"#ff6b6b"},{"name":"British Empire","lat":51.5,"lon":-0.1,"start":1707,"end":1947,"note":"A quarter of the world's people, ruled from a small island.","reach":4,"color":"#f0a6ff"},{"name":"Russian Empire","lat":59.9,"lon":30.3,"start":1721,"end":1917,"note":"Petersburg to the Pacific.","reach":10,"color":"#a8e6ff"},{"name":"United States","lat":38.9,"lon":-77,"start":1776,"end":2027,"note":"Thirteen colonies to fifty states.","reach":12,"color":"#8fd8ff"},{"name":"Siam","lat":13.8,"lon":100.5,"start":1782,"end":2027,"note":"Never colonised.","reach":3.5,"color":"#ffe08a"},{"name":"Brazil","lat":-15.8,"lon":-47.9,"start":1822,"end":2027,"note":"An empire, then a republic, the size of a continent.","reach":10,"color":"#8fd3a1"},{"name":"Meiji Japan","lat":35.7,"lon":139.7,"start":1868,"end":2027,"note":"From closed country to industrial power in a generation.","reach":5,"color":"#ff9ec6"},{"name":"Republic of China","lat":30.6,"lon":114.3,"start":1912,"end":1949,"note":"The end of two thousand years of emperors.","reach":11,"color":"#ff8fa3"},{"name":"Soviet Union","lat":55.8,"lon":37.6,"start":1922,"end":1991,"note":"Seventy years, one sixth of the land.","reach":12,"color":"#ff5c7a"},{"name":"Indonesia","lat":-6.2,"lon":106.8,"start":1945,"end":2027,"note":"Seventeen thousand islands, and the world's largest Muslim country.","reach":7,"color":"#f4a261"},{"name":"India","lat":28.6,"lon":77.2,"start":1947,"end":2027,"note":"The largest democracy, and now the most people.","reach":10,"color":"#ffb347"},{"name":"People's Republic of China","lat":39.9,"lon":116.4,"start":1949,"end":2027,"note":"The fastest rise in living standards in history.","reach":12,"color":"#ff6b6b"},{"name":"Nigeria","lat":9.1,"lon":7.5,"start":1960,"end":2027,"note":"One in six Africans.","reach":5,"color":"#d0f07a"},{"name":"European Union","lat":50.8,"lon":4.4,"start":1993,"end":2027,"note":"Twenty-seven countries that stopped fighting each other.","reach":9,"color":"#c9a6ff"}]`);function Er(i,e){if(e<=i[0])return[0,0,0];const t=i.length-1;if(e>=i[t])return[t,t,0];let n=1;for(;n<i.length&&i[n]<e;)n++;const a=n-1;return[a,n,(e-i[a])/(i[n]-i[a])]}class T_{constructor(e=na){se(this,"meta",null);se(this,"mesh",null);se(this,"material",null);se(this,"maxTotal",0);this.base=e}async load(){const[e,t]=await Promise.all([fetch(`${this.base}data/population.json`).then(n=>n.json()),new Promise((n,a)=>new el().load(`${this.base}data/population.png`,n,void 0,a))]);return this.meta=e,this.maxTotal=Math.max(...e.totals??[1]),t.colorSpace=tn,t.generateMipmaps=!1,t.minFilter=t.magFilter=At,this.material=new vt({uniforms:{uAtlas:{value:t},uCols:{value:e.cols},uRows:{value:e.rows},uStep0:{value:0},uStep1:{value:0},uMix:{value:0},uGain:{value:1.6},uTexel:{value:{x:1/(e.cols*e.tileWidth),y:1/(e.rows*e.tileHeight)}},uFlat:De.uFlat,uLon0:De.uLon0,uCivCount:{value:0},uCiv:{value:Array.from({length:is},()=>new pt)},uCivColor:{value:Array.from({length:is},()=>new P)}},vertexShader:Tt("Cd"),fragmentShader:Tt("wd"),transparent:!0,depthWrite:!1,blending:Zt}),this.mesh=new Xt(il(),this.material),this.mesh.frustumCulled=!1,e}attach(e){this.mesh&&e.scene.add(this.mesh)}centroidAt(e){var u;if(!((u=this.meta)!=null&&u.centroids))return null;const[t,n,a]=Er(this.meta.years,e),[r,s]=this.meta.centroids[t],[o,c]=this.meta.centroids[n],l=(c-s+540)%360-180;return[r+(o-r)*a,s+l*a]}totalAt(e){var r;if(!((r=this.meta)!=null&&r.totals))return 0;const[t,n,a]=Er(this.meta.years,e);return this.meta.totals[t]*(1-a)+this.meta.totals[n]*a}update(e,t=3.5,n=[]){if(!this.meta||!this.material)return;const a=this.material.uniforms,r=Math.min(is,n.length);a.uCivCount.value=r;for(let u=0;u<r;u++){const f=n[u];a.uCiv.value[u].set(f.lat,f.lon,f.reach,f.alpha),a.uCivColor.value[u].set(f.rgb[0],f.rgb[1],f.rgb[2])}const[s,o,c]=Er(this.meta.years,e);a.uStep0.value=s,a.uStep1.value=o,a.uMix.value=c;const l=Math.min(1,Math.max(0,(t-1.4)/2));a.uGain.value=1.6*(.45+.55*l)*(e<this.meta.years[0]?0:1)}}function w_(i){const e=new qe(i);return[e.r,e.g,e.b]}class A_{constructor(e,t){se(this,"items");se(this,"active",[]);this.items=E_.map(n=>{const a=document.createElement("div");a.className="label",a.textContent=n.name,a.title=n.note,a.style.color=n.color,e.appendChild(a);const r=document.createElement("li");return r.textContent=`${n.name}: ${n.note}`,t.appendChild(r),{...n,el:a,rgb:w_(n.color),shown:!1}})}tints(e){return this.active=this.items.filter(t=>e>=t.start&&e<=t.end+80),this.active.map(t=>{const n=Math.min(1,(e-t.start)/80),a=e>t.end?Math.max(0,1-(e-t.end)/80):1;return{lat:t.lat,lon:t.lon,reach:t.reach,alpha:n*a,rgb:t.rgb}})}counts(e){let t=0,n=0,a=0;for(const r of this.items)e>=r.start&&(n++,e<=r.end?t++:a++);return{alive:t,risen:n,gone:a}}update(e){for(const t of this.items){if(!this.active.includes(t)){t.shown&&(t.el.style.opacity="0",t.shown=!1);continue}const a=e(t.lat,t.lon);if(a.facing<.05){t.el.style.opacity="0",t.shown=!1;continue}t.el.style.transform=`translate(${a.x.toFixed(1)}px, ${a.y.toFixed(1)}px) translate(-50%, -50%)`,t.el.style.opacity="1",t.shown=!0}}}const R_=[{name:"Council Bluffs, Iowa",lat:41.22,lon:-95.86,year:2007,gw:1,operator:"Google",note:"One of Google's largest campuses."},{name:"Ashburn, Virginia",lat:39.04,lon:-77.49,year:2008,gw:4.5,operator:"Data Center Alley",note:"The densest cluster on Earth, a fifth of the world's cloud."},{name:"Quincy, Washington",lat:47.23,lon:-119.85,year:2007,gw:.6,operator:"Microsoft",note:"Cheap hydro power on the Columbia."},{name:"Prineville, Oregon",lat:44.3,lon:-120.83,year:2011,gw:.4,operator:"Meta",note:"Facebook's first own campus."},{name:"Dublin",lat:53.35,lon:-6.26,year:2012,gw:1.2,operator:"Amazon, Microsoft, Google",note:"Ireland's data centres use a fifth of its electricity."},{name:"Frankfurt",lat:50.11,lon:8.68,year:2012,gw:1.1,operator:"Interxion, Equinix",note:"Europe's internet exchange."},{name:"Singapore",lat:1.35,lon:103.82,year:2013,gw:1,operator:"Equinix, Google, Meta",note:"Paused new builds in 2019; the island ran out of power."},{name:"Guizhou",lat:26.65,lon:106.63,year:2015,gw:.8,operator:"China Telecom, Apple",note:"Mountain caves and cheap hydro."},{name:"Zhangjiakou",lat:40.77,lon:114.89,year:2016,gw:.9,operator:"Alibaba, Tencent",note:"Wind power north of Beijing."},{name:"Inzai, Chiba",lat:35.83,lon:140.15,year:2016,gw:.7,operator:"Google, Colt",note:"Tokyo's data centre town."},{name:"Johor",lat:1.49,lon:103.74,year:2022,gw:1.5,operator:"ByteDance, Microsoft, Nvidia",note:"Where Singapore's overflow went."},{name:"Colossus, Memphis",lat:35.06,lon:-90.06,year:2024,gw:1,operator:"xAI",note:"A hundred thousand GPUs in 122 days."},{name:"Stargate, Abilene",lat:32.45,lon:-99.73,year:2025,gw:1.2,operator:"OpenAI, Oracle",note:"The first Stargate site."},{name:"Fairwater, Wisconsin",lat:42.72,lon:-87.86,year:2025,gw:1,operator:"Microsoft",note:"Announced as the world's most powerful AI data centre."},{name:"Hyperion, Louisiana",lat:32.53,lon:-92.12,year:2026,gw:2,operator:"Meta",note:"Planned to grow to five gigawatts."},{name:"Jamnagar",lat:22.47,lon:70.07,year:2026,gw:1,operator:"Reliance",note:"Planned up to three gigawatts, on solar."}];class C_{constructor(e){se(this,"items",R_);se(this,"onSite",null);se(this,"cursor",0);se(this,"points",null);se(this,"material",null);se(this,"labels",[]);this.labelsEl=e}attach(e){const t=this.items.length,n=new Float32Array(t*2),a=new Float32Array(t),r=new Float32Array(t);this.items.forEach((o,c)=>{n[c*2]=o.lat,n[c*2+1]=o.lon,a[c]=o.year,r[c]=o.gw;const l=document.createElement("div");l.className="label dc",l.textContent=o.name,this.labelsEl.appendChild(l),this.labels.push(l)});const s=new dt;s.setAttribute("position",new ze(new Float32Array(t*3),3)),s.setAttribute("aLatLon",new ze(n,2)),s.setAttribute("aYear",new ze(a,1)),s.setAttribute("aGW",new ze(r,1)),s.boundingSphere=new rn(new P,3),this.material=new vt({uniforms:{uYear:{value:-1e9},uTime:{value:0},uPixelRatio:{value:e.pixelRatio},uFlat:De.uFlat,uLon0:De.uLon0},vertexShader:Tt("Hf"),fragmentShader:Tt("Uf"),transparent:!0,depthWrite:!1,blending:Zt}),this.points=new Qi(s,this.material),this.points.frustumCulled=!1,e.scene.add(this.points)}gwAt(e){return this.items.filter(t=>t.year<=e).reduce((t,n)=>t+n.gw,0)}update(e,t,n,a,{seek:r=!1}={}){var s;for(this.material&&(this.material.uniforms.uYear.value=t,this.material.uniforms.uTime.value=n),t<e&&(this.cursor=0);this.cursor<this.items.length&&this.items[this.cursor].year<=t;)t>=e&&!r&&((s=this.onSite)==null||s.call(this,this.items[this.cursor])),this.cursor++;this.items.forEach((o,c)=>{const l=this.labels[c];if(t<o.year){l.style.opacity="0";return}const u=a(o.lat,o.lon);if(u.facing<.08){l.style.opacity="0";return}l.style.transform=`translate(${u.x.toFixed(1)}px, ${u.y.toFixed(1)}px) translate(-50%, -50%)`,l.style.opacity="1"})}}const ma=6e4,P_=[{count:3,speed:.02,life:.9,size:.011,color:[.75,.85,1]},{count:4,speed:.03,life:1,size:.012,color:[.95,.92,.85]},{count:7,speed:.045,life:1.2,size:.013,color:[1,.82,.4]},{count:12,speed:.065,life:1.4,size:.015,color:[1,.62,.25]},{count:20,speed:.09,life:1.7,size:.017,color:[1,.42,.2]},{count:36,speed:.13,life:2.1,size:.019,color:[1,.3,.38]},{count:60,speed:.15,life:2.7,size:.021,color:[.85,.55,1]},{count:102,speed:.2,life:3.4,size:.025,color:[.8,.9,1]}];class L_{constructor(e=na){se(this,"minVei",6);se(this,"data",null);se(this,"allEruptions",[]);se(this,"cursor",0);se(this,"group",new xa);se(this,"attrs");se(this,"material");se(this,"scarMaterial");se(this,"head",0);se(this,"dirty",null);se(this,"globe",null);se(this,"flags");se(this,"byVolcano",[]);se(this,"spawned",0);se(this,"burstScale",1);se(this,"budgetT",0);this.base=e,this.initParticles(),this.initScars()}initParticles(){const e=new dt,t=a=>{const r=new ze(new Float32Array(ma*a),a);return r.setUsage(sh),r};this.attrs={aLatLon:t(2),aVel:t(3),aColor:t(3),aBirth:t(1),aLife:t(1),aSize:t(1),aKind:t(1),aSeed:t(1)};for(const[a,r]of Object.entries(this.attrs))e.setAttribute(a,r);e.setAttribute("position",new ze(new Float32Array(ma*3),3)),e.boundingSphere=new rn(new P,3),this.material=new vt({uniforms:{uTime:{value:0},uScale:{value:500},uFlat:De.uFlat,uLon0:De.uLon0},vertexShader:Tt("fd"),fragmentShader:Tt("pd"),transparent:!0,depthWrite:!1,blending:Zt});const n=new Qi(e,this.material);n.frustumCulled=!1,this.group.add(n)}initScars(){this.scarMaterial=new vt({uniforms:{uYear:{value:-1e9},uPixelRatio:{value:1},uFlat:De.uFlat,uLon0:De.uLon0},vertexShader:Tt("md"),fragmentShader:Tt("hd"),transparent:!0,depthWrite:!1,blending:Zt});const e=new Qi(new dt,this.scarMaterial);e.frustumCulled=!1,e.name="scars",this.group.add(e)}async load({minVei:e=0}={}){this.minVei=e;const t=await fetch(`${this.base}data/eruptions.json`).then(n=>n.json());return this.data=t,this.allEruptions=t.eruptions,this.flags=t.flags,e>0&&(this.data.eruptions=this.allEruptions.filter(n=>n[2]>=e&&!(n[3]&t.flags.NO_VEI))),this.byVolcano=t.volcanoes.map(()=>[]),this.data.eruptions.forEach((n,a)=>this.byVolcano[n[0]].push(a)),this.fillScars(),this.data}fillScars(){if(!this.data)return;const e=new Float32Array(this.data.volcanoes.length).fill(1e9);for(const r of this.allEruptions)r[1]<e[r[0]]&&(e[r[0]]=r[1]);const t=new Float32Array(this.data.volcanoes.length*2);this.data.volcanoes.forEach((r,s)=>{t[s*2]=r[1],t[s*2+1]=r[2]});const n=new dt;n.setAttribute("position",new ze(new Float32Array(this.data.volcanoes.length*3),3)),n.setAttribute("aLatLon",new ze(t,2)),n.setAttribute("aFirstYear",new ze(e,1)),n.boundingSphere=new rn(new P,3);const a=this.group.getObjectByName("scars");a.geometry.dispose(),a.geometry=n}attach(e){this.globe=e,this.scarMaterial.uniforms.uPixelRatio.value=e.pixelRatio,e.scene.add(this.group)}burst(e,t,n,a,r,s=1){const o=P_[Math.max(0,Math.min(7,n))],c=a?o.color:[o.color[0]*.55+.15,o.color[1]*.55+.2,o.color[2]*.55+.3],l=Math.round(o.count*(a?1:.45)*s*this.burstScale),u=new P,f=Math.random();for(let h=0;h<l;h++){const m=Math.random()*Math.PI*2,_=Math.sqrt(Math.random());u.set(Math.cos(m)*_,Math.sin(m)*_,.6+Math.random()*.8).normalize().multiplyScalar(o.speed*(.35+.65*Math.random())*(a?1:.55)*s),this.write(this.alloc(),e,t,u,c,r+Math.random()*.05,o.life*(.7+.5*Math.random())*(a?1:1.6),o.size*(.6+.8*Math.random())*(a?1:2.4)*s,a?1:0,f+h)}}write(e,t,n,a,r,s,o,c,l,u){this.attrs.aLatLon.array[e*2]=t,this.attrs.aLatLon.array[e*2+1]=n,this.attrs.aVel.array.set([a.x,a.y,a.z],e*3),this.attrs.aColor.array.set(r,e*3),this.attrs.aBirth.array[e]=s,this.attrs.aLife.array[e]=o,this.attrs.aSize.array[e]=c,this.attrs.aKind.array[e]=l,this.attrs.aSeed.array[e]=u}alloc(){this.spawned++;const e=this.head;return this.head=(this.head+1)%ma,this.dirty?e<this.dirty[0]?this.dirty=[0,ma]:this.dirty[1]=Math.max(this.dirty[1],e+1):this.dirty=[e,e+1],e}fire(e,t){if(!this.data)return;const n=this.data.eruptions[e],a=this.data.volcanoes[n[0]];this.burst(a[1],a[2],n[2],!!(n[3]&this.flags.WITNESSED),t)}indexAt(e){return this.data?El(this.data.eruptions,e,t=>t[1]):0}update(e,t,n,{seek:a=!1}={}){if(!this.data||!this.globe)return;this.material.uniforms.uTime.value=n,this.scarMaterial.uniforms.uYear.value=t;const r=this.globe.renderer.domElement.clientHeight*this.globe.pixelRatio;if(this.material.uniforms.uScale.value=r/(2*Math.tan(this.globe.camera.fov*Math.PI/360)),t<e||a){this.cursor=this.indexAt(t),this.clear();return}const s=this.indexAt(t+1e-9),o=s-this.cursor;if(o<=0){this.flush();return}const c=Math.max(1,Math.ceil(o/140)),l=Math.floor(Math.random()*c);n-this.budgetT>1&&(this.budgetT=n,this.spawned=0);const u=this.spawned/24e3;this.burstScale=u>1?Math.max(.3,1/u):1;for(let f=this.cursor;f<s;f++)(f-this.cursor+l)%c===0&&this.fire(f,n);this.cursor=s,this.flush()}flush(){if(!this.dirty)return;const[e,t]=this.dirty;for(const n of Object.values(this.attrs))n.clearUpdateRanges(),n.addUpdateRange(e*n.itemSize,(t-e)*n.itemSize),n.needsUpdate=!0;this.dirty=null}clear(){this.attrs.aLife.array.fill(0),this.dirty=[0,ma],this.flush()}volcanoAt(e,t,n=14){if(!this.data||!this.globe)return null;let a=null,r=n*n;return this.data.volcanoes.forEach((s,o)=>{const c=this.globe.project(s[1],s[2],1);if(c.facing<.05)return;const l=(c.x-e)**2+(c.y-t)**2;l<r&&(r=l,a=o)}),a===null?null:this.volcanoInfo(a)}volcanoInfo(e){if(!this.data)return null;const t=this.data.volcanoes[e],n=this.byVolcano[e],a=El(n,this.cursor,o=>o);let r=0,s=-1;for(let o=0;o<a;o++){const c=this.data.eruptions[n[o]];c[3]&this.flags.WITNESSED&&r++,c[3]&this.flags.NO_VEI||(s=Math.max(s,c[2]))}return{name:t[0],lat:t[1],lon:t[2],country:t[3],gvpNumber:t[4],total:a,witnessed:r,first:a?this.data.eruptions[n[0]][1]:null,last:a?this.data.eruptions[n[a-1]][1]:null,maxVei:s,when:a?`${Ea(this.data.eruptions[n[0]][1])} – ${Ea(this.data.eruptions[n[a-1]][1])}`:""}}}const D_=JSON.parse(`[{"year":-9700,"name":"The ice lets go","kind":"climate","lat":72,"lon":-40,"major":true,"blurb":"Greenland warms ten degrees in a few decades and the Younger Dryas ends. Summers become reliable, and people start planting.","wiki":"https://en.wikipedia.org/wiki/Younger_Dryas"},{"year":-8200,"name":"The 8.2-kiloyear cold snap","kind":"climate","lat":55,"lon":-85,"blurb":"Meltwater from the last of the ice sheets floods the North Atlantic. Two centuries of cold and drought thin out the first farming villages.","wiki":"https://en.wikipedia.org/wiki/8.2-kiloyear_event"},{"year":-6200,"name":"Storegga","kind":"earth","lat":64,"lon":3,"blurb":"A slab of Norway's seabed slides into the deep. The tsunami sweeps Doggerland, the land bridge between Britain and Denmark, and the sea keeps it.","wiki":"https://en.wikipedia.org/wiki/Storegga_Slide"},{"year":-5680,"name":"Mount Mazama","kind":"eruption","lat":42.93,"lon":-122.12,"vei":7,"witnessed":false,"blurb":"Klamath stories still tell of the mountain that fell in. The hole filled with rain and became Crater Lake.","wiki":"https://en.wikipedia.org/wiki/Mount_Mazama"},{"year":-4350,"name":"Kikai","kind":"eruption","lat":30.79,"lon":130.31,"vei":7,"witnessed":false,"blurb":"Ash buried southern Kyushu. Jōmon settlements there vanish from the record for centuries.","wiki":"https://en.wikipedia.org/wiki/Kikai_Caldera"},{"year":-3500,"name":"The Sahara dries","kind":"climate","lat":23,"lon":10,"major":true,"blurb":"The monsoon retreats and the green Sahara turns to sand within a few centuries. Herders drift to the Nile, and Egypt grows crowded.","wiki":"https://en.wikipedia.org/wiki/African_humid_period"},{"year":-3100,"name":"Egypt unified","kind":"empire","lat":26,"lon":32,"blurb":"One king and one river, from the delta to Aswan. The longest-lived state in history begins.","wiki":"https://en.wikipedia.org/wiki/Early_Dynastic_Period_of_Egypt"},{"year":-2200,"name":"The 4.2-kiloyear drought","kind":"climate","lat":35,"lon":43,"major":true,"blurb":"A century of drought. Akkad, the first empire, collapses; Egypt's Old Kingdom breaks into pieces; the Indus cities begin to empty.","wiki":"https://en.wikipedia.org/wiki/4.2-kiloyear_event"},{"year":-1754,"name":"Hammurabi's code","kind":"idea","lat":32.54,"lon":44.42,"blurb":"Two hundred and eighty-two laws carved on a stone for everyone to see. An eye for an eye, and the wages of a boat-builder.","wiki":"https://en.wikipedia.org/wiki/Code_of_Hammurabi"},{"year":-1610,"name":"Thera","kind":"eruption","lat":36.4,"lon":25.4,"vei":7,"witnessed":false,"major":true,"blurb":"Santorini blew itself apart. Akrotiri was buried like Pompeii, sixteen centuries early, and the Minoans never quite recovered.","wiki":"https://en.wikipedia.org/wiki/Minoan_eruption"},{"year":-1177,"name":"The Bronze Age collapse","kind":"empire","lat":35.6,"lon":35.8,"major":true,"blurb":"Within a generation Mycenae, Hattusa and Ugarit burn. Trade stops, Greece forgets how to write for four centuries, and nobody agrees on why.","wiki":"https://en.wikipedia.org/wiki/Late_Bronze_Age_collapse"},{"year":-500,"name":"The Axial Age","kind":"idea","lat":25.38,"lon":83.02,"blurb":"Within a few generations: the Buddha, Confucius, Laozi, the Hebrew prophets and the first Greek philosophers. Every one of them is still being read.","wiki":"https://en.wikipedia.org/wiki/Axial_Age"},{"year":-331,"name":"Alexander","kind":"empire","lat":36.4,"lon":43.3,"blurb":"A twenty-five-year-old marches from Macedon to the Indus in ten years. Greek is the language of the East for the next thousand.","wiki":"https://en.wikipedia.org/wiki/Wars_of_Alexander_the_Great"},{"year":-221,"name":"China unified","kind":"empire","lat":34.3,"lon":108.9,"major":true,"blurb":"The First Emperor imposes one script, one coinage and one axle width, and starts a wall. The name of his state, Qin, becomes the name of the country.","wiki":"https://en.wikipedia.org/wiki/Qin%27s_wars_of_unification"},{"year":-43,"name":"Okmok","kind":"eruption","lat":53.43,"lon":-168.13,"vei":6,"witnessed":false,"blurb":"Dated by ice cores to the year after Caesar was killed. The cold, wet years that followed helped end the Roman Republic.","wiki":"https://en.wikipedia.org/wiki/Mount_Okmok"},{"year":30,"name":"Christianity begins","kind":"idea","lat":31.78,"lon":35.23,"blurb":"A preacher from Galilee is executed by a Roman governor. Within three centuries the emperor is one of his followers.","wiki":"https://en.wikipedia.org/wiki/Crucifixion_of_Jesus"},{"year":79.6,"name":"Vesuvius","kind":"eruption","lat":40.82,"lon":14.43,"vei":5,"witnessed":true,"blurb":"Pliny the Younger watched from across the bay and wrote it down. The first eruption with an eyewitness account, and Pompeii kept under the ash.","wiki":"https://en.wikipedia.org/wiki/Eruption_of_Mount_Vesuvius_in_79_AD"},{"year":165,"name":"The Antonine plague","kind":"plague","lat":41.9,"lon":12.5,"blurb":"Legions come home from Mesopotamia with smallpox, probably. A tenth of the Roman world dies, and the emperor's own physician leaves the city.","wiki":"https://en.wikipedia.org/wiki/Antonine_Plague"},{"year":536,"name":"The worst year to be alive","kind":"climate","lat":41,"lon":29,"major":true,"blurb":"A mystery eruption veils the sun for eighteen months. Crops fail from Ireland to China, the cold lasts a decade, and then the plague arrives.","wiki":"https://en.wikipedia.org/wiki/Volcanic_winter_of_536"},{"year":541,"name":"The Plague of Justinian","kind":"plague","lat":31,"lon":32.3,"blurb":"Bubonic plague comes ashore in Egypt and reaches Constantinople within a year. It returns for two centuries, and Rome's revival dies with it.","wiki":"https://en.wikipedia.org/wiki/Plague_of_Justinian"},{"year":622,"name":"The Hijra","kind":"idea","lat":24.47,"lon":39.61,"major":true,"blurb":"Muhammad leaves Mecca for Medina. Within a century his followers rule from Spain to the Indus, and the Islamic calendar counts from this year.","wiki":"https://en.wikipedia.org/wiki/Hijrah"},{"year":1000,"name":"Norse in Newfoundland","kind":"voyage","lat":51.6,"lon":-55.5,"blurb":"Leif Erikson's people winter at L'Anse aux Meadows. The Atlantic has been crossed; no one follows for five hundred years.","wiki":"https://en.wikipedia.org/wiki/L%27Anse_aux_Meadows"},{"year":1206,"name":"Genghis Khan","kind":"empire","lat":47.9,"lon":107,"major":true,"blurb":"The steppe clans unite under one khan. Within fifty years his family rules from Korea to Hungary, and the Silk Road is one empire wide.","wiki":"https://en.wikipedia.org/wiki/Genghis_Khan"},{"year":1257,"name":"Samalas","kind":"eruption","lat":-8.42,"lon":116.47,"vei":7,"witnessed":false,"major":true,"blurb":"The biggest eruption of the last thousand years. Ice cores in both hemispheres found it; a Javanese palm-leaf text named it.","wiki":"https://en.wikipedia.org/wiki/1257_Samalas_eruption"},{"year":1347,"name":"The Black Death","kind":"plague","lat":38.19,"lon":15.55,"major":true,"blurb":"Ships from the Black Sea bring plague to Sicily. In five years it kills a third of Europe, having already crossed Asia, and it keeps coming back for four centuries.","wiki":"https://en.wikipedia.org/wiki/Black_Death"},{"year":1405,"name":"Zheng He's treasure fleets","kind":"voyage","lat":32.05,"lon":118.8,"blurb":"Three hundred ships and twenty-eight thousand men sail to India, Arabia and Africa. Thirty years later China burns the plans.","wiki":"https://en.wikipedia.org/wiki/Ming_treasure_voyages"},{"year":1453,"name":"Constantinople falls","kind":"empire","lat":41,"lon":29,"major":true,"blurb":"Ottoman cannon end eleven centuries of Rome. Greek scholars carry their libraries west, and Europe's trade with Asia looks for another way round.","wiki":"https://en.wikipedia.org/wiki/Fall_of_Constantinople"},{"year":1492,"name":"Columbus","kind":"voyage","lat":24,"lon":-74.5,"major":true,"blurb":"Two halves of the world, apart since the ice, meet. Horses, wheat and smallpox go one way; potatoes, maize and silver the other.","wiki":"https://en.wikipedia.org/wiki/Voyages_of_Christopher_Columbus"},{"year":1517,"name":"The Reformation","kind":"idea","lat":51.87,"lon":12.65,"blurb":"A monk's ninety-five theses, printed and everywhere within weeks. Europe splits along a line you can still see on a map.","wiki":"https://en.wikipedia.org/wiki/Reformation"},{"year":1520,"name":"The Great Dying","kind":"plague","lat":19.43,"lon":-99.13,"major":true,"blurb":"Smallpox reaches Tenochtitlan. Within a century nine in ten people of the Americas are dead, and the forests that grow back cool the whole planet.","wiki":"https://en.wikipedia.org/wiki/Population_history_of_the_Indigenous_peoples_of_the_Americas"},{"year":1522,"name":"Around the world","kind":"voyage","lat":37.39,"lon":-5.99,"blurb":"Eighteen of Magellan's two hundred and seventy men limp back into Seville after three years. The Earth is one place now.","wiki":"https://en.wikipedia.org/wiki/Magellan_expedition"},{"year":1776,"name":"American independence","kind":"revolution","lat":39.95,"lon":-75.15,"blurb":"Thirteen colonies declare that governments get their power from the governed. It takes a war to make it stick.","wiki":"https://en.wikipedia.org/wiki/United_States_Declaration_of_Independence"},{"year":1789,"name":"The French Revolution","kind":"revolution","lat":48.86,"lon":2.35,"major":true,"blurb":"The Bastille falls. Within four years there is no king, and every monarch in Europe is worried.","wiki":"https://en.wikipedia.org/wiki/French_Revolution"},{"year":1804,"name":"Haiti","kind":"revolution","lat":18.54,"lon":-72.34,"blurb":"The only successful slave revolution in history founds a republic. The great powers refuse to speak to it for decades.","wiki":"https://en.wikipedia.org/wiki/Haitian_Revolution"},{"year":1815.27,"name":"Tambora","kind":"eruption","lat":-8.25,"lon":118,"vei":7,"witnessed":true,"major":true,"blurb":"The year without a summer. Crops fail from Vermont to Yunnan, and Mary Shelley stays indoors and writes Frankenstein.","wiki":"https://en.wikipedia.org/wiki/1815_eruption_of_Mount_Tambora"},{"year":1845,"name":"The Irish famine","kind":"plague","lat":53.3,"lon":-8,"blurb":"A potato blight, and a government that kept exporting grain. A million dead, a million gone, and the island has never regained its people.","wiki":"https://en.wikipedia.org/wiki/Great_Famine_(Ireland)"},{"year":1859.66,"name":"The Carrington event","kind":"earth","lat":51.24,"lon":-0.17,"blurb":"The strongest solar storm on record. Telegraph wires spark and burn, and auroras reach Cuba. The same storm today would darken continents.","wiki":"https://en.wikipedia.org/wiki/Carrington_Event"},{"year":1883.65,"name":"Krakatau","kind":"eruption","lat":-6.1,"lon":105.42,"vei":6,"witnessed":true,"major":true,"blurb":"Heard nearly five thousand kilometres away. The first eruption the whole world read about by telegraph.","wiki":"https://en.wikipedia.org/wiki/1883_eruption_of_Krakatoa"},{"year":1908.5,"name":"Tunguska","kind":"earth","lat":60.9,"lon":101.9,"blurb":"A rock from space explodes over Siberia and flattens eighty million trees. It missed every city by a few hours of the Earth's rotation.","wiki":"https://en.wikipedia.org/wiki/Tunguska_event"},{"year":1914.6,"name":"The Great War","kind":"war","lat":43.86,"lon":18.41,"major":true,"blurb":"A shooting in Sarajevo. Four years, twenty million dead, and four empires gone.","wiki":"https://en.wikipedia.org/wiki/World_War_I"},{"year":1918.2,"name":"The influenza pandemic","kind":"plague","lat":39.1,"lon":-96.8,"blurb":"It spreads on the troop ships and kills fifty million, more than the war. Most of the dead are young.","wiki":"https://en.wikipedia.org/wiki/Spanish_flu"},{"year":1939.67,"name":"The Second World War","kind":"war","lat":54.4,"lon":18.67,"major":true,"blurb":"Seventy million dead. The map is redrawn, the atom is split, and the United Nations is founded on the ruins.","wiki":"https://en.wikipedia.org/wiki/World_War_II"},{"year":1945.6,"name":"Hiroshima","kind":"war","lat":34.39,"lon":132.46,"major":true,"blurb":"One bomb, one city, a hundred thousand people. None has been used in war since.","wiki":"https://en.wikipedia.org/wiki/Atomic_bombings_of_Hiroshima_and_Nagasaki"},{"year":1947.6,"name":"India independent","kind":"empire","lat":28.61,"lon":77.21,"blurb":"A fifth of humanity leaves the British Empire at midnight. The empire itself is gone within a generation.","wiki":"https://en.wikipedia.org/wiki/Indian_Independence_Act_1947"},{"year":1960,"name":"The year of Africa","kind":"empire","lat":6.45,"lon":3.4,"blurb":"Seventeen countries become independent in twelve months. The age of empires, five thousand years old, ends in a decade.","wiki":"https://en.wikipedia.org/wiki/Year_of_Africa"},{"year":1960.4,"name":"Valdivia","kind":"earth","lat":-39.8,"lon":-73.2,"blurb":"The largest earthquake ever measured, magnitude 9.5. Its tsunami reaches Hawaiʻi in fifteen hours and Japan in twenty-two.","wiki":"https://en.wikipedia.org/wiki/1960_Valdivia_earthquake"},{"year":1978.9,"name":"China opens","kind":"revolution","lat":22.54,"lon":114.06,"blurb":"Deng Xiaoping lets farmers keep their surplus and opens Shenzhen to the world. The largest escape from poverty in history follows.","wiki":"https://en.wikipedia.org/wiki/Reform_and_opening_up"},{"year":1989.85,"name":"The Wall opens","kind":"revolution","lat":52.52,"lon":13.4,"major":true,"blurb":"A misread note at a press conference, and Berlin's wall is open by midnight. The Cold War ends without a shot.","wiki":"https://en.wikipedia.org/wiki/Fall_of_the_Berlin_Wall"},{"year":1991.45,"name":"Pinatubo","kind":"eruption","lat":15.13,"lon":120.35,"vei":6,"witnessed":true,"blurb":"Forecast by seismographs and evacuated in time. It cooled the planet by half a degree for two years.","wiki":"https://en.wikipedia.org/wiki/1991_eruption_of_Mount_Pinatubo"},{"year":2004.99,"name":"The Indian Ocean tsunami","kind":"earth","lat":3.3,"lon":95.9,"blurb":"A magnitude 9.1 quake off Sumatra. Two hundred and thirty thousand dead in fourteen countries, and an ocean that now has a warning system.","wiki":"https://en.wikipedia.org/wiki/2004_Indian_Ocean_earthquake_and_tsunami"},{"year":2011.2,"name":"Tōhoku","kind":"earth","lat":38.3,"lon":142.4,"blurb":"Japan's main island moves two and a half metres east. The sea comes ten kilometres inland and reaches the reactors at Fukushima.","wiki":"https://en.wikipedia.org/wiki/2011_T%C5%8Dhoku_earthquake_and_tsunami"},{"year":2020.2,"name":"COVID-19","kind":"plague","lat":30.6,"lon":114.3,"major":true,"blurb":"A coronavirus, and the first pandemic watched in real time. Seven million dead, the world stays home, and vaccines arrive in under a year.","wiki":"https://en.wikipedia.org/wiki/COVID-19_pandemic"},{"year":2022.04,"name":"Hunga Tonga","kind":"eruption","lat":-20.54,"lon":-175.38,"vei":5,"witnessed":true,"blurb":"Seen from orbit within minutes. The pressure wave circled the Earth four times.","wiki":"https://en.wikipedia.org/wiki/2022_Hunga_Tonga%E2%80%93Hunga_Ha%CA%BBapai_eruption_and_tsunami"}]`),I_={climate:"#9fd8ff",earth:"#c8e6c0",eruption:"#ffb347",empire:"#ffdca0",idea:"#ffe9a8",plague:"#ff8a80",voyage:"#9fd8ff",revolution:"#ffc978",war:"#ff8a80"};class U_{constructor(){se(this,"items",D_);se(this,"cursor",0);se(this,"onEvent",null);se(this,"onSkipped",null)}scrubberMarks(){return this.items.filter(e=>e.major).map(e=>e.year)}update(e,t,{seek:n=!1}={}){var a;if(t<e||n){this.cursor=this.items.findIndex(r=>r.year>t),this.cursor<0&&(this.cursor=this.items.length);return}for(;this.cursor<this.items.length&&this.items[this.cursor].year<=t;){const r=this.items[this.cursor++];(a=this.onEvent)==null||a.call(this,r)}}cardHtml(e){return{when:Ea(e.year),name:e.name,blurb:e.blurb,wiki:"wiki"in e?e.wiki:void 0,color:I_[e.kind]??"#ffdca0"}}}const Nc=JSON.parse(`[{"name":"Austronesian expansion","kind":"people","start":-3000,"end":-800,"note":"Outrigger canoes from Taiwan, island by island, to Fiji, Tonga and Samoa.","path":[[23.5,121],[16,121],[8,124],[-2,120.5],[-5,151],[-9.5,160],[-14,167],[-18,178],[-21.2,-175.2],[-13.8,-172]]},{"name":"Yamnaya into Europe","kind":"people","start":-3300,"end":-2400,"note":"Steppe herders with horses and wagons; most of Europe's languages descend from theirs.","path":[[48,40],[48.5,30],[47,20],[50.5,14],[52.5,10],[50,4]]},{"name":"Yamnaya into Asia","kind":"people","start":-3300,"end":-2000,"note":"The same steppe peoples, east to the Altai.","path":[[48,40],[50,55],[51,70],[50.5,85]]},{"name":"Bantu expansion","kind":"people","start":-1000,"end":500,"note":"Farmers and iron-workers spread from Cameroon across half a continent.","path":[[5,10],[2,15],[0,19],[-2,26],[-2.5,32],[-9,30],[-15,28],[-20,30],[-28,31]]},{"name":"Incense route","kind":"trade","start":-700,"end":200,"note":"Frankincense and myrrh by camel from Yemen to the Mediterranean.","path":[[15,44.2],[19.5,42.5],[24.5,39.6],[28,36.5],[30.3,35.4],[31.5,34.5]]},{"name":"Silk Road","kind":"trade","start":-130,"end":1450,"note":"Silk east to west, horses and glass west to east, and ideas both ways.","path":[[34.3,108.9],[36.1,103.8],[40,94.7],[42.9,89.2],[39.5,76],[39.7,67],[37.7,62.2],[36.3,59.6],[35.7,51.4],[33.3,44.4],[36.2,36.2],[41,29]]},{"name":"Indian Ocean monsoon trade","kind":"trade","start":-100,"end":1500,"note":"Sail out on one monsoon, home on the other: Egypt, Arabia, India, the Straits, China.","path":[[27,33.8],[20,39],[12.8,45],[15,55],[21,72],[11,75.8],[7,80],[2.2,102.2],[23.1,113.3]]},{"name":"Trans-Saharan trade","kind":"trade","start":300,"end":1600,"note":"Salt south, gold north, across the desert in caravans of a thousand camels.","path":[[34,-5],[31.3,-4.3],[27,-6],[23.6,-5],[20,-3.5],[16.8,-3],[16.3,0]]},{"name":"Austronesians to Madagascar","kind":"people","start":400,"end":700,"note":"Across the whole Indian Ocean from Borneo, in canoes.","path":[[-1,114],[-6,105],[-8,90],[-10,75],[-13,60],[-19,47]]},{"name":"Polynesians to Hawaiʻi","kind":"people","start":950,"end":1100,"note":"Two and a half thousand miles of open ocean, navigated by stars and swells.","path":[[-17.6,-149.4],[-9.5,-139.5],[0,-150],[10,-154],[20,-156]]},{"name":"Polynesians to Aotearoa","kind":"people","start":1200,"end":1300,"note":"The last large landmass on Earth to be settled.","path":[[-17.6,-149.4],[-21.2,-159.8],[-30,-170],[-36,178],[-38,176]]},{"name":"Viking voyages","kind":"people","start":793,"end":1050,"note":"Longships to the Shetlands, Iceland, Greenland, and briefly Newfoundland.","path":[[61,6],[60.2,-1.3],[62,-7],[64,-20],[61,-46],[51.6,-55.5]]},{"name":"Varangian route","kind":"trade","start":850,"end":1100,"note":"Swedes down the rivers to Constantinople, with furs and slaves, and back with silver.","path":[[59.3,18],[58.5,31.3],[55.8,32],[50.4,30.5],[46.5,31],[41,29]]},{"name":"Columbian crossings","kind":"trade","start":1492,"end":1800,"note":"Silver west to east, horses, wheat and smallpox east to west.","path":[[37.4,-6],[28,-16],[20,-40],[19,-70],[19.2,-96.1]]},{"name":"Cape route to India","kind":"trade","start":1498,"end":1869,"note":"Around Africa to the spice ports, until the Suez Canal.","path":[[38.7,-9.1],[16,-24],[-5,-30],[-25,-10],[-34.4,18.5],[-25,38],[-10,45],[5,60],[15.5,73.8]]},{"name":"Atlantic slave trade","kind":"forced","start":1520,"end":1860,"note":"Twelve million people taken across the ocean in chains.","path":[[6,3],[2,-10],[-5,-25],[-13,-38.5]]},{"name":"Manila galleon","kind":"trade","start":1565,"end":1815,"note":"Mexican silver for Chinese silk, once a year across the Pacific.","path":[[16.9,-99.9],[15,-120],[13,-150],[12,180],[13.5,140],[14.6,121]]},{"name":"Russians across Siberia","kind":"people","start":1580,"end":1900,"note":"Fur trappers, Cossacks, exiles and settlers, to the Pacific.","path":[[55.8,37.6],[56.8,60.6],[58.2,68.3],[56,92.9],[52.3,104.3],[48.5,135.1],[43.1,131.9]]},{"name":"Chinese diaspora to the south","kind":"people","start":1800,"end":1940,"note":"From Fujian and Guangdong to the ports of Southeast Asia.","path":[[24.5,118.1],[22.3,114.2],[16,110],[10,106],[1.3,103.8]]},{"name":"Emigration to the Americas","kind":"people","start":1840,"end":1920,"note":"Fifty million Europeans leave for the New World.","path":[[53.4,-3],[51,-20],[45,-50],[40.7,-74]]},{"name":"Emigration to the south","kind":"people","start":1870,"end":1930,"note":"Italians and Spaniards to Buenos Aires and São Paulo.","path":[[40.8,14.3],[36,-6],[10,-25],[-15,-38],[-34.6,-58.4]]},{"name":"The Great Migration","kind":"people","start":1916,"end":1970,"note":"Six million Black Americans leave the rural South for northern cities.","path":[[32.3,-90.2],[35,-89.5],[38.6,-90.2],[41.9,-87.6]]},{"name":"Partition of India","kind":"forced","start":1947,"end":1948,"note":"Fifteen million people cross a brand-new border in both directions.","path":[[31.5,74.3],[31.6,74.9],[30.9,75.9],[28.6,77.2]],"both":true}]`),Fc={people:[1,.86,.62],trade:[.62,.92,.85],forced:[1,.62,.62]};function N_(i,e=40){const t=[];for(let n=0;n<i.length-1;n++){const[a,r]=i[n],[s,o]=i[n+1],c=(o-r+540)%360-180;for(let l=0;l<e;l++){const u=l/e;t.push([a+(s-a)*u,r+c*u])}}return t.push(i[i.length-1]),t}class F_{constructor(){se(this,"items",Nc);se(this,"cursor",0);se(this,"onFlow",null);se(this,"lines",[]);se(this,"densified",Nc.map(e=>N_(e.path)))}attach(e){this.densified.forEach((t,n)=>{const a=new dt,r=new Float32Array(t.length*3);a.setAttribute("position",new ze(r,3));const s=this.items[n].kind,[o,c,l]=Fc[s]??Fc.people,u=new Qo(a,new Jo({color:new qe(o,c,l),transparent:!0,opacity:0,depthWrite:!1}));u.frustumCulled=!1,u.userData={pts:t},e.scene.add(u),this.lines.push(u)})}update(e,t,{seek:n=!1}={}){var a;for(t<e&&(this.cursor=0);this.cursor<this.items.length&&this.items[this.cursor].start<=t;)t>=e&&!n&&((a=this.onFlow)==null||a.call(this,this.items[this.cursor])),this.cursor++;this.lines.forEach((r,s)=>{const o=this.items[s],c=o.end-o.start,l=(t-o.start)/c,u=r.material;if(l<0||l>1.15){u.opacity=0;return}const f=r.userData.pts,h=Math.max(2,Math.floor(Math.min(1,l)*(f.length-1))+1),m=r.geometry.getAttribute("position"),_=new P;for(let y=0;y<f.length;y++)y<h?kr(f[y][0],f[y][1],1.004,_):_.set(0,0,0),m.setXYZ(y,_.x,_.y,_.z);m.needsUpdate=!0,r.geometry.setDrawRange(0,h),u.opacity=l>1?Math.max(0,1-(l-1)/.15)*.55:.7})}}async function Oc(i,e){const[t,n]=await Promise.all([fetch(`${e.base}data/${i}.json`).then(s=>s.json()),new Promise((s,o)=>new el().load(`${e.base}data/${i}.png`,s,void 0,o))]);n.colorSpace=tn,n.generateMipmaps=!1,n.minFilter=n.magFilter=At;const a=new vt({uniforms:{uAtlas:{value:n},uCols:{value:t.cols},uRows:{value:t.rows},uStep0:{value:0},uStep1:{value:0},uMix:{value:0},uTexel:{value:{x:1/(t.cols*t.tileWidth),y:1/(t.rows*t.tileHeight)}},uLatMin:{value:e.latMin},uAlpha:{value:e.alpha},uTintThin:{value:{x:e.thin[0],y:e.thin[1],z:e.thin[2]}},uTintThick:{value:{x:e.thick[0],y:e.thick[1],z:e.thick[2]}},uFlat:De.uFlat,uLon0:De.uLon0},vertexShader:Tt("Rf"),fragmentShader:Tt("zf"),transparent:!0,depthWrite:!1}),r=new Xt(il(),a);return r.frustumCulled=!1,r.renderOrder=e.order,{meta:t,material:a,mesh:r}}class O_{constructor(e=na){se(this,"land",null);se(this,"sea",null);se(this,"meta",null);this.base=e}async load(){return[this.land,this.sea]=await Promise.all([Oc("ice",{latMin:-90,thin:[.62,.74,.86],thick:[.86,.92,.98],alpha:.92,order:-1,base:this.base}),Oc("seaice",{latMin:45,thin:[.55,.72,.9],thick:[.72,.84,.95],alpha:.62,order:-2,base:this.base})]),this.meta=this.land.meta,this}attach(e){this.land&&e.scene.add(this.land.mesh),this.sea&&e.scene.add(this.sea.mesh)}apply(e,t){const[n,a,r]=Er(e.meta.years,t),s=e.material.uniforms;s.uStep0.value=n,s.uStep1.value=a,s.uMix.value=r}update(e){this.land&&this.apply(this.land,e),this.sea&&this.apply(this.sea,e)}}const B_=[{year:-9500,name:"Farming",note:"Wheat and barley in the Fertile Crescent"},{year:-8e3,name:"Domesticated animals",note:"Sheep, goats, cattle"},{year:-7e3,name:"Pottery",note:"Widespread in the Near East; earlier in Japan and China"},{year:-5500,name:"Irrigation",note:"Canals in Mesopotamia"},{year:-5e3,name:"Copper smelting",note:"Balkans and Anatolia"},{year:-3500,name:"The wheel",note:"And the sail, within a few centuries"},{year:-3300,name:"Bronze",note:"Tin and copper"},{year:-3200,name:"Writing",note:"Cuneiform accounts in Sumer"},{year:-2600,name:"Stone pyramids",note:"Giza"},{year:-1800,name:"The alphabet",note:"Sinai; Phoenicia spreads it"},{year:-1200,name:"Iron",note:"Anatolia, then everywhere"},{year:-600,name:"Coinage",note:"Lydia"},{year:-300,name:"Geometry written down",note:"Euclid, Alexandria"},{year:105,name:"Paper",note:"Cai Lun, Han court"},{year:628,name:"Zero",note:"Brahmagupta writes down the rules for zero as a number"},{year:850,name:"Gunpowder",note:"Tang alchemists"},{year:1040,name:"Movable type",note:"Bi Sheng, ceramic"},{year:1088,name:"Magnetic compass",note:"Shen Kuo describes it"},{year:1450,name:"Printing press",note:"Gutenberg. Twenty million books in Europe within fifty years"},{year:1543,name:"Heliocentrism",note:"Copernicus"},{year:1609,name:"Telescope",note:"Galileo points it up"},{year:1643,name:"Barometer",note:"Torricelli. Air has weight"},{year:1687,name:"Newton's laws",note:"Principia"},{year:1712,name:"Steam engine",note:"Newcomen"},{year:1783,name:"Flight",note:"Montgolfier balloon over Paris"},{year:1800,name:"Battery",note:"Volta"},{year:1826,name:"Photograph",note:"Niépce"},{year:1837,name:"Telegraph",note:"Morse. For the first time, news outruns the messenger"},{year:1859,name:"Evolution",note:"Darwin"},{year:1876,name:"Telephone",note:"Bell"},{year:1879,name:"Electric light",note:"Edison, Swan"},{year:1886,name:"Automobile",note:"Benz"},{year:1895,name:"Radio",note:"Marconi"},{year:1903,name:"Powered flight",note:"Kitty Hawk"},{year:1928,name:"Antibiotics",note:"Penicillin"},{year:1936,name:"Television",note:"Regular broadcasts from London"},{year:1942,name:"Nuclear reactor",note:"Chicago Pile-1, under a football stand"},{year:1947,name:"Transistor",note:"Bell Labs"},{year:1953,name:"DNA",note:"The double helix"},{year:1957,name:"Sputnik",note:"First satellite"},{year:1960,name:"Weather satellite",note:"TIROS-1. The first look at the weather from above"},{year:1961,name:"Human in orbit",note:"Gagarin"},{year:1969,name:"Moon landing",note:"And ARPANET, the same year"},{year:1971,name:"Microprocessor",note:"Intel 4004"},{year:1972,name:"Landsat",note:"The whole surface, photographed every 18 days"},{year:1978,name:"GPS",note:"First satellites"},{year:1983,name:"Internet",note:"ARPANET switches to TCP/IP"},{year:1991,name:"World Wide Web",note:"CERN"},{year:2001,name:"Human genome",note:"A first draft of ourselves"},{year:2007,name:"Smartphone",note:"A computer in every pocket; half of humanity online within a decade"},{year:2012,name:"Deep learning",note:"AlexNet"},{year:2020,name:"mRNA vaccine",note:"Designed in days, given to billions"},{year:2022.9,name:"Conversational AI",note:"ChatGPT"}];class k_{constructor(){se(this,"items",B_);se(this,"cursor",0);se(this,"onMilestone",null)}scrubberTicks(){return this.items.map(e=>e.year)}scrubberCurve(){const e=this.items;return t=>{let n=0;for(const a of e)a.year<=t&&n++;return n/e.length}}update(e,t,{seek:n=!1}={}){var a;if(t<e||n){this.cursor=this.items.findIndex(r=>r.year>t),this.cursor<0&&(this.cursor=this.items.length);return}for(;this.cursor<this.items.length&&this.items[this.cursor].year<=t;)(a=this.onMilestone)==null||a.call(this,this.items[this.cursor]),this.cursor++}}const z_=[{name:"Sputnik 1",note:"the first",from:1957.76,to:1958,inc:1.14,radius:1.1,speed:.55},{name:"Explorer 1",note:"finds the radiation belts",from:1958.08,to:1970.2,inc:.58,radius:1.16,speed:.5},{name:"Gagarin",note:"one orbit",from:1961.27,to:1961.34,inc:1.12,radius:1.1,speed:.6},{name:"Telstar 1",note:"first live television across the ocean",from:1962.53,to:1963.2,inc:.78,radius:1.35,speed:.4},{name:"Apollo 11",note:"on the way to the Moon",from:1969.55,to:1969.6,inc:.55,radius:1.7,speed:.25},{name:"Mir",note:"fifteen years crewed",from:1986.14,to:2001.22,inc:.9,radius:1.12,speed:.55},{name:"Hubble",note:"the sky, sharper",from:1990.3,to:2027,inc:.5,radius:1.17,speed:.5},{name:"ISS",note:"always someone up there",from:1998.9,to:2027,inc:.9,radius:1.13,speed:.55},{name:"Starlink",note:"thousands at once",from:2019.4,to:2027,inc:.93,radius:1.16,speed:.55},{name:"JWST",note:"a million miles out",from:2021.98,to:2027,inc:.1,radius:2.4,speed:.06}],V_=[[1957,2],[1960,40],[1965,500],[1970,1500],[1975,2400],[1980,3300],[1985,4200],[1990,5e3],[1995,5600],[2e3,6200],[2005,6800],[2010,7600],[2015,8600],[2018,9800],[2020,12e3],[2022,16e3],[2024,22e3],[2026,27e3]],Zn=1464,Vs=600,fr=9800,ga=12,pr=72,mr=144;function G_(i){return()=>{i|=0,i=i+1831565813|0;let e=Math.imul(i^i>>>15,1|i);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function zr(i){const e=V_;if(i<e[0][0])return 0;for(let t=1;t<e.length;t++)if(i<=e[t][0]){const[n,a]=e[t-1],[r,s]=e[t];return a+(s-a)*(i-n)/(r-n)}return e[e.length-1][1]}class H_{constructor(e){se(this,"artifacts",z_);se(this,"points",null);se(this,"rings",null);se(this,"material",null);se(this,"ringMaterial",null);se(this,"labels",[]);se(this,"lastTotal",zr(1e9));this.labelsEl=e}attach(e){const t=new Float32Array(Zn),n=new Float32Array(Zn),a=new Float32Array(Zn),r=new Float32Array(Zn),s=new Float32Array(Zn),o=new Float32Array(Zn),c=new Float32Array(Zn),l=G_(7),u=fr/Vs;for(let b=0;b<Vs;b++){const R=l();t[b]=b*u,n[b]=R<.35?.9+l()*.3:R<.5?l()*.15:l()*1.4,a[b]=l()*Math.PI*2,r[b]=l()*Math.PI*2,s[b]=l()<.08?1.9+l()*.4:1.09+l()*l()*.25,c[b]=b<60?2.6:1.2+l()*1,o[b]=(.12+.28*Math.max(0,(c[b]-1.2)/1.4))*(l()<.5?1:-1)}const f=(this.lastTotal-fr)/ga;for(let b=0;b<ga;b++){const R=b%2?1:-1;for(let M=0;M<pr;M++){const w=Vs+b*pr+M;t[w]=fr+b*f+M*f/pr,n[w]=.93,a[w]=b*Math.PI*2/ga,r[w]=b*.7-R*M*(Math.PI*2/pr),s[w]=1.14+b%3*.012,c[w]=1.35,o[w]=.22*R}}const h=new dt;h.setAttribute("position",new ze(new Float32Array(Zn*3),3)),h.setAttribute("aOn",new ze(t,1)),h.setAttribute("aInclination",new ze(n,1)),h.setAttribute("aNode",new ze(a,1)),h.setAttribute("aPhase",new ze(r,1)),h.setAttribute("aRadius",new ze(s,1)),h.setAttribute("aSpeed",new ze(o,1)),h.setAttribute("aSize",new ze(c,1)),h.boundingSphere=new rn(new P,4),this.material=new vt({uniforms:{uTime:{value:0},uLaunched:{value:0},uPixelRatio:{value:e.pixelRatio},uFlat:De.uFlat,uLon0:De.uLon0},vertexShader:Tt("Jd"),fragmentShader:Tt("Yd"),transparent:!0,depthWrite:!1,blending:Zt}),this.points=new Qi(h,this.material),this.points.frustumCulled=!1,e.scene.add(this.points);const m=[],_=[],y=[];for(let b=0;b<ga;b++){const M=b*Math.PI*2/ga,w=1.14+b%3*.012,E=b%2?1:-1;for(let C=0;C<mr;C++)for(const v of[C,C+1]){const T=b*.7-E*v*(Math.PI*2/mr),U=Math.cos(T)*w;let D=Math.sin(T)*w;const k=D*Math.sin(.93);D*=Math.cos(.93);const $=U*Math.cos(M)-D*Math.sin(M),Q=U*Math.sin(M)+D*Math.cos(M);m.push(Math.asin(k/w)*(180/Math.PI),Math.atan2(Q,-$)*(180/Math.PI)-180),_.push(fr+b*f+v%mr*f/mr),y.push(w)}}const p=[];for(let b=0;b<m.length/2;b++)p.push(m[(b^1)*2+1]);const d=new dt;d.setAttribute("position",new ze(new Float32Array(m.length*1.5),3)),d.setAttribute("aLatLon",new ze(new Float32Array(m),2)),d.setAttribute("aOn",new ze(new Float32Array(_),1)),d.setAttribute("aRadius",new ze(new Float32Array(y),1)),d.setAttribute("aPartnerLon",new ze(new Float32Array(p),1)),d.boundingSphere=new rn(new P,4),this.ringMaterial=new vt({uniforms:{uLaunched:{value:0},uFlat:De.uFlat,uLon0:De.uLon0},vertexShader:Tt("Xd"),fragmentShader:Tt("Zd"),transparent:!0,depthWrite:!1,blending:Zt}),this.rings=new sd(d,this.ringMaterial),this.rings.frustumCulled=!1,e.scene.add(this.rings);for(const b of this.artifacts){const R=document.createElement("div");R.className="label sat",R.textContent=b.name,R.title=b.note,this.labelsEl.appendChild(R),this.labels.push(R)}}update(e,t,n){const a=zr(e);this.material&&(this.material.uniforms.uTime.value=t,this.material.uniforms.uLaunched.value=a),this.ringMaterial&&(this.ringMaterial.uniforms.uLaunched.value=a),this.artifacts.forEach((r,s)=>{const o=this.labels[s];if(!(e>=r.from&&e<=r.to)){o.style.opacity="0";return}const l=t*r.speed+s*2.4,u=Math.sin(l)*(r.inc*180/Math.PI),f=l*80%360-180,h=n(u,f);o.style.transform=`translate(${h.x.toFixed(1)}px, ${h.y.toFixed(1)}px) translate(-50%, -50%)`,o.style.opacity=h.facing>0?"1":"0"})}}const pi=Gc.map(i=>i[0]),Vr=Gc.map(i=>i[1]),ta=pi.length,an=[],cn=[];for(let i=0;i<ta-1;i++)an.push((Vr[i+1]-Vr[i])/(pi[i+1]-pi[i]));cn[0]=an[0];cn[ta-1]=an[ta-2];for(let i=1;i<ta-1;i++)cn[i]=an[i-1]*an[i]<=0?0:(an[i-1]+an[i])/2;for(let i=0;i<ta-1;i++){if(an[i]===0){cn[i]=cn[i+1]=0;continue}const e=cn[i]/an[i],t=cn[i+1]/an[i],n=e*e+t*t;if(n>9){const a=3/Math.sqrt(n);cn[i]=a*e*an[i],cn[i+1]=a*t*an[i]}}function al(i){if(i<0)return Gs+11e3*Math.max(0,1+i/It);i=Math.min(1,i);let e=0;for(;e<ta-2&&i>pi[e+1];)e++;const t=pi[e+1]-pi[e],n=(i-pi[e])/t,a=n*n,r=a*n;return(2*r-3*a+1)*Vr[e]+(r-2*a+n)*t*cn[e]+(-2*r+3*a)*Vr[e+1]+(r-a)*t*cn[e+1]}function Ph(i){if(!Number.isFinite(i))return 0;if(i<=Gs)return-It;if(i<=Hi)return-It*(1-(i-Gs)/11e3);if(i>=Ar)return 1;let e=0,t=1;for(let n=0;n<40;n++){const a=(e+t)/2;al(a)<i?e=a:t=a}return t}class W_{constructor(){se(this,"u",0);se(this,"playing",!1);se(this,"speed",1);se(this,"ended",!1);se(this,"_slow",null);se(this,"_listeners",{})}get year(){return al(this.u)}get prologue(){return this.u>=0?1:Math.max(0,1+this.u/It)}get slowFactor(){const e=this._slow;if(!e)return 1;const t=Math.min(.5,e.seconds*.2),n=Math.min(e.t,e.seconds-e.t),a=Math.min(1,Math.max(0,n/t));return 1+(e.factor-1)*(a*a*(3-2*a))}on(e,t){var n;return((n=this._listeners)[e]??(n[e]=[])).push(t),this}emit(e,...t){for(const n of this._listeners[e]??[])n(...t)}play(){this.ended&&this.setU(-It),this.playing=!0,this.emit("play")}pause(){this.playing=!1,this.emit("pause")}toggle(){this.playing?this.pause():this.play()}setSpeed(e){this.speed=e,this.emit("speed",e)}setU(e,{jump:t=!1}={}){const n=this.u;this.u=Math.min(1,Math.max(-It,e)),this.ended=this.u>=1,this._slow=null,this.emit(t?"jump":"seek",this.u,n),this.ended&&this.emit("end")}seekYear(e){this.setU(Ph(e),{jump:!0})}slow(e,t=.1){this._slow={t:0,seconds:e,factor:t}}update(e){this.playing&&(this._slow&&(this._slow.t+=e,this._slow.t>=this._slow.seconds&&(this._slow=null)),this.u+=e/qh*this.speed*this.slowFactor,this.u>=1&&(this.u=1,this.playing=!1,this.ended=!0,this.emit("end")))}}class X_{constructor(e){se(this,"items",[]);se(this,"onSeek",null);se(this,"onFocus",null);se(this,"maxLines",window.matchMedia("(max-width: 700px)").matches?2:5);this.el=e}push(e){var t;this.items.push(e),this.items.length>12&&this.items.shift(),this.render(),(t=this.onFocus)==null||t.call(this,e)}clear(){this.items=[],this.el.innerHTML=""}render(){var t;const e=this.items.slice(-this.maxLines);this.el.innerHTML=e.map((n,a)=>`<div class="feed-item line${a===e.length-1?" show placed":" show"}" data-year="${n.year}" style="--kind:${n.color}">
        <div class="feed-when" title="Go to this year">${Ea(n.year)}</div>
        <div class="feed-name">${n.name}</div>
        <div class="feed-blurb">${n.blurb}</div>
        ${n.wiki?`<a class="feed-wiki" href="${n.wiki}" target="_blank" rel="noopener">Wikipedia ↗</a>`:""}
      </div>`).join("");for(const n of this.el.querySelectorAll("[data-year]"))(t=n.querySelector(".feed-when"))==null||t.addEventListener("click",()=>{var a;(a=this.onSeek)==null||a.call(this,Number(n.dataset.year))})}}const Y_=[[-1e4,"10,000 BCE",0],[-5e3,"5000 BCE",0],[-1e3,"1000 BCE",0],[1,"1 CE",0],[1e3,"1000",0],[1500,"1500",0],[1800,"1800",0],[1900,"1900",0],[2e3,"2000",0]];class q_{constructor(e,t,n){se(this,"ctx");se(this,"curve",null);se(this,"techCurve",null);se(this,"ticks",[]);se(this,"marks",[]);se(this,"series",[]);se(this,"stats",!1);se(this,"linear",!1);se(this,"logScale",!0);se(this,"dragging",!1);se(this,"resumeAfter",!1);se(this,"w",0);se(this,"h",0);this.canvas=e,this.timeline=t,this.legend=n,this.ctx=e.getContext("2d");const a=s=>{const o=e.getBoundingClientRect(),c=Math.min(1,Math.max(0,(s.clientX-o.left)/o.width));this.linear?this.timeline.seekYear(this.yearAtX(c)):this.timeline.setU(c*(1+It)-It,{jump:!0})};e.addEventListener("pointerdown",s=>{e.setPointerCapture(s.pointerId),this.dragging=!0,this.resumeAfter=t.playing,t.pause(),a(s)}),e.addEventListener("pointermove",s=>{this.dragging&&a(s)});const r=()=>{this.dragging&&(this.dragging=!1,this.resumeAfter&&this.timeline.u<1&&t.play())};e.addEventListener("pointerup",r),e.addEventListener("pointercancel",r),e.tabIndex=0,window.addEventListener("resize",()=>this.resize()),this.resize()}yearAtX(e){return Hi+e*(Ar-Hi)}addSeries(e){this.series.unshift({...e,on:e.on??!0}),this.renderLegend(this.timeline.year)}setSeriesOn(e,t){const n=this.series.find(a=>a.key===e);n&&(n.on=t),this.renderLegend(this.timeline.year)}setStats(e){var t;this.stats=e,(t=this.canvas.closest("#timeline"))==null||t.classList.toggle("stats",e),this.legend.hidden=!e,this.resize()}resize(){const e=this.canvas.getBoundingClientRect();this.w=Math.max(1,e.width),this.h=this.stats?150:64,this.canvas.width=this.w*devicePixelRatio,this.canvas.height=this.h*devicePixelRatio,this.ctx.setTransform(devicePixelRatio,0,0,devicePixelRatio,0,0)}xOfYear(e){return this.linear?(e-Hi)/(Ar-Hi)*this.w:(Ph(e)+It)/(1+It)*this.w}renderLegend(e){const t=this.legend.querySelector(".stats-items")??this.legend;t.innerHTML=this.series.map(n=>{const a=n.valueAt(e);return`<button type="button" class="chip${n.on?" on":""}" data-key="${n.key}" style="--c:${n.color}"><i></i>${n.name} <b>${this.fmt(n,a)}</b></button>`}).join("");for(const n of t.querySelectorAll("[data-key]"))n.addEventListener("click",()=>{const a=this.series.find(r=>r.key===n.dataset.key);a&&(a.on=!a.on,this.renderLegend(e))})}fmt(e,t){return e.key==="population"?`${_a(t)}`:e.key==="orbit"?_a(t):e.key==="dc"?`${t.toFixed(t>=10?0:1)} GW`:e.key==="life"?`${Math.round(t)} years`:e.key==="co2"?`${Math.round(t)} ppm`:e.key==="compute"?`${K_(t)}`:e.key==="speed"?`${t>=100?Math.round(t):t.toFixed(1)} m/s`:e.key==="city"?_a(t):e.key==="energy"?`${t>=10?Math.round(t):t.toFixed(1)} EJ/yr`:_a(t)+(e.unit?` ${e.unit}`:"")}draw(e){const t=this.ctx;t.clearRect(0,0,this.w,this.h),t.fillStyle="#e8e4dc22";const n=(this.timeline.u+It)/(1+It)*this.w,a=this.h-18;t.fillRect(0,a,this.w,2),t.fillStyle="#ffb347",t.beginPath(),t.arc(this.linear?this.xOfYear(e):n,a+1,4,0,Math.PI*2),t.fill(),t.fillStyle="#e8e4dc66",t.font="11px ui-monospace, SF Mono, Menlo, monospace";for(const[r,s]of Y_){const o=this.linear?this.xOfYear(r):this.xOfYear(r);t.fillText(s,o,this.h-4)}this.stats&&this.series.filter(s=>s.on).forEach((s,o)=>{t.strokeStyle=s.color,t.globalAlpha=.85,t.beginPath();const c=180,l=Array.from({length:c},(h,m)=>{const _=m/(c-1),y=this.linear?this.yearAtX(_):al(_*(1+It)-It);return s.valueAt(y)}),u=Math.max(...l,1e-9),f=Math.min(...l.filter(h=>h>0),u);l.forEach((h,m)=>{const _=m/(c-1)*this.w;let y;this.logScale&&h>0&&u>0?y=(Math.log(h)-Math.log(f))/(Math.log(u)-Math.log(f)||1):y=h/u;const p=12+(1-y)*(this.h-40);m===0?t.moveTo(_,p):t.lineTo(_,p)}),t.stroke(),t.globalAlpha=1});for(const r of this.marks){const s=this.xOfYear(r);t.fillStyle="#ffe9a888",t.fillRect(s,a-6,1,6)}}}function K_(i){return i>=1e18?`${(i/1e18).toFixed(1)} EFLOP/s`:i>=1e15?`${(i/1e15).toFixed(1)} PFLOP/s`:i>=1e12?`${(i/1e12).toFixed(1)} TFLOP/s`:i>=1e9?`${(i/1e9).toFixed(1)} GFLOP/s`:i>=1e6?`${(i/1e6).toFixed(1)} MFLOP/s`:`${_a(i)} FLOP/s`}const Dt=new URLSearchParams(location.search);for(const[i,e]of new URLSearchParams(location.hash.slice(1)))Dt.set(i,e);const Lh=matchMedia("(prefers-reduced-motion: reduce)").matches,rl=document.getElementById("globe"),Ie=v_(rl,{reducedMotion:Lh,base:na}),ke=new W_,Jr=document.getElementById("labels"),Sa=new A_(Jr,document.getElementById("labels-sr")),Tr=new O_,vn=new T_,wr=new b_(Jr),ni=new L_,Ca=new U_,ba=new k_,Oo=new H_(Jr),Gr=new y_,Hr=new F_,Bo=new C_(Jr),kn=new X_(document.getElementById("feed")),ut=new q_(document.getElementById("scrubber"),ke,document.getElementById("stats-legend")),$_=document.getElementById("year"),Z_=document.getElementById("paused"),J_=document.getElementById("pop"),Q_=document.getElementById("space"),j_=document.getElementById("counts"),Qr=document.getElementById("play"),Dh=document.getElementById("speed"),Ih=document.getElementById("follow"),Uh=document.getElementById("metrics-toggle"),$i=document.getElementById("about"),ev=document.getElementById("about-toggle"),tv=document.getElementById("about-close"),Da=document.getElementById("finale"),Bc=document.getElementById("loading"),Qn=document.getElementById("tooltip"),gr=document.getElementById("tip"),ko=document.getElementById("scale"),zo=document.getElementById("axis"),kc=document.getElementById("timeline");let zn=!0,jr=!1;const Ia=document.createElement("div");Ia.id="hint";Ia.textContent="press play, or drag the globe";document.body.appendChild(Ia);function Un(i){zn=i,Ih.setAttribute("aria-pressed",String(i))}function Mi(i,e){if(Ie.inPrologue)return;const t=Ie.setMode(i,e);document.body.classList.toggle("globe-mode",i==="globe");for(const n of document.querySelectorAll("#mode button")){const a=n.dataset.mode===i;n.classList.toggle("on",a),n.setAttribute("aria-pressed",String(a))}return Ia.textContent=i==="map"?"press play, or drag the map":"press play, or drag the globe",jr=!0,t}function sl(i){ke.setSpeed(i),Dh.textContent=`${i}×`}function Nh(i){const e=Number(i.get("year"));i.has("year")&&Number.isFinite(e)&&ke.seekYear(e);const t=Number(i.get("speed"));mi.includes(t)&&sl(t);const n=i.has("lon")?Number(i.get("lon")):i.has("lon0")?Number(i.get("lon0")):null,a=i.has("lat")?Number(i.get("lat")):null;if(!(i.get("map")==="0"||a!==null||i.has("view")||ol.matches&&i.get("map")!=="1"&&n===null))Ie.mode!=="map"&&Mi("map",{seconds:0}),n===null?zn||Un(!0):(Un(!1),Ie.setLon0(n));else if(Ie.mode!=="globe"&&Mi("globe",{seconds:0}),Un(!1),i.has("view")){const[s,o,c]=i.get("view").split(",").map(Number);Number.isFinite(s)&&Number.isFinite(o)&&Ie.lookAt(s,o,Number.isFinite(c)&&c>1.2?c:3.5)}else a!==null&&n!==null&&Ie.lookAt(a,n,3.5);i.has("metrics")&&es(i.get("metrics")==="1"),i.get("axis")==="linear"!==ut.linear&&zo.click(),i.get("scale")==="linear"===ut.logScale&&ko.click(),(i.has("play")?i.get("play")!=="0":!i.has("year"))?!ke.playing&&!ke.ended&&ke.play():ke.playing&&ke.pause()}function Fh(){const i=new URLSearchParams;if(i.set("year",String(Math.round(ke.year))),!zn&&!Ie.inPrologue)if(Ie.mode==="map")i.set("lon",De.uLon0.value.toFixed(1));else{const e=Ie.camera.position.clone().sub(Ie.controls.target),t=Math.asin(Math.max(-1,Math.min(1,e.y/e.length())))*180/Math.PI,n=Hs(Math.atan2(e.z,-e.x)*180/Math.PI-180);i.set("lat",t.toFixed(1)),i.set("lon",n.toFixed(1))}return ke.playing&&i.set("play","1"),i.toString()}let zc=0;function nv(i){if(i-zc<.5||Ie.morphing)return;zc=i;const e=`#${Fh()}`;e!==location.hash&&history.replaceState(null,"",location.pathname+location.search+e)}window.addEventListener("hashchange",()=>{const i=new URLSearchParams(location.hash.slice(1));`#${Fh()}`!==location.hash&&(Nh(i),Wr=!0)});const ol=matchMedia("(max-width: 700px)");ol.addEventListener("change",i=>{kn.maxLines=i.matches?2:5,!Ie.inPrologue&&!Ie.morphing&&Mi(i.matches?"globe":"map")});function es(i){ut.setStats(i),Uh.setAttribute("aria-pressed",String(i)),ll()}function ll(){document.documentElement.style.setProperty("--footer-h",`${kc.offsetHeight}px`),Ie.bottomInset=kc.offsetHeight}ke.on("play",()=>{document.body.classList.add("playing","started"),document.body.classList.remove("ended"),Qr.setAttribute("aria-label","Pause"),jr=!0,Da.hidden=!0});ke.on("pause",()=>{document.body.classList.remove("playing"),Qr.setAttribute("aria-label","Play")});ke.on("jump",()=>{Wr=!0});ke.on("end",()=>{document.body.classList.remove("playing"),document.body.classList.add("ended"),Qr.setAttribute("aria-label","Play"),document.getElementById("finale-people").innerHTML=Hc(vn.totalAt(ke.year)||8e9);const i=Sa.counts(ke.year);document.getElementById("finale-counts").textContent=`${i.risen} civilizations risen`,Da.hidden=!1});Qr.addEventListener("click",()=>ke.toggle());Dh.addEventListener("click",()=>{const i=mi.indexOf(ke.speed);sl(mi[(i+1)%mi.length])});Ih.addEventListener("click",()=>Un(!zn));Uh.addEventListener("click",()=>es(!ut.stats));ev.addEventListener("click",()=>{$i.hidden=!$i.hidden});tv.addEventListener("click",()=>{$i.hidden=!0});document.getElementById("finale-close").addEventListener("click",()=>{Da.hidden=!0});document.getElementById("replay").addEventListener("click",()=>{Da.hidden=!0,ke.setU(-It,{jump:!0}),ke.play()});ko.addEventListener("click",()=>{ut.logScale=!ut.logScale,ko.setAttribute("aria-pressed",String(ut.logScale))});zo.addEventListener("click",()=>{ut.linear=!ut.linear,zo.setAttribute("aria-pressed",String(ut.linear))});for(const i of document.querySelectorAll("#mode button"))i.addEventListener("click",()=>void Mi(i.dataset.mode));Ie.onDrag=()=>{zn&&Un(!1)};Ie.controls.addEventListener("start",()=>{Ie.mode==="globe"&&zn&&Un(!1)});Ie.onScroll=(i,e)=>{Math.abs(e)>=Math.abs(i)?(ke.setU(ke.u+e*Kh),jr=!0):Ie.mode==="map"&&(Un(!1),Ie.setLon0(De.uLon0.value+i*.08))};document.addEventListener("keydown",i=>{if(!(i.target instanceof HTMLInputElement||i.target instanceof HTMLTextAreaElement)&&!(i.metaKey||i.ctrlKey||i.altKey))if(i.code==="Space")i.preventDefault(),ke.toggle();else if(i.code==="ArrowRight")i.preventDefault(),ke.setU(ke.u+(i.shiftKey?.05:.01));else if(i.code==="ArrowLeft")i.preventDefault(),ke.setU(ke.u-(i.shiftKey?.05:.01));else if(i.code==="Home")i.preventDefault(),ke.setU(-It,{jump:!0});else if(i.code==="End")i.preventDefault(),ke.setU(1,{jump:!0});else if(i.code==="Escape")$i.hidden=!0,Da.hidden=!0,Qn.hidden=!0,kn.clear();else if(i.key==="m")Mi(Ie.mode==="map"?"globe":"map");else if(i.key==="g")Mi(Ie.mode==="globe"?"map":"globe");else if(i.key==="s")es(!ut.stats);else if(i.key==="f")Un(!zn);else if(i.key==="i"||i.key==="?")$i.hidden=!$i.hidden;else if(i.key==="-"||i.key==="="){const e=mi.indexOf(ke.speed);sl(mi[Math.max(0,Math.min(mi.length-1,e+(i.key==="="?1:-1)))])}else(i.key==="["||i.key==="]")&&(Un(!1),Ie.setLon0(De.uLon0.value+(i.key==="["?-30:30)))});for(const i of document.querySelectorAll("[data-tip]"))i.addEventListener("pointerenter",()=>{gr.textContent=i.dataset.tip??"",gr.hidden=!1;const e=i.getBoundingClientRect();gr.style.transform=`translate(${e.left}px, ${e.bottom+8}px)`}),i.addEventListener("pointerleave",()=>{gr.hidden=!0});rl.addEventListener("pointermove",i=>{const e=ni.volcanoAt(i.clientX,i.clientY);if(!e){Qn.hidden=!0;return}Qn.querySelector(".tip-name").textContent=e.name,Qn.querySelector(".tip-where").textContent=e.country,Qn.querySelector(".tip-when").textContent=e.when;const t=Qn.querySelector(".tip-link");t.href=`https://volcano.si.edu/volcano.cfm?vn=${e.gvpNumber}`,Qn.hidden=!1,Qn.style.transform=`translate(${i.clientX+12}px, ${i.clientY+12}px)`});rl.addEventListener("click",i=>{const e=ni.volcanoAt(i.clientX,i.clientY);e&&window.open(`https://volcano.si.edu/volcano.cfm?vn=${e.gvpNumber}`,"_blank","noopener")});Ca.onEvent=i=>{const e=Ca.cardHtml(i);kn.push({year:i.year,name:i.name,blurb:i.blurb,color:e.color,wiki:e.wiki,placed:i.major}),i.major&&ke.slow(2.4,.12),i.kind==="eruption"&&"vei"in i&&typeof i.vei=="number"&&(i.vei<ni.minVei&&ni.burst(i.lat,i.lon,i.vei,!!i.witnessed,performance.now()/1e3,1),i.vei>=6&&Ie.flashAtmosphere(i.vei>=7?.6:.35)),Ie.mode==="globe"?Ie.flyTo(i.lat,i.lon,1.6):zn||Ie.turnTo(i.lon)};ba.onMilestone=i=>{kn.push({year:i.year,name:i.name,blurb:i.note,color:"#cfe9ff"})};Gr.onCable=i=>kn.push({year:i.year,name:i.name,blurb:i.note,color:"#7fe0ff"});Hr.onFlow=i=>kn.push({year:i.start,name:i.name,blurb:i.note,color:i.kind==="forced"?"#ff8a80":"#ffdca0"});kn.onSeek=i=>ke.seekYear(i);for(const i of Zh.series)ut.addSeries({key:i.key,name:i.name,unit:i.unit,color:i.color,on:!!i.on,points:i.points,valueAt:e=>Jh(i.points,e)});let Wr=!1;Nh(Dt);let Jn=ke.year,Vc=performance.now();function Oh(i){requestAnimationFrame(Oh);const e=i/1e3,t=Math.min(.1,(i-Vc)/1e3);Vc=i,ke.update(t);const n=ke.year,a=Wr;Wr=!1,Ie.setPrologue(ke.prologue),Ia.classList.toggle("gone",jr||Ie.inPrologue),n<Jn-.01&&kn.clear(),Tr.update(n);const r=Sa.tints(n),s=Ie.camera.position.distanceTo(Ie.controls.target);vn.update(n,s,r);const o=vn.centroidAt(n);Ie.followLon0=zn&&o?o[1]:null,wr.update(n,(f,h)=>Ie.project(f,h)),ni.update(Jn,n,e,{seek:a}),Ca.update(Jn,n,{seek:a}),ba.update(Jn,n,{seek:a}),Oo.update(n,e,(f,h)=>Ie.project(f,h)),Gr.update(Jn,n,{seek:a}),Hr.update(Jn,n,{seek:a}),Bo.update(Jn,n,e,(f,h)=>Ie.project(f,h),{seek:a}),Sa.update((f,h)=>Ie.project(f,h)),$_.textContent=Ea(n),Z_.textContent=ke.playing?"":"paused";const c=vn.totalAt(n);J_.innerHTML=n>=-1e4&&c?Hc(c):"";const l=zr(n);Q_.innerHTML=l>0?`<b>${Math.round(l).toLocaleString()}</b> launched into orbit`:"";const u=Sa.counts(n);j_.innerHTML=u.risen===0?"":`<b>${u.alive}</b> civilization${u.alive===1?"":"s"} alive · <b>${u.risen}</b> risen · <b>${u.gone}</b> gone`,ut.draw(n),ut.stats&&ut.renderLegend(n),Ie.update(t,e),nv(e),Jn=n}async function iv(){try{await Promise.all([Tr.load(),vn.load(),wr.load()]),Tr.attach(Ie),vn.attach(Ie),wr.attach(Ie);const i=Number(Dt.get("vei"));if(await ni.load({minVei:Number.isFinite(i)&&Dt.has("vei")?i:6}),ni.attach(Ie),Oo.attach(Ie),Gr.attach(Ie),Hr.attach(Ie),Bo.attach(Ie),ut.addSeries({key:"orbit",name:"into orbit",unit:"",color:"#cfe9ff",on:!1,valueAt:n=>Math.max(1,zr(n))}),ut.addSeries({key:"population",name:"people",unit:"",color:"#ff8c3a",on:!0,valueAt:n=>vn.totalAt(n)}),Dt.has("series")){const n=new Set(Dt.get("series").split(","));for(const a of ut.series)ut.setSeriesOn(a.key,n.has(a.key))}ut.marks=Ca.scrubberMarks(),ut.ticks=ba.scrubberTicks(),ut.curve=n=>n<0?0:vn.totalAt(n)/vn.maxTotal,ut.techCurve=ba.scrubberCurve(),!Dt.has("metrics")&&innerWidth>900&&es(!0),Ie.setPrologueLines([{text:"Look again at that dot.",from:.1,to:.42,x:.3,y:.36},{text:"That’s here. That’s home. That’s us.",from:.44,to:.72,x:.68,y:.6},{text:"the only home we’ve ever known",credit:"Carl Sagan, Pale Blue Dot, 1994",from:.74,to:1.3,x:.5,y:.5,drift:.02}]),Bc.classList.add("gone"),ll();const e=Dt.has("play")?Dt.get("play")!=="0":!Dt.has("year"),t=!Dt.has("year")&&!Dt.has("view")&&!Dt.has("lat")&&Dt.get("intro")!=="0"&&!Lh;t&&ke.setU(-It),e&&setTimeout(()=>{!ke.playing&&!ke.ended&&ke.play()},t?600:1800),!ol.matches&&!Dt.has("view")&&!Dt.has("lat")&&Dt.get("map")!=="0"&&Mi("map",{seconds:0}),requestAnimationFrame(Oh),window.__hf={globe:Ie,timeline:ke,scrubber:ut,feed:kn,layers:{eruptions:ni,population:vn,civilizations:Sa,events:Ca,milestones:ba,satellites:Oo,cables:Gr,flows:Hr,cities:wr,ice:Tr,datacenters:Bo}}}catch(i){Bc.textContent="Something failed to load. Refresh?",console.error(i)}}window.addEventListener("resize",ll);iv();
