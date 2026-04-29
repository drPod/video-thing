<!-- source: https://wearables.developer.meta.com/docs/reference/ios_swift/dat/0.6/mwdatcore_specificdeviceselector | scraped: 2026-04-28 -->

# SpecificDeviceSelector Class

Extends [DeviceSelector](/docs/reference/ios_swift/dat/0.6/mwdatcore_deviceselector)

_Modifiers: const_

A device selector that always selects a specific, predetermined device. Use this when you want to target operations to a particular device by its identifier.

## Signature

class SpecificDeviceSelector: DeviceSelector

## Constructors

**init** ( device )

Creates a device selector that targets a specific device.

* * *

Signature

public init( device: DeviceIdentifier)

Parameters

`device: [DeviceIdentifier](/docs/reference/ios_swift/dat/0.6/mwdatcore_deviceidentifier)`  The identifier of the device to always select.

## Properties

**activeDevice** : DeviceIdentifier?

\[Get\]

The currently active device identifier.

## Functions

**activeDeviceStream** ()

Creates a stream that immediately yields the specific device and then completes.

* * *

Signature

public func activeDeviceStream() \-> AnyAsyncSequence<DeviceIdentifier?>

Returns

`AnyAsyncSequence<[DeviceIdentifier?](/docs/reference/ios_swift/dat/0.6/mwdatcore_deviceidentifier)>`