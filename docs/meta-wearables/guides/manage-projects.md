<!-- source: https://wearables.developer.meta.com/docs/manage-projects | scraped: 2026-04-28 -->

# Manage projects

Updated: Dec 4, 2025

Once you have [onboarded⁠](https://work.meta.com/signup/landing/wearables_dev/?signup_code=Ae4HLaAAGqKWzrY23IYi8Sjdo3KDeP8pnrwduotfeJOYUwBXSjK1krB7t6vXxtqXavXI5bfIjnLeIEb6g3piWHM51GCndj6kRSE&request_id=filcemlbbnolpolgkigehjpjkofhkogdkheckidi), you can create a project or manage existing ones in [Meta Wearables Developer Center⁠](https://work.meta.com/signup/landing/wearables_dev/?signup_code=Ae4HLaAAGqKWzrY23IYi8Sjdo3KDeP8pnrwduotfeJOYUwBXSjK1krB7t6vXxtqXavXI5bfIjnLeIEb6g3piWHM51GCndj6kRSE&request_id=filcemlbbnolpolgkigehjpjkofhkogdkheckidi).

## Projects

You can create new projects or manage your existing ones directly in the Wearables Developer Center.

## Create a project

-   Click **New Project**.
-   Give your project a name (what you want to call it) and a brief description (what it does).

## App configuration

You can connect your own mobile apps with your wearable device (for example, Meta AI glasses) by defining the app details. Click **App configuration**.

-   Add the requested details for a mobile app you want to integrate with Meta wearable devices.

### Application ID integration

To register your application successfully (without using Developer Mode), you must include the Wearables Application ID in your app’s manifest and pass it in the registration call. Copy and paste the integration details into your iOS or Android application build to complete this step.

## Product listing

**App name and icon**

-   You need to provide your app’s name and an icon.
-   The icon must be in PNG or JPEG format.
-   Separate icons for dark and light mode are supported.
-   The maximum supported dimensions for the icon are 200x200 pixels.

These details will also be visible to other users in the Meta AI app when they [adjust permissions](https://wearables.developer.meta.com/docs/set-up-release-channels#manage-permissions-for-connected-apps).

## Permissions

If your app or project needs access to device functionality like the camera, you must provide a justification in the **Permissions** tab. This justification is for Meta’s internal review only and is not shown to end-users. Reviewers use your explanation to determine if the permission is necessary and appropriate for your app’s functionality.

> **Note:** Currently, the only permission is camera, but new device capabilities will be added in future iterations.

## Distribute

When you’re ready for people to try your project, you need to [set up release channels](https://wearables.developer.meta.com/docs/set-up-release-channels).