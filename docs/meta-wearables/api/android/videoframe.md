<!-- source: https://wearables.developer.meta.com/docs/reference/android/dat/0.6/com_meta_wearable_dat_camera_types_videoframe | scraped: 2026-04-28 -->

# VideoFrame Class

_Modifiers: final_

Represents a single frame of video data from a Meta Wearables device. Contains the raw video buffer data along with frame dimensions and presentation timestamp.

## Signature

data class VideoFrame(val buffer: ByteBuffer, val width: Int, val height: Int, val presentationTimeUs: Long \= 0, val isCompressed: Boolean \= false)

## Constructors

**VideoFrame** ( buffer , width , height , presentationTimeUs , isCompressed )

Signature

constructor(buffer: ByteBuffer, width: Int, height: Int, presentationTimeUs: Long \= 0, isCompressed: Boolean \= false)

Parameters

`buffer: ByteBuffer`  The ByteBuffer containing the raw video frame data

`width: Int`  The width of the video frame in pixels

`height: Int`  The height of the video frame in pixels

`presentationTimeUs: Long`  The presentation timestamp in microseconds

`isCompressed: Boolean`  Whether this frame contains compressed HEVC data (true) or decoded YUV pixel data (false)

Returns

`[VideoFrame](/docs/reference/android/dat/0.6/com_meta_wearable_dat_camera_types_videoframe)`

## Properties

**buffer** : ByteBuffer

\[Get\]

The ByteBuffer containing the raw video frame data

* * *

Signature

val buffer: ByteBuffer

**height** : Int

\[Get\]

The height of the video frame in pixels

* * *

Signature

val height: Int

**isCompressed** : Boolean

\[Get\]

Whether this frame contains compressed HEVC data (true) or decoded YUV pixel data (false)

* * *

Signature

val isCompressed: Boolean \= false

**presentationTimeUs** : Long

\[Get\]

The presentation timestamp in microseconds

* * *

Signature

val presentationTimeUs: Long \= 0

**width** : Int

\[Get\]

The width of the video frame in pixels

* * *

Signature

val width: Int