<!-- source: https://wearables.developer.meta.com/docs/reference/android/dat/0.6/com_meta_wearable_dat_camera_streamsession | scraped: 2026-04-28 -->

# StreamSession Interface

DeprecatedUse Stream interface via session.addStream()

Interface for managing media streaming sessions with Meta Wearables devices.

A StreamSession handles video streaming and photo capture functionality from AI glasses. Sessions are created and automatically started via [Wearables.startStreamSession](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_wearables#startstreamsession). Video frames are delivered through the [StreamSession.videoStream](/docs/reference/android/dat/0.6/com_meta_wearable_dat_camera_streamsession#videostream) Flow and photos through the [StreamSession.capturePhoto](/docs/reference/android/dat/0.6/com_meta_wearable_dat_camera_streamsession#capturephoto) suspend function.

Sessions automatically connect when a device becomes connected and stop when the device session ends externally (e.g., device powered off).

## See Also

-   [Wearables.startStreamSession](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_wearables#startstreamsession)
-   [StreamConfiguration](/docs/reference/android/dat/0.6/com_meta_wearable_dat_camera_types_streamconfiguration)
-   [StreamSessionState](/docs/reference/android/dat/0.6/com_meta_wearable_dat_camera_types_streamsessionstate)
-   [StreamError](/docs/reference/android/dat/0.6/com_meta_wearable_dat_camera_types_streamerror)

## Signature

interface StreamSession

## Properties

**state** : StateFlow<StreamSessionState>

\[Get\]

The current state of the streaming session.

State transitions:

-   STOPPED -> STARTING -> STARTED -> STREAMING (when device connects and streaming begins)
-   STREAMING -> STOPPING -> STOPPED (on device disconnect or error)
-   Any state -> STOPPING -> STOPPED -> CLOSED (on close)

* * *

Signature

abstract val state: StateFlow<StreamSessionState\>

**videoStream** : Flow<VideoFrame>

\[Get\]

Flow of video frames from the streaming session.

Video frames are delivered while the session is in STREAMING state. The flow automatically handles buffer overflow by dropping the oldest frames to ensure smooth streaming.

* * *

Signature

abstract val videoStream: Flow<VideoFrame\>

## Methods

**capturePhoto** ()

Captures a still photo during active video streaming.

Triggers a photo capture while video streaming is active. Only one capture can be in progress at a time—attempting a second capture while one is pending returns [CaptureError.CaptureInProgress](/docs/reference/android/dat/0.6/com_meta_wearable_dat_camera_types_captureerror#captureinprogress).

Example:

session.capturePhoto().fold(
    onSuccess \= { photo \->
        when (photo) {
            is PhotoData.HEIC \-> saveHeic(photo.encodedPhoto)
            is PhotoData.Bitmap \-> displayBitmap(photo.rawBitmap)
        }
    },
    onFailure \= { error \->
        when (error) {
            CaptureError.DeviceDisconnected \-> showDeviceError()
            CaptureError.NotStreaming \-> showStreamingRequired()
            CaptureError.CaptureInProgress \-> showBusyMessage()
            CaptureError.CaptureFailed \-> showCaptureError()
        }
    }
)

* * *

Signature

abstract suspend fun capturePhoto(): DatResult<PhotoData, CaptureError\>

Returns

`[DatResult](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_types_datresult)` [DatResult](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_types_datresult) containing [PhotoData](/docs/reference/android/dat/0.6/com_meta_wearable_dat_camera_types_photodata) on success, or [CaptureError](/docs/reference/android/dat/0.6/com_meta_wearable_dat_camera_types_captureerror) on failure.

**close** ()

Stops video streaming and releases all resources.

Shuts down the streaming pipeline and transitions to CLOSED state. The session cannot be reused after closing.

State transitions: Any state -> STOPPING -> STOPPED -> CLOSED

* * *

Signature

abstract fun close()