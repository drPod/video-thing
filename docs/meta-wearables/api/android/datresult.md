<!-- source: https://wearables.developer.meta.com/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_types_datresult | scraped: 2026-04-28 -->

# DatResult Class

Implements Serializable

_Modifiers: final_

A specialized Result wrapper for DAT SDK operations that provides type-safe error handling while maintaining full compatibility with Kotlin's standard Result.

This inline value class wraps Result<T> and ensures all failures contain DatError, providing convenient error extraction and handling without runtime overhead. DatResult delegates all standard Result<T> methods (isSuccess, isFailure, getOrNull, map, fold, etc.), making it a drop-in replacement that adds DAT-specific error handling on top of standard Result functionality.

The optional second type parameter E allows narrowing the error type to a specific DatError subclass, providing compile-time guarantees about which errors can occur.

Example usage:

// Generic DatError
val result: DatResult<ChallengeData\> \= attestationClient.requestChallenge(request)
// Narrow to AttestationError only
val result: DatResult<ChallengeData, AttestationError\> \= attestationClient.requestChallenge(request)
// Type-safe error handling with 2 parameters
result
    .onSuccess { data \-> println("Got: $data") }
    .onFailure { error, cause \->
        when (error) {
            AttestationError.TOKEN\_NOT\_CONFIGURED \-> showConfigError()
            AttestationError.NETWORK\_ERROR \-> retryRequest()
        }
    }
// Standard exception handling with 1 parameter
result.onFailure { exception \-> Log.e(TAG, "Failed", exception) }

## See Also

-   [DatError](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_types_daterror)
-   [DatException](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_types_datexception)
-   [WearablesError](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_types_wearableserror)

## Signature

value class DatResult<T, E : DatError\> : Serializable

## Properties

**isFailure** : Boolean

\[Get\]

Signature

val isFailure: Boolean

**isSuccess** : Boolean

\[Get\]

Signature

val isSuccess: Boolean

## Methods

**errorOrNull** ()

Returns the error if this is a failure, or null if success. The error type E is enforced by the type system.

Note: The cast to E is safe by design because DatResult can only be constructed with errors of type E, and Result is immutable. This is enforced at construction time through the type system.

* * *

Signature

fun errorOrNull(): E?

Returns

`[DatResult?](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_types_datresult)`

**exceptionOrNull** ()

Signature

fun exceptionOrNull(): Throwable?

Returns

`Throwable?`

**fold** ( onSuccess , onFailure )

Folds this result into a value by applying onSuccess or onFailure. Unlike standard Result.fold, onFailure receives the typed DatError directly.

Note: The cast to E is safe by design because DatResult can only be constructed with errors of type E, and Result is immutable.

* * *

Signature

inline fun <R\> fold(onSuccess: (T) \-> R, onFailure: (error: E, cause: Throwable?) \-> R): R

Parameters

`onSuccess: Function1`

`onFailure: Function2`

Returns

`[DatResult](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_types_datresult)`

**getOrDefault** ( defaultValue )

Signature

fun getOrDefault(defaultValue: T): T

Parameters

`defaultValue: [DatResult](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_types_datresult)`

Returns

`[DatResult](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_types_datresult)`

**getOrElse** ( onFailure )

Signature

inline fun getOrElse(onFailure: (exception: Throwable) \-> T): T

Parameters

`onFailure: Function1`

Returns

`[DatResult](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_types_datresult)`

**getOrNull** ()

Signature

fun getOrNull(): T?

Returns

`[DatResult?](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_types_datresult)`

**getOrThrow** ()

Signature

fun getOrThrow(): T

Returns

`[DatResult](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_types_datresult)`

**map** ( transform )

Signature

inline fun <R\> map(transform: (value: T) \-> R): DatResult<R, E\>

Parameters

`transform: Function1`

Returns

`[DatResult](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_types_datresult)`

**mapCatching** ( transform )

Signature

inline fun <R\> mapCatching(transform: (value: T) \-> R): Result<R\>

Parameters

`transform: Function1`

Returns

`Result<R>`

**onFailure** ( action )

Performs the given action if this is a failure, providing direct access to the typed DatError. Use this version with 2 parameters for type-safe error handling.

Usage: result.onFailure { error, cause -> ... }

Note: The cast to E is safe by design because DatResult can only be constructed with errors of type E, and Result is immutable.

* * *

Signature

