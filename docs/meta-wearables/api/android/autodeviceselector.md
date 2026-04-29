<!-- source: https://wearables.developer.meta.com/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_selectors_autodeviceselector | scraped: 2026-04-28 -->

# AutoDeviceSelector Class

Extends [DeviceSelectorBase](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_selectors_deviceselectorbase)

_Modifiers: final_

A device selector that automatically selects an optimal device from the provided device set. Uses a reactive stream approach that maintains device selection across connectivity changes, only switching devices when the currently selected device becomes disconnected or incompatible.

This selector is ideal for most applications that want to connect to any available device without requiring the user to manually select one. The selector continuously monitors device connectivity and compatibility, automatically switching to the best available device when the current device disconnects or becomes incompatible.

Example:

// Use default selection (first connected, compatible device)
val session \= Wearables.createSession(AutoDeviceSelector())
// Custom ranking: prefer devices by name
val customRanking \= Comparator<Device\> { a, b \-> a.name.compareTo(b.name) }
val session \= Wearables.createSession(AutoDeviceSelector(customRanking))

## See Also

-   [DeviceSelector](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_selectors_deviceselector)
-   [SpecificDeviceSelector](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_selectors_specificdeviceselector)
-   [Device](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_types_device)
-   [Wearables.createSession](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_wearables#createsession)

## Constructors

**AutoDeviceSelector** ( deviceRanking , filter )

Signature

constructor(deviceRanking: Comparator<Device\>), filter: (Device) \-> Boolean \= {
      it.linkState \== LinkState.CONNECTED && it.compatibility \== DeviceCompatibility.COMPATIBLE
    })

Parameters

`deviceRanking: Comparator<Device>`  A comparator function used to rank and select from connected devices when the current device is no longer connected or compatible. The default ranking prioritizes connected devices first.

`filter: Function1`  A function that filters out devices based on their metadata. The default filter only selects devices that are connected and compatible.

Returns

`[AutoDeviceSelector](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_selectors_autodeviceselector)`

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