---
sidebar_position: 4
---

# Barcode Reader Intents

The RealWear Device comes with a built in barcode reader app which is fully optimized for voice command control.

Scan a barcode
If you need to scan a barcode for your app use the following intent.

`com.realwear.barcodereader.intent.action.SCAN_BARCODE`

## Extras

| Extra | Type | Description |
| ----- | ---- | ----------- |
| com.realwear.barcodereader.intent.extra.CODE_128 | boolean | Add the ability to read Code 128 symbology barcodes* |
| com.realwear.barcodereader.intent.extra.CODE_EAN_UPC | boolean | Add the ability to read EAN/UPC symbology barcodes* |
| com.realwear.barcodereader.intent.extra.CODE_QR | boolean | Add the ability to read QR symbology barcodes* |
| com.realwear.barcodereader.intent.extra.CODE_DM | boolean | Add the ability to read Data Matrix symbology barcodes* |

\* If no symbology intent extras are passed, or if all symbology intent extras are set to false then all available symbology types will be accepted by the barcode reader.

## Response Intent

The SCAN_BARCODE intent should be sent using the startActivityForResult() method as the result is passed back to your app in your activity’s onActivityResult method.

The result is passed back with the following intent.

`com.realwear.barcodereader.intent.action.SCAN_BARCODE`

## Extras

| Extra | Type | Description |
| ----- | ---- | ----------- |
| com.realwear.barcodereader.intent.extra.RESULT | String | The data that was read from the barcode |

## Example

For an example of how to use the barcode reader from your app, see our [developer example](https://github.com/realwear/Developer-Examples/blob/master/hmt1developerexamples/src/main/java/com/realwear/hmt1developerexamples/BarcodeActivity.java).