inline fun onFailure(action: (error: E, cause: Throwable?) \-> Unit): DatResult<T, E\>

Parameters

`action: Function2`

Returns

`[DatResult](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_types_datresult)`

**onFailure** ( action )

Performs the given action if this is a failure, receiving the exception. Use this version with 1 parameter for standard exception handling.

Usage: result.onFailure { exception -> ... }

* * *

Signature

inline fun onFailure(action: (exception: Throwable) \-> Unit): DatResult<T, E\>

Parameters

`action: Function1`

Returns

`[DatResult](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_types_datresult)`

**onSpecificError** ( action )

Performs the given action if this is a failure with a specific error type.

Usage: result.onSpecificError<SpecificError> { error, cause -> ... }

* * *

Signature

inline fun <F : DatError\> onSpecificError(action: (error: F, cause: Throwable?) \-> Unit): DatResult<T, E\>

Parameters

`action: Function2`

Returns

`[DatResult](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_types_datresult)`

**onSuccess** ( action )

Signature

inline fun onSuccess(action: (value: T) \-> Unit): DatResult<T, E\>

Parameters

`action: Function1`

Returns

`[DatResult](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_types_datresult)`

**recover** ( transform )

Signature

inline fun recover(transform: (exception: Throwable) \-> T): DatResult<T, E\>

Parameters

`transform: Function1`

Returns

`[DatResult](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_types_datresult)`

**recoverCatching** ( transform )

Signature

inline fun recoverCatching(transform: (exception: Throwable) \-> T): Result<T\>

Parameters

`transform: Function1`

Returns

`Result<T>`

**toResult** ()

Unwraps to the underlying standard Result for stdlib interop.

* * *

Signature

fun toResult(): Result<T\>

Returns

`Result<T>`

**validateErrorType** ()

Validates error type at runtime using reified generics. Use this when you need extra type safety beyond compile-time guarantees (e.g., when deserializing, crossing API boundaries, or dealing with type-erased results).

Returns null if the result contains an error that doesn't match the expected type E.

Example:

val untypedResult: DatResult<String, DatError\> \= getResult()
val typedResult: DatResult<String, AttestationError\>? \= untypedResult.validateErrorType()
if (typedResult != null) {
    // Safe to use as AttestationError
    typedResult.onFailure { error, \_ \->
        when (error) {
            AttestationError.TOKEN\_NOT\_CONFIGURED \-> ...
        }
    }
}

* * *

Signature

inline fun <T, E : DatError\> DatResult<T, \*>.validateErrorType(): DatResult<T, E\>?

Returns

`[DatResult?](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_types_datresult)`  The same DatResult narrowed to type E if validation succeeds, or null if it fails

## Companion Object

### Methods

**failure** ( exception )

Creates a failed DatResult from a DatException.

The error type E is inferred from the exception's error property.

* * *

Signature

fun <T, E : DatError\> failure(exception: DatException): DatResult<T, E\>

Parameters

`exception: [DatException](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_types_datexception)`

Returns

`[DatResult](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_types_datresult)`

**failure** ( error , cause )

Creates a failed DatResult from a DatError, wrapping it in DatException.

This is a convenience method to reduce boilerplate when you have a DatError and want to create a Result failure without manually constructing the exception. The error type E is inferred from the error parameter.

* * *

Signature

fun <T, E : DatError\> failure(error: E, cause: Throwable? \= null): DatResult<T, E\>

Parameters

`error: DatResult.Companion`  The DatError to wrap (type E is inferred from this parameter)

`cause: Throwable?`  Optional underlying cause

Returns

`[DatResult](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_types_datresult)`

**success** ( value )

Creates a successful DatResult with the given value.

The error type E must be specified explicitly or inferred from context:

val result: DatResult<String, AttestationError\> \= DatResult.success("hello")

* * *

Signature

fun <T, E : DatError\> success(value: T): DatResult<T, E\>

Parameters

`value: DatResult.Companion`

Returns

`[DatResult](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_types_datresult)`

**wrap** ( result )

Wraps an existing standard Result as a DatResult.

Warning: Assumes the Result's failure is a DatException. If the Result contains a different exception type, calling DatResult-specific methods will throw ClassCastException. The error type E must be specified explicitly or inferred from context.

* * *

Signature

fun <T, E : DatError\> wrap(result: Result<T\>): DatResult<T, E\>

Parameters

`result: Result<T>`

Returns

`[DatResult](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_types_datresult)`