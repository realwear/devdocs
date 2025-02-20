# Telephoto Mode

## Overview

Navigator devices support a telephoto mode that provides up to 4X zoom while maintaining full-HD (1080p) quality. The telephoto setting can be toggled from My Camera or Android Settings, and it is persistant across apps. 

To ensure consistency within your app, when you display the camera you should also display the current telephoto setting, and allow users to toggle it.

## Implementation

### Checking Telephoto Mode Status

To get the current telephoto setting you request it from Android Settings, and the result is returned as a broadcast: 

```java
private fun requestBinningModeSettings() {
    val intent = Intent(INTENT_GET_CAMERA_SETTINGS).apply {
        component = ComponentName(ANDROID_SETTINGS_PKG, RW_CAMERA_GET_RECEIVER)
    }

    val receivers = packageManager.queryBroadcastReceivers(intent, PackageManager.GET_META_DATA)
    if (receivers.isNotEmpty()) sendBroadcast(intent)
    else Log.e(TAG, "No receiver for telephoto settings request.")
}

private val cameraBroadcastReceiver: BroadcastReceiver = object : BroadcastReceiver() {
    override fun onReceive(context: Context, intent: Intent) {
        val action = intent.action
        if (action == INTENT_GET_CAMERA_SETTINGS) {
            val newBinning = intent.getStringExtra(BINNING_LABEL)
            if (newBinning == BINNING_MODE_FULL) {
                Log.i(TAG, "Camera is currently in telephoto mode: full (crop)")
            } else {
                Log.i(TAG, "Camera is currently in telephoto mode: binning")
            }
        }
    }
}

companion object {
    private const val TAG = "Telephoto"

    private const val ANDROID_SETTINGS_PKG = "com.android.settings"

    private const val INTENT_GET_CAMERA_SETTINGS = "com.android.settings.realwear_camera_GET"

    private const val RW_CAMERA_GET_RECEIVER = "com.android.settings.RealwearCameraGetReceiver"

    private const val BINNING_LABEL = "sensor"
    private const val BINNING_MODE_FULL = "full" // Zoomed in.
}
```

### Enabling or Disabling Telephoto Mode

To toggle thge telephoto setting, send a broadcast to Android Settings:

```java
fun enableTelephotoMode() = setTelephotoMode(BINNING_MODE_FULL)
fun disableTelephotoMode() = setTelephotoMode(BINNING_MODE_BINNING)

private fun setBinningMode(mode: String) {
    val intent = Intent(INTENT_SET_CAMERA_SETTINGS)
    intent.putExtra(BINNING_LABEL, mode)
    intent.component = ComponentName(ANDROID_SETTINGS_PKG, RW_CAMERA_SET_RECEIVER)
    sendBroadcast(intent)
}

companion object {
    private const val ANDROID_SETTINGS_PKG = "com.android.settings"

    private const val INTENT_SET_CAMERA_SETTINGS = "com.android.settings.realwear_camera_SET"

    private const val RW_CAMERA_SET_RECEIVER = "com.android.settings.RealwearCameraSetReceiver"

    private const val BINNING_LABEL = "sensor"
    private const val BINNING_MODE_BINNING = "binning" // Zoomed out - full frame.
    private const val BINNING_MODE_FULL = "full" // Zoomed in.
}
```

[View Full Source Code](https://gist.github.com/RealWearDevBot/0905e1532531891aae3c6f26d390c21c)
