<!-- source: https://wearables.developer.meta.com/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_wearables | scraped: 2026-04-28 -->

# Wearables Object

Main entry point for the Wearables Device Access Toolkit. Provides registration, device management, permissions, and session state functionality. Must be initialized before use via [Wearables.initialize](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_wearables#initialize).

## See Also

-   [DatResult](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_types_datresult)
-   [RegistrationState](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_types_registrationstate)
-   [WearablesError](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_types_wearableserror)

## Signature

object Wearables

## Properties

**devices** : StateFlow<Set<DeviceIdentifier>>

\[Get\]

A StateFlow that provides the devices that can be potentially used by the Wearables SDK.

* * *

Signature

val devices: StateFlow<Set<DeviceIdentifier\>>

**devicesMetadata** : Map

\[Get\]

A map from DeviceIdentifier to StateFlow that provides device metadata.

* * *

Signature

val devicesMetadata: Map

**registrationState** : StateFlow<RegistrationState>

\[Get\]

A StateFlow that provides the current registration state of the application with AI glasses.

* * *

Signature

val registrationState: StateFlow<RegistrationState\>

## Methods

**checkPermissionStatus** ( permission )

Checks whether the specified device permission is granted on any linked device.

Since permissions are managed via constellation, this function returns the first valid permission grant state found among the linked devices.

* * *

Signature

suspend fun checkPermissionStatus(permission: Permission): DatResult<PermissionStatus, PermissionError\>

Parameters

`permission: [Permission](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_types_permission)`  The device permission to check if exists on device

Returns

`[DatResult](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_types_datresult)`  Result.success with [PermissionStatus.Granted](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_types_permissionstatus#granted) or [PermissionStatus.Denied](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_types_permissionstatus#denied), or Result.error with [PermissionError](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_types_permissionerror) if an error occurs

Throws

`WearablesException`  if SDK not initialized via [Wearables.initialize](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_wearables#initialize)

**createSession** ( deviceSelector )

Creates a new session for a device matching the provided selector.

The device is resolved eagerly against the current [Wearables.devices](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_wearables#devices) snapshot. If no connected and compatible device matches, [SessionError.NO\_ELIGIBLE\_DEVICE](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_types_sessionerror#no_eligible_device) is returned. If an active (non- stopped) session already exists [SessionError.SESSION\_ALREADY\_EXISTS](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_types_sessionerror#session_already_exists) is returned. (singleton-per-device guarantee).

The returned session starts in DeviceSessionState.IDLE. Call [Session.start](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_session_session#start) to begin connecting to the device.

Example:

val session \= Wearables.createSession(AutoDeviceSelector()).getOrElse { error \->
    showError(error.description)
    return
}
session.start()

* * *

Signature

fun createSession(deviceSelector: DeviceSelector): DatResult<Session, SessionError\>

Parameters

`deviceSelector: [DeviceSelector](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_selectors_deviceselector)`  The selector used to determine which device to connect to

Returns

`[DatResult](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_types_datresult)` [DatResult](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_types_datresult) containing the [Session](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_session_session) on success, or [SessionError](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_types_sessionerror) on failure

Throws

`WearablesException`  if SDK not initialized via [Wearables.initialize](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_wearables#initialize)

**getDeviceSessionState** ( deviceIdentifier )

Gets the session state for a specific device.

* * *

Signature

fun getDeviceSessionState(deviceIdentifier: DeviceIdentifier): StateFlow<SessionState\>

Parameters

`deviceIdentifier: [DeviceIdentifier](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_types_deviceidentifier)`  The identifier of the device to get session state for

Returns

`StateFlow<SessionState>`  StateFlow providing the session state for the specified device

Throws

`WearablesException`  if SDK not initialized via [Wearables.initialize](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_wearables#initialize)

**initialize** ( context )

Initializes the Wearables SDK with the provided context. This method must be called before using any other SDK functionality.

* * *

Signature

fun initialize(context: Context): DatResult<Unit, WearablesError\>

Parameters

`context: Context`  The Android context used to initialize the SDK

Returns

`[DatResult](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_types_datresult)`

**reset** ()

Resets the Wearables SDK instance.

* * *

Signature

fun reset()

**startRegistration** ( activity )

Initiates the registration process with AI glasses.

This method opens the Meta AI app where the user completes the registration flow. When the user completes the flow, the result will be automatically processed and the registration state will be updated.

The [Wearables.registrationState](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_wearables#registrationstate) will be updated throughout the registration process.

* * *

Signature

fun startRegistration(activity: Activity)

Parameters

`activity: Activity`  The Android activity used to start the registration activity

Throws

`WearablesException`  if SDK not initialized via [Wearables.initialize](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_wearables#initialize)

**startStreamSession** ( context , deviceSelector , streamConfiguration )

DeprecatedUse session.addStream(streamConfiguration) on a Session created via Wearables.createSession()

Creates and starts a new streaming session with the specified device selector and configuration.

The session is automatically started and will attempt to connect to the device selected by the device selector. Video frames are delivered through the [StreamSession.videoStream](/docs/reference/android/dat/0.6/com_meta_wearable_dat_camera_streamsession#videostream) Flow.

* * *

Signature

fun Wearables.startStreamSession(context: Context, deviceSelector: DeviceSelector, streamConfiguration: StreamConfiguration \= StreamConfiguration()): StreamSession

Parameters

`context: Context`  The Android context for the streaming session

`deviceSelector: [DeviceSelector](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_selectors_deviceselector)`  The device selector to determine which device to stream from

`streamConfiguration: [StreamConfiguration](/docs/reference/android/dat/0.6/com_meta_wearable_dat_camera_types_streamconfiguration)`  The configuration for the streaming session (optional, defaults to default configuration)

Returns

`[StreamSession](/docs/reference/android/dat/0.6/com_meta_wearable_dat_camera_streamsession)`  A new StreamSession instance that is already started

**startUnregistration** ( activity )

Initiates the unregistration process with AI glasses.

This method opens the Meta AI app where the user completes the unregistration flow. When the user completes the flow, the result will be automatically processed and the registration state will be updated.

The [Wearables.registrationState](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_wearables#registrationstate) will be updated throughout the unregistration process.

* * *

Signature

fun startUnregistration(activity: Activity)

Parameters

`activity: Activity`  The Android activity used to start the registration activity

Throws

`WearablesException`  if SDK not initialized via [Wearables.initialize](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_wearables#initialize)

## Inner Class

### RequestPermissionContract Class

_Modifiers: final_

An ActivityResultContract for requesting permissions from AI glasses through the Meta AI companion application.

This contract handles the process of launching the Meta AI app with a permission request and parsing the user's response. It creates the appropriate intent to open the permission request flow and processes the result to determine the permission grant state.

Example usage:

private val permissionsResultLauncher \=
    registerForActivityResult(Wearables.RequestPermissionContract()) { result \->
        // Handle the permission result
        when (result) {
            PermissionStatus.GRANTED \-> // Permission granted
            PermissionStatus.DENIED \-> // Permission denied
        }
    }

#### Signature

class RequestPermissionContract

#### Constructors

**RequestPermissionContract** ()

Signature

constructor()

Returns

`Wearables.RequestPermissionContract`

#### Methods

**createIntent** ( context , permission )

Signature

open fun createIntent(context: Context, permission: Permission): Intent

Parameters

`context: Context`

`permission: [Permission](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_types_permission)`

Returns

`Intent`

**getSynchronousResult** ( context , input )

Signature

open fun getSynchronousResult(context: Context, input: Permission): SynchronousResult<DatResult<PermissionStatus, PermissionError\>>?

Parameters

`context: Context`

`input: [Permission](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_types_permission)`

Returns

`SynchronousResult<DatResult<PermissionStatus, PermissionError>>?`

**parseResult** ( resultCode , intent )

Signature

open fun parseResult(resultCode: Int, intent: Intent?): DatResult<PermissionStatus, PermissionError\>

Parameters

`resultCode: Int`

`intent: Intent?`

Returns

`[DatResult](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_types_datresult)`