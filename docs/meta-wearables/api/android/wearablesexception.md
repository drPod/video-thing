<!-- source: https://wearables.developer.meta.com/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_types_wearablesexception | scraped: 2026-04-28 -->

# WearablesException Class

Extends [DatException](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_types_datexception)

_Modifiers: final_

Base exception class for the DAT (Device Access Toolkit) SDK.

## Signature

class WearablesException(val error: WearablesError, cause: Throwable? \= null) : DatException

## Constructors

**WearablesException** ( error , cause )

Creates a DatException with the given [WearablesException](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_types_wearablesexception) and optional [WearablesException](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_types_wearablesexception).

* * *

Signature

constructor(error: WearablesError, cause: Throwable? \= null)

Parameters

`error: [WearablesError](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_types_wearableserror)`  The specific error that caused this exception.

`cause: Throwable?`

Returns

`[WearablesException](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_types_wearablesexception)`

## Properties

**cause** : Throwable?

\[Get\]

Signature

open val cause: Throwable?

**error** : [WearablesError](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_types_wearableserror)

\[Get\]

The specific error that caused this exception.

* * *

Signature

open override val error: WearablesError

**message** : String?

\[Get\]

Signature

open val message: String?

## Methods

**addSuppressed** ( p0 )

Signature

fun addSuppressed(p0: Throwable)

Parameters

`p0: Throwable`

**fillInStackTrace** ()

Signature

open fun fillInStackTrace(): Throwable

Returns

`Throwable`

**getLocalizedMessage** ()

Signature

open fun getLocalizedMessage(): String

Returns

`String`

**getStackTrace** ()

Signature

open fun getStackTrace(): Array<StackTraceElement\>

Returns

`Array`

**getSuppressed** ()

Signature

fun getSuppressed(): Array<Throwable\>

Returns

`Array`

**initCause** ( p0 )

Signature

open fun initCause(p0: Throwable): Throwable

Parameters

`p0: Throwable`

Returns

`Throwable`

**printStackTrace** ()

Signature

open fun printStackTrace()

**printStackTrace** ( p0 )

Signature

open fun printStackTrace(p0: PrintStream)

Parameters

`p0: PrintStream`

**printStackTrace** ( p0 )

Signature

open fun printStackTrace(p0: PrintWriter)

Parameters

`p0: PrintWriter`

**setStackTrace** ( p0 )

Signature

open fun setStackTrace(p0: Array<StackTraceElement\>)

Parameters

`p0: Array`