---
sidebar_position: 3
---

# Document Viewer Intents

The RealWear Device comes with a built in document viewerapp which is fully optimized for being controlled by voice commands.

## Open Document

If you want open a document in the document vieweruse the following intent.

Note this is the default intent that is described in Google’s API.

`Intent.ACTION_VIEW`

## Extras

| Extra | Type | Description |
| ----- | ---- | ----------- |
| page | int | Opens the document at the provided page |
| zoom | int | Opens the document at the provided zoom level|

## Supported File Types

- .jpg/.jpeg
- .png
- .bmp
- .webp
- .gif
- .pdf

## Example

For an example of how to play your files in the media player, see our [developer example](https://github.com/realwear/Developer-Examples/blob/master/hmt1developerexamples/src/main/java/com/realwear/hmt1developerexamples/DocumentActivity.java).
