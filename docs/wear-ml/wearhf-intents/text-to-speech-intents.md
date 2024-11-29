---
sidebar_position: 2
---

# Text to Speech (TTS) Intents

WearHF provides a TTS (text to speech) service which allows your app to speak text out to the user using the RealWear Device's speaker. This provides an alternate way to provide information other than using the screen.

## Send a string to the TTS service

If you want WearHF to read out a string of text using TTS, use the following intent.

## Intent

`com.realwear.ttsservice.intent.action.TTS`

## Extras

| Extra | Type | Description |
| ----- | ---- | ----------- |
| text_to_speak | String | The string that the TTS service should read to the user |
| pause_speech_recognizer | boolean | true if the speech recognizer should be paused while TTS is reading out the text to the user. false if the speech recognizer should continue to accept voice commands while TTS is reading out the text to the user |
| tts_id | int | A unique ID that will be passed back when the TTS service has completed reading out the text |

## Response Intents

When the TTS service beings playing out your text it will send out an intent to let your app know.

`com.realwear.ttsservice.intent.action.TTS_STARTED`

When the TTS service has finished playing out your text it will send out an intent to let your app know.

`com.realwear.ttsservice.intent.action.TTS_FINISHED`

Example
For an example of how to use TTS in your app, see our [developer example](https://github.com/realwear/Developer-Examples/blob/master/hmt1developerexamples/src/main/java/com/realwear/hmt1developerexamples/TTSActivity.java).
