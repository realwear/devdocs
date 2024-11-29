# Movie Viewer Applet

## Development Example

The movie viewer can be used by third party applications. These applications can launch the movie viewer application directly, and pass in a video file. In order to launch a video the application passes the location of the file they wish to open. This video must be saved locally on the device.

Applications broadcast `Intent.ACTION_VIEW` with the file’s URI and Mime type.

```java
File movie = 
     new File(Environment.getExternalStorageDirectory(), "document.pdf"); 
String mimeType = MimeTypeMap.getSingleton().getMimeTypeFromExtension( 
     MimeTypeMap.getFileExtensionFromUrl(document.toURI().toString())
); 

Intent intent = new Intent(Intent.ACTION_VIEW); 
intent.addCategory(Intent.CATEGORY_DEFAULT); 
intent.setDataAndType(Uri.fromFile(document), mimeType); 
intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK); 
startActivity(intent)
```

[View Full Source Code](https://github.com/realwear/Developer-Examples/blob/master/hmt1developerexamples/src/main/java/com/realwear/hmt1developerexamples/CameraActivity.java)
