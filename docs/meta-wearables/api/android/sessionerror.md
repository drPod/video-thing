<!-- source: https://wearables.developer.meta.com/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_types_sessionerror | scraped: 2026-04-28 -->

# SessionError Enum

Enum representing errors that can occur during session lifecycle operations in the DAT SDK.

Session errors cover creation, start, stop, capability management, and runtime device issues. These errors are returned from Wearables.createSession, emitted via Session.errors, or returned from capability add/remove operations. Use exhaustive `when` matching to handle all error variants.

Example:

session.errors.collect { error \->
    when (error) {
        SessionError.DEVICE\_DISCONNECTED \-> showReconnectPrompt()
        SessionError.DEVICE\_POWERED\_OFF \-> showDeviceOffMessage()
        SessionError.SESSION\_ENDED\_BY\_DEVICE \-> showSessionEndedMessage()
        else \-> showGenericError(error.description)
    }
}

## See Also

-   [DatResult](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_types_datresult)
-   [DatError](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_types_daterror)

## Signature

enum SessionError : Enum<SessionError\> , DatError

## Enumeration Constants

Member

Description

NOT\_INITIALIZED

The SDK has not been initialized. Call Wearables.initialize before creating sessions.

NO\_ELIGIBLE\_DEVICE

No connected and compatible device was found matching the provided device selector.

SESSION\_ALREADY\_STOPPED

The operation was called on a session that has already been stopped.

SESSION\_IDLE

The operation was called on a session that is still idle (not yet started).

CAPABILITY\_ALREADY\_ADDED

A capability of this type has already been added to the session.

CAPABILITY\_NOT\_FOUND

No capability of this type exists on the session to remove.

DEVICE\_DISCONNECTED

The device disconnected unexpectedly during an active session.

DEVICE\_POWERED\_OFF

The device was powered off during an active session.

SESSION\_ENDED\_BY\_DEVICE

The session was ended by the device (e.g., device-initiated stop).

SESSION\_ALREADY\_EXISTS

The session already exists and is active for the device.

UNEXPECTED\_ERROR

An unexpected error occurred during the session.

## Properties

**description** : String

\[Get\]

Human-readable description of the error

* * *

Signature

open override val description: String

## Methods

**getLocalizedDescription** ( context )

Returns a localized description of the error using Android string resources when available.

* * *

Signature

open override fun getLocalizedDescription(context: Context?): String

Parameters

`context: Context?`  Optional Android context for accessing string resources. If null or if no localized string is available, returns the default [SessionError.description](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_types_sessionerror#description).

Returns

`String`  The localized error description, or the default description if localization unavailable.