---
description: ''
sidebar_position: 1
---

# Introduction


![Screen-Shot-2019-08-22-at-3.36.08-PM](../../assets/Screen-Shot-2019-08-22-at-3.36.08-PM.png)

All RealWear devices are powered by Android. The OS is based on AOSP and doesn't ship with Google Services embedded. With this in mind, any Android app that would run on an Android phone or tablet will run on any of our devices with a few caveats.

Therefore, there is no specific way that you have to or need to develop your application for it to work on RealWear Devices.

Below is a list of popular development frameworks that we have seen partners use to develop apps that run on our devices. To find out more details, including code samples and demonstration applications, click on any of the links.

- [Android](../environments/android.md)
- [Cordova](../environments/cordova.md)
- [HTML](../environments/html.md)
- [React Native](../environments/react-native.md)
- [Unity](../environments/unity.md)
- [Xamarin](../environments/xamarin.md)

:::caution

Whilst our platform allows apps to be developed using third-party frameworks such as these, we recommend against using these frameworks as they may introduce complications that we cannot guarantee to solve. Instead, we strongly encourage developers to write apps in native code to ensure greater stability and avoid potential issues that may arise from using these frameworks.

One such example of this would be that on later versions of Google's WebView, the API for camera zoom no longer works. This isn't an issue that RealWear can fix directly, but will affect any developers attempting to use Frameworks such as [Cordova](../environments/cordova.md). 

:::