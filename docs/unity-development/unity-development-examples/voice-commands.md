---
sidebar_position: 5
---

# Voice Commands

## Unity Development Example

Since the RealWear Device is driven by voice commands rather than touch, it is essential to voice enable your Unity application for the user to perform any actions when running on the device.

Adding voice commands is achieved by passing the required commands as a string, and a callback which WearHF will call when that voice command is spoken:

```cs
void Start()
{
    // Initialize the wearHF object
    // NOTE: The plugin registers itself to the WearHF system in the
    // GameObject’s Awake function, so any calls to the plugin need to occur
    // after that. The start function is a good choice.
    m_wearHF = GameObject.Find("WearHF Manager").GetComponent<WearHF>();

    // Add a custom command
    m_wearHF.AddVoiceCommand("Command 1", LogCommandCallback);
}

/// <summary>
/// Called when our custom commands are spoken.
/// </summary>
/// <param name="voiceCommand">The voice command that was recognized.</param>
private void LogCommandCallback(string voiceCommand) 
{ 
    Debug.Log("Command Recognized: " + voiceCommand); 
}
```

[View Full Source Code](https://github.com/realwear/Developer-Examples-Unity/blob/master/Assets/Scripts/Examples/AddCommands.cs)
