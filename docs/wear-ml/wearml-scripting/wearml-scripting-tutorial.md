---
sidebar_position: 1
---
# WearML Scripting Tutorial

This tutorial will walk you through the steps required to customize your Android application using WearML script to optimize it for the RealWear Device.

The tutorial uses a simple “Devil’s Canyon Application” which consists of a single screen containing 3 logos showing some delicious beers.
Selecting each logo will show a short description about each beer.

## Installation

For this tutorial you will need to have RealWear Explorer installed on your computer. Information about RealWear Explorer can be found on the [RealWear Explorer page](../../downloads/realwear-explorer.md)

The Devil’s Canyon application can be downloaded as a compiled APK ready to be installed.

[Download Zip](https://realwear.box.com/shared/static/b4hmjso6yb7vn5pndkwfve1qmx7qj1gk.zip)

## Contents of zip

DevilsCanyon.apk – The Devil’s Canyon application without any modifications

## Install application

When getting your application ready for the RealWear Device, the first step is to install it to understand which functions WearHF will support automatically.

WearHF will automatically interrogate the UI tree of the application and detect the 3 logos as buttons. WearHF will then assign voice commands to these buttons.

Once installed run the Devil’s Canyon app.

Since the buttons don’t have any strings associated with them WearHF is unable to assign a corresponding command, so instead defaults to a “SELECT ITEM X” format. This allows the user to select each item using the voice commands “SELECT ITEM 1”, “SELECT ITEM 2” and “SELECT ITEM 3”. Using the global “SHOW HELP” command will display an overlay over each item so the user can know which command belongs to which beer.

While this shows the application working on the RealWear Device it would be great if we can tell WearHF how to understand the application a little better. This is what WearML was designed for.

## Generate a WearML Script

RealWear Explorer can generate a default WearML script which represents the default screen which we can use as a starting point. To generate this file open the WearML editor by selecting the WearML button in RealWear Explorer. This opens the WearML Editor window.

Ensure the Devils Canyon Application is showing the correct view and select “Capture”.
Enter a meaningful name into the save dialog which represents the screen the WearML script is going to optimize. Enter “Devils_Canyon_Home_Screen”
Click the Save button to generate the WearML Script
RealWear Explorer should automatically open the WearML script in the configured text editor. If this doesn’t happen double click “Devils_Canyon_Home_Screen.xml” in the WearML editor.

## Edit WearML Script

RealWear Explorer should have generated the following The WearML script which represents the Devils Canyon Application:

```html
<WearML> 
     <Package>com.realwear.devilscanyon</Package> 
     <Language>en_US</Language> 
     <UniqueIdentifier id_or_type_or_text_or_content_description="xyz"/> 
     <View type="android.widget.FrameLayout"> 
          <View id="com.realwear.devilscanyon:id/boar" type="android.widget.ImageButton"/> 
          <View id="com.realwear.devilscanyon:id/sunshine" type="android.widget.ImageButton"/> 
          <View id="com.realwear.devilscanyon:id/amber" type="android.widget.ImageButton"/> 
          <View id="com.realwear.devilscanyon:id/title" text="Deadicated Amber Ale" type="android.widget.TextView"/> 
          <View id="com.realwear.devilscanyon:id/description" text="Rich and medium bodied with a subtle blend of caramel malts that give way to a well-balanced bouquet of cascade hops." type="android.widget.TextView"/> 
     </View> 
</WearML>
```

To modify the screen to provide a better user experience we can make the following changes:

## Create a UniqueIdentifier

In order for the WearHF service to understand which screen this WearML script belongs to we need to bind this file to the screen. This is done by finding an ID, content description, type, or text attribute which is unique to this screen. WearHF will look for the attribute when the screen is displayed and if it appears WearHF will apply the WearML script.

For this example we are going to bind the view id ‘com.realwear.devilscanyon:id/boar’ as our unique identifier. This now means whenever the view ‘com.realwear.devilscanyon:id/boar’ is on screen WearHF will pull in this custom WearML file.

Update the UniqueIdentifier tag to identify that WearHF should look for the id attribute com.realwear.devilscanyon:id/boar:

```html
<UniqueIdentifier id="com.realwear.devilscanyon:id/boar"/>
```

## Set commands to always be visible

To help the user know what to say, we will start by making the overlays always visible. In order to do this we use the attribute overlay_persists on each button.

```html
<View id="com.realwear.devilscanyon:id/boar" type="android.widget.ImageButton" overlay_persists="yes" /> 
<View id="com.realwear.devilscanyon:id/sunshine" type="android.widget.ImageButton" overlay_persists="yes" /> 
<View id="com.realwear.devilscanyon:id/amber" type="android.widget.ImageButton" overlay_persists="yes" />
```

## Set speech command

Instead of using the default “SELECT ITEM X” for each button we can give the button a more useful voice command. To do this use the attribute speech_command.

We also provide an overlay_show_text attribute to tell WearML to show the text on the help overlay.

```html
<View id="com.realwear.devilscanyon:id/boar" type="android.widget.ImageButton" overlay_persists="yes" speech_command="Select Boar" overlay_show_text="yes" /> 
<View id="com.realwear.devilscanyon:id/sunshine" type="android.widget.ImageButton" overlay_persists="yes" speech_command="Select Sunshine" overlay_show_text="yes" /> 
<View id="com.realwear.devilscanyon:id/amber" type="android.widget.ImageButton" overlay_persists="yes" speech_command="Select Amber" overlay_show_text="yes" />
```

### Turn numbers off

Finally we can switch off the numbers as we have now assigned more natural voice commands. To do this we use the attribute overlay_show_number.

```html
 <View id="com.realwear.devilscanyon:id/boar" type="android.widget.ImageButton" overlay_persists="yes" speech_command="Select Boar" overlay_show_text="yes" overlay_show_number="no" /> 
 <View id="com.realwear.devilscanyon:id/sunshine" type="android.widget.ImageButton" overlay_persists="yes" speech_command="Select Sunshine" overlay_show_text="yes" overlay_show_number="no" /> 
 <View id="com.realwear.devilscanyon:id/amber" type="android.widget.ImageButton" overlay_persists="yes" speech_command="Select Amber" overlay_show_text="yes" overlay_show_number="no" />
```

### Save WearML Script

Save the edited WearML script and RealWear Explorer will automatically detect the changes and upload them to the RealWear Device. The application should then show your changes immediately.

## What’s next?

There are many more options available in WearML. To discover all the available options please visit the WearML Scripting API

When you have finished editing your WearML script it can be pushed onto other devices by copying the XML file. WearML files can be found in the location “`/sdcard/.wearml/PACKAGE_NAME/`.
