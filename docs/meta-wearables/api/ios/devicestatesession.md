<!-- source: https://wearables.developer.meta.com/docs/reference/ios_swift/dat/0.6/mwdatcore_devicestatesession | scraped: 2026-04-28 -->

# DeviceStateSession Class

Extends Sendable

_Modifiers: const_

Manages a session for monitoring device state changes.

## Signature

class DeviceStateSession: Sendable

## Constructors

**init** ( deviceSelector )

Signature

public init( deviceSelector: DeviceSelector)

Parameters

`deviceSelector: [DeviceSelector](/docs/reference/ios_swift/dat/0.6/mwdatcore_deviceselector)`

## Properties

**state** : [SessionState](/docs/reference/ios_swift/dat/0.6/mwdatcore_sessionstate)

\[Get\]

The current state of the device session.

## Functions

**start** ()

Starts the device state session.

Begins monitoring the selected device for state changes.

* * *

Signature

public func start()

**stop** ()

Stops the device state session.

Releases resources and stops monitoring device state changes.

* * *

Signature

public func stop()