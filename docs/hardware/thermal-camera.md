# RealWear Thermal Camera Module

:::info
 This document provides simple reference for the RealWear Thermal camera and simple ways for you to include it in your application using the RealWear created Intents. Implementing the thermal camera in this way will not produce the same effects as using the full thermal camera SDK. We have created these Intents for you to include the thermal camera and grab snapshots in a simple way. For a deeper integration with the RealWear Thermal Camera SDK you need to contact developer@realwear.com 
 :::

The RealWear Navigator series of devices introduced our first more modular hardware platform design which allowed us to have the freedom to design and manufacture different hardware modules that would be part of our platform. The first of these is the Thermal Camera Module. The Thermal Camera uses technology from FLIR to give our devices industry standard Thermal Vision capabilities which you can utilise in your apps.

:::danger
Important Information
As of writing, the Thermal Camera Module only supports still image capture, both inside the RealWear Camera app and within third party applications. This page will be updated if/when video support becomes available.
:::

## Utilising the Thermal Camera In Your App

The only supported way to access the Thermal Camera from within a third party app is to launch the RealWear camera app via an Intent from within your app. It is not supported to use a library such as Camera2 or CameraX from within your app to access the Thermal Camera, you **must** use the Intent system to launch the RealWear Camera app. Below is an example of how to do so.

### Permissions

First you need to ensure that your app implements the following permissions in your Manifest

``` xml
<uses-permission android:name="android.permission.CAMERA" />
<uses-permission android:name="android.permission.RECORD_AUDIO" />
```

This will ensure that the Android system knows you want to access the camera hardware.

### Intent Types

There are 2 intent types available to you to use that modify the behaviour of the RealWear camera app once opened

**Thermal Option 1** lets you open the camera app with the Thermal Camera as the preferred option, but allows the user to switch back to the Regular Camera if requested. The app opens in Thermal mode when using this case

:::caution
If a thermal module is not installed on the device when launching the intent with this option, a **WARNING** dialog will be presented to the end-user before the app switches to the Main Visual Camera.
:::

**Thermal Option 2** forces the camera app to open the camera app in Thermal mode but does not allow the user to switch back to regular vision mode.

:::caution
If a thermal module is not installed on the device when launching the intent with this option, an **ERROR** dialog will be presented to the end-user before the camera app closes and the user is returned to your app.
:::

### Flow

These are the basic steps required to set up and take a thermal image

- **Define your URI** - You need to define various attributes for the URI that you pass to the Intent
    - **MIME_TYPE** - this is the media format you wish to capture. For example: *image/jpg*
    - **NAME** - The name of the file you will be capturing. For example: *thermalCapture.jpg*
    - **RELATIVE_PATH** - The path relative to your app that the resulting image will be saved to. For example: *Environment.DIRECTORY_DCIM*

- **Create Image Capture Intent** - Here you combine the URI defined above with the Thermal Capture Mode you require as defined in the Intent Types above. The Intent Type uses a key/value pair with the key being ```"rw_camera_mode"``` and the value being one of the following
    - For **Thermal Option 1** use ```"thermal"```
    - For **Thermal Option 2** use ```"req-thermal"```

- **Take your Photo** - Take your photo within the RealWear camera app after it is launched and then return to your app

- **Listen for Intent Result** - In your code you have to set up a listener to listen for the result of the intent you just sent. This will allow you to view the saved image and do further things with it. The intent result with have 2 key/value pairs with it for the data which look like this

| Key | Value |
| ----------- | ----------- |
| ```MediaStore.EXTRA_OUTPUT``` | The URI as defined by the 3rd party app |
| ```"temperature"``` | The temperature, in Celsius as a String, of the area or spot meter, if selected |

## Code Example
**Intent building**
``` kotlin
fun takePhoto() {
    val thermalContentValues = ContentValues().apply {
        put(MediaStore.MediaColumns.DISPLAY_NAME, "my_photo.jpg") 
        put(MediaStore.MediaColumns.MIME_TYPE, "image/jpg")  
        put(MediaStore.MediaColumns.RELATIVE_PATH, Environment.DIRECTORY_DCIM) 
    }
    val thermalContentUri = baseContext.contentResolver.insert(
        MediaStore.Images.Media.EXTERNAL_CONTENT_URI,
        thermalContentValues 12
    )
    
    val cameraRequestCode: Int = 1337
    val imageCaptureIntent: Intent = Intent(MediaStore.ACTION_IMAGE_CAPTURE).apply {
        addFlags(Intent.FLAG_GRANT_WRITE_URI_PERMISSION)
        putExtra(MediaStore.EXTRA_OUTPUT, thermalContentUri) 
        
        // "thermal" for OPTION 1 
        // "req-thermal" for OPTION 2 
        putExtra("rw_camera_mode", "thermal") 
    } 
    startActivityForResult(imageCaptureIntent, cameraRequestCode)
    }
```

**Intent Result**
```kotlin
override fun onActivityResult(
requestCode: Int, resultCode: Int, data: Intent?) 
{
val cameraRequestCode: Int = 1337 
if (resultCode == Activity.RESULT_OK && requestCode == cameraRequestCode) { 
    data?.let { cameraIntent ->
        val imageUri = cameraIntent.data as? Uri 
        imageUri?.also { findViewById(R.id.imageView).setImageUri(it)} 
    } 
} 
super.onActivityResult(requestCode, resultCode, data)
}
```

:::note
A full code sample/demo app will be available shortly on our GitHub repo
:::
