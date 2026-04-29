<!-- source: https://wearables.developer.meta.com/docs/reference/android/dat/0.6/com_meta_wearable_dat_camera_types_streamerror | scraped: 2026-04-28 -->

# StreamError Enum

Represents all possible stream error types that can occur during camera streaming operations.

Each enum entry corresponds to a specific error scenario, identified by a unique resource ID and a human-readable description. This class is part of the DAT SDK public API and should maintain API stability.

## See Also

-   [DatError](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_types_daterror)

## Signature

enum StreamError : Enum<StreamError\> , DatError

## Enumeration Constants

Member

STREAM\_ERROR

HINGE\_CLOSED

PERMISSIONS\_DENIED

## Properties

**description** : String

\[Get\]

Human-readable description of the error.

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

`context: Context?`  Optional Android context for accessing string resources. If null or if no localized string is available, returns the default [StreamError.description](/docs/reference/android/dat/0.6/com_meta_wearable_dat_camera_types_streamerror#description).

Returns

`String`  The localized error description, or the default description if localization unavailable.