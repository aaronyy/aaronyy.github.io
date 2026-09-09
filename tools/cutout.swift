// Cut a person out of a photo, writing a PNG whose alpha channel is the
// subject mask. Uses Vision's person segmentation, so it runs offline with no
// dependencies beyond the macOS SDK.
//
//   swiftc -O tools/cutout.swift -o /tmp/cutout
//   /tmp/cutout tools/source-photo.png assets/img/portrait.png
//
// portrait.js only needs the alpha channel to know where the subject is, which
// is far more reliable than trying to separate a subject from a busy
// background at runtime.

import Foundation
import Vision
import CoreImage

let args = CommandLine.arguments

func die(_ message: String, _ code: Int32) -> Never {
    FileHandle.standardError.write(("cutout: " + message + "\n").data(using: .utf8)!)
    exit(code)
}

guard args.count >= 3 else {
    die("usage: cutout <input> <output.png>", 2)
}

let inputURL = URL(fileURLWithPath: args[1])
let outputURL = URL(fileURLWithPath: args[2])

guard let source = CIImage(contentsOf: inputURL) else {
    die("could not read \(inputURL.path)", 3)
}

let request = VNGeneratePersonSegmentationRequest()
request.qualityLevel = .accurate
request.outputPixelFormat = kCVPixelFormatType_OneComponent8

let handler = VNImageRequestHandler(ciImage: source, options: [:])
do {
    try handler.perform([request])
} catch {
    die("segmentation failed: \(error)", 4)
}

guard let observation = request.results?.first else {
    die("no person found in the image", 5)
}

// The mask comes back at its own resolution, so stretch it onto the photo.
var mask = CIImage(cvPixelBuffer: observation.pixelBuffer)
mask = mask.transformed(by: CGAffineTransform(
    scaleX: source.extent.width / mask.extent.width,
    y: source.extent.height / mask.extent.height
))

guard let blend = CIFilter(name: "CIBlendWithMask") else {
    die("CIBlendWithMask unavailable", 6)
}
blend.setValue(source, forKey: kCIInputImageKey)
blend.setValue(CIImage(color: .clear).cropped(to: source.extent), forKey: kCIInputBackgroundImageKey)
blend.setValue(mask, forKey: kCIInputMaskImageKey)

guard let output = blend.outputImage else {
    die("blend produced no image", 7)
}

let context = CIContext()
guard let colorSpace = CGColorSpace(name: CGColorSpace.sRGB),
      let png = context.pngRepresentation(of: output, format: .RGBA8, colorSpace: colorSpace) else {
    die("could not encode PNG", 8)
}

do {
    try png.write(to: outputURL)
} catch {
    die("could not write \(outputURL.path): \(error)", 9)
}

let coverage = Int((mask.extent.width * mask.extent.height) / 1000)
print("wrote \(outputURL.lastPathComponent) (mask \(Int(mask.extent.width))x\(Int(mask.extent.height)), ~\(coverage)k px)")
