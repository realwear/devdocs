---
description: ''
sidebar_position: 1
---
# The Basics

## Do I need a new app?
No, not necessarily. All Android Applications will run on our devices, it's a question of optimisation and whether the interface is usable.

## What Makes it work?
The Basis for making an app work on RealWear devices lies completely within the UI. Our devices come with a service embedded within called WearHF that hooks in to the accessibility service from Android. Turning speech commands in to actions your app can perform.

### Do I need to download any extra packages or SDKs?
Not at all, WearHF is baked in to the Operating System on our hardware, rather than being a dependency you have to add to your app. 

### Will it just work then?
Some parts of your app's UI will work straight away with RealWear Hands-Free operation. Buttons are automatically assigned speech commands by using indexes by default and placing overlays over them to indicate the command to speak, for example. However, this isn't the optimal experience.

### So if there is no SDK, How do you optimise?
This is where WearHF comes in to play. With WearHF, you can specify specific commands and tailor how your app's UI is interpreted by WearHF. We do this by hooking in to the accessibility features of Android and using what are called WearHF directives.

### But what if my app isn't written in Native Android?
WearHF will work with any application that is compiled and runs on the Android system, it doesn't matter whether it is a web app wrapped in an APK, a cross platform app (such as flutter) or a fully native application (either Java or Kotlin). The method and precise location of where the WearHF directives have to be inserted will differ depending on what platform or framework that you are writing in, that is covered [here](./environments/introduction.md). 

### What are WearHF directives?
A wear HF Directive is a piece of code that gets placed in to the Content Descrition field of an Android View. This directive is then interpreted by the WearHF service at runtime and used to create speech commands and set up the behaviour of the UI.
```xml
<!-- 
This button will not have any overlay labels, so the user must rely on the button's text 
to know what to say for the speech command. 
-->
<Button
    android:id="@+id/myButton"
    android:text="Click Me"
    android:contentDescription="hf_no_overlay"
    android:layout_width="wrap_content"
    android:layout_height="wrap_content" />
```
In this case the directive ```hf_no_overlay``` is used to tell the system not to generate any overlays for this particular element.

### What about Jetpack Compose?
You can use Jetpack Compose to do your application UI and still have access to the WearHF service and custom directives. However, we support version 1.4.0 of Compose and above due to issues surrounding a delay in processing voice commands in earlier versions.

