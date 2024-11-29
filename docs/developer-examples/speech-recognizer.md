# Speech Recognizer

## Development Example

Voice commands can be added to an application by updating the resource files, but it’s also possible to add them in the source code if required.

## Registering voice commands

Voice commands can be registered by sending a list to WearHF using an intent:

```java
private static final String ACTION_OVERRIDE_COMMANDS =
    "com.realwear.wearhf.intent.action.OVERRIDE_COMMANDS";

private static final String EXTRA_COMMANDS =
    "com.realwear.wearhf.intent.extra.COMMANDS";
private static final String EXTRA_SOURCE_PACKAGE =
    "com.realwear.wearhf.intent.extra.SOURCE_PACKAGE";

private void sendCommands() {
    final ArrayList<String> voiceCommands = new ArrayList<>();
    voiceCommands.add("Command 1");
    voiceCommands.add("Command 2");

    Intent intent = new Intent(ACTION_OVERRIDE_COMMANDS);
    intent.putExtra(EXTRA_SOURCE_PACKAGE, getPackageName());
    intent.putExtra(EXTRA_COMMANDS, voiceCommands);
    sendBroadcast(intent);
}
```

Once registered WearHF will listen for the provided commands until:

1. A voice command is spoken.
2. The user presses the ACTION button, which will take the system to the home screen.
3. he current application exits.
4. A new OVERRIDE_COMMANDS action is preformed.
5. A RESTORE_COMMANDS action is preformed.
6. Once one of these events has occurred the application must re-register it’s voice commands.

It’s important to note that using the OVERRIDE_COMMANDS action will prevent WearHF from recognizing scripted or embedded WearML commands.

## Reacting to voice command triggers

Applications can listen for when the speech recognizer has detected a spoken voice command by using a broadcast listener:

```java
private static final String ACTION_SPEECH_EVENT = "com.realwear.wearhf.intent.action.SPEECH_EVENT";
private static final String EXTRA_COMMAND = "com.realwear.wearhf.intent.extra.COMMAND";

private BroadcastReceiver speechBroadcastReceiver = new BroadcastReceiver() {
    @Override
    public void onReceive(Context context, Intent intent) {
        if (intent.getAction().equals(ACTION_SPEECH_EVENT)) {
            String command = intent.getStringExtra(EXTRA_COMMAND);
        }
    }
};
```

## Restore normal services

When an application has finished with the speech recognizer it should send a message to restore default behaviour, using the RESTORE_COMMANDS intent.

```java
private static final String ACTION_RESTORE =
    "com.realwear.wearhf.intent.action.RESTORE_COMMANDS";

private void restoreVoiceCommands() {
    Intent intent = new Intent(ACTION_RESTORE);
    sendBroadcast(intent);
}
```

[View Full Source Code](https://github.com/realwear/Developer-Examples/blob/master/hmt1developerexamples/src/main/java/com/realwear/hmt1developerexamples/SpeechRecognizerActivity.java)

## Handling Lifecycle Events

When an application registers voice commands right after launching or resuming, there will sometimes be a race condition between the Speech Recognizer and the automatic UI parser provided by WearHF. This can result in any override commands defined by the developer to be ignored. Make sure to include a short delay if you register commands in Lifecycle functions such as onCreate or onResume.

```java
private static final String ACTION_SPEECH_EVENT = "com.realwear.wearhf.intent.action.SPEECH_EVENT";

@Override
protected void onResume() {
    super.onResume();

    registerReceiver(asrBroadcastReceiver, new IntentFilter(ACTION_SPEECH_EVENT));

    new Handler().postDelayed(new Runnable() {
        @Override
        public void run() {
            sendCommands();
        }
    }, 100);
}
```

[View Full Source Code](https://github.com/realwear/Developer-Examples/blob/master/hmt1developerexamples/src/main/java/com/realwear/hmt1developerexamples/SpeechRecognizerActivity.java)

## API

Actions

| Intent                                              | Description                                                  |
| --------------------------------------------------- | ------------------------------------------------------------ |
| com.realwear.wearhf.intent.action.OVERRIDE_COMMANDS | Used to take control of the speech recognizer                |
| com.realwear.wearhf.intent.action.RESTORE_COMMANDS  | Used to reset the speech recognizer to it’s default behavior |
| com.realwear.wearhf.intent.action.SPEECH_EVENT      | Sent from WearHF to identify spoken voice commands           |

Extras

| Extra                                               | Data Type    | Description                                                                                                                                                                                  |
| --------------------------------------------------- | ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| com.realwear.wearhf.intent.extra.COMMANDS           | String Array | Used to pass in a list of voice commands to the speech recognizer                                                                                                                            |
| com.realwear.wearhf.intent.extra.SOURCE_PACKAGE     | String       | Used to pass the application’s package name to the speech recognizer                                                                                                                         |
| com.realwear.wearhf.intent.extra.GLOBAL_COMMANDS    | boolean      | Specifies whether the speech recognizer should also listen for the global commands                                                                                                           |
| com.realwear.wearhf.intent.extra.ACTION_BUTTON_HOME | boolean      | Specifies whether the ACTION button should be used as a way to exit the application and go to home screen                                                                                    |
| com.realwear.wearhf.intent.extra.COMMAND            | String       | Passed from the speech recognizer when a voice command is spoken. Identifies the command spoken by the user                                                                                  |
| com.realwear.wearhf.intent.extra.ORIGINAL_COMMAND   | String       | Passed from the speech recognizer when a voice command is spoken. Identifies the command spoken by the user, but may be stripped of extra whitespace or unwanted characters                  |
| com.realwear.wearhf.intent.extra.CONFIDENCE         | int          | The confidence level reported by the speech recognizer. The higher the confidence, the more closely the spoken words matched the returned phrase (ranges 4000-8000, where higher is better). |
