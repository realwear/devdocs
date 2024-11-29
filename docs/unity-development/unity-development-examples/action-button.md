---
sidebar_position: 2
---

# Action Button

## Unity Development Example

The action button on the side of the RealWear Device allows the user to easily perform a globally configurable option, regardless of what the device is currently doing. The default behavior of the action button is to navigate the user back to the system’s home screen.

However, it is possible for an application to also register the action button to perform a custom action. When binding to the action button the application should usually disable the default action. Since this changes the behavior that the user may expect it is not recommended to use this feature often.

```cs
void Start()
{
    // Initialize the wearHF object
    // NOTE: The plugin registers itself to the WearHF system in the
    // GameObject’s Awake function, so any calls to the plugin need to occur
    // after that. The start function is a good choice.
    m_wearHF = GameObject.Find("WearHF Manager").GetComponent();

    // Disable the Action Button for this scene
    m_wearHF.EnableActionButton = false;
}
```

[View Full Source Code](https://github.com/realwear/Developer-Examples-Unity/blob/master/Assets/Scripts/Examples/ActionButton.cs)
