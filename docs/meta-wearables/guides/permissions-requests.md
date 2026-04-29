<!-- source: https://wearables.developer.meta.com/docs/permissions-requests | scraped: 2026-04-28 -->

# Permissions and registration

Updated: Apr 16, 2026

## Overview

The Wearables Device Access Toolkit separates app registration and device permissions. All permission grants occur through the Meta AI app. Permissions work across multiple linked wearables.

Camera permissions are granted at the app level. However, each device will need to confirm permissions specifically, in turn allowing your app to support a set of devices with individual permissions.

To create an integration, follow this guidance to build your first integration for [Android](/docs/build-integration-android) or [iOS](/docs/build-integration-ios).

## Registration

Your app registers with the Meta AI app to be an permitted integration. This establishes the connection between your app and the glasses platform. Registration happens once through Meta AI app with glasses connected. Users see your app name in the list of connected apps. They can unregister anytime through the Meta AI app. You can also implement an unregistration flow is desired.

## Device permissions

After registration, request specific permissions (see possible values for [Android](https://wearables.developer.meta.com/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_types_permission#enumeration_constants) and [iOS](https://wearables.developer.meta.com/docs/reference/ios_swift/dat/0.6/mwdatcore_permission#enumeration_constants)). The Meta AI app runs the permission grant flow. Users choose **Allow once** (temporary) or **Allow always** (persistent).

### User experience flow

![Illustrating the user experience flow for permissions and using features.](https://scontent-ord5-3.xx.fbcdn.net/v/t39.2365-6/580708783_1881385062789211_6326160629302429353_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=nyNEVS0hNlAQ7kNvwF_n1sZ&_nc_oc=AdpDK9s8G5x7uB9-mcvUBplk8A6vUvaoyMfErtCS6PCFzwbaf0gBwAplFA7IO19CJSk&_nc_zt=14&_nc_ht=scontent-ord5-3.xx&_nc_gid=hvcBJVDhuXc7c-8RidRiTA&_nc_ss=7b20f&oh=00_Af2zvy3ZPHRjpQRY1JJyO6NBeTC6vBWcSJYYfLUJ8ImPaA&oe=6A0AD8F2)

-   Without registration, permission requests fail.
-   With registration but no permissions, your app connects but cannot access camera.

## Multi-device permission behavior

Users can link multiple glasses to Meta AI. The toolkit handles this transparently.

### How it works

Users can have multiple pairs of glasses. Permission granted on any linked device allows your app to use that feature. When checking permissions, Wearables Device Access Toolkit queries all connected devices. If any device has the permission granted, your app receives “granted” status.

### Practical implications

You don’t track which specific device has permissions. Permission checks return granted if _any_ connected device has approved. If all devices disconnect, permission checks will indicate unavailability. Users manage permissions per device in the Meta AI app.

## Distribution and registration

Testing vs. production have different permission requirements. When developer mode is activated, registration is always allowed. When a build is distributed, users must be in the proper release channel to get the app. This is controlled by the `MWDAT` application ID.

**Note:** For security purposes, only one 3rd party app can remain registered at a time in Developer Mode. Registering a new app will automatically unregister any previously registered app.

-   For setting up developer mode, see [Getting started with the Wearables Device Access Toolkit](/docs/getting-started-toolkit).
-   For details on creating release channels, see [Manage projects in Developer Center](/docs/manage-projects).
    -   This page also explains where to find the `APPLICATION_ID` that must be added to your production manifest/bundle configuration.