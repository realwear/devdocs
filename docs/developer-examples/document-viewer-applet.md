# Document Viewer Applet

## Development Example

The document viewer can be used by third party applications. These applications can launch the document viewer application directly and pass in a document or image to view. In order to launch a document the application passes the location of the file they wish to open. This document must be saved locally on the device

Applications broadcast `Intent.ACTION_VIEW` with the file’s URI and Mime type.

```java
File document = 
    new File(Environment.getExternalStorageDirectory(), "document.pdf"); 
String mimeType = MimeTypeMap.getSingleton().getMimeTypeFromExtension( 
    MimeTypeMap.getFileExtensionFromUrl(document.toURI().toString())
); 

if (mimeType != null) { 
    Intent intent = new Intent(Intent.ACTION_VIEW); 
    intent.addCategory(Intent.CATEGORY_DEFAULT); 
    intent.setDataAndType(Uri.fromFile(document), mimeType); 
    intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK); 
}
startActivity(intent)
```

__IMPORTANT: For compatibility with HMT-1 Release 10 and above, you need to implement a [FileProvider](https://developer.android.com/reference/android/support/v4/content/FileProvider) to handle URI creation instead of Uri.fromFile().__

The FileProvider must be specified in the AndroidManifest.xml file, with the following attributes:

```java
<provider
    android:name="android.support.v4.content.FileProvider"
    android:authorities="${applicationId}.fileprovider"
    android:exported="false"
    android:grantUriPermissions="true">
    <meta-data
        android:name="android.support.FILE_PROVIDER_PATHS"
        android:resource="@xml/file_paths" />
</provider>
```

As the directories used by the FileProvider must be specified beforehand, one or more child elements of the \<paths\> element should be added to the *res/xml/file_paths.xml* file.

```java
<paths>
    <external-files-path name="my_documents" path="Documents" /> 
</paths>
```

This path component must correspond to the path used to create the output file in the java code. In this case the File that corresponds is the following:

final File mediaStorageDir = getExternalFilesDir(Environment.DIRECTORY_DOCUMENTS);

Finally, to invoke the camera intent, the URI is given by the FileProvider and passed into the intent.

```java
File document = new File(mediaStorageDir, "document.pdf");

String mimeType = MimeTypeMap.getSingleton().getMimeTypeFromExtension(
    MimeTypeMap.getFileExtensionFromUrl(document.toURI().toString())
); 

final Uri contentUri = FileProvider.getUriForFile(
    getApplicationContext(),
    getApplicationContext().getPackageName() + ".fileprovider",
    document
);

if(mimeType != null){
    final Intent viewIntent = new Intent(Intent.ACTION_VIEW); 
    viewIntent.addCategory(Intent.CATEGORY_DEFAULT);
    viewIntent.addFlags(Intent.FLAG_GRANT_READ_URI_PERMISSION);
    viewIntent.setDataAndType(contentUri, mimeType); 
    viewIntent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);

    startActivity(viewIntent);
}
```

## Bundle Extras

There are a few additional Extras you can include with your View intent to customize the user experience upon launching the DocumentViewer:

| Key  | Argument Type | Description                                                                        |
|------|---------------|------------------------------------------------------------------------------------|
| page | int           | Use to specify which page to open first. Default: 1                                |
| zoom | int           | Use to specify which zoom level should be active upon opening document. Default: 1 |

[View Full Source Code](https://github.com/realwear/Developer-Examples/blob/master/hmt1developerexamples/src/main/java/com/realwear/hmt1developerexamples/DocumentActivity.java)
