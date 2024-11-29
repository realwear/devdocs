---
sidebar_position: 7
---

# Show Help Intents

The RealWear Device has a global Show Help voice command that the user can use at any point to discover the options they have available to them. This function ensures that they never feel lost as they can quickly find the voice commands that may not be immediately obvious to them.
The device also displays a Show Help button permanently on the screen so the user always has help available if they ever get stuck.

WearHF provides some intents that allow your app to change the default functionality of the Show Help button and menu.

## Showing and hiding the Show Help button

If you do not want the Show Help button to be displayed inside your app, it is possible to hide it using the following intent.

### Intent

`com.realwear.wearhf.intent.action.SHOW_HELP_COMMAND`

### Extras

| Extra | Type | Description |
| ----- | ---- | ----------- |
| com.realwear.wearhf.intent.extra.SHOW_HELP_VISIBLE | boolean | true if the Show Help buttons should be shown to the user. false if the Show Help button should be hidden from the user |
| com.realwear.wearhf.intent.extra.SHOW_HELP_GET_STATUS | void | Used to get the current status of the Show Help button visibility |
| com.realwear.wearhf.intent.extra.SOURCE_PACKAGE | String | The package ID for your app |

## Getting the current visibility setting for the Show Help button

Your app can query if the Show Help button is shown or hidden for your app using the following intent.

`com.realwear.wearhf.intent.action.SHOW_HELP_COMMANDS`

### Extras

| Extra | Type | Description |
| ----- | ---- | ----------- |
| com.realwear.wearhf.intent.extra.SHOW_HELP_GET_STATUS | void | Used to get the current status of the Show Help button visibility |
| com.realwear.wearhf.intent.extra.SOURCE_PACKAGE | String | The package ID for your app |

### Response Intent

When querying the current visibility status, the response is sent back to your application with the following intent.

`com.realwear.wearhf.intent.status.SHOW_HELP_COMMANDS`

### Extras

| Extra | Type | Description |
| ----- | ---- | ----------- |
| com.realwear.wearhf.intent.extra.SHOW_HELP_VISIBLE | boolean | true if the Show Help buttons is currently visible. false if the Show Help button is currently hidden |

## Update Help Commands

If you want to add your own voice commands to the Show Help menu so your users can easily find out what the commands they need are, you can use the following intent.

### Intent

`com.realwear.wearhf.intent.action.UPDATE_HELP_COMMANDS`

### Extras

| Extra | Type | Description |
| ----- | ---- | ----------- |
| com.realwear.wearhf.intent.extra.SOURCE_PACKAGE | String | The package ID for your app |
| com.realwear.wearhf.intent.extra.HELP_COMMANDS | ArrayList\<String\> | The list of voice commands to display in the help menu |

## Example

For an example of how to add voice commands to the Show Help window in your app, see our [developer example](https://github.com/realwear/Developer-Examples/blob/master/hmt1developerexamples/src/main/java/com/realwear/hmt1developerexamples/ShowHelpActivity.java).
