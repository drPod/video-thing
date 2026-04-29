<!-- source: https://wearables.developer.meta.com/docs/reference/ios_swift/dat/0.6/mwdatcamera_streamsessionstate | scraped: 2026-04-28 -->

API reference

0.6

[

Overview

](/docs/reference/ios_swift/dat/0.6)

[

MWDATCamera

](#)

[

Classes

](#)

[

StreamSession

](/docs/reference/ios_swift/dat/0.6/mwdatcamera_streamsession)

[

Enumerations

](#)

[

PhotoCaptureFormat

](/docs/reference/ios_swift/dat/0.6/mwdatcamera_photocaptureformat)

[

StreamingResolution

](/docs/reference/ios_swift/dat/0.6/mwdatcamera_streamingresolution)

[

StreamSessionError

](/docs/reference/ios_swift/dat/0.6/mwdatcamera_streamsessionerror)

[

StreamSessionState

](/docs/reference/ios_swift/dat/0.6/mwdatcamera_streamsessionstate)

[

VideoCodec

](/docs/reference/ios_swift/dat/0.6/mwdatcamera_videocodec)

[

Structs

](#)

[

PhotoData

](/docs/reference/ios_swift/dat/0.6/mwdatcamera_photodata)

[

StreamSessionConfig

](/docs/reference/ios_swift/dat/0.6/mwdatcamera_streamsessionconfig)

[

VideoFrame

](/docs/reference/ios_swift/dat/0.6/mwdatcamera_videoframe)

[

VideoFrameSize

](/docs/reference/ios_swift/dat/0.6/mwdatcamera_videoframesize)

[

MWDATCore

](#)

[

Classes

](#)

[

AutoDeviceSelector

](/docs/reference/ios_swift/dat/0.6/mwdatcore_autodeviceselector)

[

Device

](/docs/reference/ios_swift/dat/0.6/mwdatcore_device)

[

DeviceSession

](/docs/reference/ios_swift/dat/0.6/mwdatcore_devicesession)

[

DeviceStateSession

](/docs/reference/ios_swift/dat/0.6/mwdatcore_devicestatesession)

[

SpecificDeviceSelector

](/docs/reference/ios_swift/dat/0.6/mwdatcore_specificdeviceselector)

[

Enumerations

](#)

[

CapabilityState

](/docs/reference/ios_swift/dat/0.6/mwdatcore_capabilitystate)

[

Compatibility

](/docs/reference/ios_swift/dat/0.6/mwdatcore_compatibility)

[

DeviceSessionError

](/docs/reference/ios_swift/dat/0.6/mwdatcore_devicesessionerror)

[

DeviceSessionState

](/docs/reference/ios_swift/dat/0.6/mwdatcore_devicesessionstate)

[

DeviceType

](/docs/reference/ios_swift/dat/0.6/mwdatcore_devicetype)

[

LinkState

](/docs/reference/ios_swift/dat/0.6/mwdatcore_linkstate)

[

Permission

](/docs/reference/ios_swift/dat/0.6/mwdatcore_permission)

[

PermissionError

](/docs/reference/ios_swift/dat/0.6/mwdatcore_permissionerror)

[

PermissionStatus

](/docs/reference/ios_swift/dat/0.6/mwdatcore_permissionstatus)

[

RegistrationError

](/docs/reference/ios_swift/dat/0.6/mwdatcore_registrationerror)

[

RegistrationState

](/docs/reference/ios_swift/dat/0.6/mwdatcore_registrationstate)

[

SessionState

](/docs/reference/ios_swift/dat/0.6/mwdatcore_sessionstate)

[

UnregistrationError

](/docs/reference/ios_swift/dat/0.6/mwdatcore_unregistrationerror)

[

Wearables

](/docs/reference/ios_swift/dat/0.6/mwdatcore_wearables)

[

WearablesError

](/docs/reference/ios_swift/dat/0.6/mwdatcore_wearableserror)

[

WearablesHandleURLError

](/docs/reference/ios_swift/dat/0.6/mwdatcore_wearableshandleurlerror)

[

Protocols

](#)

[

Announcer

](/docs/reference/ios_swift/dat/0.6/mwdatcore_announcer)

[

AnyListenerToken

](/docs/reference/ios_swift/dat/0.6/mwdatcore_anylistenertoken)

[

Capability

](/docs/reference/ios_swift/dat/0.6/mwdatcore_capability)

[

DeviceSelector

](/docs/reference/ios_swift/dat/0.6/mwdatcore_deviceselector)

[

WearablesInterface

](/docs/reference/ios_swift/dat/0.6/mwdatcore_wearablesinterface)

[

Structs

](#)

[

Mutex

](/docs/reference/ios_swift/dat/0.6/mwdatcore_mutex)

[

Type Aliases

](#)

[

DeviceIdentifier

](/docs/reference/ios_swift/dat/0.6/mwdatcore_deviceidentifier)

[

MWDATMockDevice

](#)

[

Enumerations

](#)

[

CameraFacing

](/docs/reference/ios_swift/dat/0.6/mwdatmockdevice_camerafacing)

[

MockDeviceKit

](/docs/reference/ios_swift/dat/0.6/mwdatmockdevice_mockdevicekit)

[

Protocols

](#)

[

MockCameraKit

](/docs/reference/ios_swift/dat/0.6/mwdatmockdevice_mockcamerakit)

[

MockDevice

](/docs/reference/ios_swift/dat/0.6/mwdatmockdevice_mockdevice)

[

MockDeviceKitInterface

](/docs/reference/ios_swift/dat/0.6/mwdatmockdevice_mockdevicekitinterface)

[

MockDisplaylessGlasses

](/docs/reference/ios_swift/dat/0.6/mwdatmockdevice_mockdisplaylessglasses)

[

MockDisplaylessGlassesServices

](/docs/reference/ios_swift/dat/0.6/mwdatmockdevice_mockdisplaylessglassesservices)

[

MockPermissions

](/docs/reference/ios_swift/dat/0.6/mwdatmockdevice_mockpermissions)

[

MockRaybanMeta

](/docs/reference/ios_swift/dat/0.6/mwdatmockdevice_mockraybanmeta)

[

Structs

](#)

[

MockDeviceKitConfig

](/docs/reference/ios_swift/dat/0.6/mwdatmockdevice_mockdevicekitconfig)

# StreamSessionState Enum

Extends Sendable

Represents the current state of a media streaming session with a Meta Wearables device.

## Signature

enum StreamSessionState: Sendable

## Enumeration Constants

Member

Description

stopping

The session is in the process of stopping.

stopped

The session is completely stopped and not attempting to connect.

waitingForDevice

The session is waiting for a compatible device to become available.

starting

The session is in the process of starting up.

streaming

The session is actively streaming media data.

paused

The session is temporarily paused but maintains its connection.

ON THIS PAGE

Signature

Enumeration Constants