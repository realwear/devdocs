---
description: ''
---

# Xamarin

![xamarin-logo](../../assets/xamarin-logo.png)

The RealWear Device is fundamentally an Android 10.0 (Release 12 and above) device. It runs standard Android applications, built using standard Android development tools.

Since Xamarin generates native Android applications they can be developed, installed and run on the Device just like any other application – using the development environment you are used to.

Using embedded WearML in Xamarin will differ slightly from native Android in that directives should be placed in the __[AutomationProperties.Name](https://learn.microsoft.com/en-us/xamarin/xamarin-forms/app-fundamentals/accessibility/automation-properties#name)__ field. When the application is compiled for Android, this property will set the android:contentDescription field for the corresponding element. To learn more about using directives, see the [WearHF Directive](../../wear-ml/embedded-api.md) reference guide.

For more information on developing application using Xamarin for the RealWear Device, follow the instructions for the [Android Framework](../environments/android.md).

:::caution

Microsoft are ending support for Xamarin and are 'end of lifing' the platform as of May 2024 in favour of .NET MAUI & .NET 6.

see: https://dotnet.microsoft.com/en-us/platform/support/policy/xamarin#:~:text=Xamarin%20support%20will%20end%20on,2024%20for%20all%20Xamarin%20SDKs.

:::
