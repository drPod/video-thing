<!-- source: https://wearables.developer.meta.com/docs/reference/android/dat/0.6/com_meta_wearable_dat_camera_types_streamconfiguration | scraped: 2026-04-28 -->

# StreamConfiguration Class

_Modifiers: final_

Configuration for a media streaming session with a Meta Wearables device. Defines the video quality and other streaming parameters.

## See Also

-   [VideoQuality](/docs/reference/android/dat/0.6/com_meta_wearable_dat_camera_types_videoquality)

## Signature

data class StreamConfiguration(val videoQuality: VideoQuality \= VideoQuality.MEDIUM, val frameRate: Int \= 24, val compressVideo: Boolean \= false)

## Constructors

**StreamConfiguration** ( videoQuality , frameRate , compressVideo )

Signature

constructor(videoQuality: VideoQuality \= VideoQuality.MEDIUM, frameRate: Int \= 24, compressVideo: Boolean \= false)

Parameters

`videoQuality: [VideoQuality](/docs/reference/android/dat/0.6/com_meta_wearable_dat_camera_types_videoquality)`  The video quality setting for the streaming session

`frameRate: Int`

`compressVideo: Boolean`  When true, the SDK skips decoding and delivers compressed HEVC buffers. When false (default), the SDK decodes internally and delivers YUV pixel buffers.

Returns

`[StreamConfiguration](/docs/reference/android/dat/0.6/com_meta_wearable_dat_camera_types_streamconfiguration)`

## Properties

**compressVideo** : Boolean

\[Get\]

When true, the SDK skips decoding and delivers compressed HEVC buffers. When false (default), the SDK decodes internally and delivers YUV pixel buffers.

* * *

Signature

val compressVideo: Boolean \= false

**frameRate** : Int

\[Get\]

Signature

val frameRate: Int \= 24

**videoQuality** : [VideoQuality](/docs/reference/android/dat/0.6/com_meta_wearable_dat_camera_types_videoquality)

\[Get\]

The video quality setting for the streaming session

* * *

Signature

val videoQuality: VideoQuality