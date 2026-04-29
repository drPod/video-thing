<!-- source: https://wearables.developer.meta.com/docs/reference/android/dat/0.6/com_meta_wearable_dat_camera_types_captureerror | scraped: 2026-04-28 -->

# CaptureError Interface

Extends [DatError](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_types_daterror)

Errors that can occur during photo capture operations.

Handle errors by checking the result type and inspecting the error:

result.fold(
    onSuccess \= { photoData \-> displayPhoto(photoData) },
    onFailure \= { error, \_ \->
        when (error) {
            is CaptureError.DeviceDisconnected \-> showDeviceError()
            is CaptureError.NotStreaming \-> showStreamingRequired()
            is CaptureError.CaptureInProgress \-> showBusyMessage()
            is CaptureError.CaptureFailed \-> showCaptureError()
        }
    }
)

## See Also

-   [DatError](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_types_daterror)
-   [PhotoData](/docs/reference/android/dat/0.6/com_meta_wearable_dat_camera_types_photodata)

## Signature

interface CaptureError : DatError

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

**toException** ()

Converts this error to an exception for use with legacy APIs.

* * *

Signature

open fun toException(): Exception

Returns

`Exception`  An [IllegalStateException](/docs/reference/android/dat/0.6/java_lang_illegalstateexception) with the error description as the message.

## Inner Objects

### DeviceDisconnected Object

The device is not connected.

This error occurs when attempting to capture a photo but the wearable device is no longer connected to the streaming session. Ensure the device is connected before attempting capture.

#### Signature

data object DeviceDisconnected : CaptureError

#### Properties

**description** : String

\[Get\]

A human-readable description of the error suitable for logging and debugging purposes.

* * *

Signature

open override val description: String

#### Methods

**getLocalizedDescription** ( context )

Returns a localized description of the error using Android string resources when available.

* * *

Signature

open override fun getLocalizedDescription(context: Context?): String

Parameters

`context: Context?`  Optional Android context for accessing string resources. If null or if no localized string is available, returns the default [CaptureError.DeviceDisconnected.description](/docs/reference/android/dat/0.6/com_meta_wearable_dat_camera_types_captureerror#description).

Returns

`String`  The localized error description, or the default description if localization unavailable.

**toException** ()

Converts this error to an exception for use with legacy APIs.

* * *

Signature

open fun toException(): Exception

Returns

`Exception`  An [IllegalStateException](/docs/reference/android/dat/0.6/java_lang_illegalstateexception) with the error description as the message.

### NotStreaming Object

Photo capture is only available while streaming video.

This error occurs when attempting to capture a photo while the session is not in the STREAMING state. Start streaming video first before attempting to capture photos.

## See Also

-   [StreamSessionState.STREAMING](/docs/reference/android/dat/0.6/com_meta_wearable_dat_camera_types_streamsessionstate#streaming)

#### Signature

data object NotStreaming : CaptureError

#### Properties

**description** : String

\[Get\]

A human-readable description of the error suitable for logging and debugging purposes.

* * *

Signature

open override val description: String

#### Methods

**getLocalizedDescription** ( context )

Returns a localized description of the error using Android string resources when available.

* * *

Signature

open override fun getLocalizedDescription(context: Context?): String

Parameters

`context: Context?`  Optional Android context for accessing string resources. If null or if no localized string is available, returns the default [CaptureError.NotStreaming.description](/docs/reference/android/dat/0.6/com_meta_wearable_dat_camera_types_captureerror#description).

Returns

`String`  The localized error description, or the default description if localization unavailable.

**toException** ()

Converts this error to an exception for use with legacy APIs.

* * *

Signature

open fun toException(): Exception

Returns

`Exception`  An [IllegalStateException](/docs/reference/android/dat/0.6/java_lang_illegalstateexception) with the error description as the message.

### CaptureInProgress Object

A photo capture operation is already in progress.

This error occurs when attempting to capture a photo while another capture is pending. Wait for the current capture to complete before starting a new one.

#### Signature

data object CaptureInProgress : CaptureError

#### Properties

**description** : String

\[Get\]

A human-readable description of the error suitable for logging and debugging purposes.

* * *

Signature

open override val description: String

#### Methods

**getLocalizedDescription** ( context )

Returns a localized description of the error using Android string resources when available.

* * *

Signature

open override fun getLocalizedDescription(context: Context?): String

Parameters

`context: Context?`  Optional Android context for accessing string resources. If null or if no localized string is available, returns the default [CaptureError.CaptureInProgress.description](/docs/reference/android/dat/0.6/com_meta_wearable_dat_camera_types_captureerror#description).

Returns

`String`  The localized error description, or the default description if localization unavailable.

**toException** ()

Converts this error to an exception for use with legacy APIs.

* * *

Signature

open fun toException(): Exception

Returns

`Exception`  An [IllegalStateException](/docs/reference/android/dat/0.6/java_lang_illegalstateexception) with the error description as the message.

### CaptureFailed Object

The photo capture operation failed.

This error occurs when the device was unable to capture or return photo data. This may be due to a hardware issue, codec failure, or communication error with the device.

#### Signature

data object CaptureFailed : CaptureError

#### Properties

**description** : String

\[Get\]

A human-readable description of the error suitable for logging and debugging purposes.

* * *

Signature

open override val description: String

#### Methods

**getLocalizedDescription** ( context )

Returns a localized description of the error using Android string resources when available.

* * *

Signature

open override fun getLocalizedDescription(context: Context?): String

Parameters

`context: Context?`  Optional Android context for accessing string resources. If null or if no localized string is available, returns the default [CaptureError.CaptureFailed.description](/docs/reference/android/dat/0.6/com_meta_wearable_dat_camera_types_captureerror#description).

Returns

`String`  The localized error description, or the default description if localization unavailable.

**toException** ()

Converts this error to an exception for use with legacy APIs.

* * *

Signature

open fun toException(): Exception

Returns

`Exception`  An [IllegalStateException](/docs/reference/android/dat/0.6/java_lang_illegalstateexception) with the error description as the message.