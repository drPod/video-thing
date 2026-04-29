<!-- source: https://wearables.developer.meta.com/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_types_daterror | scraped: 2026-04-28 -->

# DatError Interface

Base interface that all DAT (Device Access Toolkit) SDK errors must implement.

This interface defines the contract for errors within the DAT SDK. Each error type should provide a human-readable description to help identify and resolve issues. Implementations include [WearablesError](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_types_wearableserror) for core SDK errors, StreamError for camera streaming errors, and [PermissionError](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_types_permissionerror) for permission-related failures.

Example:

result.onFailure { error, cause \->
    when (error) {
        is WearablesError \-> handleSdkError(error)
        is StreamError \-> handleStreamError(error)
        is PermissionError \-> handlePermissionError(error)
    }
    Log.e(TAG, error.description, cause)
}

## See Also

-   [DatResult](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_types_datresult)
-   [DatException](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_types_datexception)
-   [WearablesError](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_types_wearableserror)
-   [PermissionError](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_types_permissionerror)

## Signature

interface DatError

## Properties

**description** : String

\[Get\]

A human-readable description of the error suitable for logging and debugging purposes.

* * *

Signature

abstract val description: String

## Methods

**getLocalizedDescription** ( context )

Returns a localized description of the error using Android string resources when available.

* * *

Signature

abstract fun getLocalizedDescription(context: Context?): String

Parameters

`context: Context?`  Optional Android context for accessing string resources. If null or if no localized string is available, returns the default [DatError.description](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_types_daterror#description).

Returns

`String`  The localized error description, or the default description if localization unavailable.