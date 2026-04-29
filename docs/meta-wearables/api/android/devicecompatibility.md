<!-- source: https://wearables.developer.meta.com/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_types_devicecompatibility | scraped: 2026-04-28 -->

# DeviceCompatibility Enum

Indicates the compatibility status between AI glasses and the Wearables Device Access Toolkit.

Compatibility is determined by comparing firmware versions on the device with SDK requirements. Use [Device.compatibility](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_types_device#compatibility) to check a device's compatibility before attempting operations. The AutoDeviceSelector automatically filters out incompatible devices by default.

Example:

val metadata \= Wearables.devicesMetadata\[deviceId\]?.value
when (metadata?.compatibility) {
    DeviceCompatibility.COMPATIBLE \-> startSession(deviceId)
    DeviceCompatibility.DEVICE\_UPDATE\_REQUIRED \-> showUpdateDevicePrompt()
    DeviceCompatibility.SDK\_UPDATE\_REQUIRED \-> showUpdateSdkPrompt()
    else \-> showUnknownCompatibilityWarning()
}

## See Also

-   [Device.compatibility](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_types_device#compatibility)

## Signature

enum DeviceCompatibility : Enum<DeviceCompatibility\> 

## Enumeration Constants

Member

Description

UNDEFINED

Unknown compatibility status, typically before version information is available.

COMPATIBLE

Device is fully compatible with the current Wearables Device Access Toolkit version.

DEVICE\_UPDATE\_REQUIRED

Device firmware is outdated and requires an update to work with this SDK version.

SDK\_UPDATE\_REQUIRED

Wearables Device Access Toolkit version is outdated and requires an update to work with this device.

## Properties

**displayString** : String

\[Get\]

A human-readable description of the compatibility status

* * *

Signature

val displayString: String