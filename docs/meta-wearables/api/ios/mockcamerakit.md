<!-- source: https://wearables.developer.meta.com/docs/reference/ios_swift/dat/0.6/mwdatmockdevice_mockcamerakit | scraped: 2026-04-28 -->

# MockCameraKit Protocol

Extends Sendable

A suite for mocking camera functionality.

## Signature

protocol MockCameraKit: Sendable

## Functions

**setCameraFeed** ( fileURL )

Sets the camera feed from a video file.

Supported codecs: h.265

Mutually exclusive with [setCameraFeed(cameraFacing:)](/docs/reference/ios_swift/dat/0.6/mwdatmockdevice_mockcamerakit#setCameraFeed). Calling this clears any active camera source.

* * *

Signature

public func setCameraFeed( fileURL: URL)

Parameters

`fileURL: URL`  URL of the file containing the video stream.

**setCameraFeed** ( cameraFacing )

Sets the camera feed to stream live from the phone's camera.

Mutually exclusive with [setCameraFeed(fileURL:)](/docs/reference/ios_swift/dat/0.6/mwdatmockdevice_mockcamerakit#setCameraFeed). Calling this clears any active camera feed file.

* * *

Signature

public func setCameraFeed( cameraFacing: CameraFacing)

Parameters

`cameraFacing: [CameraFacing](/docs/reference/ios_swift/dat/0.6/mwdatmockdevice_camerafacing)`  Which phone camera to use.

**setCapturedImage** ( fileURL )

Sets the captured image from an image file.

* * *

Signature

public func setCapturedImage( fileURL: URL)

Parameters

`fileURL: URL`  URL of the file containing the image.