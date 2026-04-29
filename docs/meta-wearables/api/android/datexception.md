<!-- source: https://wearables.developer.meta.com/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_types_datexception | scraped: 2026-04-28 -->

# DatException Class

Extends Exception

_Modifiers: open_

Base exception class for the DAT (Device Access Toolkit) SDK.

## Signature

open class DatException(val error: DatError, cause: Throwable? \= null) : Exception

## Constructors

**DatException** ( error , cause )

Creates a DATException with the given [DatException](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_types_datexception) and optional [DatException](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_types_datexception).

* * *

Signature

constructor(error: DatError, cause: Throwable? \= null)

Parameters

`error: [DatError](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_types_daterror)`  The specific error that caused this exception.

`cause: Throwable?`

Returns

`[DatException](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_types_datexception)`

## Properties

**cause** : Throwable?

\[Get\]

Signature

open val cause: Throwable?

**error** : [DatError](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_types_daterror)

\[Get\]

The specific error that caused this exception.

* * *

Signature

open val error: DatError

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