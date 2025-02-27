---
description: ''
sidebar_position: 1
---

# WearHF Directive Reference

The WearHF service built-in to RealWear devices exposes a powerful speech engine to users who wish to interact with the device. To finely control how WearHF interprets and processes Speech Commands, RealWear provides deep integration into the WearHF system.

The simplest way to optimize an application for hands-free usage on our devices is to use WearHF directives to tell WearHF how to interpret each screen in your application.

All WearHF directives are placed in a view’s content_description attribute. Multiple WearHF directives can be used in a single `android:contentDescription` line by separating the commands with a pipe \| character.

For example: `android:contentDescription="hf_no_overlay|hf_no_ptt_home"`

## Reference

Here is a reference of all of the different content description attributes and their purpose

:::tip

Note: This list is exuhaustive. Before diving in too deep, check out our __tutorials__ to see how these fit together.

:::

### 1. hf_override:*commands*

This directive allows the developer to specify a list of speech commands for the current screen. By default, the WearHF service uses built-in speech commands for clickable elements, but this directive allows the developer to replace those with custom speech commands. This directive must be used only once per screen and should be applied to the root layout element of the screen. When a user speaks one of the specified commands, a broadcast intent is triggered with the speech command as an extra, which can be intercepted by the app to take appropriate action.

Modifiers: Each speech command is a modifier for this directive and should be specified as a string without quotes, separated by a pipe symbol.

#### Example

```xml
<RelativeLayout xmlns:android="http://schemas.android.com/apk/res/android"
                xmlns:tools="http://schemas.android.com/tools"
                android:id="@+id/main_layout"
                android:layout_width="match_parent"
                android:layout_height="match_parent"
                android:contentDescription="hf_override:play|pause|stop|next|previous">

    <Button
        android:id="@+id/play_button"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="Play Track" />

    <Button
        android:id="@+id/pause_button"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="Pause Track" />

    <Button
        android:id="@+id/stop_button"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="Stop Music" />

    <Button
        android:id="@+id/next_button"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="Skip" />

    <Button
        android:id="@+id/previous_button"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="Previous Track" />

</RelativeLayout>

```

In this example, we have overriden any default commands that would be generated by using the button text by specifying commands for the whole page.

```kotlin
class MainActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        val intentFilter = IntentFilter("com.realwear.wearhf.intent.action.SPEECH_EVENT")
        registerReceiver(speechReceiver, intentFilter)
    }

    private val speechReceiver = object : BroadcastReceiver() {
        override fun onReceive(context: Context, intent: Intent) {
            val command = intent.getStringExtra("command")
            when (command) {
                "play" -> {
                    // Handle play command
                }
                "pause" -> {
                    // Handle pause command
                }
                "stop" -> {
                    // Handle stop command
                }
                "next" -> {
                    // Handle next command
                }
                "previous" -> {
                    // Handle previous command
                }
            }
        }
    }
}

```
Here we are intercepting the commands specified in the layout file in the activity to be able to perform actions using them

### 2. hf_commands:*commands*

Description: The hf_commands directive is used to specify one or more free text speech commands for a View element. When a user speaks one of these commands, the UI element will be "clicked" (i.e. the same action as if the user had physically clicked the View element).

Modifiers: The speech commands themselves are the modifiers for this directive. Multiple commands can be specified by separating them with commas.

#### Example
```xml
  <!-- 
This button will have two speech commands associated with it: "Click Me" and "Press Me". 
When the user speaks either of these commands, the button will be clicked. 
-->
<Button
    android:id="@+id/myButton"
    android:text="Click Me"
    android:contentDescription="hf_commands:Click Me, Press Me"
    android:layout_width="wrap_content"
    android:layout_height="wrap_content" />
```
In this example, the hf_commands directive is used to specify two speech commands for the Button element: "Click Me" and "Press Me". When the user speaks either of these commands, the button will be clicked.

### 3. hf_add_commands:*commands*

Description: Specifies a number of extra commands that are added to the current screen without being tied to any of the visible UI elements. This directive must be used only once per screen and should be applied to the root layout element of the screen. When a user speaks one of the specified commands, a broadcast intent is triggered with the speech command as an extra, which can be intercepted by the app to take appropriate action.

Modifiers: One or more speech commands separated by a pipe character.

#### Example

XML layout:
```xml

<RelativeLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:contentDescription="hf_add_commands:command 1|command 2|command 3">
    
    <Button
        android:id="@+id/myButton"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="Click Me"/>
</RelativeLayout>


```

Kotlin code to handle the broadcast intent:

