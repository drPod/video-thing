<!-- source: https://wearables.developer.meta.com/docs/reference/android/dat/0.6/com_meta_wearable_dat_mockdevice_api_mockdevice | scraped: 2026-04-28 -->

# MockDevice Interface

Mock interface to simulate basic device operations for testing purposes.

This is the base interface for all mock device types in the MockDeviceKit. It provides fundamental device lifecycle operations like power control and wear state simulation. Use implementations like [MockRaybanMeta](/docs/reference/android/dat/0.6/com_meta_wearable_dat_mockdevice_api_mockraybanmeta) for device-specific functionality.

## See Also

-   [MockRaybanMeta](/docs/reference/android/dat/0.6/com_meta_wearable_dat_mockdevice_api_mockraybanmeta)
-   [DeviceIdentifier](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_types_deviceidentifier)

## Signature

interface MockDevice

## Properties

**deviceIdentifier** : [DeviceIdentifier](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_types_deviceidentifier)

\[Get\]

Returns the device identifier for this mock device.

* * *

Signature

abstract val deviceIdentifier: DeviceIdentifier

## Methods

**doff** ()

Simulates taking off (doffing) the device, triggering removal detection events.

* * *

Signature

abstract fun doff()

**don** ()

Simulates putting on (donning) the device, triggering wear detection events.

* * *

Signature

abstract fun don()

**powerOff** ()

Powers off the mock device, simulating device shutdown.

* * *

Signature

abstract fun powerOff()

**powerOn** ()

Powers on the mock device, simulating device startup.

* * *

Signature

abstract fun powerOn()