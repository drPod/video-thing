<!-- source: https://wearables.developer.meta.com/docs/reference/android/dat/0.6/com_meta_wearable_dat_mockdevice_api_mockraybanmeta | scraped: 2026-04-28 -->

# MockRaybanMeta Interface

Extends [MockDisplaylessGlasses](/docs/reference/android/dat/0.6/com_meta_wearable_dat_mockdevice_api_mockdisplaylessglasses)

Mock interface to simulate Ray-Ban Meta smart glasses for testing purposes.

This interface extends [MockDisplaylessGlasses](/docs/reference/android/dat/0.6/com_meta_wearable_dat_mockdevice_api_mockdisplaylessglasses) to provide Ray-Ban Meta specific simulation capabilities. Create instances using MockDeviceKit.pairRaybanMeta.

Example:

val mockKit \= MockDeviceKit.getInstance(context)
val glasses \= mockKit.pairRaybanMeta()
// Simulate device lifecycle
glasses.powerOn()
glasses.unfold()
glasses.don()
// Set up camera mock data
glasses.services.camera.setCameraFeed(videoUri)

## See Also

-   [MockDisplaylessGlasses](/docs/reference/android/dat/0.6/com_meta_wearable_dat_mockdevice_api_mockdisplaylessglasses)

## Signature

interface MockRaybanMeta : MockDisplaylessGlasses

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