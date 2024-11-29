---
description: ''
---

# Android

![android](../../assets/android.png)

As a developer, you do not need to write any code that deals with the speech recognizer directly. RealWear Devices run a software service called WearHF that lives between the operating system and your Applications. This service intercepts user controls designed for touch and automatically enables them for speech. So as a developer you can continue to program for touch interfaces, and continue to write standard Android applications that run across a number of platforms.

That said, there may be a few occasions where you might want to help WearHF deal with complex UI applications. To enable this, you can add what are called [WearHF](../../wear-ml/embedded-api.md) directives in to your UI code

:::caution

Whilst Jetpack Compose is a new and exciting way to craft UI in Android Mobile development, it is still a quickly evolving platform and as such there may be issues that arise with early versions. We have seen issues with delays in apps responding to voice commands when usinig compose versions below 1.4.0, as such we advise that we only currently support development using Compose 1.4.0 and above

:::

## Three Approaches to Hands-Free Control

There are 3 steps to get your application working on the RealWear Device. Each step unlocks more of the Device's features and creates a better experience for your users, but requires more development to achieve.

Modifying your source code (step 3) unlocks all of the features of the RealWear Device, such as access to prebuilt applications and applets. You can even access the low level guts of RealWear Devices for those developers who really want to push the envelope of hands-free computing.

### 1. Deploy and Go (Good)

The WearHF service will automatically detect the most common controls, and assign voice commands to them at runtime. This will provide a hands-free experience to most applications.

### 2. Create a WearML script (Better)

To provide a smoother user experience, or to help WearHF understand complex applications we have created the WearML scripting language. This sits between the application and the WearHF service and allows a developer to optimize their application for hands-free use, without editing the source code of their application. WearML scripts are created using our RealWear Explorer tool.

[WearML Scripting on RealWear Device](../../wear-ml/wearml-scripting/wearml-scripting.md)

### 3. Optimize your application source code (Best)

Once you have discovered the benefits of the device, the final step is to edit your application to provide a fully optimized user experience. This is done by simply adding WearHF directives into the user interface components of your application – the metadata is ignored by other Android devices, but is used by RealWear Device's to optimize the UI for voice.

[WearHF Directive Reference](../../wear-ml/embedded-api.md)
