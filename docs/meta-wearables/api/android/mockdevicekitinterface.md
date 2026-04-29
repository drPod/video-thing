<!-- source: https://wearables.developer.meta.com/docs/reference/android/dat/0.6/com_meta_wearable_dat_mockdevice_api_mockdevicekitinterface | scraped: 2026-04-28 -->

# MockDeviceKitInterface Interface

Suite for device simulation and mocking in the DAT SDK.

This interface defines the contract for managing simulated Meta Wearables devices. Use MockDeviceKit.getInstance to obtain an implementation for testing scenarios where real hardware is not available.

Example:

val mockKit \= MockDeviceKit.getInstance(context)
val glasses \= mockKit.pairRaybanMeta()
glasses.powerOn()
glasses.unfold()
// Device is now available to Wearables SDK

## See Also

-   [MockDevice](/docs/reference/android/dat/0.6/com_meta_wearable_dat_mockdevice_api_mockdevice)
-   [MockRaybanMeta](/docs/reference/android/dat/0.6/com_meta_wearable_dat_mockdevice_api_mockraybanmeta)

## Signature

interface MockDeviceKitInterface

## Properties

**isEnabled** : Boolean

\[Get\]

Whether MockDeviceKit is currently enabled with fake implementations attached.

* * *

Signature

abstract val isEnabled: Boolean

**pairedDevices** : Collection

\[Get\]

List of currently paired mock devices.

* * *

Signature

abstract val pairedDevices: Collection<MockDevice\>

**permissions** : [MockPermissions](/docs/reference/android/dat/0.6/com_meta_wearable_dat_mockdevice_api_permissions_mockpermissions)

\[Get\]

Controls mock permission behavior for Wearables.checkPermissionStatus and Wearables.RequestPermissionContract.

* * *

Signature

abstract val permissions: MockPermissions

## Methods

**disable** ()

Disable MockDeviceKit. Detaches fake implementations, unpairs all mock devices, and restores real registration and device connectivity stack.

* * *

Signature

abstract fun disable()

**enable** ( config )

Enable MockDeviceKit. Attaches fake implementations for registration and device connectivity.

By default, Wearables.registrationState will transition to RegistrationState.Registered. Pass [MockDeviceKitConfig](/docs/reference/android/dat/0.6/com_meta_wearable_dat_mockdevice_api_mockdevicekitconfig) with [MockDeviceKitConfig.initiallyRegistered](/docs/reference/android/dat/0.6/com_meta_wearable_dat_mockdevice_api_mockdevicekitconfig#initiallyregistered) set to `false` to start in an unregistered state instead.

Safe to call regardless of whether Wearables.initialize has been called — MockDeviceKit will auto-initialize Wearables if needed.

* * *

Signature

abstract fun enable(config: MockDeviceKitConfig \= MockDeviceKitConfig())

Parameters

`config: [MockDeviceKitConfig](/docs/reference/android/dat/0.6/com_meta_wearable_dat_mockdevice_api_mockdevicekitconfig)`  Configuration controlling initial mock behavior. Defaults to registered start.

**pairRaybanMeta** ()

Pairs a simulated Ray-Ban Meta glasses device.

* * *

Signature

abstract fun pairRaybanMeta(): MockRaybanMeta

Returns

`[MockRaybanMeta](/docs/reference/android/dat/0.6/com_meta_wearable_dat_mockdevice_api_mockraybanmeta)`  A new [MockRaybanMeta](/docs/reference/android/dat/0.6/com_meta_wearable_dat_mockdevice_api_mockraybanmeta) instance representing the paired device

**unpairDevice** ( device )

Unpairs and removes a simulated device from the mock environment.

* * *

Signature

abstract fun unpairDevice(device: MockDevice)

Parameters

`device: [MockDevice](/docs/reference/android/dat/0.6/com_meta_wearable_dat_mockdevice_api_mockdevice)`  The mock device to unpair