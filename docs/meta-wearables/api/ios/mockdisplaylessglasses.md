<!-- source: https://wearables.developer.meta.com/docs/reference/ios_swift/dat/0.6/mwdatmockdevice_mockdisplaylessglasses | scraped: 2026-04-28 -->

# MockDisplaylessGlasses Protocol

Extends [MockDevice](/docs/reference/ios_swift/dat/0.6/mwdatmockdevice_mockdevice)

Protocol for simulating displayless smart glasses behavior in testing and development. Provides functionality for simulating folding/unfolding actions and camera capabilities.

## Signature

protocol MockDisplaylessGlasses: MockDevice

## Properties

**services** : [MockDisplaylessGlassesServices](/docs/reference/ios_swift/dat/0.6/mwdatmockdevice_mockdisplaylessglassesservices)

\[Get\]

Container for services available on this device.

## Functions

**fold** ()

Simulates folding the glasses into a closed position.

* * *

Signature

public func fold()

**unfold** ()

Simulates unfolding the glasses into an open position.

* * *

Signature

public func unfold()