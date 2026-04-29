<!-- source: https://wearables.developer.meta.com/docs/reference/android/dat/0.6/com_meta_wearable_dat_mockdevice_api_permissions_mockpermissions | scraped: 2026-04-28 -->

# MockPermissions Interface

Controls mock permission behavior in MockDeviceKit.

Use [MockPermissions.set](/docs/reference/android/dat/0.6/com_meta_wearable_dat_mockdevice_api_permissions_mockpermissions#set) to configure Wearables.checkPermissionStatus responses and [MockPermissions.setRequestResult](/docs/reference/android/dat/0.6/com_meta_wearable_dat_mockdevice_api_permissions_mockpermissions#setrequestresult) to configure Wearables.RequestPermissionContract responses.

Example:

val mockKit \= MockDeviceKit.getInstance(context)
mockKit.enable()
mockKit.pairRaybanMeta().powerOn()
// Test denied permission:
mockKit.permissions.set(Permission.CAMERA, PermissionStatus.Denied)
// checkPermissionStatus(CAMERA) → Denied
// Test denied request:
mockKit.permissions.setRequestResult(Permission.CAMERA, PermissionStatus.Denied)
// RequestPermissionContract(CAMERA) → Denied

## Signature

interface MockPermissions

## Methods

**set** ( permission , status )

Sets the permission status for the constellation of mock devices.

* * *

Signature

abstract fun set(permission: Permission, status: PermissionStatus)

Parameters

`permission: [Permission](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_types_permission)`  The permission to configure

`status: [PermissionStatus](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_types_permissionstatus)`  The status to return when checked

**setRequestResult** ( permission , result )

Sets the exptected response for permission requests.

Default: [PermissionStatus.Granted](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_types_permissionstatus#granted).

* * *

Signature

abstract fun setRequestResult(permission: Permission, result: PermissionStatus)

Parameters

`permission: [Permission](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_types_permission)`  The permission to configure

`result: [PermissionStatus](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_types_permissionstatus)`  The result to return when the permission is requested