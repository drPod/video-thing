<!-- source: https://wearables.developer.meta.com/docs/reference/android/dat/0.6/com_meta_wearable_dat_mockdevice_api_camera_mockcamerakit | scraped: 2026-04-28 -->

# MockCameraKit Interface

Suite for mocking state of media streaming in the DAT SDK.

Use this interface to configure mock camera feeds and captured images for testing camera streaming functionality without real hardware. Access via MockDisplaylessGlassesServices.camera.

Example:

val glasses \= mockKit.pairRaybanMeta()
val cameraKit \= glasses.services.camera
// Set up video feed for streaming tests
cameraKit.setCameraFeed(Uri.parse("content://test/video.mp4"))
// Or stream from the phone's camera instead
cameraKit.setCameraFeed(CameraFacing.FRONT)
// Set up photo capture response
cameraKit.setCapturedImage(Uri.parse("content://test/photo.jpg"))

## See Also

## Signature

interface MockCameraKit

## Methods

**setCameraFeed** ( fileUri )

Sets the camera feed from a video file for streaming simulation.

Supported codecs: H.265. Use smaller video files for optimal performance, as larger files may result in excessive memory usage during tests. This is mutually exclusive with setCameraFeed(CameraFacing) — calling this method clears any previously set phone camera source.

* * *

Signature

abstract fun setCameraFeed(fileUri: Uri)

Parameters

`fileUri: Uri`  URI of the file containing the video stream

**setCameraFeed** ( cameraFacing )

Sets the camera feed to stream from the phone's physical camera.

When set, the mock device will capture frames from the specified phone camera and encode them as H.265/HEVC video for streaming. This is mutually exclusive with setCameraFeed(Uri) — calling this method clears any previously set file-based camera feed.

Requires the `android.permission.CAMERA` permission to be granted at runtime.

* * *

Signature

abstract fun setCameraFeed(cameraFacing: CameraFacing)

Parameters

`cameraFacing: [CameraFacing](/docs/reference/android/dat/0.6/com_meta_wearable_dat_mockdevice_api_camera_camerafacing)`  which phone camera to use (front or back)

**setCapturedImage** ( fileUri )

Sets the captured image that will be returned when photo capture is requested.

Note that the image returned from the Camera Kit is post-rotated 90 degrees to match real device behavior.

* * *

Signature

abstract fun setCapturedImage(fileUri: Uri)

Parameters

`fileUri: Uri`  URI of the file containing the image