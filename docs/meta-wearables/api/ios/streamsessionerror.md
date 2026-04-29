<!-- source: https://wearables.developer.meta.com/docs/reference/ios_swift/dat/0.6/mwdatcamera_streamsessionerror | scraped: 2026-04-28 -->

# StreamSessionError Enum

Extends Error, Equatable

Errors that can occur during streaming sessions.

## Signature

enum StreamSessionError: Error, Equatable

## Enumeration Constants

Member

Description

internalError

An internal error occurred.

deviceNotFound([DeviceIdentifier](/docs/reference/ios_swift/dat/0.6/mwdatcore_deviceidentifier))

The specified device could not be found.

deviceNotConnected([DeviceIdentifier](/docs/reference/ios_swift/dat/0.6/mwdatcore_deviceidentifier))

The specified device is not connected.

timeout

The operation timed out.

videoStreamingError

Video streaming encountered an error.

permissionDenied

Camera permission was denied.

hingesClosed

The device hinges were closed during streaming.

thermalCritical

The device thermal state has reached a critical level that may affect streaming performance.

ON THIS PAGE

Signature

Enumeration Constants