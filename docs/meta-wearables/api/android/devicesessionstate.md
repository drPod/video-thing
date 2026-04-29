<!-- source: https://wearables.developer.meta.com/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_session_devicesessionstate | scraped: 2026-04-28 -->

# DeviceSessionState Enum

Represents the current state of a Meta Wearables device session.

A device session manages the connection between the application and a specific Meta Wearables device. The session progresses through these states during its lifecycle:

-   [DeviceSessionState.IDLE](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_session_devicesessionstate#idle) → [DeviceSessionState.STARTING](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_session_devicesessionstate#starting) → [DeviceSessionState.STARTED](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_session_devicesessionstate#started) → [DeviceSessionState.PAUSED](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_session_devicesessionstate#paused) → [DeviceSessionState.STARTED](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_session_devicesessionstate#started) (resumable)
-   [DeviceSessionState.STARTED](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_session_devicesessionstate#started) → [DeviceSessionState.STOPPING](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_session_devicesessionstate#stopping) → [DeviceSessionState.STOPPED](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_session_devicesessionstate#stopped) (terminal)

[DeviceSessionState.STOPPED](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_session_devicesessionstate#stopped) is a terminal state. Once a session reaches [DeviceSessionState.STOPPED](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_session_devicesessionstate#stopped), a new session must be created via Wearables.createSession to re-establish the connection.

Use [Session.state](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_session_session#state) to observe state transitions and respond to connectivity changes in your application.

## See Also

-   [Session](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_session_session)
-   [Session.state](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_session_session#state)
-   [SessionState](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_session_sessionstate)

## Signature

enum DeviceSessionState : Enum<DeviceSessionState\> 

## Enumeration Constants

Member

Description

IDLE

The session has been created but [Session.start](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_session_session#start) has not yet been called.

STARTING

[Session.start](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_session_session#start) has been called and the session is connecting to the device.

STARTED

The session is active and connected to a Meta Wearables device.

PAUSED

The session is temporarily paused (e.g., device entered low-power mode).

STOPPING

[Session.stop](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_session_session#stop) has been called and the session is cleaning up resources.

STOPPED

The session is inactive and not connected to any device. This is a terminal state — the session cannot be restarted. Create a new session via Wearables.createSession if needed.