<!-- source: https://wearables.developer.meta.com/docs/mock-device-kit | scraped: 2026-04-28 -->

# Mock Device Kit

Updated: Nov 14, 2025

## Overview

Mock Device Kit is a component of the Device Access Toolkit that helps you build and test integrations for Meta glasses, without the need to access the actual hardware.

This kit provides a simulated device that mirrors the capabilities and behavior of Meta glasses, including camera, media streaming, permissions, and device state changes. You can use it to test your app integrations in a virtual environment. This is useful for rapid iteration, automated testing, and development workflows where physical devices may not be available or practical to use.

**Note:** This page demonstrates how the Mock Device Kit is used in the CameraAccess sample. For information on using Mock Device Kit APIs in your own testing, see [Android testing with Mock Device Kit](/docs/testing-mdk-android) or [iOS testing with Mock Device Kit](/docs/testing-mdk-ios).

## Mock Device Kit in the CameraAccess sample

To connect to a simulated device using the sample app:

-   Tap the **Debug icon** on your mobile device. You will see the Mock Device Kit menu open.
-   Tap **Pair RayBan Meta**. A Mock Device card is then added to the view.
-   Swipe down the **Mock Device Kit** menu. The new device should now be available.
    
    ![Image showing how to connect Mock Device Kit](https://scontent-ord5-2.xx.fbcdn.net/v/t39.2365-6/558875216_1849061742688210_6278284956268221084_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=VMNWSV2miqwQ7kNvwFjvudk&_nc_oc=AdqLRdB-VFiHx7P9qRXSZqSF5e5qwxEAumGY7LBp7QVia8SpChFyZPC7HrzffUUr2D4&_nc_zt=14&_nc_ht=scontent-ord5-2.xx&_nc_gid=Uue9UA_dCknug4vd0ykU2A&_nc_ss=7b20f&oh=00_Af0ozXJDXmOLwXZsF-mVekJ0BmPclb6wDT-uIOsBglAqRA&oe=6A0AC1B4)
    

## Changing state

Now that your mock device is paired, you can alter the state of your virtual device:

-   To simulate powering on the glasses, tap **PowerOn**. The device must change to “Connected” on the main screen.
-   To simulate unfolding the glasses, tap **Unfold**. The device is now ready for streaming.
-   To simulate putting on the glasses, tap **Don**.

**Note**: CameraAccess automatically checks camera permissions when you start streaming. If permission isn’t granted, the app redirects to Meta AI to complete the flow.

## Simulating media streaming

To test your app’s media handling capabilities, you can configure the Mock Device Kit with sample media files that simulate video streaming and photo capture from the glasses.

### Streaming video

-   Set your mock device to **Unfold**.
-   Click **Select video** and select any supported video. This video will be used as mock streaming video.
    
    **Note**: Android doesn’t transcode video automatically. Any video used here must be in h265 format. To transcode a video to h265, you can use [FFmpeg⁠](https://www.ffmpeg.org/). For example:
    
     ffmpeg \-hwaccel videotoolbox \-i input\_video.mp4 \-c:v hevc\_videotoolbox \-c:a aac\_at \-tag:v hvc1 \-vf "scale=540:960" output\_video.mov
    

### Image capture

-   Tap **Select image** and select any supported photo. This photo will be used as a mock capture result.
-   Go to the main screen, navigate to the device, and start streaming. You can try capture here as well.