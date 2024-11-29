---
description: ''
---

# React Native

![React-Native-171x130](../../assets/React-Native-171x130.png)

Since React Native generates a native Android application at compile time, applications created using the React Native framework can generally be developed, installed and run on the RealWear Device just like any other application.

However, due to an issue in the way that React Native’s clickable elements work (buttons, combo boxes, …) WearHF is not able to automatically speech enable React Native applications.

To solve this issue a new WearHF directive called hf_make_clickable has been created which tells WearHF that an element is clickable. To see how to use the new directive see the [WearHF Reference Guide](../../wear-ml/embedded-api.md).

Other than this, development using React Native on the RealWear Device is done in the same was as the [Android Framework](../environments/android.md)
