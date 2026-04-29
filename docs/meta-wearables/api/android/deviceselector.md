<!-- source: https://wearables.developer.meta.com/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_selectors_deviceselector | scraped: 2026-04-28 -->

# DeviceSelector Interface

Interface for selecting which device should be used for SDK operations.

Device selectors determine which connected device should receive commands or stream data, enabling flexible device targeting strategies. Implementations can select devices automatically based on connectivity, target a specific device by identifier, or implement custom selection logic.

The SDK provides two built-in implementations:

-   [AutoDeviceSelector](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_selectors_autodeviceselector): Automatically selects an optimal connected, compatible device and switches to another when the current device disconnects or becomes incompatible.
-   [SpecificDeviceSelector](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_selectors_specificdeviceselector): Targets a specific device by its identifier, emitting `null` when that device is not present without falling back to other devices.

Example:

// Auto-select the best connected device
val autoSelector \= AutoDeviceSelector()
val session \= Wearables.createSession(autoSelector)
// Target a specific device
val deviceId \= Wearables.devices.value.first()
val specificSelector \= SpecificDeviceSelector(deviceId)
val session \= Wearables.createSession(specificSelector)

## See Also

-   [AutoDeviceSelector](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_selectors_autodeviceselector)
-   [SpecificDeviceSelector](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_selectors_specificdeviceselector)

## Signature

interface DeviceSelector

## Methods

**activeDevice** ()

Returns the currently selected device identifier, or `null` if no device is selected.

This provides synchronous access to the latest selected device. The value is eagerly cached from the underlying device selection flow, so it always reflects the most recent state without requiring flow collection.

* * *

Signature

abstract fun activeDevice(): DeviceIdentifier?

Returns

`[DeviceIdentifier?](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_types_deviceidentifier)`  The [DeviceIdentifier](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_types_deviceidentifier) of the currently selected device, or `null` if no suitable device is available

**activeDeviceFlow** ()

Returns a Flow that emits the currently selected device identifier, or `null` when no device is selected.

Use this to reactively observe device selection changes. The flow emits whenever the selected device changes — for example, when a device connects, disconnects, or when the selector switches to a different device.

* * *

Signature

abstract fun activeDeviceFlow(): Flow<DeviceIdentifier?>

Returns

`Flow<DeviceIdentifier?>`  A Flow of [DeviceIdentifier](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_types_deviceidentifier) representing the active device, or `null` when no suitable device is available