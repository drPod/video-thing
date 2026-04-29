<!-- source: https://wearables.developer.meta.com/docs/set-up-release-channels | scraped: 2026-04-28 -->

# Set up versions and release channels in Meta Wearables Developer Center

Updated: Nov 12, 2025

Effectively manage how you distribute and test Meta integrations by setting up versions and release channels in the Meta Wearables Developer Center. This guide walks you through best practices and step-by-step instructions to help you roll out updates, gather meaningful feedback, test features safely, and maintain integration quality.

## Understand versions

Wearables Developer Center uses a versioning system that helps track changes and maintain stability across your integrations. Each version details product specifics, including the name, icon, and any edits to permission requests or app configuration.

After you add and save these details you can find them by going to **Distribute > Version details > Project data**.

When you change any of these details, you need to create a new version of the integration so you can distribute it to testers on a release channel.

When selecting the version to use, the type of change you are making determines the category you should choose:

-   **Major (e.g., 2.3.4 to 3.0.0):** Choose this for significant changes or API revisions that are not guaranteed to maintain compatibility with previous versions. For example, select a major version if you change core app functionality in a way that breaks existing features.
-   **Minor (e.g., 2.3.4 to 2.4.0):** Select a minor version when introducing new features while still maintaining backwards compatibility. For example, if you add a new button or feature.
-   **Patch (e.g., 2.3.4 to 2.3.5):** Use a patch version for fixing bugs or delivering minor improvements that do not break compatibility, such as correcting a typo or a small bug fix.

## Create versions

To create a new version of your integration:

-   Log in to the [Meta Wearables Developer Center⁠](https://wearables.developer.meta.com/).
-   Select your project from the dashboard.
-   Go to the **Distribute** menu and choose **Versions**.
-   Click **\+ New version**.
-   Select your version type (**Major, Minor, or Patch**).
-   Click **Create version**.

## About release channels

Release channels let you control distribution of your versions. By creating and assigning versions to specific channels, you determine which user groups access each version. Each channel supports only one version at a time, but you can attach the same version to multiple channels if needed.

### Release channel options

-   **Invite-only channels:** Useful for alpha/beta testing. All release channels for Device Access Toolkit are currently invite-only.
-   **User invitations by email:** You can only invite testers who have [Meta accounts⁠](https://developers.meta.com/horizon/blog/introducing-meta-accounts-what-developers-need-to-know/). Make sure to add the email associated with the tester’s Meta account when prompted to invite testers.
-   **Tester autonomy:** Testers may accept or decline invitations and can remove themselves at any time.
-   **Developer control:** You can revoke tester access at any point. You can also reinvite users you have previously revoked.
-   **Limitations:** Up to 3 channels per integration, max 100 users per channel.

## Create a release channel

To set up a new release channel:

-   In the **Distribute** menu, click **Release channels** (right menu, adjacent to **Versions**).
-   Select **\+ Create a release channel**.
-   Enter a unique **Name** and a clear **Description** for your channel. Click **Next**.
-   Select the **Version** you wish to distribute. You can update this selection whenever needed. Click **Next**.
-   Enter the email addresses of the testers you wish to invite. **Note:** These must be emails for already existing Meta Accounts (this is different from a Meta Managed Account). If the tester needs a Meta Account, they can create one at [meta.ai⁠](http://meta.ai/) or by logging into the Meta AI app.
-   Click **Next**.
-   Review your selections, then click **Create release channel** to confirm. If you do not confirm by clicking this button, users will not receive the invitation.

## Manage test user access

Testers can belong to multiple release channels for one integration, such as for regression or parallel testing. Each invited tester must accept the email invitation to join a test group. Developers can remove testers, and testers can leave at any time.

**Note:** Release channels control a user’s ability to register an app integration. Removing a user from a channel after they’ve registered will not unregister the connected app for Meta AI and the wearable device.

To view release channel details and manage test users, click **Edit** next to the channel. From here, you can also change the distributed version.

Test users can view the integrations they are testing at: [https://wearables.meta.com/invites⁠](https://wearables.meta.com/invites)

## Manage permissions and switch release channels in the Meta AI app

People testing your integration can manage app permissions and switch release channels for your devices and connected apps in the Meta AI app. These settings help you control what your connected apps can access and allow you to try new features by joining different release channels.

## Manage permissions for connected apps

As a test user, managing permissions lets you control what each integration can access on your device.

To manage permissions:

-   Open the Meta AI App.
-   Go to the device menu and tap **Settings**.
-   Select **Connected Apps** to see a list of all apps linked to your Meta AI account.
-   Tap on an app to view its permissions.
-   Adjust specific permissions, e.g., for the camera:
    -   You may see options like:
        -   Always allow
-   Always ask
-   Don’t allow
-   Click **Confirm** to save your changes.

**Note:** Changes made to these settings will apply to all devices connected to your Meta AI app.

## Switch release channel

Release channels let testers choose between different versions of your integration.

### To switch release channel

-   Open the Meta AI App.
-   Go to the device menu and tap **Settings**.
-   Tap **Release Channel** to see available options.
-   Select your preferred channel.
    -   If there are multiple channels, you can pick the one you want.
-   If only one is available, it will be selected by default.
-   Click **Confirm** to save your changes.

![switch release channel](https://scontent-ord5-2.xx.fbcdn.net/v/t39.2365-6/579181325_1882859065975144_658787547080658320_n.gif?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=aGwomr6aFkIQ7kNvwGoaqLO&_nc_oc=AdpLZ0cVq4ZLUTlmBrMLBCIlnpCmKAN2kktjcD3tICjuKNcLPP1e8qR7kKIK796bEcY&_nc_zt=14&_nc_ht=scontent-ord5-2.xx&_nc_gid=arpJqcCsv1w-MHLXahmQpA&_nc_ss=7b20f&oh=00_Af1QtTm3zyKFhBJF_cAAFwnSYQZxRXvhubAWt72CMzFI6A&oe=6A0AF207)

Learn [How to disconnect apps from AI glasses⁠](https://www.meta.com/en-gb/help/ai-glasses/836668612353969/).