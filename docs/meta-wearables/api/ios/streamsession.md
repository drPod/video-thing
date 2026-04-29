<!-- source: https://wearables.developer.meta.com/docs/reference/ios_swift/dat/0.6/mwdatcamera_streamsession | scraped: 2026-04-28 -->

# StreamSession Class

Extends Sendable

_Modifiers: const_

A class for managing media streaming sessions with Meta Wearables devices. Handles video streaming, photo capture, and provides real-time state updates.

## Signature

class StreamSession: Sendable

## Properties

**errorPublisher** : any Announcer<StreamSessionError>

\[Get\]

Publisher for errors that occur during the streaming session.

**photoDataPublisher** : any Announcer<PhotoData>

\[Get\]

Publisher for photo data captured during the streaming session.

**state** : [StreamSessionState](/docs/reference/ios_swift/dat/0.6/mwdatcamera_streamsessionstate)

\[Get\]

The current state of the streaming session.

**statePublisher** : any Announcer<StreamSessionState>

\[Get\]

Publisher for streaming session state changes.

**streamSessionConfig** : [StreamSessionConfig](/docs/reference/ios_swift/dat/0.6/mwdatcamera_streamsessionconfig)

The configuration used for this streaming session.

**videoFramePublisher** : any Announcer<VideoFrame>

\[Get\]

Publisher for video frames received from the streaming session.

## Functions

**capturePhoto** ( format )

Captures a still photo during streaming.

Triggers a photo capture while video streaming is active. The captured photo is delivered through [photoDataPublisher](/docs/reference/ios_swift/dat/0.6/mwdatcamera_streamsession#photoDataPublisher). Video streaming is temporarily paused during capture and automatically resumes after photo delivery.

* * *

Signature

public func capturePhoto( format: PhotoCaptureFormat) \-> Bool

Parameters

`format: [PhotoCaptureFormat](/docs/reference/ios_swift/dat/0.6/mwdatcamera_photocaptureformat)`  The desired image format.

Returns

`Bool` `true` if the capture request was accepted, `false` if no device session is active, a capture is already in progress, or the underlying capture request fails.

**start** ()

Starts video streaming from the device.

Begins streaming video frames from the currently available device. If no device is currently available, the session enters `.waitingForDevice` state and automatically connects when a device becomes available. Video frames are delivered through [videoFramePublisher](/docs/reference/ios_swift/dat/0.6/mwdatcamera_streamsession#videoFramePublisher).

State transitions: `.stopped` -> `.waitingForDevice` (no device) or `.stopped` -> `.starting` -> `.streaming` (with device).

The session monitors for device availability and automatically connects when a device becomes available and publishes errors if the device is invalid. The session automatically stops when an error occurs or when the device session ends externally (e.g., device powered off).

Errors published to [errorPublisher](/docs/reference/ios_swift/dat/0.6/mwdatcamera_streamsession#errorPublisher): - [StreamSessionError.deviceNotFound(\_:)](/docs/reference/ios_swift/dat/0.6/mwdatcamera_streamsessionerror#deviceNotFound) - [StreamSessionError.deviceNotConnected(\_:)](/docs/reference/ios_swift/dat/0.6/mwdatcamera_streamsessionerror#deviceNotConnected) - [StreamSessionError.timeout](/docs/reference/ios_swift/dat/0.6/mwdatcamera_streamsessionerror#timeout) - [StreamSessionError.permissionDenied](/docs/reference/ios_swift/dat/0.6/mwdatcamera_streamsessionerror#permissionDenied) - [StreamSessionError.hingesClosed](/docs/reference/ios_swift/dat/0.6/mwdatcamera_streamsessionerror#hingesClosed) - [StreamSessionError.internalError](/docs/reference/ios_swift/dat/0.6/mwdatcamera_streamsessionerror#internalError)

* * *

Signature

public func start()

**stop** ()

Stops video streaming and releases all resources.

Shuts down the streaming pipeline and transitions to `.stopped` state.

State transitions: Any state -> `.stopping` -> `.stopped`

* * *

Signature

public func stop()