```kotlin

class MyBroadcastReceiver : BroadcastReceiver() {
    override fun onReceive(context: Context, intent: Intent) {
        if (intent.action == "com.realwear.wearhf.intent.action.SPEECH_EVENT") {
            val command = intent.getStringExtra("command")
            when (command) {
                "command 1" -> {
                    // handle command 1
                }
                "command 2" -> {
                    // handle command 2
                }
                "command 3" -> {
                    // handle command 3
                }
            }
        }
    }
}


```

In this example, the hf_add_commands directive is added to the root RelativeLayout and it specifies three extra speech commands that are not tied to any of the visible UI elements: "command 1", "command 2", and "command 3". These speech commands can be used by the user to perform actions on the current screen without it being tied to a UI element such as a button.

### 4. hf_wearml_override:*SCRIPT*

This command specifies a specific WearML script to be added to this screen.

- The WearML scrript should be converted to Base64
- Only one instance of this directive should be used per screen.

### 5. hf_no_overlay

The hf_no_overlay directive is used to prevent any labels appearing over a View element. When this directive is used, the WearHF service will not display any overlay labels to the user, so the user must rely on the content of the View element (e.g. the text of a Button) to know what to say for the speech command. This directive does not have any modifiers.

#### Example
```xml
<!-- 
This button will not have any overlay labels, so the user must rely on the button's text 
to know what to say for the speech command. 
-->
<Button
    android:id="@+id/myButton"
    android:text="Click Me"
    android:contentDescription="hf_no_overlay"
    android:layout_width="wrap_content"
    android:layout_height="wrap_content" />
```
In this example, the hf_no_overlay directive is used to prevent any overlay labels from appearing over the Button element. The user must rely on the text of the button ("Click Me") to know what to say for the speech command.

### 6. hf_overlay_number

Specifies that a persistent numeric index should be displayed in the center of the element.

### 7. hf_no_number | hf_yes_number

Shows/Hides the numeric indexing overlays.

### 8. hf_overlay_offset:*x,y*

The hf_overlay_offset directive is used to specify an offset for the WearHF overlay that is different from the default. By default, the overlay will be displayed at the top left of the View element. This directive takes two integer modifiers that specify the x and y pixel offset to apply to the overlay.

Modifiers: Two integer modifiers are required for this directive, specifying the x and y pixel offset to apply to the overlay.

#### Example
```xml
<!-- 
This button will have an overlay with an x offset of 10 pixels and a y offset of 10 pixels. 
-->
<Button
    android:id="@+id/myButton"
    android:text="Click Me"
    android:contentDescription="hf_overlay_offset:10,10"
    android:layout_width="wrap_content"
    android:layout_height="wrap_content" />
```

In this example, the hf_overlay_offset directive is used to specify an offset of 10 pixels to the right and 10 pixels down for the overlay that appears over the Button element when it is deemed clickable by the WearHF service.

### 9. hf_show_text

The hf_show_text directive is used to specify that instead of the default numeric index, the overlay should display the speech command associated with the View element. This makes it easier for the user to know what to say for the speech command to click the View element.

Modifiers: This directive does not have any modifiers.

#### Example
```xml
<!-- 
This button will display its associated speech command in the WearHF overlay instead of the default numeric index. 
-->
<Button
    android:id="@+id/myButton"
    android:text="Click Me"
    android:contentDescription="hf_show_text"
    android:layout_width="wrap_content"
    android:layout_height="wrap_content" />
```
In this example, the hf_show_text directive is used to specify that the overlay for the Button element should display its associated speech command instead of the default numeric index. This makes it easier for the user to know what to say for the speech command to click the Button element.

### 10. hf_persists

Specifies that numeric indexing overlay or text overlay should always be displayed.

### 11. hf_orientation:*option*

Specifies the orientation of the text overlay relative to the numeric index overlay.

Available options:

- top
- right
- bottom
- left

#### Example

To display the overlay underneath an element: `android:contentDescription=hf_orientation:bottom`

### 12. hf_show_dot

The hf_show_dot directive is used to show a dot instead of a numeric or text overlay to indicate that the element is speech-enabled.

Modifiers: This directive has no modifiers.

#### Example

```xml

<Button
    android:id="@+id/myButton"
    android:layout_width="wrap_content"
    android:layout_height="wrap_content"
    android:text="Click Me"
    android:contentDescription="hf_show_dot|hf_no_number"
    />

```

When the hf_show_dot directive is applied to a UI element, it will display a small dot overlay instead of the default numeric or text overlay to indicate that the element is speech-enabled. However, in order for the dot overlay to be displayed instead of the default numeric overlay, the hf_no_number directive must also be included in the android:contentDescription parameter.

The hf_no_number directive prevents the default numeric overlay from being displayed, which is necessary for the dot overlay to be shown.

### 13. hf_show_icon

Specifies that a microphone overlay icon should be displayed next to the text overlay to indicate a voice command.

### 14. hf_background_color:*color*

