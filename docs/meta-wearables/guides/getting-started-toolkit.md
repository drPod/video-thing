<!-- source: https://wearables.developer.meta.com/docs/getting-started-toolkit | scraped: 2026-04-28 -->

# Setup

Updated: Apr 16, 2026

## Overview

The Wearables Device Access Toolkit supports iOS and Android mobile platforms, with the same OS version requirements as the Meta AI app (iOS 15.2+ and Android 10+).

Xcode 14.0+ is supported for iOS. Android Studio Flamingo or newer is supported for Android.

## Hardware requirements

Currently, the SDK supports the Ray-Ban Meta (Gen 1 and Gen 2), Ray-Ban Meta Optics, and Meta Ray-Ban Display glasses. You can test with a simulated device using [Mock Device Kit](/docs/mock-device-kit), or directly with a device. Detailed version support of the Meta AI app and glasses firmware is located in the [Version Dependencies](/docs/version-dependencies) page.

## Setting up your glasses

To set up your glasses for development:

-   Ensure your Meta AI app version is v254+.
-   Ensure your glasses software is version v20+ for Ray-Ban Meta glasses or v21+ for Meta Ray-Ban Display glasses. Follow the instructions below to verify your current version.
-   Connect your glasses to the Meta AI app.
-   Enable developer mode (instructions below).

### Verify glasses software version

-   In the Meta AI app, go to the Devices tab (the glasses icon at the bottom of the app), and select your device.
-   Tap the gear icon to open **Device settings**.
-   Tap **General** > **About** > **Version**.
-   You should have the minimum supported version or above installed on your glasses, as outlined [here](/docs/version-dependencies).
-   If your version is below minimum support requirements, update your glasses software.

### Enable developer mode in the Meta AI app

-   On your iOS or Android device, select **Settings** > **App Info**, and then tap the **App version** number five times to display the toggle for developer mode.
-   Select the toggle to enable **Developer Mode**.
-   Click **Enable** to confirm.

**iOS**

![Image of enabling developer mode on an iOS device](https://scontent-ord5-3.xx.fbcdn.net/v/t39.2365-6/559205454_1850889009172150_8783518501745032329_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=tKx-ZekQ3CsQ7kNvwEBlT5r&_nc_oc=AdovIL97oyk6QJmDiJzJiTBOwMLVIs-dpEmSXkbKHucUQjBxW-YI-KkekJ-rRlOZnrk&_nc_zt=14&_nc_ht=scontent-ord5-3.xx&_nc_gid=MddZC6KjQFx-X6Ouv59VIQ&_nc_ss=7b20f&oh=00_Af1DT1Hgbb7XW_39ZE4hensXcFig4WIJzKH1tbShQtZvTw&oe=6A0AD00D)

**Android**

![Image of enabling developer mode on an android device](https://scontent-ord5-2.xx.fbcdn.net/v/t39.2365-6/560041248_1850888972505487_6549169074798622417_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=UKqTIqKF_2UQ7kNvwE6blV-&_nc_oc=AdpzwL3ZMyzdmbT5JcnrlA43uzUgPIbikqjDU3Q9bbRLg3CijDEMNNVXqNNn-Fes-dQ&_nc_zt=14&_nc_ht=scontent-ord5-2.xx&_nc_gid=MddZC6KjQFx-X6Ouv59VIQ&_nc_ss=7b20f&oh=00_Af08ptTZgrsNAMeYRy8AaDwr2Unh18ZChkeljXtVuMGCig&oe=6A0AD2EA)