<!-- source: https://wearables.developer.meta.com/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_types_device | scraped: 2026-04-28 -->

# Device Class

_Modifiers: final_

Contains metadata information about a Meta Wearables device.

This data class provides essential information about a device's identity, availability status, and hardware type, which can be used for device management and feature detection.

## Signature

data class Device(val name: String, val linkState: LinkState \= LinkState.DISCONNECTED, val deviceType: DeviceType \= DeviceType.UNKNOWN, val firmwareInfo: String? \= null, val compatibility: DeviceCompatibility \= DeviceCompatibility.COMPATIBLE)

## Constructors

**Device** ( name , linkState , deviceType , firmwareInfo , compatibility )

Signature

constructor(name: String, linkState: LinkState \= LinkState.DISCONNECTED, deviceType: DeviceType \= DeviceType.UNKNOWN, firmwareInfo: String? \= null, compatibility: DeviceCompatibility \= DeviceCompatibility.COMPATIBLE)

Parameters

`name: String`  The human-readable name of the device

`linkState: [LinkState](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_types_linkstate)`  Whether the device is Connected, Connecting, or Disconnected

`deviceType: [DeviceType](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_types_devicetype)`  The specific type of Meta Wearables device

`firmwareInfo: String?`  Optional firmware build version information for the device

`compatibility: [DeviceCompatibility](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_types_devicecompatibility)`

Returns

`[Device](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_types_device)`

## Properties

**compatibility** : [DeviceCompatibility](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_types_devicecompatibility)

\[Get\]

Signature

val compatibility: DeviceCompatibility

**deviceType** : [DeviceType](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_types_devicetype)

\[Get\]

The specific type of Meta Wearables device

* * *

Signature

val deviceType: DeviceType

**firmwareInfo** : String?

\[Get\]

Optional firmware build version information for the device

* * *

Signature

val firmwareInfo: String? \= null

**linkState** : [LinkState](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_types_linkstate)

\[Get\]

Whether the device is Connected, Connecting, or Disconnected

* * *

Signature

val linkState: LinkState

**name** : String

\[Get\]

The human-readable name of the device

* * *

Signature

val name: String