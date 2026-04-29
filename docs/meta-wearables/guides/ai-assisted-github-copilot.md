<!-- source: https://wearables.developer.meta.com/docs/ai-assisted-github-copilot | scraped: 2026-04-28 -->

# GitHub Copilot

Updated: Mar 12, 2026

## Overview

[GitHub Copilot⁠](https://github.com/features/copilot) auto-loads `.github/copilot-instructions.md` when you open a project in VS Code. The SDK knowledge is available in Copilot Chat immediately.

Copilot also provides inline completions as you write DAT SDK code — the project config gives it enough context to suggest correct API usage, parameter names, and patterns.

## Setup

If you cloned the SDK repo, the `.github/copilot-instructions.md` file is already included. Otherwise, install with the CLI:

./install\-skills.sh copilot

Or install remotely:

iOS:

curl \-sL https://raw.githubusercontent.com/facebook/meta-wearables-dat-ios/main/install-skills.sh | bash -s copilot

Android:

curl \-sL https://raw.githubusercontent.com/facebook/meta-wearables-dat-android/main/install-skills.sh | bash -s copilot

## Usage

Use Copilot Chat to ask SDK questions directly:

How do I request camera permissions in my iOS DAT app?

## Adding the API reference

The project-level config covers integration patterns and best practices. To also pull in the full API reference during a chat session, paste the URL directly into your Copilot Chat prompt:

Using https://wearables.developer.meta.com/llms.txt?full=true as reference,
what parameters does MWDATCameraSession.startStreaming accept?

Copilot Chat fetches and reads URL contents automatically when you include them in your prompt.