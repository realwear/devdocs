---
sidebar_position: 1
---

# Unity API Reference

The following API reference describes all of the functionality that is available in the Unity plugin.

## Public Functions

### AddVoiceCommand

```cs
void AddVoiceCommand(string command, Action<string> callback);
```

Description:

Adds a new voice command to the WearHF system.

Parameters:

| Parameter | Description |
| --------- | ----------- |
| command | The command to add to the WearHF system. |
| callback | The callback function that will be called when the command is spoken by the user. Pass null if you don’t want to be notified. The callback function is passed a string representing the command that was spoken. |

### RemoveVoiceCommand

```cs
void RemoveVoiceCommand(string command);
```

Description:

Removes a voice command from the WearHF system.

Parameters:

| Parameter | Description |
| --------- | ----------- |
|command | The command to remove from the WearHF system. |

### GetCount

```cs
void GetCount();
```

Description:

Gets the number of commands that have been registered with the WearHF system using WearHF Utils. This does not include global commands.

Returns:

int – The number of commands registered using WearHF Utils.

### ClearCommands

```cs
void ClearCommands();
```

Description:

Clears all the commands from the WearHF system that were registered with WearHF Utils. This does not clear the global commands (‘show help, navigate back, navigate home’, etc…).

### AddTTSCommand

```cs
public void AddTTSCommand(int id, string value, Action callback)
```

Description:

Adds a new TTS command to be played by the WearHF system.

Parameters:

| Parameter | Description |
| --------- | ----------- |
| id | A unique ID to associate with the TTS command. This will be passed back with the callback to help identify the command. |
| value | The text that the TTS engine will read out. |
| callback | The callback function that will be called when the TTS command has finished playing to the user. |

## Public Properties

### EnableGlobalCommands

| Type | Description |
| ---- | ----------- |
| boolean | Specifies whether the speech recognizer should also listen for the global commands (‘show help, navigate back, navigate home’, etc…). The default value is ‘true’. |

### EnableActionButton

| Type | Description |
| ---- | ----------- |
| boolean | Specifies whether the ACTION button should be used as a way to exit the application and go to home screen. The default value is ‘true’.|
