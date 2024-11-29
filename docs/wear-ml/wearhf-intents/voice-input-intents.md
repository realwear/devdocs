---
sidebar_position: 6
---
# Voice Input Intents

Most applications require the user to input some form of text, such as when typing their username and password during login.

The RealWear Device comes with 2 main methods for inputting information:

A standard keyboard which allows the user to use their voice to enter information by speaking characters
Dictation input which allows the user to speak in sentences
The best method will depend on the situation, and an application may use both methods for different types of inputs. For example the keyboard is best when entering entering an e-mail address while dictation would be better suited to typing out e-mail messages.

## Dictation

Starts a new dictation activity for the user to enter some text using the dictation engine.

### Intent

`com.realwear.wearhf.intent.action.DICTATION`

### Extras

| Extra | Type | Description |
| ----- | ---- | ----------- |
| com.realwear.wearhf.intent.extra.SOURCE_PACKAGE | String | The package ID for your app. |

This is required as the result is passed back to this package ID.

### Response Intent

When dictation is complete WearHF will send the dictation response back to your application using the following:

## Dictation Successful

`com.realwear.wearhf.intent.action.DICTATION_RESULT`

### Extras

| Extra | Type | Description |
| ----- | ---- | ----------- |
| com.realwear.wearhf.intent.extra.TEXT | String | The dictation result |

## Dictation Error

`com.realwear.wearhf.intent.action.DICTATION_ERROR`

### Extras

None.

## Example

For an example of how to use dictation, see our [developer example](https://github.com/realwear/Developer-Examples/blob/master/hmt1developerexamples/src/main/java/com/realwear/hmt1developerexamples/DictationActivity.java).
