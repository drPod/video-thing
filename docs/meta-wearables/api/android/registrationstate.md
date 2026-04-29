<!-- source: https://wearables.developer.meta.com/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_types_registrationstate | scraped: 2026-04-28 -->

# RegistrationState Class

Represents the current state of user registration with the Meta Wearables platform. Each state can optionally contain a registration error if the state transition was caused by an error.

## Signature

sealed class RegistrationState

## Properties

**error** : [RegistrationError?](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_types_registrationerror)

\[Get\]

An optional registration error associated with this state

* * *

Signature

open val error: RegistrationError? \= null

## Inner Classes

### Unavailable Class

Extends [RegistrationState](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_types_registrationstate)

_Modifiers: final_

Registration is not currently available, typically due to system constraints.

#### Signature

data class Unavailable(val error: RegistrationError? \= null) : RegistrationState

#### Constructors

**Unavailable** ( error )

Signature

constructor(error: RegistrationError? \= null)

Parameters

`error: [RegistrationError?](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_types_registrationerror)`  An optional registration error that caused this state

Returns

`RegistrationState.Unavailable`

#### Properties

**error** : [RegistrationError?](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_types_registrationerror)

\[Get\]

An optional registration error that caused this state

* * *

Signature

open override val error: RegistrationError? \= null

### Available Class

Extends [RegistrationState](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_types_registrationstate)

_Modifiers: final_

Registration is available and can be initiated.

#### Signature

data class Available(val error: RegistrationError? \= null) : RegistrationState

#### Constructors

**Available** ( error )

Signature

constructor(error: RegistrationError? \= null)

Parameters

`error: [RegistrationError?](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_types_registrationerror)`  An optional registration error that caused this state

Returns

`RegistrationState.Available`

#### Properties

**error** : [RegistrationError?](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_types_registrationerror)

\[Get\]

An optional registration error that caused this state

* * *

Signature

open override val error: RegistrationError? \= null

### Unregistering Class

Extends [RegistrationState](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_types_registrationstate)

_Modifiers: final_

Unregistration process is currently in progress.

#### Signature

data class Unregistering(val error: RegistrationError? \= null) : RegistrationState

#### Constructors

**Unregistering** ( error )

Signature

constructor(error: RegistrationError? \= null)

Parameters

`error: [RegistrationError?](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_types_registrationerror)`  An optional registration error that caused this state

Returns

`RegistrationState.Unregistering`

#### Properties

**error** : [RegistrationError?](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_types_registrationerror)

\[Get\]

An optional registration error that caused this state

* * *

Signature

open override val error: RegistrationError? \= null

### Registered Class

Extends [RegistrationState](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_types_registrationstate)

_Modifiers: final_

User is successfully registered with the platform.

#### Signature

data class Registered(val error: RegistrationError? \= null) : RegistrationState

#### Constructors

**Registered** ( error )

Signature

constructor(error: RegistrationError? \= null)

Parameters

`error: [RegistrationError?](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_types_registrationerror)`  An optional registration error that caused this state

Returns

`RegistrationState.Registered`

#### Properties

**error** : [RegistrationError?](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_types_registrationerror)

\[Get\]

An optional registration error that caused this state

* * *

Signature

open override val error: RegistrationError? \= null

### Registering Class

Extends [RegistrationState](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_types_registrationstate)

_Modifiers: final_

Registration process is currently in progress.

#### Signature

data class Registering(val error: RegistrationError? \= null) : RegistrationState

#### Constructors

**Registering** ( error )

Signature

constructor(error: RegistrationError? \= null)

Parameters

`error: [RegistrationError?](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_types_registrationerror)`  An optional registration error that caused this state

Returns

`RegistrationState.Registering`

#### Properties

**error** : [RegistrationError?](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_types_registrationerror)

\[Get\]

An optional registration error that caused this state

* * *

Signature

open override val error: RegistrationError? \= null