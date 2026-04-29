<!-- source: https://wearables.developer.meta.com/docs/reference/android/dat/0.6/com_meta_wearable_dat_mockdevice_mockdevicekit | scraped: 2026-04-28 -->

# MockDeviceKit Class

Implements [MockDeviceKitInterface](/docs/reference/android/dat/0.6/com_meta_wearable_dat_mockdevice_api_mockdevicekitinterface)

_Modifiers: final_

Main entry point for managing simulated Meta Wearables devices.

Use MockDeviceKit in testing and development scenarios to simulate real hardware behavior without requiring physical devices. The kit integrates with the Wearables SDK through ACDC fake implementations, making simulated devices appear as real devices to your application.

Example:

// Get the singleton instance and enable mock environment
val mockKit \= MockDeviceKit.getInstance(context)
mockKit.enable()
// Create and configure a mock device
val glasses \= mockKit.pairRaybanMeta()
glasses.powerOn()
glasses.unfold()
// Set up camera mock data for streaming tests
glasses.services.camera.setCameraFeed(testVideoUri)
// Device is now available via Wearables.devices
val session \= Wearables.startStreamSession(context, AutoDeviceSelector())
// Clean up after tests
mockKit.disable()

## See Also

-   [MockDeviceKitInterface](/docs/reference/android/dat/0.6/com_meta_wearable_dat_mockdevice_api_mockdevicekitinterface)
-   [MockRaybanMeta](/docs/reference/android/dat/0.6/com_meta_wearable_dat_mockdevice_api_mockraybanmeta)
-   [Wearables](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_wearables)

## Signature

class MockDeviceKit : MockDeviceKitInterface

## Properties

**isEnabled** : Boolean

\[Get\]

Whether MockDeviceKit is currently enabled with fake implementations attached.

* * *

Signature

open override var isEnabled: Boolean

**pairedDevices** : Collection

\[Get\]

List of currently paired mock devices.

* * *

Signature

open override val pairedDevices: Collection<MockDevice\>

**permissions** : [MockPermissions](/docs/reference/android/dat/0.6/com_meta_wearable_dat_mockdevice_api_permissions_mockpermissions)

\[Get\]

Controls mock permission behavior for [Wearables.checkPermissionStatus](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_wearables#checkpermissionstatus) and [Wearables.RequestPermissionContract](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_wearables#requestpermissioncontract).

* * *

Signature

open override val permissions: MockPermissions

## Methods

**disable** ()

Disable MockDeviceKit. Detaches fake implementations, unpairs all mock devices, and restores real registration and device connectivity stack.

* * *

Signature

open override fun disable()

**enable** ( config )

Enable MockDeviceKit. Attaches fake implementations for registration and device connectivity.

By default, [Wearables.registrationState](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_wearables#registrationstate) will transition to RegistrationState.Registered. Pass [MockDeviceKitConfig](/docs/reference/android/dat/0.6/com_meta_wearable_dat_mockdevice_api_mockdevicekitconfig) with [MockDeviceKitConfig.initiallyRegistered](/docs/reference/android/dat/0.6/com_meta_wearable_dat_mockdevice_api_mockdevicekitconfig#initiallyregistered) set to `false` to start in an unregistered state instead.

Safe to call regardless of whether [Wearables.initialize](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_wearables#initialize) has been called — MockDeviceKit will auto-initialize Wearables if needed.

* * *

Signature

open override fun enable(config: MockDeviceKitConfig)

Parameters

`config: [MockDeviceKitConfig](/docs/reference/android/dat/0.6/com_meta_wearable_dat_mockdevice_api_mockdevicekitconfig)`  Configuration controlling initial mock behavior. Defaults to registered start.

**pairRaybanMeta** ()

Pairs a simulated Ray-Ban Meta glasses device.

* * *

Signature

open override fun pairRaybanMeta(): MockRaybanMeta

Returns

`[MockRaybanMeta](/docs/reference/android/dat/0.6/com_meta_wearable_dat_mockdevice_api_mockraybanmeta)`  A new [MockRaybanMeta](/docs/reference/android/dat/0.6/com_meta_wearable_dat_mockdevice_api_mockraybanmeta) instance representing the paired device

**unpairDevice** ( device )

Unpairs and removes a simulated device from the mock environment.

* * *

Signature

open override fun unpairDevice(device: MockDevice)

Parameters

`device: [MockDevice](/docs/reference/android/dat/0.6/com_meta_wearable_dat_mockdevice_api_mockdevice)`  The mock device to unpair

## Companion Object

### Methods

**getInstance** ( context )

Returns a singleton instance of MockDeviceKit.

Call [MockDeviceKit.enable](/docs/reference/android/dat/0.6/com_meta_wearable_dat_mockdevice_mockdevicekit#enable) after obtaining the instance to attach fake implementations and transition to the registered state.

* * *

Signature

fun getInstance(context: Context): MockDeviceKitInterface

Parameters

`context: Context`  The Android context used for initialization

Returns

`[MockDeviceKitInterface](/docs/reference/android/dat/0.6/com_meta_wearable_dat_mockdevice_api_mockdevicekitinterface)`  MockDeviceKit singleton instance