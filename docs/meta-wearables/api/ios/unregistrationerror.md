<!-- source: https://wearables.developer.meta.com/docs/reference/ios_swift/dat/0.6/mwdatcore_unregistrationerror | scraped: 2026-04-28 -->

# UnregistrationError Enum

Extends Int, Error

Error conditions that can occur during the unregistration process.

## Signature

enum UnregistrationError: Int, Error

## Enumeration Constants

Member

Description

alreadyUnregistered

User is already unregistered when attempting to unregister again.

configurationInvalid

The Wearables Device Access Toolkit configuration is invalid or incomplete.

metaAINotInstalled

The Meta AI app is not installed on the device, which is required for unregistration.

unknown

An unknown error occurred during the unregistration process.

## Properties

**description** : String

\[Get\]

Provides a human-readable description of the unregistration error.