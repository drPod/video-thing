<!-- source: https://wearables.developer.meta.com/docs/reference/android/dat/0.6/com_meta_wearable_dat_camera_stream | scraped: 2026-04-28 -->

# Stream Interface

Extends [Capability](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_session_capability)

Interface for managing media streaming capabilities attached to a Session.

A Stream handles video streaming and photo capture from Meta glasses. Streams are created via Session.addStream and automatically stopped when the parent session stops (cascading stop). They can also be stopped individually via [Stream.stop](/docs/reference/android/dat/0.6/com_meta_wearable_dat_camera_stream#stop) or removed via Session.removeStream.

Video frames are delivered through the [Stream.videoStream](/docs/reference/android/dat/0.6/com_meta_wearable_dat_camera_stream#videostream) Flow and photos through the [Stream.capturePhoto](/docs/reference/android/dat/0.6/com_meta_wearable_dat_camera_stream#capturephoto) suspend function.

## See Also

-   [StreamSessionState](/docs/reference/android/dat/0.6/com_meta_wearable_dat_camera_types_streamsessionstate)
-   [Capability](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_session_capability)

## Signature

interface Stream : Capability

## Properties

**errorStream** : Flow<StreamError>

\[Get\]

Signature

abstract val errorStream: Flow<StreamError\>

**state** : StateFlow<StreamSessionState>

\[Get\]

The current state of the streaming session.

State transitions:

-   STOPPED -> STARTING -> STARTED -> STREAMING (when device connects and streaming begins)
-   STREAMING -> STOPPING -> STOPPED (on device disconnect or error)
-   Any state -> STOPPING -> STOPPED -> CLOSED (on close/stop)

* * *

Signature

abstract val state: StateFlow<StreamSessionState\>

**videoStream** : Flow<VideoFrame>

\[Get\]

Flow of video frames from the streaming session.

Video frames are delivered while the stream is in STREAMING state. The flow automatically handles buffer overflow by dropping the oldest frames to ensure smooth streaming.

* * *

Signature

abstract val videoStream: Flow<VideoFrame\>

## Methods

**capturePhoto** ()

Captures a still photo during active video streaming.

Triggers a photo capture while video streaming is active. Only one capture can be in progress at a time—attempting a second capture while one is pending returns [CaptureError.CaptureInProgress](/docs/reference/android/dat/0.6/com_meta_wearable_dat_camera_types_captureerror#captureinprogress).

* * *

Signature

abstract suspend fun capturePhoto(): DatResult<PhotoData, CaptureError\>

Returns

`[DatResult](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_types_datresult)` [DatResult](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_types_datresult) containing [PhotoData](/docs/reference/android/dat/0.6/com_meta_wearable_dat_camera_types_photodata) on success, or [CaptureError](/docs/reference/android/dat/0.6/com_meta_wearable_dat_camera_types_captureerror) on failure.

**close** ()

Signature

abstract override fun close()

**start** ()

Starts the stream, activating the camera on glasses and beginning the streaming pipeline.

Call this after obtaining a Stream from Session.addStream. The `addStream()` call registers the stream capability, while `start()` activates the camera and begins video frame delivery.

* * *

Signature

abstract fun start(): DatResult<Unit, StreamError\>

Returns

`[DatResult](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_types_datresult)` [DatResult](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_types_datresult) with [Unit](/docs/reference/android/dat/0.6/kotlin_unit) on success, or [StreamError](/docs/reference/android/dat/0.6/com_meta_wearable_dat_camera_types_streamerror) on failure

**stop** ()

Stops this capability, releasing its resources and removing it from the parent session.

After calling [Capability.stop](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_session_capability#stop), the capability is invalidated and cannot be reused. The parent session's capability slot is released, allowing a new capability of the same type to be added.

Calling [Capability.stop](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_session_capability#stop) on an already-stopped capability is a no-op.

* * *

Signature

abstract fun stop()