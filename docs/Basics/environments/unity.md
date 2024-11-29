---
description: 'Developing RealWear apps using Unity game engine'
---

# Unity

![unity-150x150](../../assets/unity-150x150.png)

:::caution Not Supported

Whilst our platform allows apps to be developed using third-party frameworks such as these, we recommend against using these frameworks as they may introduce complications that we cannot guarantee to solve. Instead, we strongly encourage developers to write apps in native code to ensure greater stability and avoid potential issues that may arise from using these frameworks.

Unity apps will function on RealWear devices but no support is offered to developers.

:::

Unity applications do not function in the same way that standard Android applications do, so WearHF is not able to interpret them in the same way out of the box.

However, we have developed a plugin that enables speech commands to work in Unity applications with a small amount of development.

The Unity Plugin is RealWear’s solution to accessing the WearHF Voice Service running on the RealWear Device headset from inside a Unity Application.

There are 2 files required by your Unity application to access the WearHF service: a native Android plugin and a managed C# plugin. A Unity project will use the managed plugin to add and remove voice commands to the WearHF service.

## Download

The Unity plugin can be downloaded as a zip file which can be extracted and imported into your project.

[Download Zip (v1.1.0)](https://realwear.box.com/shared/static/isfnzrw3el5lbex66fl1pzk00rrlp87x.zip)

## Contents of Zip

Download link above contains:

WearHFPlugin.dll – The complied Managed Unity Plugin.

WearHFUtils.aar – The complied Native Plugin.

The following tutorial shows how to use this plugin inside a Unity project.

[Tutorial](../../unity-development/tutorial.md)

This example Unity application (with source code) is provided to show the plugin in action.

[Example](../../unity-development/unity-development-examples/unity-examples.md)

The API shows all the available functionality of the plugin.

[API](../../unity-development/api-reference.md)
