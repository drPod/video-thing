<!-- source: https://wearables.developer.meta.com/docs/reference/ios_swift/dat/0.6/mwdatcamera_streamsessionconfig | scraped: 2026-04-28 -->

# StreamSessionConfig Struct

Extends Sendable

Configuration for a media streaming session with a Meta Wearables device. Defines video codec, resolution, frame delivery strategy, and target frame rate.

## Signature

struct StreamSessionConfig: Sendable

## Constructors

**init** ( videoCodec , resolution , frameRate , skipAppLaunch )

Creates a new stream session configuration with specified parameters.

* * *

Signature

public init( videoCodec: VideoCodec,  resolution: StreamingResolution,  frameRate: UInt,  skipAppLaunch: Bool)

Parameters

`videoCodec: [VideoCodec](/docs/reference/ios_swift/dat/0.6/mwdatcamera_videocodec)`  The video codec to use for streaming.

`resolution: [StreamingResolution](/docs/reference/ios_swift/dat/0.6/mwdatcamera_streamingresolution)`  The resolution for video streaming.

`frameRate: UInt`  The target frame rate for streaming.

`skipAppLaunch: Bool`  Whether to skip launching the native app on the device. Defaults to `false`.

**init** ()

Creates a new stream session configuration with default settings. Uses raw video codec, medium resolution, deliver-all frame strategy, and 30 FPS.

* * *

Signature

public init()

## Properties

**frameRate** : UInt

The target frame rate for the streaming session.

**resolution** : [StreamingResolution](/docs/reference/ios_swift/dat/0.6/mwdatcamera_streamingresolution)

The resolution at which to stream video content.

**skipAppLaunch** : Bool

Whether to skip launching the native app on the device when starting the stream. When `true`, the device will not launch the Livestream app via SNAM protocol, allowing DAT to manage app lifecycle via DATSessionMessageHandler instead.

**videoCodec** : [VideoCodec](/docs/reference/ios_swift/dat/0.6/mwdatcamera_videocodec)

The video codec to use for streaming.