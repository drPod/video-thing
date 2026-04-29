<!-- source: https://wearables.developer.meta.com/docs/reference/ios_swift/dat/0.6/mwdatcore_devicesessionerror | scraped: 2026-04-28 -->

# DeviceSessionError Enum

Extends Error, Equatable, Sendable, LocalizedError

Errors that can occur during [DeviceSession](/docs/reference/ios_swift/dat/0.6/mwdatcore_devicesession) operations.

## Signature

enum DeviceSessionError: Error, Equatable, Sendable, LocalizedError

## Enumeration Constants

Member

Description

noEligibleDevice

No device is available (not connected, powered off, or incompatible).

sessionAlreadyStopped

An operation was attempted on a session that has already stopped.

sessionAlreadyExists

A non-stopped session already exists for this device.

sessionIdle

The operation was called on a session that is still idle (not yet started).

capabilityAlreadyActive

A capability of the same type is already attached to the session.

capabilityNotFound

No capability of the given type is attached to the session.

unexpectedError(String)

An unexpected error occurred.

## Properties

**errorDescription** : String?

\[Get\]

A localized description of the error, suitable for display in UI or logging.