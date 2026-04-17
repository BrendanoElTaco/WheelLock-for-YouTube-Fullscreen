# WheelLock for YouTube Fullscreen

A lightweight Firefox extension that blocks accidental mouse-wheel input while YouTube videos are in fullscreen.

This is especially useful if you are gaming, multitasking on a second monitor, or using your mouse wheel while a fullscreen YouTube video is open and YouTube starts showing overlays or suggested content from unintended scroll input.

## Features

- Blocks mouse-wheel input only while YouTube is in fullscreen
- Leaves normal scrolling untouched outside fullscreen
- Runs only on YouTube pages
- Lightweight and focused
- No tracking
- No data collection
- No background scripts

## Why this exists

When a YouTube video is fullscreen, accidental mouse-wheel input can trigger unwanted fullscreen UI behavior, overlays, or suggested content.

That is especially annoying when using multiple monitors or when a game does not fully keep the mouse locked to the active window.

WheelLock prevents that by intercepting wheel input only when fullscreen playback is active on supported YouTube pages.

## How it works

The extension runs as a content script on YouTube pages and checks whether the page is currently using the browser Fullscreen API.

When fullscreen is active on a supported YouTube video page, the extension blocks mouse-wheel events before they can trigger unwanted scrolling behavior or overlays.

## Supported pages

- Standard YouTube watch pages
- Shorts
- Live pages

## Privacy

WheelLock for YouTube Fullscreen does not collect, store, transmit, or share any user data.

It runs locally in the browser and only on YouTube pages.

## Installation

### Firefox Add-ons

Once published, install it from the Firefox Add-ons site.

### Temporary installation for testing

You can load the extension temporarily in Firefox for local testing:

1. Open Firefox
2. Go to `about:debugging`
3. Click **This Firefox**
4. Click **Load Temporary Add-on**
5. Select the extension's `manifest.json`

This temporary install will be removed when Firefox restarts.

## Development

### Project structure

```text
manifest.json
script.js
icons/
