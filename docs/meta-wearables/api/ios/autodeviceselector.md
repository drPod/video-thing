<!-- source: https://wearables.developer.meta.com/docs/reference/ios_swift/dat/0.6/mwdatcore_autodeviceselector | scraped: 2026-04-28 -->

# AutoDeviceSelector Class

Extends [DeviceSelector](/docs/reference/ios_swift/dat/0.6/mwdatcore_deviceselector)

_Modifiers: const_

A device selector that automatically selects the best available device. Selects the first connected device from the devices list, falling back to the first device if none are connected.

## Signature

class AutoDeviceSelector: DeviceSelector

## Constructors

**init** ( wearables )

Creates an auto device selector that monitors the given wearables interface for device changes.

* * *

Signature

public init( wearables: WearablesInterface)

Parameters

`wearables: [WearablesInterface](/docs/reference/ios_swift/dat/0.6/mwdatcore_wearablesinterface)`  The wearables interface to monitor for available devices.

## Properties

**activeDevice** : DeviceIdentifier?

\[Get\]\[Set\]

The currently active device identifier.

## Functions

**activeDeviceStream** ()

Creates a stream of active device changes that updates whenever the device list changes.

* * *

Signature

public func activeDeviceStream() \-> AnyAsyncSequence<DeviceIdentifier?>

Returns

`AnyAsyncSequence<[DeviceIdentifier?](/docs/reference/ios_swift/dat/0.6/mwdatcore_deviceidentifier)>`