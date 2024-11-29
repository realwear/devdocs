---
sidebar_position: 3

---

# Global Commands

## Unity Development Example

WearHF provides the user with some default global commands which they can always use, regardless of what application is currently active. This provides the user with a way to get help or navigate through the system with a set of common commands.

Some of the global commands available to the user are:

- Navigate Home
- Navigate Back
- Show Help

It is possible for an application to disable the global commands if required.

Since this changes the behavior that the user may expect it is not recommended to use this feature often.

```cs
void Start()
{
    // Initialize the wearHF object
    // NOTE: The plugin registers itself to the WearHF system in the
    // GameObject’s Awake function, so any calls to the plugin need to occur
    // after that. The start function is a good choice.
    m_wearHF = GameObject.Find("WearHF Manager").GetComponent();

    // Disable the Action Button for this scene
    m_wearHF.EnableGlobalCommands = false;
}
```

[View Full Source Code](https://github.com/realwear/Developer-Examples-Unity/blob/master/Assets/Scripts/Examples/GlobalCommands.cs)
