<!-- source: https://wearables.developer.meta.com/docs/reference/android/dat/0.6/com_meta_wearable_dat_mockdevice_api_mockdevicekitconfig | scraped: 2026-04-28 -->

# MockDeviceKitConfig Class

_Modifiers: final_

Configuration for MockDeviceKit behavior.

## Signature

data class MockDeviceKitConfig(val initiallyRegistered: Boolean \= true, val initialPermissionsGranted: Boolean \= true)

## Constructors

**MockDeviceKitConfig** ( initiallyRegistered , initialPermissionsGranted )

Signature

constructor(initiallyRegistered: Boolean \= true, initialPermissionsGranted: Boolean \= true)

Parameters

`initiallyRegistered: Boolean`  Whether to start in the Registered state when [MockDeviceKitInterface.enable](/docs/reference/android/dat/0.6/com_meta_wearable_dat_mockdevice_api_mockdevicekitinterface#enable) is called. Defaults to `true`. When `false`, registration state starts as Unavailable and can be transitioned via Wearables.startRegistration.

`initialPermissionsGranted: Boolean`  Whether Permission.CAMERA and Permission.MICROPHONE start as PermissionStatus.Granted when [MockDeviceKitInterface.enable](/docs/reference/android/dat/0.6/com_meta_wearable_dat_mockdevice_api_mockdevicekitinterface#enable) is called. Defaults to `true`. Only meaningful when [MockDeviceKitConfig](/docs/reference/android/dat/0.6/com_meta_wearable_dat_mockdevice_api_mockdevicekitconfig) is `true` — an unregistered device always has permissions denied regardless of this flag.

Returns

`[MockDeviceKitConfig](/docs/reference/android/dat/0.6/com_meta_wearable_dat_mockdevice_api_mockdevicekitconfig)`

## Properties

**initiallyRegistered** : Boolean

\[Get\]

Whether to start in the Registered state when [MockDeviceKitInterface.enable](/docs/reference/android/dat/0.6/com_meta_wearable_dat_mockdevice_api_mockdevicekitinterface#enable) is called. Defaults to `true`. When `false`, registration state starts as Unavailable and can be transitioned via Wearables.startRegistration.

* * *

Signature

val initiallyRegistered: Boolean \= true

**initialPermissionsGranted** : Boolean

\[Get\]

Whether Permission.CAMERA and Permission.MICROPHONE start as PermissionStatus.Granted when [MockDeviceKitInterface.enable](/docs/reference/android/dat/0.6/com_meta_wearable_dat_mockdevice_api_mockdevicekitinterface#enable) is called. Defaults to `true`. Only meaningful when [MockDeviceKitConfig.initiallyRegistered](/docs/reference/android/dat/0.6/com_meta_wearable_dat_mockdevice_api_mockdevicekitconfig#initiallyregistered) is `true` — an unregistered device always has permissions denied regardless of this flag.

* * *

Signature

val initialPermissionsGranted: Boolean \= true