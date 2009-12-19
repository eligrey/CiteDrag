CiteDrag is a script for browsers supporting the [standard drag and drop model][1] like
Firefox 3.1. What it does is automatically add citations (ie. blockquotes, text quotes,
etc.) to any dragged content off of the website which is using the script. CiteDrag
requires no additional setup other than include the script somewhere on your website.

Demo
----

[Demo][2] - Try it in Firefox 3.1 and up.

WordPress plugin
----------------

The CiteDrag WordPress plugin applies CiteDrag to every page on a WordPress-powered website. The plugin is compatible with WordPress 2.6 and higher.

UserScript
----------

The CiteDrag UserScript applies CiteDrag to every website.

Examples
--------

The following is examples of when you drag various data types to various drop areas. A drop area can be anything from Notepad to WordPress to Microsoft Word, practically anything that lets you drop text, rich text, or images into it: (Note wherever it says title, it will be replaced with the host name of the source page if there is no page title) 

* Drag a link or image (or linked image) to a normal text input: { **[link URI]** or **[image URI]** } via {**source title**} ( {**source URI**} ) 
  * Example:  http://example.com/ via Foobar ( http://foo.bar/post/example.com-ftw/ )
* Drag a link or image (or linked image) to a rich text input: { **[clickable link to link URI]** or **[image URI]** or **[clickable image linked to link URI]** } via {**clickable link to source page with title as text**} 
    * Example:  [Example Web Page][3] via [Elijah Grey][4]
* Drag formatted or non-formatted text to a normal text input: “{**Text dragged**}” ― {**source title**} ( {**source URI**} ) 
  * Example:  “Lorem ipsum dolor sit amet.” ― Elijah Grey ( http://eligrey.com/ )
* Drag formatted or non-formatted text into a rich text input: The dragged text goes into a <blockquote cite=”{**source URI**}”> and after the blockquote is ― {**clickable link to source page with title as text**} 
    * Example: 
        > Lorem ipsum dolor sit amet. ― [Elijah Grey][4]

 [1]: https://developer.mozilla.org/En/DragDrop/Drag_and_Drop
 [2]: http://code.eligrey.com/citedrag/test.html
 [3]: http://example.com/
 [4]: http://eligrey.com/
