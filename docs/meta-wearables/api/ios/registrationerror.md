<!-- source: https://wearables.developer.meta.com/docs/reference/ios_swift/dat/0.6/mwdatcore_registrationerror | scraped: 2026-04-28 -->

# RegistrationError Enum

Extends Int, Error

Error conditions that can occur during the registration process.

## Signature

enum RegistrationError: Int, Error

## Enumeration Constants

Member

Description

alreadyRegistered

User is already registered when attempting to register again.

configurationInvalid

The Wearables Device Access Toolkit configuration is invalid or incomplete.

metaAINotInstalled

The Meta AI app is not installed on the device, which is required for registration.

networkUnavailable

Network connection is unavailable. Please check your internet connection and try again.

unknown

An unknown error occurred during the registration process.

## Properties

**description** : String

\[Get\]

Provides a human-readable description of the registration error.