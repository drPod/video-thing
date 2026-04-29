<!-- source: https://wearables.developer.meta.com/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_types_permissionerror | scraped: 2026-04-28 -->

# PermissionError Enum

Represents the specific types of errors that can occur during permission operations with Meta Wearables devices.

These errors help identify the root cause of permission failures for proper error handling and user communication.

## Signature

enum PermissionError : Enum<PermissionError\> , DatError

## Enumeration Constants

Member

Description

NO\_DEVICE

No wearable devices have been discovered or registered.

NO\_DEVICE\_WITH\_CONNECTION

All discovered devices are powered off or disconnected.

META\_AI\_NOT\_INSTALLED

The Meta AI companion app is not installed on the device.

CONNECTION\_ERROR

A connection error occurred while communicating with the device.

REQUEST\_IN\_PROGRESS

A permission request is already in progress.

REQUEST\_TIMEOUT

The permission request exceeded the allowed time limit.

INTERNAL\_ERROR

An unexpected internal error occurred.

## Properties

**description** : String

\[Get\]

A human-readable description of the error suitable for logging and debugging purposes.

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

`context: Context?`  Optional Android context for accessing string resources. If null or if no localized string is available, returns the default [PermissionError.description](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_types_permissionerror#description).

Returns

`String`  The localized error description, or the default description if localization unavailable.