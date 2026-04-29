<!-- source: https://wearables.developer.meta.com/docs/reference/ios_swift/dat/0.6/mwdatcore_wearables | scraped: 2026-04-28 -->

# Wearables Enum

The entry point for configuring and accessing the Wearables Device Access Toolkit.

Provides registration, device management, permissions, and session state functionality for interacting with AI glasses.

## Signature

enum Wearables

## Enumeration Constants

Member

## Properties

**shared** : [WearablesInterface](/docs/reference/ios_swift/dat/0.6/mwdatcore_wearablesinterface)

\[Get\]

The shared Device Access Toolkit instance.

## Functions

**configure** ()

Configures the Wearables Device Access Toolkit with settings from the app bundle.

This method must be called once before accessing [shared](/docs/reference/ios_swift/dat/0.6/mwdatcore_wearables#shared) or using any other Wearables Device Access Toolkit functionality. Subsequent calls will throw [WearablesError.alreadyConfigured](/docs/reference/ios_swift/dat/0.6/mwdatcore_wearableserror#alreadyConfigured).

* * *

Signature

public static func configure()

Throws