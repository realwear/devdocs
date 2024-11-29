---
sidebar_position: 3
---

# Camera Applet

## Development Example

This example shows how to launch the camera from an application in order to take photos and videos and how to specify the desired location (if any) at which to save the resulting file. There are two options for receiving the image returned from the Camera application:

## Option 1: Raw Bitmap Photo

If you don’t want to specify a target location for the photo file, you can use a standard android media capture intent and receive the resulting data in the onActivityResult callback:

```java
private final static int REQUEST_ID = 123;

public void launchCameraRawPhoto() {
    final Intent cameraIntent = new Intent(MediaStore.ACTION_IMAGE_CAPTURE);
    startActivityForResult(cameraIntent, REQUEST_ID);
}

public void onActivityResult(int requestCode, int resultCode, Intent data) {
    if (resultCode == Activity.RESULT_OK && data != null && requestCode == REQUEST_ID) {
        Bitmap photo = data.getExtras().getParcelable("data");
    }
}
```

**Note**: The intent system can only handle up to 1mb when passing data back in a bundle. If you wish to get a better image quality back, it’s best to use the file mechanism below.

## Option 2: File Provided Uri Photo

To save a file in a specific location on the device, include the target file’s URI in the Intent bundle in the standard Android fashion:

```java
private final static int REQUEST_ID = 123;

public void launchCameraFileProviderPhoto() {
    final ContentValues contentValues = new ContentValues();
    contentValues.put(MediaStore.MediaColumns.DISPLAY_NAME, "my_photo.jpg");
    contentValues.put(MediaStore.MediaColumns.MIME_TYPE, "image/jpg");
    contentValues.put(MediaStore.MediaColumns.RELATIVE_PATH, Environment.DIRECTORY_DCIM);

    final Uri contentUri = getBaseContext().getContentResolver().insert(
        MediaStore.Images.Media.EXTERNAL_CONTENT_URI, contentValues
    );

    final Intent captureIntent = new Intent(MediaStore.ACTION_IMAGE_CAPTURE);
    captureIntent.addFlags(Intent.FLAG_GRANT_WRITE_URI_PERMISSION);
    captureIntent.putExtra(MediaStore.EXTRA_OUTPUT, contentUri);

    startActivityForResult(captureIntent, REQUEST_ID);
}

public void onActivityResult(int requestCode, int resultCode, Intent data) {
    if (resultCode == Activity.RESULT_OK && data != null && requestCode == REQUEST_ID) {
        final Uri photoUri = data.getData();
    }
}
```

## Option 3: Basic Video

If you don’t want to specify a target location for the video file, you can use a standard android media capture intent and receive the resulting data in the onActivityResult callback:

```java
private final static int REQUEST_ID = 123;

public void launchCameraBasicVideo() {
    final Intent intent = new Intent(MediaStore.ACTION_VIDEO_CAPTURE);
    startActivityForResult(intent, REQUEST_ID);
}

public void onActivityResult(int requestCode, int resultCode, Intent data) {
    if (resultCode == Activity.RESULT_OK && data != null && requestCode == REQUEST_ID) {
        final Uri videoUri = data.getData();
    }
}
```

## Option 4: File Provided Uri Video

To save a file in a specific location on the device, include the target file’s URI in the Intent bundle in the standard Android fashion:

```java
private final static int REQUEST_ID = 123;

public void launchCameraFileProviderVideo() {
    final ContentValues contentValues = new ContentValues();
    contentValues.put(MediaStore.MediaColumns.DISPLAY_NAME, "my_video.mp4");
    contentValues.put(MediaStore.MediaColumns.MIME_TYPE, "video/mp4");
    contentValues.put(MediaStore.MediaColumns.RELATIVE_PATH, Environment.DIRECTORY_MOVIES);

    final Uri contentUri = getBaseContext().getContentResolver().insert(
        MediaStore.Video.Media.EXTERNAL_CONTENT_URI, contentValues
    );

    final Intent captureIntent = new Intent(MediaStore.ACTION_VIDEO_CAPTURE);
    captureIntent.addFlags(Intent.FLAG_GRANT_WRITE_URI_PERMISSION);
    captureIntent.putExtra(MediaStore.EXTRA_OUTPUT, contentUri);

    startActivityForResult(captureIntent, REQUEST_ID);
}

public void onActivityResult(int requestCode, int resultCode, Intent data) {
    if (resultCode == Activity.RESULT_OK && data != null && requestCode == REQUEST_ID) {
        final Uri videoUri = data.getData();
    }
}
```

[View Full Source Code](https://github.com/realwear/Developer-Examples/blob/master/hmt1developerexamples/src/main/java/com/realwear/hmt1developerexamples/CameraActivity.java)
