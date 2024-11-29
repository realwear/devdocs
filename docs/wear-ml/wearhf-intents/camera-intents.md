---
sidebar_position: 2
---

# Camera Intents

The RealWear Device comes with a built in camera app which is fully optimized for being controlled by voice commands.
The camera app supports both taking photos and the recording of video.

## Capture a photo
If you want the camera app to capture a photo for your app, use the following intent.

Note this is the default intent that is described in Google’s API.

`MediaStore.ACTION_IMAGE_CAPTURE`

### Photo Extras

| Extra | Type | Description |
| ----- | ---- | ----------- |
| MediaStore.EXTRA_OUTPUT | Uri | Uri to where the photo data should be saved to |

### Photo Response

The ACTION_IMAGE_CAPTURE intent should be sent using the startActivityForResult() method as the result is passed back to your app in your activity’s onActivityResult method.

The result code passed to onActivityResult indicates if the photo was successfully taken or not.

| Result Code | Description |
|------------ | ----------- |
| Activity.RESULT_OK | The photo was taken successfully, the image is saved to the URI that was passed in |
| Activity.RESULT_CANCELED | The user decided not to take a photo. This could happen if they close the camera app without taking a photo |

## Capture a video

If you want the camera app to capture a video for your app, use the following intent.

Note this is the default intent that is described in Google’s API.

`MediaStore.ACTION_VIDEO_CAPTURE`

### Video Extras

| Extra | Type | Description |
| ----- | ---- | ----------- |
| MediaStore.EXTRA_OUTPUT | Uri | Uri to where the video data should be saved to |

### Video Response

The ACTION_VIDEO_CAPTURE intent should be sent using the startActivityForResult() method as the result is passed back to your app in your activity’s onActivityResult method.

The result code passed to onActivityResult indicates if the video was recorded was successfully or not.

| Result Code | Description |
| ----------- | ----------- |
| Activity.RESULT_OK | The video was recorded successfully, the video is saved to the URI that was passed in |
| Activity.RESULT_CANCELED | The user decided not to record a video. This could happen if they close the camera app without doing a recording |

## Example

For an example of how to use the camera from your app, see our [developer example](https://github.com/realwear/Developer-Examples/blob/master/hmt1developerexamples/src/main/java/com/realwear/hmt1developerexamples/CameraActivity.java).
