<!-- source: https://wearables.developer.meta.com/docs/reference/ios_swift/dat/0.6/mwdatcore_permissionerror | scraped: 2026-04-28 -->

# PermissionError Enum

Extends Int, Error, Sendable

Errors that can occur during permission requests.

## Signature

enum PermissionError: Int, Error, Sendable

## Enumeration Constants

Member

Description

noDevice

No wearable devices have been discovered or registered.

noDeviceWithConnection

All discovered devices are powered off or disconnected.

connectionError

A connection error occurred while communicating with the device.

metaAINotInstalled

The Meta AI companion app is not installed on the device.

requestInProgress

A permission request is already in progress.

requestTimeout

The permission request exceeded the allowed time limit.

internalError

An unexpected internal error occurred.

## Properties

**description** : String

\[Get\]