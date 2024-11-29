# BNF Grammar

## Development Example

Static speech commands are not suitable when there are a large number of selections available to a user.

For instance, to have a speech command for entering a time would require 60 speech commands for every minute value, multiplied by the 24 hours in a day.

That would mean your application would need to register 1,440 voice commands!

To solve this issue your application can register BNF grammar to the speech engine. This allows for 2 groups of words to be combined to make a single voice command.

Once the BNF grammar has been registered the speech engine will listen for any of the possible combinations and report back the spoken command as a string for processing.

In this case, every command must include a number from the `<Hour>` group, and optionally one from the `<Minute>` group. Therefore, the following are all examples of valid voice commands for this BNF grammarset:
- ‘5 30’
- ‘7 27’
- ‘1 55’
- ‘3’

```java
private final String BnfString = "#BNF+EM V2.0;" +
    "!grammar Commands;\n" +
    "!start <Commands>;\n" +
    "<Commands>:<global_commands>|<Hour> !optional(<Minute>);\n" +
    "<Minute>:1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16|17|18|19|20|21|22|23|24|25|26|27|28|29|30|31|32|33|34|35|36|37|38|39|40|41|42|43|44|45|46|47|48|49|50|51|52|53|54|55|56|57|58|59;\n" +
    "<Hour>:1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16|17|18|19|20|21|22|23|24;";

private final String ACTION_OVERRIDE_COMMANDS =
    "com.realwear.wearhf.intent.action.OVERRIDE_COMMANDS";

private final String EXTRA_SOURCE_PACKAGE =
    "com.realwear.wearhf.intent.extra.SOURCE_PACKAGE";
private static final String EXTRA_COMMANDS =
    "com.realwear.wearhf.intent.extra.COMMANDS";

private void textToSpeech() {
    final Intent intent = new Intent(ACTION_OVERRIDE_COMMANDS);
    intent.putExtra(EXTRA_SOURCE_PACKAGE, getPackageName());
    intent.putExtra(EXTRA_COMMANDS, BnfString);
    sendBroadcast(intent);
}
```

[View Full Source Code](https://github.com/realwear/Developer-Examples/blob/master/hmt1developerexamples/src/main/java/com/realwear/hmt1developerexamples/BNFGrammarActivity.java)
