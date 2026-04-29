<!-- source: https://wearables.developer.meta.com/docs/reference/android/dat/0.6/com_meta_wearable_dat_camera_types_photodata | scraped: 2026-04-28 -->

# PhotoData Interface

Represents photo data captured from a Meta Wearables device. Can be in different formats depending on the capture configuration.

## See Also

## Signature

interface PhotoData

## Inner Classes

### HEIC Class

Implements [PhotoData](/docs/reference/android/dat/0.6/com_meta_wearable_dat_camera_types_photodata)

_Modifiers: final_

Photo data in HEIC format.

#### Signature

data class HEIC(val data: ByteBuffer) : PhotoData

#### Constructors

**HEIC** ( data )

Signature

constructor(data: ByteBuffer)

Parameters

`data: ByteBuffer`  The ByteBuffer containing the HEIC-encoded photo data

Returns

`PhotoData.HEIC`

#### Properties

**data** : ByteBuffer

\[Get\]

The ByteBuffer containing the HEIC-encoded photo data

* * *

Signature

val data: ByteBuffer

### Bitmap Class

Implements [PhotoData](/docs/reference/android/dat/0.6/com_meta_wearable_dat_camera_types_photodata)

_Modifiers: final_

Photo data as an Android Bitmap.

#### Constructors

**Bitmap** ( bitmap )

Signature

constructor(bitmap: android.graphics.Bitmap)

Parameters

`bitmap: android.graphics.Bitmap`  The Android Bitmap containing the decoded photo data

Returns

`PhotoData.Bitmap`

#### Properties

**bitmap** : android.graphics.Bitmap

\[Get\]

The Android Bitmap containing the decoded photo data

* * *

Signature

val bitmap: android.graphics.Bitmap