<!-- source: https://wearables.developer.meta.com/docs/reference/ios_swift/dat/0.6/mwdatcore_devicesession | scraped: 2026-04-28 -->

# DeviceSession Class

Extends Sendable

_Modifiers: const_

A session representing a connection to a specific wearable device.

`DeviceSession` manages the lifecycle of a connection to a device and serves as the parent for capabilities (e.g., streaming, display). Create sessions via [WearablesInterface.createSession(deviceSelector:)](/docs/reference/ios_swift/dat/0.6/mwdatcore_wearablesinterface#createSession).

\## Lifecycle

1\. Create via `Wearables.shared.createSession(deviceSelector:)`

2\. Observe [statePublisher](/docs/reference/ios_swift/dat/0.6/mwdatcore_devicesession#statePublisher) or [stateStream()](/docs/reference/ios_swift/dat/0.6/mwdatcore_devicesession#stateStream) for state changes

3\. Call [start()](/docs/reference/ios_swift/dat/0.6/mwdatcore_devicesession#start) to connect

4\. Attach capabilities (e.g., `addStream()`)

5\. Call [stop()](/docs/reference/ios_swift/dat/0.6/mwdatcore_devicesession#stop) to disconnect (cascades to all attached capabilities)

Sessions are not reusable — after reaching [DeviceSessionState.stopped](/docs/reference/ios_swift/dat/0.6/mwdatcore_devicesessionstate#stopped), create a new session via the factory.

## Signature

class DeviceSession: Sendable

## Properties

**deviceId** : [DeviceIdentifier](/docs/reference/ios_swift/dat/0.6/mwdatcore_deviceidentifier)

The identifier of the device this session is connected to.

**errorPublisher** : any Announcer<DeviceSessionError>

\[Get\]

An announcer that emits [DeviceSessionError](/docs/reference/ios_swift/dat/0.6/mwdatcore_devicesessionerror) events.

**state** : [DeviceSessionState](/docs/reference/ios_swift/dat/0.6/mwdatcore_devicesessionstate)

\[Get\]

The current state of this session.

**statePublisher** : any Announcer<DeviceSessionState>

\[Get\]

An announcer that emits [DeviceSessionState](/docs/reference/ios_swift/dat/0.6/mwdatcore_devicesessionstate) changes.

## Functions

**addCapability** ( capability )

Adds a capability to this session.

Added capabilities will have [Capability.stop()](/docs/reference/ios_swift/dat/0.6/mwdatcore_capability#stop) called on them when this session stops. Only one capability per type is allowed. The session must be in [DeviceSessionState.started](/docs/reference/ios_swift/dat/0.6/mwdatcore_devicesessionstate#started) state.

* * *

Signature

public func addCapability(\_ capability: some Capability)

Parameters

`_ capability: some [Capability](/docs/reference/ios_swift/dat/0.6/mwdatcore_capability)`  The capability to add.

Throws

**errorStream** ()

Creates an `AsyncStream` for observing session errors.

* * *

Signature

public func errorStream() \-> AsyncStream<DeviceSessionError\>

Returns

`AsyncStream<[DeviceSessionError](/docs/reference/ios_swift/dat/0.6/mwdatcore_devicesessionerror)>`

**removeCapability** ( type )

Removes a capability from this session by type.

The session must be in [DeviceSessionState.started](/docs/reference/ios_swift/dat/0.6/mwdatcore_devicesessionstate#started) state.

* * *

Signature

public func removeCapability<T: Capability\>(\_ type: T.Type)

Parameters

`_ type: T.Type`  The type of capability to remove.

Throws

**start** ()

Starts the session, connecting to the device.

Validates that the device is available, compatible, and connected before transitioning to [DeviceSessionState.starting](/docs/reference/ios_swift/dat/0.6/mwdatcore_devicesessionstate#starting). If validation fails, the session stays in [DeviceSessionState.idle](/docs/reference/ios_swift/dat/0.6/mwdatcore_devicesessionstate#idle) and the error is thrown, allowing the caller to retry later.

* * *

Signature

public func start()

Throws

**stateStream** ()

Creates an `AsyncStream` for observing session state changes.

Create the stream before calling [start()](/docs/reference/ios_swift/dat/0.6/mwdatcore_devicesession#start) to avoid missing the initial state transitions.

* * *

Signature

public func stateStream() \-> AsyncStream<DeviceSessionState\>

Returns

`AsyncStream<[DeviceSessionState](/docs/reference/ios_swift/dat/0.6/mwdatcore_devicesessionstate)>`

**stop** ()

Stops the session, disconnecting from the device and cascading stop to all attached capabilities.

This is a sync fire-and-forget call. Observe [statePublisher](/docs/reference/ios_swift/dat/0.6/mwdatcore_devicesession#statePublisher) or [stateStream()](/docs/reference/ios_swift/dat/0.6/mwdatcore_devicesession#stateStream) for the transition to [DeviceSessionState.stopped](/docs/reference/ios_swift/dat/0.6/mwdatcore_devicesessionstate#stopped). Calling stop on an already stopped or stopping session is a no-op.

* * *

Signature

public func stop()