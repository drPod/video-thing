<!-- source: https://wearables.developer.meta.com/docs/reference/ios_swift/dat/0.6/mwdatmockdevice_mockdevicekitconfig | scraped: 2026-04-28 -->

# MockDeviceKitConfig Struct

Extends Sendable

Configuration options for MockDeviceKit.

## Signature

struct MockDeviceKitConfig: Sendable

## Constructors

**init** ( initiallyRegistered , initialPermissionsGranted )

Signature

public init( initiallyRegistered: Bool,  initialPermissionsGranted: Bool)

Parameters

`initiallyRegistered: Bool`

`initialPermissionsGranted: Bool`

## Properties

**initiallyRegistered** : Bool

Whether the mock device should start in a registered state. When `true` (default), `enable()` immediately transitions to `.registered`. When `false`, the state starts as `.unavailable`, allowing `startRegistration()` to be tested.

**initialPermissionsGranted** : Bool

Whether permissions should start as granted. When `true` (default), all permissions are granted after `enable()`. When `false`, all permissions start denied — tests must explicitly grant via `set(_ permission:, .granted)`. Forced to `false` when `initiallyRegistered` is `false` (can't have permissions without registration).