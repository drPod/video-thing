<!-- source: https://wearables.developer.meta.com/docs/ai-assisted-cursor | scraped: 2026-04-28 -->

# Cursor

Updated: Mar 12, 2026

## Overview

[Cursor⁠](https://cursor.sh/) auto-loads `.cursor/rules/*.mdc` files with glob-based triggers. When you’re editing a file that matches a rule’s glob pattern, Cursor loads the relevant SDK knowledge automatically.

## Setup

If you cloned the SDK repo, the `.cursor/` directory is already included. Otherwise, install with the CLI:

./install\-skills.sh cursor

Or install remotely:

iOS:

curl \-sL https://raw.githubusercontent.com/facebook/meta-wearables-dat-ios/main/install-skills.sh | bash -s cursor

Android:

curl \-sL https://raw.githubusercontent.com/facebook/meta-wearables-dat-android/main/install-skills.sh | bash -s cursor

## Usage

Use Cursor Chat or inline editing to ask SDK questions:

Set up a DAT session with camera streaming and handle lifecycle events.

## Adding the API reference

The project-level config covers integration patterns and best practices. To add the full API reference as a persistent documentation source:

-   Open **Settings** > **Features** > **Docs**.
-   Click **Add new doc**.
-   Enter `https://wearables.developer.meta.com/llms.txt?full=true` as the URL.
-   Name it “Wearables DAT SDK”.

Once added, reference it in Cursor Chat with `@Docs`, and then and select the Wearables DAT SDK entry.