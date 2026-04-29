<!-- source: https://wearables.developer.meta.com/docs/reference/ios_swift/dat/0.6/mwdatcore_capability | scraped: 2026-04-28 -->

# Capability Protocol

Extends AnyObject, Sendable

A protocol for capabilities that can be attached to a [DeviceSession](/docs/reference/ios_swift/dat/0.6/mwdatcore_devicesession).

Capabilities represent device features (e.g., streaming, display) that are managed by a parent [DeviceSession](/docs/reference/ios_swift/dat/0.6/mwdatcore_devicesession). When the parent session stops, it cascades [stop()](/docs/reference/ios_swift/dat/0.6/mwdatcore_capability#stop) to all attached capabilities.

`start()` is intentionally not part of this protocol because different capabilities may have different start signatures. The protocol exists for [DeviceSession](/docs/reference/ios_swift/dat/0.6/mwdatcore_devicesession)'s cascading stop contract.

## Signature

protocol Capability: AnyObject, Sendable

## Properties

**capabilityState** : [CapabilityState](/docs/reference/ios_swift/dat/0.6/mwdatcore_capabilitystate)

\[Get\]

The current state of this capability.

## Functions

**stop** ()

Stops the capability, tearing down its resources and detaching from the parent [DeviceSession](/docs/reference/ios_swift/dat/0.6/mwdatcore_devicesession).

* * *

Signature

public func stop()