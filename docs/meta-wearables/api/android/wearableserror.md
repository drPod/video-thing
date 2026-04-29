<!-- source: https://wearables.developer.meta.com/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_types_wearableserror | scraped: 2026-04-28 -->

# WearablesError Enum

Enum representing errors that can occur in the Wearables Device Access Toolkit.

Each error includes a unique error code and human-readable description to help identify and resolve issues that prevent proper Wearables Device Access Toolkit operation.

## Signature

enum WearablesError : Enum<WearablesError\> , DatError

## Enumeration Constants

Member

Description

NOT\_INITIALIZED

Wearables Device Access Toolkit has not been initialized. Call Wearables.initialize before using the toolkit.

ALREADY\_INITIALIZED

Wearables Device Access Toolkit has been already initialized

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

`context: Context?`  Optional Android context for accessing string resources. If null or if no localized string is available, returns the default [WearablesError.description](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_types_wearableserror#description).

Returns

`String`  The localized error description, or the default description if localization unavailable.