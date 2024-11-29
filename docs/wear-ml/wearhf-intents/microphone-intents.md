---
sidebar_position: 5
---

# Microphone Intents

WearHF continually listens to the microphone to provide responsive voice commands to the user.

Applications can still access the microphone though the standard Android interfaces at the same time, so they should work side-by-side with WearHF without any issues.

However, an application may request WearHF to release the microphone and stop WearHF from being able to access it. When this happens the rest of the Android system and any app will still have access to the microphone, following the standard Android principles.

This feature should be used with caution as it will disable behavior that the user may be expecting; for example, all WearHF voice recognition will be disabled until the microphone is re-enabled.

Releasing the microphone
If you want WearHF to release the microphone use the following intent.

## Intent

__Warning__: You must re-enable the microphone again once you have finished, using the MIC_RELEASED intent.

`com.realwear.wearhf.intent.action.RELEASE_MIC`

## Extras

| Extra | Type | Description |
| ----- | ---- | ----------- |
| com.realwear.wearhf.intent.extra.SOURCE_PACKAGE | String | The package ID for your app |
| com.realwear.wearhf.intent.extra.MUTE_TEXT | String | An optional string to display to the user to explain that the microphones have been released. Note a default string is used if no mute text is passed |
| com.realwear.wearhf.intent.extra.HIDE_TEXT | boolean | true if the mute text should not be shown to the user. false if the mute text should be shown to the user (default) |

### Response Intent

When you request for the microphone to be released, WearHF will respond to confirm when the release is complete with the following intent.

`com.realwear.wearhf.intent.action.MIC_RELEASED`

## Extras

None.

## Example

For an example of how to release the microphone, see our developer example.

## Re-enabling the microphone

Once you no longer need WearHF to release the microphone it is important to re-enable it. Leaving the microphone released when your app is closed will mean the rest of the system is unable to use voice controls.

To re-enable the microphone use the following intent:

`com.realwear.wearhf.intent.action.MIC_RELEASED`

## Extras

None.

## Example

For an example of how to re-enable the microphone, see our [developer example](https://github.com/realwear/Developer-Examples/blob/master/hmt1developerexamples/src/main/java/com/realwear/hmt1developerexamples/MicrophoneReleaseActivity.java).
