<!-- source: https://wearables.developer.meta.com/docs/reference/ios_swift/dat/0.6/mwdatcore_wearablesinterface | scraped: 2026-04-28 -->

# WearablesInterface Extension

Extends Sendable

The primary interface for Wearables Device Access Toolkit.

## Signature

protocol WearablesInterface: Sendable

## Properties

**devices** : \[DeviceIdentifier\]

\[Get\]

The current list of devices available.

**registrationState** : [RegistrationState](/docs/reference/ios_swift/dat/0.6/mwdatcore_registrationstate)

\[Get\]

The current registration state of the user's devices. See [RegistrationState](/docs/reference/ios_swift/dat/0.6/mwdatcore_registrationstate) for options.

## Functions

**addDeviceSessionStateListener** ( forDeviceId , listener )

Adds a listener to receive callbacks when the session state changes for a specific device. The listener is immediately called with the current session state.

* * *

Signature

public func addDeviceSessionStateListener( forDeviceId: DeviceIdentifier,  listener: @Sendable @escaping (SessionState) \-> Void) \-> AnyListenerToken

Parameters

`forDeviceId: [DeviceIdentifier](/docs/reference/ios_swift/dat/0.6/mwdatcore_deviceidentifier)`  The identifier of the device to listen for session state changes.

`listener: @Sendable @escaping ([SessionState](/docs/reference/ios_swift/dat/0.6/mwdatcore_sessionstate)) -> Void`  The callback to execute when the session state changes.

Returns

`[AnyListenerToken](/docs/reference/ios_swift/dat/0.6/mwdatcore_anylistenertoken)`  A token that can be used to cancel the listener. When the token deinits the listener is also canceled.

**addDevicesListener** ( listener )

Adds a listener to receive callbacks when the device list changes. The listener is immediately called with the current devices.

* * *

Signature

public func addDevicesListener(\_ listener: @Sendable @escaping (\[DeviceIdentifier\]) \-> Void) \-> AnyListenerToken

Parameters

`_ listener: @Sendable @escaping ([[DeviceIdentifier](/docs/reference/ios_swift/dat/0.6/mwdatcore_deviceidentifier)]) -> Void`  The callback to execute when the device list changes.

Returns

`[AnyListenerToken](/docs/reference/ios_swift/dat/0.6/mwdatcore_anylistenertoken)`  A token that can be used to cancel the listener. When the token deinits the listener is also canceled.

**addRegistrationStateListener** ( listener )

Adds a listener to receive callbacks when the registration state changes. The listener is immediately called with the current state.

* * *

Signature

public func addRegistrationStateListener(\_ listener: @Sendable @escaping (RegistrationState) \-> Void) \-> AnyListenerToken

Parameters

`_ listener: @Sendable @escaping ([RegistrationState](/docs/reference/ios_swift/dat/0.6/mwdatcore_registrationstate)) -> Void`  The callback to execute when the registration state changes.

Returns

`[AnyListenerToken](/docs/reference/ios_swift/dat/0.6/mwdatcore_anylistenertoken)`  A token that can be used to cancel the listener. When the token deinits the listener is also canceled.

**checkPermissionStatus** ( permission )

Checks if a specific permission is granted for the current application.

* * *

Signature

public func checkPermissionStatus(\_ permission: Permission) \-> PermissionStatus

Parameters

`_ permission: [Permission](/docs/reference/ios_swift/dat/0.6/mwdatcore_permission)`  The type of permission to check.

Returns

`[PermissionStatus](/docs/reference/ios_swift/dat/0.6/mwdatcore_permissionstatus)` [PermissionStatus](/docs/reference/ios_swift/dat/0.6/mwdatcore_permissionstatus) The status of the permission.

Throws

**createSession** ( deviceSelector )

Creates a new [DeviceSession](/docs/reference/ios_swift/dat/0.6/mwdatcore_devicesession) for the device resolved by the given selector.

Fails if a non-stopped session already exists for the resolved device. After the session has stopped or been released, a new one can be created.

* * *

Signature

public func createSession( deviceSelector: DeviceSelector) \-> DeviceSession

Parameters

`deviceSelector: [DeviceSelector](/docs/reference/ios_swift/dat/0.6/mwdatcore_deviceselector)`  The selector that determines which device to connect to.

Returns

`[DeviceSession](/docs/reference/ios_swift/dat/0.6/mwdatcore_devicesession)`  A new [DeviceSession](/docs/reference/ios_swift/dat/0.6/mwdatcore_devicesession).

Throws

**deviceForIdentifier** ( identifier )

