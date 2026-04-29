<!-- source: https://wearables.developer.meta.com/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_types_deviceidentifier | scraped: 2026-04-28 -->

# DeviceIdentifier Class

_Modifiers: final_

A unique identifier for a Meta Wearables device. This identifier is used to distinguish between different devices and track their state throughout the session.

## Signature

data class DeviceIdentifier(val identifier: String)

## Constructors

**DeviceIdentifier** ( identifier )

Signature

constructor(identifier: String)

Parameters

`identifier: String`  The string representation of the device identifier

Returns

`[DeviceIdentifier](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_types_deviceidentifier)`

## Properties

**identifier** : String

\[Get\]

The string representation of the device identifier

* * *

Signature

val identifier: String

## Methods

**toString** ()

Signature

open override fun toString(): String

Returns

`String`