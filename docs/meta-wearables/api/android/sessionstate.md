<!-- source: https://wearables.developer.meta.com/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_session_sessionstate | scraped: 2026-04-28 -->

# SessionState Enum

Represents the current state of a device session in the Meta Wearables SDK.

This enum tracks the lifecycle of internal sessions used for device communication. Sessions transition between states as the device connects, streams data, pauses, or disconnects. Observe state changes through Wearables.getDeviceSessionState to respond to device connectivity and session lifecycle events.

## See Also

-   [DeviceSession](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_session_devicesession)
-   [DeviceSessionState](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_session_devicesessionstate)

## Signature

enum SessionState : Enum<SessionState\> 

## Enumeration Constants

Member

Description

IDLE

STOPPED

The session is not active and not attempting to connect to the device.

RUNNING

The session is actively running and processing data from the connected device.

PAUSED

The session is temporarily paused but maintains its connection to the device.