Fetch the underlying [Device](/docs/reference/ios_swift/dat/0.6/mwdatcore_device) object for a given [DeviceIdentifier](/docs/reference/ios_swift/dat/0.6/mwdatcore_deviceidentifier).

* * *

Signature

public func deviceForIdentifier(\_ identifier: DeviceIdentifier) \-> Device?

Parameters

`_ identifier: [DeviceIdentifier](/docs/reference/ios_swift/dat/0.6/mwdatcore_deviceidentifier)`  The device identifier to fetch.

Returns

`[Device?](/docs/reference/ios_swift/dat/0.6/mwdatcore_device)`  The [Device](/docs/reference/ios_swift/dat/0.6/mwdatcore_device) object for the given device identifier.

**devicesStream** ()

Creates an `AsyncStream` for observing device list changes.

* * *

Signature

public func devicesStream() \-> AsyncStream<\[DeviceIdentifier\]>

Returns

`AsyncStream<[[DeviceIdentifier](/docs/reference/ios_swift/dat/0.6/mwdatcore_deviceidentifier)]>`

**handleUrl** ( url )

Handles callback URLs from the Meta AI app during registration and permission flows.

This method must be called when your app receives a URL callback after the user completes an action in the Meta AI app. This includes callbacks from [startRegistration()](/docs/reference/ios_swift/dat/0.6/mwdatcore_wearablesinterface#startRegistration), [startUnregistration()](/docs/reference/ios_swift/dat/0.6/mwdatcore_wearablesinterface#startUnregistration), and permission requests.

The SDK will determine if the URL is relevant to the Wearables Device Access Toolkit. If not relevant, the method returns `false` without throwing an error.

\## Platform Flow On iOS, the Meta AI app returns to your app via a URL scheme callback. You must: 1. Configure your app's URL schemes in Info.plist 2. Implement URL handling in your app delegate or scene delegate 3. Call this method with the received URL

* * *

Signature

public func handleUrl(\_ url: URL) \-> Bool

Parameters

`_ url: URL`  The incoming URL to handle.

Returns

`Bool` `true` if the URL was handled by the Wearables Device Access Toolkit, `false` if it's not relevant to the Wearables Device Access Toolkit.

Throws

**registrationStateStream** ()

Creates an `AsyncStream` for observing registration state changes.

* * *

Signature

public func registrationStateStream() \-> AsyncStream<RegistrationState\>

Returns

`AsyncStream<[RegistrationState](/docs/reference/ios_swift/dat/0.6/mwdatcore_registrationstate)>`

**requestPermission** ( permission )

Requests a specific permission on AI glasses.

This method opens the Meta AI app where the user completes the permission request flow. After the user responds in the Meta AI app, your app will receive a callback URL that must be passed to [handleUrl(\_:)](/docs/reference/ios_swift/dat/0.6/mwdatcore_wearablesinterface#handleUrl) to complete the permission request.

* * *

Signature

public func requestPermission(\_ permission: Permission) \-> PermissionStatus

Parameters

`_ permission: [Permission](/docs/reference/ios_swift/dat/0.6/mwdatcore_permission)`  The type of permission to request.

Returns

`[PermissionStatus](/docs/reference/ios_swift/dat/0.6/mwdatcore_permissionstatus)`  The [PermissionStatus](/docs/reference/ios_swift/dat/0.6/mwdatcore_permissionstatus) after the user responds.

Throws

**startRegistration** ()

Initiates the registration process with AI glasses.

This method opens the Meta AI app where the user completes the registration flow. After the user completes the flow in the Meta AI app, your app will receive a callback URL that must be passed to [handleUrl(\_:)](/docs/reference/ios_swift/dat/0.6/mwdatcore_wearablesinterface#handleUrl) to complete the registration.

The [registrationState](/docs/reference/ios_swift/dat/0.6/mwdatcore_wearablesinterface#registrationState) property will be updated throughout the registration process.

* * *

Signature

public func startRegistration()

Throws

**startUnregistration** ()

Initiates the unregistration process with AI glasses.

This method opens the Meta AI app where the user completes the unregistration flow. After the user completes the flow in the Meta AI app, your app will receive a callback URL that must be passed to [handleUrl(\_:)](/docs/reference/ios_swift/dat/0.6/mwdatcore_wearablesinterface#handleUrl) to complete the unregistration.

The [registrationState](/docs/reference/ios_swift/dat/0.6/mwdatcore_wearablesinterface#registrationState) property will be updated throughout the unregistration process.

* * *

Signature

public func startUnregistration()

Throws