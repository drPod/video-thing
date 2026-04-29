<!-- source: https://wearables.developer.meta.com/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_types_registrationerror | scraped: 2026-04-28 -->

# RegistrationError Enum

Enum representing errors that can occur during the Meta Wearables registration process.

Each error includes a unique error code and human-readable description to help identify and resolve issues that prevent successful registration with the Meta Wearables platform.

## Signature

enum RegistrationError : Enum<RegistrationError\> , DatError

## Enumeration Constants

Member

Description

INCOMPATIBLE\_SDK\_LEVEL

The Android SDK level is incompatible with the Wearables Device Access Toolkit.

ALREADY\_REGISTERED

User is already registered when attempting to register again.

ALREADY\_UNREGISTERED

User is already unregistered when attempting to unregister again.

FAILED\_TO\_REGISTER

Registration process failed for an unspecified reason.

FAILED\_TO\_UNREGISTER

Unregistration process failed for an unspecified reason.

META\_AI\_NOT\_INSTALLED

The Meta AI app is not installed on the device, which is required for registration.

UNKNOWN

An unknown error occurred during the registration process.

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

`context: Context?`  Optional Android context for accessing string resources. If null or if no localized string is available, returns the default [RegistrationError.description](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_types_registrationerror#description).

Returns

`String`  The localized error description, or the default description if localization unavailable.