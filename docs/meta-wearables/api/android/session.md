<!-- source: https://wearables.developer.meta.com/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_session_session | scraped: 2026-04-28 -->

# Session Class

_Modifiers: final_

Manages a session with a Meta Wearables device. Sessions are created via Wearables.createSession and provide explicit lifecycle control through [Session.start](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_session_session#start) and [Session.stop](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_session_session#stop).

A session progresses through these states:

-   [DeviceSessionState.IDLE](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_session_devicesessionstate#idle) → [DeviceSessionState.STARTING](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_session_devicesessionstate#starting) → [DeviceSessionState.STARTED](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_session_devicesessionstate#started) → [DeviceSessionState.STOPPING](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_session_devicesessionstate#stopping) → [DeviceSessionState.STOPPED](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_session_devicesessionstate#stopped)
-   [DeviceSessionState.STARTED](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_session_devicesessionstate#started) may transition to [DeviceSessionState.PAUSED](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_session_devicesessionstate#paused) and back

[DeviceSessionState.STOPPED](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_session_devicesessionstate#stopped) is a terminal state. Once stopped (explicitly or due to external termination), create a new session via Wearables.createSession.

Capabilities (e.g., Stream, Capture) are attached to a session via addStream, addCapture, and removed via removeStream, removeCapture, or [Capability.stop](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_session_capability#stop). When the session is stopped, all attached capabilities are automatically stopped (cascading stop).

## See Also

-   [DeviceSessionState](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_session_devicesessionstate)
-   [SessionError](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_types_sessionerror)

## Signature

class Session

## Properties

**errors** : SharedFlow<SessionError>

\[Get\]

A SharedFlow that emits session errors.

Errors are emitted when [Session.start](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_session_session#start) fails (e.g., device becomes unavailable during connection), when the device disconnects externally, or when the session is ended by the device. Observe this flow alongside [Session.state](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_session_session#state) for comprehensive session monitoring.

Example:

session.errors.collect { error \->
    when (error) {
        SessionError.DEVICE\_DISCONNECTED \-> showReconnectPrompt()
        SessionError.DEVICE\_POWERED\_OFF \-> showDeviceOffMessage()
        else \-> showError(error.description)
    }
}

* * *

Signature

val errors: SharedFlow<SessionError\>

**state** : StateFlow<DeviceSessionState>

\[Get\]

A StateFlow that provides the current state of this session.

The state progresses through [DeviceSessionState.IDLE](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_session_devicesessionstate#idle) → [DeviceSessionState.STARTING](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_session_devicesessionstate#starting) → [DeviceSessionState.STARTED](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_session_devicesessionstate#started) → [DeviceSessionState.STOPPING](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_session_devicesessionstate#stopping) → [DeviceSessionState.STOPPED](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_session_devicesessionstate#stopped). The session may also transition to [DeviceSessionState.PAUSED](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_session_devicesessionstate#paused) and back to [DeviceSessionState.STARTED](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_session_devicesessionstate#started). Observe this flow to react to session lifecycle changes, including external termination (device disconnect, power off).

Both [Session.start](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_session_session#start) and [Session.stop](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_session_session#stop) are sync fire-and-forget — observe this flow for completion signals.

* * *

Signature

val state: StateFlow<DeviceSessionState\>

## Methods

**addStream** ( streamConfiguration )

Adds a camera streaming capability to this session.

Creates and starts a video stream from the device connected to this session. Only one stream can exist per session — calling this method when a stream is already attached returns [SessionError.CAPABILITY\_ALREADY\_ADDED](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_types_sessionerror#capability_already_added).

The stream must be added after the session reaches DeviceSessionState.STARTED. Adding a stream to an idle session returns [SessionError.SESSION\_IDLE](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_types_sessionerror#session_idle), and adding to a stopped session returns [SessionError.SESSION\_ALREADY\_STOPPED](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_types_sessionerror#session_already_stopped).

Example:

session.addStream(
    streamConfiguration \= StreamConfiguration(videoQuality \= VideoQuality.HIGH),
).fold(
    onSuccess \= { stream \->
        stream.videoStream.collect { frame \-> processFrame(frame) }
    },
    onFailure \= { error \-> showError(error.description) }
)

* * *

Signature

fun Session.addStream(streamConfiguration: StreamConfiguration \= StreamConfiguration()): DatResult<Stream, SessionError\>

Parameters

`streamConfiguration: [StreamConfiguration](/docs/reference/android/dat/0.6/com_meta_wearable_dat_camera_types_streamconfiguration)`  Configuration for the stream (video quality, frame rate)

Returns

`[DatResult](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_types_datresult)` [DatResult](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_types_datresult) containing the [Stream](/docs/reference/android/dat/0.6/com_meta_wearable_dat_camera_stream) on success, or [SessionError](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_types_sessionerror) on failure

**removeStream** ()

Removes the camera streaming capability from this session.

Stops the stream and detaches it from the session. After removal, a new stream can be added via [Session.addStream](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_session_session#addstream).

* * *

Signature

fun Session.removeStream(): DatResult<Unit, SessionError\>

Returns

`[DatResult](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_types_datresult)` [DatResult](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_types_datresult) with [Unit](/docs/reference/android/dat/0.6/kotlin_unit) on success, or [SessionError](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_types_sessionerror) on failure

**start** ()

Starts the session, connecting to the device resolved during Wearables.createSession.

This method is sync fire-and-forget: it returns immediately and the connection proceeds in the background. Observe [Session.state](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_session_session#state) for [DeviceSessionState.STARTING](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_session_devicesessionstate#starting) → [DeviceSessionState.STARTED](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_session_devicesessionstate#started) transitions, and [Session.errors](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_session_session#errors) for failure details.

Calling [Session.start](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_session_session#start) on a session that is not in [DeviceSessionState.IDLE](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_session_devicesessionstate#idle) is a no-op.

* * *

Signature

fun start()

**stop** ()

Stops the session and all attached capabilities.

This method is sync fire-and-forget: it transitions to [DeviceSessionState.STOPPING](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_session_devicesessionstate#stopping) and then [DeviceSessionState.STOPPED](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_session_devicesessionstate#stopped), performing cleanup. All attached capabilities are stopped (cascading stop). The session is unregistered from the session registry, releasing the device for new sessions.

Calling [Session.stop](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_session_session#stop) on an already-stopped or stopping session is a no-op.

* * *

Signature

fun stop()