Specifies background color in hex of the overlay.

#### Example

Changes the background color of the overlay to teal: `android:contentDescription=hf_background_color:008080`

### 15. hf_text_color:*color*

Specifies text color in hex for the overlay.

#### Example

Changes the text color of the overlay to green: `android:contentDescription=hf_background_color:008000`

### 16. hf_use_text

Specify that an element should use the `android:text` field contents for its speech recognizer command.

This is used to override the default behavior of auto selecting between the `android:text` and `android:contentDescription` fields.
Normally `android:contentDescription` takes precedence over `android:text`.

Setting this attribute will apply to all children within this element.

Note: This is the related to [`hf_use_description`](#17-hf_use_description)

### 17. hf_use_description

This directive instructs that any content in the `android:contentDescription` field that isn't a wearHF directive should be used as the voice command for that view. This overrides the default behaviour of using a button's text, for example. Applying this to a view will extend the effect to any and all child elements.

#### Example

```xml

<RelativeLayout
    android:id="@+id/parent_view"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:contentDescription="hf_use_description">
    
    <Button
        android:id="@+id/my_button"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="Click Me"
        android:contentDescription="Speak this to click the button" />
    
    <TextView
        android:id="@+id/my_text_view"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="Hello, world!"
        android:contentDescription="Speak this to interact with the text view" />
    
</RelativeLayout>


```

In this example, the hf_use_description directive is applied to the RelativeLayout parent view, which means that any content in the android:contentDescription fields of its child elements will be used as the voice command for that element. The my_button button has a custom content description of "Speak this to click the button", which will be used as its voice command. Similarly, the my_text_view text view has a custom content description of "Speak this to interact with the text view", which will be used as its voice command.

Note: This is the related to [`hf_use_text`](#16-hf_use_text)

### 18. hf_hide_help

Hides the “Show Help” icon.

Note: This does *not* suppress the __Show Help__ speech command.

### 19. hf_text_normal

Characterizes a text-field to tell WearHF present a virtual keyboard allowing the user to enter some text by selecting characters.

This is the default behavior for text fields.

### 20. hf_text_dictation

Characterizes a text-field to tell WearHF present a dictation keyboard allowing the user to enter some text by freely speaking text in sentences.

### 21. hf_text_barcode:*option*

This directive should only be applied to text fields. When the relevant speech command for this view is given and this directive is present, it instructs WearHF to open the barcode scanner and use the resulting scanned information in the barcode.

Modifiers:

- __qr__: limits the barcode scanner to QR codes only.
- __ean__: limits the barcode scanner to EAN codes only.
- __code128__: limits the barcode scanner to Code 128 codes only.
- __upc__: limits the barcode scanner to UPC codes only.
- __any__: allows the barcode scanner to recognize any barcode type.

#### Example

```xml

<TextView
    android:id="@+id/barcodeTextView"
    android:layout_width="wrap_content"
    android:layout_height="wrap_content"
    android:text="Scan barcode"
    android:contentDescription="hf_command:scan barcode|hf_text_barcode:any" />


```

The above example applies the directive to a TextView and specifies the 'any' modifier to allow scanning of any barcode type. When the speech command 'scan barcode' is recognized, the barcode scanner will open and the scanned information will be used to populate the TextView.

### 22. hf_scroll_none

Turn off head-tracked scrolling for the view.

### 23. hf_scroll_horizontal

- Specifies that horizontal head-tracked scrolling should be turned on the the view, and the scrolling activity should be directed at the current UI element.
- Only one instance of this directive should be used per screen.

### 24. hf_scroll_vertical

- Specifies that vertical head-tracked scrolling should be turned on the this view, and the scrolling activity should be directed at the current UI element.
- This is the default scroll setting if a scrollable element is discovered in the UI tree.
- Only one instance of this directive should be used per screen.

### 25. hf_no_ptt_home

- Turn off the default behavior for the current screen for the action button.
- Under normal use pressing the action button will automatically switch to the Home Screen. However, this directive disables this behavior for the current screen, allowing an application to make full use of the action button itself.
- The action button is used as a standard key press/release of key code = 500
- Only one instance of this directive should be used per screen.

### 26. hf_no_global_commands

- Disables the global commands (‘show help, navigate back, navigate home’, etc.).
- Only one instance of this directive should be used per screen.

### 27. hf_broadcast_results

- Tells WearHF to broadcast ASR results via a SPEECH_EVENT (see example).
- Only one instance of this directive should be used per screen.

### 28. hf_make_clickable

Force the view to be clicked with a mouse click when the speech command is spoken.

### 29. hf_show_help_commands:*commands*

- Specifies a number of voice commands to display in the show help window, separated by commas.
- Only one instance of this directive should be used per screen.
