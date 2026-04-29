<!-- source: https://wearables.developer.meta.com/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_types_permission | scraped: 2026-04-28 -->

# Permission Enum

Represents the types of permissions that can be requested from Meta Wearables devices.

These permissions control access to device capabilities such as camera streaming and photo capture. Permissions must be granted by the user through the Meta AI companion app before the corresponding functionality can be used. Check permission status with Wearables.checkPermissionStatus and request permissions using Wearables.RequestPermissionContract.

Example:

// Check if camera permission is granted
val result \= Wearables.checkPermissionStatus(Permission.CAMERA)
result.onSuccess { status \->
    when (status) {
        PermissionStatus.Granted \-> startStreaming()
        PermissionStatus.Denied \-> requestPermission()
    }
}

## See Also

-   [PermissionStatus](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_types_permissionstatus)
-   [PermissionError](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_types_permissionerror)

## Signature

enum Permission : Enum<Permission\> 

## Enumeration Constants

Member

Description

CAMERA

Permission to access camera functionality on the connected wearable device for streaming and photo capture.

MICROPHONE

Permission to access microphone functionality on the connected wearable device.