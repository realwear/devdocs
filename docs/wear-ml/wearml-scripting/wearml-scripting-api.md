---
sidebar_position: 2
---

# WearML Scripting API

## WearML directives

When writing a WearML script to modify a compiled application there are many options available. All the available configurable options can be edited to provide a completely customized experience to an application’s users.

## Top level elements

WearML scripts begin with a couple of elements which provide information about the package and script to WearHF.

| Element          | Description     | Required     |
| ---------------- | ---------------------------------------------------------- | ---------------- |
| Package          |  Used to identify the package that the WearML script belongs to | Yes |
| UniqueIdentifier | At least one [UniqueIdentifier attribute](#uniqueidentifier-attributes) must be specified to identify a component (View) that is unique for that screen across the whole package. | Yes |
| Language         | The language code for the modifications included in the file | No  |

## UniqueIdentifier attributes

At least one of these attributes must be specified to identify a component (View) that is unique for that screen across the whole package.

| Attribute          | Description     |
| ---------------- | ---------------------------------------------------------- | ---------------- |
| id          |  A unique ID attribute for an on screen component that is not used on any other screen. |
| text | A unique text attribute for an on screen component that is not used on any other screen. |
| content_description | A unique content_description attribute for an on screen component that is not used on any other screen. |
| type | A unique type attribute for an on screen component that is not used on any other screen.
View elements attributes |

## View elements attributes

The remainder of the WearML Script is made up of the screen’s views, listed in a hierarchy. Each view can contain the following attributes which instruct WearHF on how to interpret them.

## Attributes

At least one of these attributes MUST be specified to identify the component (View).

| Attribute           | Data Type                       | Description     |
| ------------------- | ---------------------------------------------------------- | ---------------- |
| id                  | String                          | A unique ID attribute to identify the component that is not used on any other component. |
| text                | String                          | A text attribute to identify the component that is not used on any other component. |
| content_description | String                          | A unique content_description attribute to identify the component that is not used on any other component. |
| rect                | Rect (left, top, right, bottom) | The exact coordinates for the view. |

Each of the following attributes are optional and will change the default behavior of a view. All views in a script can contain any number of the following attributes.

| Attribute                | Data Type              | Description                                                                                                                                                                                    |
|--------------------------|------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| root                     | boolean (yes/no)       | Can only be applied to the topmost View element. The root’s attributes are applied to all of its children unless they have their own attributes defined.                                        |
| xy                       | Point (x,y)            | The screen coordinates where the overlay will be displayed.                                                                                                                                    |
| speech_command           | String                 | Defines the source to use for the speech command for the component. See [available options](#speech_command-options).                                                                            |
| overlay_show_number       | boolean (yes/no)       | Turns the numeric indexing overlays on or off. (default: yes)                                                                                                                                  |
| overlay_show_text         | boolean (yes/no)       | Turns the text overlay on or off. (default: no)                                                                                                                                                |
| overlay_persists          | boolean (yes/no)       | Sets if the numeric index and/or text overlay will always be shown. (default: no)                                                                                                              |
| overlay_orientation       | String                 | Specifies the orientation of the text overlay relative to the numeric index overlay. See [available options](#overlay_orientation-options).                                                      |
| overlay_background_color  | String                 | Specifies background color (Hex with #) of the overlay.                                                                                                                                        |
| overlay_text_color        | String                 | Specifies text color (Hex with #) for the overlay.                                                                                                                                             |
| overlay_border_color      | String                 | Specifies border color (Hex with #) for the overlay.                                                                                                                                           |
| overlay_anchor            | Point (x,y)            | Sets the anchor point horizontally and vertically. Each value is specified as a percentage. 0 anchors to top/left edge of the element and 100 anchors to bottom/right edge of the element.      |
| overlay_offset            | Point (x,y)            | Sets the offset horizontally and vertically for where the overlay will be displayed.                                                                                                           |
| overlay_show_dot          | boolean (yes/no)       | Specifies that an overlay dot should be displayed to indicate a voice command. (default: no)                                                                                                   |
| overlay_show_icon         | boolean (yes/no)       | Specifies that a microphone overlay icon should be displayed next to the text overlay to indicate a voice command. (default: no)                                                               |
| scroll                    | String                 | Specifies that head-tracked scrolling should be turned on in the view, and the scrolling activity should be directed at the UI element. See [available options](#scroll-options).                |
| text_field                | String                 | Characterizes a text field to tell WearHF what form of data entry should be used. See [available options](#text_field-options).                                                                 |
| barcode                   | String                 | Defines which type of barcode is being scanned. Ignored if the text_field isn’t set to barcode. (default: any) See [available options](#barcode-options).                                       |
| global_commands           | boolean (yes/no)       | Sets whether global commands should be enabled (‘show help, navigate back, navigate home’, etc…).                                                                                               |
| broadcast_results         | boolean (yes/no)       | Tells WearHF to broadcast ASR results via a SPEECH_EVENT. See Development Example – Speech Recognizer for more details.                                                                         |
| make_clickable            | boolean (yes/no)       | Force the view to be clicked with a mouse click when the speech command is spoken.                                                                                                              |


## speech_command Options

If speech_command is left blank the voice command will be disabled for the component.

| Option              | Description                                                                 |
| ------------------- | --------------------------------------------------------------------------- |
| text                | Use the string in the text attribute for the speech command.                |
| content_description | Use the string in the content_description attribute for the speech command. |

Any other value will set the voice command to the entered value.

## overlay_orientation Options

| Option              | Description                                        |
| ------------------- | -------------------------------------------------- |
| top    | Display text overlay on top of the numeric index overlay.       |
| right  | Display text overlay to the right of the numeric index overlay. |
| bottom | Display text overlay underneath the numeric index overlay.      |
| left   | Display text overlay to the left of the numeric index overlay.  |

## scroll Options

| Option      | Description                          |
| ----------- | ------------------------------------ |
| none        | Disables headtracking.               |
| horizontal  | Headtracker only works horizontally. |
| vertical    | Headtracker only works vertically.   |

## text_field Options

| Option     | Description                          |
| ---------- | ------------------------------------ |
| keyboard   | Opens a virtual keyboard allowing the user to enter some text by selecting characters. |
| dictation  | Opens a dictation keyboard allowing the user to enter some text by freely speaking text in sentences. |
| barcode    | Opens a barcode scanner allowing the user to enter some text by scanning a barcode.   |

## barcode Options

| Option  | Description                          |
| ------- | ------------------------------------ |
| any     | Allow the barcode scanner to scan any supported barcode types. |
| qr      | Limit the barcode scanner to only scan QR type barcodes. |
| code128 | Limit the barcode scanner to only scan Code 128 symbology barcodes. |
| upc     | Limit the barcode scanner to only scan Universal Product Code symbology barcodes. |
| ean     | Limit the barcode scanner to only scan EAN symbology barcodes. |
