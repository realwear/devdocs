---
sidebar_position: 4
---

# Text To Speech

## Unity Development Example

The RealWear Device comes with a built-in text to speech engine that can relay text to the user by reading it out aloud. This allows for quick pieces of information to be given to the user without them having to view the screen.

```cs
void Start()
{
    // Initialize the wearHF object
    // NOTE: The plugin registers itself to the WearHF system in the
    // GameObject’s Awake function, so any calls to the plugin need to occur
    // after that. The start function is a good choice.
    m_wearHF = GameObject.Find("WearHF Manager").GetComponent<WearHF>();

    // Add a TTS command
    m_wearHF.AddTTSCommand(1, "Welcome to the Navigator-5xx from RealWear. " +
            "This is the Text to Speech Engine Example", TtsCallback);
}

/// <summary>
/// Called when TTS has finished playing.
/// </summary>
/// <param name="id">Unique identifier associated with the TTS command.</param>
public void TtsCallback(int id)
{
    Debug.Log("TTS Event completed: " + id);
}
```

[View Full Source Code](https://github.com/realwear/Developer-Examples-Unity/blob/master/Assets/Scripts/Examples/TextToSpeech.cs)
