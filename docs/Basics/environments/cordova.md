---
description: ''
---

# Cordova

![cordova](../../assets/cordova.jpg)

The RealWear Device is fundamentally an Android 10.0 (Release 12 and above) device. It runs standard Android applications and web pages.

Due to the fact that Cordova wraps HTML/JavaScript into a native container it is best that we use a Javascript plugin. This due to the large number of elements that appear on an average web page and WearHF often needs assistance in understanding how to interpret them.

The general approach for speech enabling web pages relies on the use of JavaScript as a middle language, bridging the device web browser and the underlying WearHF speech engine. The Javascript file is included into the web page and then WearML tags can be freely embedded into the required elements. These tags will provide hints to the speech engine, determining what should be speech enabled, and as importantly, what should not be speech enabled. All of the WearML tags will be skipped by regular browsers, but read in by the device browser. In this way, production web pages (or HTML5 apps) can be built for all platforms including RealWear Device.

For information on how to develop your Cordova Application for a RealWear Device, please see our [HTML Plugin page](../environments/html.md).
