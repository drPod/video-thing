<!-- source: https://wearables.developer.meta.com/docs/ai-assisted | scraped: 2026-04-28 -->

# AI-Assisted Development

Updated: Mar 12, 2026

## Overview

The Wearables Device Access Toolkit provides two levels of AI assistance for developers:

-   **Project-level config** — SDK knowledge (setup guides, streaming patterns, testing, debugging) delivered directly to your AI tool via config files in the GitHub repos. This is the primary integration path.
-   **API reference endpoint** — The full API surface served via [llms.txt⁠](https://llmstxt.org/) as a supplementary reference for on-demand queries.

## Project-level config

The SDK GitHub repos ship config files for four AI coding tools. Each tool gets the same SDK knowledge — setup guides, streaming patterns, MockDeviceKit testing, session lifecycle, permissions, debugging, and sample app guidance — in whatever format it expects.

Tool

Config

How it loads

[Claude Code⁠](https://docs.anthropic.com/en/docs/claude-code)

`.claude/skills/*.md`

Auto-discovered when you open the project

[GitHub Copilot⁠](https://github.com/features/copilot)

`.github/copilot-instructions.md`

Auto-loaded by Copilot in VS Code

[Cursor⁠](https://cursor.sh/)

`.cursor/rules/*.mdc`

Auto-loaded with glob-based triggers

[AGENTS.md⁠](https://agents.md/)

`AGENTS.md`

Universal — auto-discovered by Codex, Gemini CLI, Devin, Windsurf, Jules, and others

See the dedicated setup guides for each tool: [Claude Code](/docs/ai-assisted-claude-code), [GitHub Copilot](/docs/ai-assisted-github-copilot), [Cursor](/docs/ai-assisted-cursor), [AGENTS.md](/docs/ai-assisted-agents-md).

### Setup

If you cloned the SDK repo, the config is already included — no extra setup needed. Otherwise, use the installer to add it to an existing project:

./install\-skills.sh claude    \# Claude Code only
./install\-skills.sh copilot   \# GitHub Copilot only
./install\-skills.sh cursor    \# Cursor only
./install\-skills.sh agents    \# AGENTS.md only
./install\-skills.sh all       \# All tools

Or install everything remotely with a single command:

iOS:

curl \-sL https://raw.githubusercontent.com/facebook/meta-wearables-dat-ios/main/install-skills.sh | bash

Android:

curl \-sL https://raw.githubusercontent.com/facebook/meta-wearables-dat-android/main/install-skills.sh | bash

### What the config covers

All four tools receive the same SDK knowledge, covering:

-   **Getting started** — Dependencies, project setup, and first integration
-   **Session lifecycle** — Connecting, reconnecting, and managing device sessions
-   **Camera streaming** — Resolution selection, frame rates, and photo capture
-   **Permissions** — Requesting and handling device permissions
-   **MockDeviceKit** — Testing without physical hardware
-   **Debugging** — Common issues, Developer Mode, version compatibility
-   **Sample app guide** — Building a complete DAT app from scratch

## API reference endpoint (llms.txt)

As a supplement to the project-level config, the SDK provides an [llms.txt⁠](https://llmstxt.org/) endpoint with the full API surface. The project config covers integration patterns and best practices; the endpoint covers the API reference (classes, methods, parameters, return types).

### Endpoints

Endpoint

Description

[wearables.developer.meta.com/llms.txt⁠](https://wearables.developer.meta.com/llms.txt)

Index of available documentation sections with links

[wearables.developer.meta.com/llms.txt?full=true⁠](https://wearables.developer.meta.com/llms.txt?full=true)

Full API reference content in a single document

The index endpoint follows the [llms.txt specification⁠](https://llmstxt.org/) and returns a lightweight listing of documentation sections. The `?full=true` variant returns the complete API reference inline, which is what most AI tools need to write code.

### What’s included

The endpoint serves API reference documentation for both iOS (Swift) and Android (Kotlin) platforms, covering:

-   `MWDATCore` — App registration, device discovery, session management, and telemetry
-   `MWDATCamera` — Camera access, resolution and frame rate selection, and photo capture
-   `MWDATMockDevice` — Simulated device for testing without physical hardware

## Tips for effective use

-   **Start with the project-level config** — Clone the repo or run the installer. The project-level config gives your AI tool the integration patterns, best practices, and debugging guidance it needs for most tasks.
-   **Add the API reference when you need specifics** — If your AI tool can’t find a particular method signature or parameter type, point it at the llms.txt endpoint for the full API surface.
-   **Be specific in your prompts** — Mention the platform (iOS or Android) and the module you’re working with (`MWDATCore`, `MWDATCamera`, or `MWDATMockDevice`).
-   **Combine with the guides** — For deeper integration patterns and lifecycle management, point your AI tool at the [integration overview](/docs/build-overview) and platform-specific integration guides ([iOS](/docs/build-integration-ios), [Android](/docs/build-integration-android)).