# WheelLock for YouTube Fullscreen

A lightweight Firefox extension that blocks accidental mouse-wheel input while YouTube videos are in fullscreen.

This is useful if you are gaming, working on a second monitor, or otherwise using your mouse wheel while a fullscreen YouTube video is open and YouTube starts showing overlays or suggested content from unintended scroll input.

## Features

- Blocks mouse-wheel input only while YouTube is in fullscreen
- Leaves normal scrolling untouched outside fullscreen
- Runs only on YouTube pages
- Lightweight and simple
- No tracking
- No data collection
- No background scripts

## Why this exists

When a YouTube video is fullscreen, accidental mouse-wheel input can trigger unwanted fullscreen UI behavior. That is especially annoying when using multiple monitors or when a game does not fully keep the mouse locked.

WheelLock prevents that by intercepting wheel input only when fullscreen playback is active.

## How it works

The extension runs as a content script on YouTube pages and checks whether the page is currently using the browser Fullscreen API.

When fullscreen is active on a supported YouTube video page, the extension blocks mouse-wheel events before they can trigger unwanted scrolling behavior or overlays.

## Supported pages

- Standard YouTube watch pages
- Shorts
- Live pages

## Privacy

WheelLock for YouTube Fullscreen does not collect, store, transmit, or share any user data.

It runs locally in the browser and only on `youtube.com` pages.

## Installation

### Temporary installation for testing

You can load the extension temporarily in Firefox for local testing:

1. Open Firefox
2. Go to `about:debugging`
3. Click **This Firefox**
4. Click **Load Temporary Add-on**
5. Select the extension's `manifest.json`

This temporary install will be removed when Firefox restarts.

### Permanent installation on standard Firefox

For normal Firefox installs, the extension must be signed before it can be permanently installed.

General process:

1. Package the extension files into a `.zip`
2. Submit it for unlisted signing through AMO
3. Download the signed `.xpi`
4. In Firefox, open **Add-ons and themes**
5. Click the gear icon
6. Choose **Install Add-on From File**
7. Select the signed `.xpi`

## Development

### Project structure

```text
manifest.json
script.js
icons/