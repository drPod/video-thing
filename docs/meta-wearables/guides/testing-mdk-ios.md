<!-- source: https://wearables.developer.meta.com/docs/testing-mdk-ios | scraped: 2026-04-28 -->

# How to test with Mock Device Kit on iOS

Updated: Nov 14, 2025

## Overview

Use this guide when your iOS project already integrates the Wearables Device Access Toolkit and you need to test without physical glasses.

## Set up Mock Device Kit in XCTest

Create a reusable base rule or test class that configures Mock Device Kit, grants permissions, and resets state.

import XCTest  
import MetaWearablesDAT  
  
@MainActor  
class MockDeviceKitTestCase: XCTestCase {  
    private var mockDevice: MockRaybanMeta?  
    private var cameraKit: MockCameraKit?  
  
    override func setUp() async throws {  
        try await super.setUp()  
  
        try? Wearables.configure()  
        mockDevice \= MockDeviceKit.shared.pairRaybanMeta()  
        cameraKit \= mockDevice?.getCameraKit()  
    }  
  
    override func tearDown() async throws {  
        MockDeviceKit.shared.pairedDevices.forEach { device in  
            MockDeviceKit.shared.unpairDevice(device)  
        }  
        mockDevice \= nil  
        cameraKit \= nil  
        try await super.tearDown()  
    }  
}  
  

## Configure camera feeds for streaming tests

Mock camera feeds let you verify streaming and capture workflows without video hardware.

### Provide a mock video feed

guard let device \= MockDeviceKit.shared.pairRaybanMeta() else { return }  
let camera \= device.getCameraKit()  
await camera.setCameraFeed(fileURL: videoURL)  
  

### Provide a captured photo

guard let device \= MockDeviceKit.shared.pairRaybanMeta() else { return }  
let camera \= device.getCameraKit()  
await camera.setCapturedImage(fileURL: imageURL)