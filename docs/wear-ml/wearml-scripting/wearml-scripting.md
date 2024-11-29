---
description: ''
sidebar_position: 1
---

# Introduction

:::caution

Whilst this is a perfectly valid method of voice enabling an application, the officially preferred method is to use [WearHF](../embedded-api.md) Directives in your UI source code to get the best results possible

:::

WearML is a markup language that can be used to assist the WearHF service in correctly understanding an Android application for a hands-free experience. It consists of a list directives that can be associated within the user interface tree.

When building a standard Android application, the developer must build up a user interface screen by assembling UI components onto a canvas. This can be done using a drag-and-drop visual editor such as Android Studio, or programmatically in code.

Either way, the results are a hierarchical list of ViewGroups (containers) and Views (UI elements inside containers). WearHF works by traversing these hierarchical lists at runtime and extracting relevant features.

For example, if WearHF detects a button embedded in the UI tree it will make a copy of the button text and send that to the speech recognizer to listen for.

But sometimes there are clickable buttons on the screen that have no text associated with them – typically image buttons. In cases such as these WearHF will automatically offer a speech command in the form “SELECT ITEM 1”, and overlay a numeric index next to the control. Now the user must say “SELECT ITEM 1” to activate the button.

For simple UI trees the system works very well – button texts, checkboxes and other “clickable” items are analyzed and passed to the speech recognizer. For the most part the user can speak the name of the onscreen control, but in a few cases might have to resort to a “SELECT ITEM 1” notation.

However, the real clumsiness starts to appear for complex UI trees. Some UI trees may contain 30 or more clickable buttons, many just as graphic icons with no text associated with them. And for such screens the user is now presented with a mass of numerical indexes to speak.

Using WearML on these applications can turn it from a clumsy-to-use application to one that is designed to work efficiently and intuitively in hands-free mode.

WearML does not require any application source code to be modified and does not change the original application in anyway. It is simply a set of hints and directives that live on the system level allowing the WearHF system to operate effectively.

### [Tutorial](./wearml-scripting-tutorial.md)

The following tutorial shows how to use RealWear Explorer and WearML Scripting.

### [API](./wearml-scripting-api.md)

The API shows all the available meta tag’s for scripting with WearML.
