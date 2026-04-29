<!-- source: https://wearables.developer.meta.com/docs/reference/android/dat/0.6/com_meta_wearable_dat_mockdevice_api_mockdisplaylessglasses | scraped: 2026-04-28 -->

# MockDisplaylessGlasses Interface

Extends [MockDevice](/docs/reference/android/dat/0.6/com_meta_wearable_dat_mockdevice_api_mockdevice)

Mock interface to simulate displayless glasses for testing purposes.

This interface extends [MockDevice](/docs/reference/android/dat/0.6/com_meta_wearable_dat_mockdevice_api_mockdevice) with functionality specific to glasses without built-in displays (e.g., Ray-Ban Meta). It provides hinge state simulation and service access for testing streaming scenarios.

## See Also

-   [MockRaybanMeta](/docs/reference/android/dat/0.6/com_meta_wearable_dat_mockdevice_api_mockraybanmeta)
-   [MockDevice](/docs/reference/android/dat/0.6/com_meta_wearable_dat_mockdevice_api_mockdevice)
-   [MockDisplaylessGlassesServices](/docs/reference/android/dat/0.6/com_meta_wearable_dat_mockdevice_api_mockdisplaylessglassesservices)

## Signature

interface MockDisplaylessGlasses : MockDevice

## Properties

**deviceIdentifier** : [DeviceIdentifier](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_types_deviceidentifier)

\[Get\]

Returns the device identifier for this mock device.

* * *

Signature

abstract val deviceIdentifier: DeviceIdentifier

**services** : [MockDisplaylessGlassesServices](/docs/reference/android/dat/0.6/com_meta_wearable_dat_mockdevice_api_mockdisplaylessglassesservices)

\[Get\]

Container for services available on this device.

* * *

Signature

abstract val services: MockDisplaylessGlassesServices

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

**fold** ()

Simulates folding the glasses into a closed position.

This triggers hinge state change events that the SDK observes.

* * *

Signature

abstract fun fold()

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

**unfold** ()

Simulates unfolding the glasses into an open position.

This triggers hinge state change events that the SDK observes.

* * *

Signature

abstract fun unfold()