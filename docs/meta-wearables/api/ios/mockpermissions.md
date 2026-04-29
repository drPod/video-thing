<!-- source: https://wearables.developer.meta.com/docs/reference/ios_swift/dat/0.6/mwdatmockdevice_mockpermissions | scraped: 2026-04-28 -->

# MockPermissions Protocol

Extends Sendable

Interface for configuring mock permission behavior during testing.

Use this to simulate granted/denied permission states and control the outcome of `requestPermission()` calls without launching the Meta AI companion app.

## Signature

protocol MockPermissions: Sendable

## Functions

**set** ( permission , status )

Sets the status of a permission on the mock device.

This affects both `checkPermissionStatus()` (via the DataX service) and subsequent `requestPermission()` calls.

* * *

Signature

public func set(\_ permission: Permission, \_ status: PermissionStatus)

Parameters

`_ permission: [Permission](/docs/reference/ios_swift/dat/0.6/mwdatcore_permission)`  The permission to configure.

`_ status: [PermissionStatus](/docs/reference/ios_swift/dat/0.6/mwdatcore_permissionstatus)`  The status to assign to the permission.

**setRequestResult** ( permission , result )

Configures the result that `requestPermission()` will return for a specific permission.

* * *

Signature

public func setRequestResult(\_ permission: Permission,  result: PermissionStatus)

Parameters

`_ permission: [Permission](/docs/reference/ios_swift/dat/0.6/mwdatcore_permission)`  The permission to configure.

`result: [PermissionStatus](/docs/reference/ios_swift/dat/0.6/mwdatcore_permissionstatus)`  The status to return when the permission is requested.