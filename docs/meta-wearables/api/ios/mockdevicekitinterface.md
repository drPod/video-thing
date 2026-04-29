<!-- source: https://wearables.developer.meta.com/docs/reference/ios_swift/dat/0.6/mwdatmockdevice_mockdevicekitinterface | scraped: 2026-04-28 -->

# MockDeviceKitInterface Protocol

Extends Sendable

Interface for managing mock Meta Wearables devices for testing and development.

## Signature

protocol MockDeviceKitInterface: Sendable

## Properties

**isEnabled** : Bool

\[Get\]

Whether MockDeviceKit is currently enabled.

**pairedDevices** : \[MockDevice\]

\[Get\]

The list of all currently paired mock devices.

**permissions** : [MockPermissions](/docs/reference/ios_swift/dat/0.6/mwdatmockdevice_mockpermissions)

\[Get\]

Interface for configuring mock permission behavior.

## Functions

**disable** ()

Disables MockDeviceKit, restoring real providers and unpairing all mock devices.

* * *

Signature

public func disable()

**enable** ( config )

Enables MockDeviceKit, injecting fake providers into the registration and device layers.

Safe to call regardless of whether `Wearables.configure()` has been called — MockDeviceKit will auto-configure Wearables if needed.

* * *

Signature

public func enable( config: MockDeviceKitConfig)

Parameters

`config: [MockDeviceKitConfig](/docs/reference/ios_swift/dat/0.6/mwdatmockdevice_mockdevicekitconfig)`  Configuration options for MockDeviceKit behavior.

**pairRaybanMeta** ()

Pairs a simulated Ray-Ban Meta device. MockDeviceKit must be enabled before calling this method.

* * *

Signature

public func pairRaybanMeta() \-> MockRaybanMeta

Returns

`[MockRaybanMeta](/docs/reference/ios_swift/dat/0.6/mwdatmockdevice_mockraybanmeta)`  A mock Ray-Ban Meta device instance.

**unpairDevice** ( device )

Unpairs a simulated device.

* * *

Signature

public func unpairDevice(\_ device: MockDevice)

Parameters

`_ device: [MockDevice](/docs/reference/ios_swift/dat/0.6/mwdatmockdevice_mockdevice)`  The mock device to unpair.