<!-- source: https://wearables.developer.meta.com/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_session_devicesession | scraped: 2026-04-28 -->

# DeviceSession Class

_Modifiers: final_

DeprecatedUse Wearables.createSession(deviceSelector) to create a Session with explicit lifecycle control

Manages a session with Meta Wearables devices based on a provided device selector. Handles automatic connection and disconnection as devices become available or unavailable.

The session monitors device availability through the provided [DeviceSelector](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_selectors_deviceselector) and automatically manages connections. When a matching device becomes available, it establishes a session. When the device becomes unavailable, it disconnects the session.

## Signature

class DeviceSession

## Constructors

**DeviceSession** ( deviceSelector )

Creates a new DeviceSession with the specified device selector.

* * *

Signature

constructor(deviceSelector: DeviceSelector)

Parameters

`deviceSelector: [DeviceSelector](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_selectors_deviceselector)`  The selector used to determine which devices to connect to

Returns

`[DeviceSession](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_session_devicesession)`

## Properties

**state** : StateFlow<DeviceSessionState>

\[Get\]

A StateFlow that provides the current state of this device session.

The state indicates whether the session is currently connected to a device (`STARTED`) or not connected (`STOPPED`). The state changes automatically based on device availability as determined by the provided DeviceSelector.

* * *

Signature

val state: StateFlow<DeviceSessionState\>

## Methods

**start** ()

Starts monitoring for devices and establishes sessions when matching devices become available.

This method begins monitoring the device availability through the configured DeviceSelector. When a device matching the selector criteria becomes available, the session automatically connects to it and transitions to the `STARTED` state. If the device becomes unavailable, the session automatically disconnects and transitions to the `STOPPED` state.

* * *

Signature

fun start()

**stop** ()

Stops the device session and disconnects from any currently connected device.

This method stops monitoring for device availability and immediately disconnects from any currently connected device. The session state transitions to `STOPPED`. After calling this method, no further automatic connections will be established until `start()` is called again.

* * *

Signature

fun stop()