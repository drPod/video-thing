<!-- source: https://wearables.developer.meta.com/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_selectors_specificdeviceselector | scraped: 2026-04-28 -->

# SpecificDeviceSelector Class

Extends [DeviceSelectorBase](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_selectors_deviceselectorbase)

_Modifiers: final_

A device selector that always selects a specific, predetermined device. Use this when you want to target operations to a particular device by its identifier, such as when you have multiple devices paired and want to explicitly control which one receives commands or streams data.

Unlike [AutoDeviceSelector](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_selectors_autodeviceselector), this selector only emits the specified device when it's present in the available device set, and `null` when it is removed. It does not automatically switch to other devices.

Example:

// Get a specific device from the connected devices
val devices \= Wearables.devices.value
val targetDevice \= devices.firstOrNull { deviceId \->
    Wearables.devicesMetadata\[deviceId\]?.value?.name \== "My Glasses"
}
// Create session targeting that specific device
targetDevice?.let { device \->
    val session \= Wearables.createSession(
        SpecificDeviceSelector(device)
    )
}

## See Also

-   [DeviceSelector](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_selectors_deviceselector)
-   [AutoDeviceSelector](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_selectors_autodeviceselector)
-   [Wearables.devices](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_wearables#devices)

## Signature

class SpecificDeviceSelector(selectedDevice: DeviceIdentifier) : DeviceSelectorBase

## Constructors

**SpecificDeviceSelector** ( selectedDevice )

Signature

constructor(selectedDevice: DeviceIdentifier)

Parameters

`selectedDevice: [DeviceIdentifier](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_types_deviceidentifier)`  The identifier of the device to always select

Returns

`[SpecificDeviceSelector](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_selectors_specificdeviceselector)`

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