<!-- source: https://wearables.developer.meta.com/docs/ai-assisted-agents-md | scraped: 2026-04-28 -->

# AGENTS.md

Updated: Mar 12, 2026

## Overview

[AGENTS.md⁠](https://agents.md/) is an open standard for guiding AI coding agents. It provides a universal, tool-agnostic way to give any AI assistant context about your project, using the same SDK knowledge that powers our Claude Code, Copilot, and Cursor configs, in a format supported by 20+ AI tools.

## What is AGENTS.md?

`AGENTS.md` is a predictable, discoverable file at the repo root that any AI coding agent can find and use. Key properties:

-   **Standard Markdown** — no required fields or special syntax
-   **Closest file wins** — supports nested files for monorepos
-   **Open standard** — stewarded by the Linux Foundation’s Agentic AI Foundation
-   **Widely supported** — works with Codex, Gemini CLI, Devin, Windsurf, Jules, Cursor, VS Code, Zed, Aider, and others

It’s complementary to `README.md`, but where README is for humans, AGENTS.md is for AI agents, providing additional context that might otherwise clutter a README.

## Which tools support it?

AGENTS.md is supported by a growing ecosystem of AI coding tools, all of which have support for auto-discover:

-   OpenAI Codex
-   Google Gemini CLI
-   Devin
-   Windsurf
-   Jules
-   Cursor
-   VS Code (GitHub Copilot)
-   Zed
-   Aider

## What’s included

The Device Access Toolkit SDK’s `AGENTS.md` file contains the same knowledge as our other tool configs — SDK architecture, API patterns, setup instructions, testing guides, and debugging tips — but structured for universal agent consumption:

-   **Code style** — Architecture, naming conventions, error handling patterns
-   **Dev environment tips** — SDK setup, dependency management, initialization
-   **Testing instructions** — MockDeviceKit setup and test patterns
-   **Building and streaming** — StreamSession, VideoFrame, photo capture
-   **Session management** — Device session states, pause/resume behavior
-   **Permissions** — Registration and camera permission flows
-   **Debugging** — Common issues, Developer Mode, version compatibility
-   **Sample app** — Complete end-to-end integration example

## Setup

### Already included in the repo

Both SDK repositories include `AGENTS.md` at the root:

-   [Android⁠](https://github.com/facebook/meta-wearables-dat-android) — `AGENTS.md`
-   [iOS⁠](https://github.com/facebook/meta-wearables-dat-ios) — `AGENTS.md`

Once you clone the repo, any supported AI tool will auto-discover it.

### Adding to your own project

Use the installer script:

Android:

curl \-sL https://raw.githubusercontent.com/facebook/meta-wearables-dat-android/main/install-skills.sh | bash -s -- agents

iOS:

curl \-sL https://raw.githubusercontent.com/facebook/meta-wearables-dat-ios/main/install-skills.sh | bash -s -- agents

Or install all tool configs at once:

curl \-sL https://raw.githubusercontent.com/facebook/meta-wearables-dat-android/main/install-skills.sh | bash -s -- all

## Other tool configs

The SDK also includes project-level configs for specific AI tools. See the [AI-Assisted Development overview](/docs/ai-assisted/) for the full list.