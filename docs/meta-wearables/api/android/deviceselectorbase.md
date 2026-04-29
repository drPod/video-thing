<!-- source: https://wearables.developer.meta.com/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_selectors_deviceselectorbase | scraped: 2026-04-28 -->

# DeviceSelectorBase Class

Implements [DeviceSelector](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_selectors_deviceselector)

_Modifiers: abstract_

Abstract base class for [DeviceSelector](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_selectors_deviceselector) implementations that provides common device observation infrastructure.

This class handles the shared pattern of eagerly observing a device selection flow and caching the latest selected device for synchronous access. Subclasses only need to provide the specific device selection Flow via the deviceFlow constructor parameter.

The observation starts immediately at construction time using WearableCoroutineScopes.applicationScope with WearableDispatchers.io, ensuring that [DeviceSelectorBase.activeDevice](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_selectors_deviceselectorbase#activedevice) always returns the most recent value without requiring callers to collect the flow.

## See Also

-   [AutoDeviceSelector](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_selectors_autodeviceselector)
-   [SpecificDeviceSelector](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_selectors_specificdeviceselector)

## Constructors

**DeviceSelectorBase** ( deviceFlow )

Signature

constructor(deviceFlow: Flow<DeviceIdentifier?>)

Parameters

`deviceFlow: Flow<DeviceIdentifier?>`  The flow that emits the currently selected device identifier, or null when no device is selected. This flow is eagerly collected and its latest value is cached.

Returns

`[DeviceSelectorBase](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_selectors_deviceselectorbase)`

## Methods

**activeDevice** ()

Returns the currently selected device identifier, or `null` if no device is selected.

This provides synchronous access to the latest selected device. The value is eagerly cached from the underlying device selection flow, so it always reflects the most recent state without requiring flow collection.

* * *

Signature

open override fun activeDevice(): DeviceIdentifier?

Returns

`[DeviceIdentifier?](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_types_deviceidentifier)`  The [DeviceIdentifier](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_types_deviceidentifier) of the currently selected device, or `null` if no suitable device is available

**activeDeviceFlow** ()

Returns a Flow that emits the currently selected device identifier, or `null` when no device is selected.

Use this to reactively observe device selection changes. The flow emits whenever the selected device changes — for example, when a device connects, disconnects, or when the selector switches to a different device.

* * *

Signature

open override fun activeDeviceFlow(): Flow<DeviceIdentifier?>

Returns

`Flow<DeviceIdentifier?>`  A Flow of [DeviceIdentifier](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_types_deviceidentifier) representing the active device, or `null` when no suitable device is available