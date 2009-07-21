<?php
/*
 * Plugin Name: CiteDrag
 * Version: 1.0.0
 * Plugin URI: http://eligrey.com/projects/citedrag/
 * Description: Automatically includes the CiteDrag JavaScript library on every page of your website. The CiteDrag JavaScript library adds citations to content dragged or copy/pasted off a website. It only works for browsers that support the HTML5 drag and drop API.
 * Author: Elijah Grey
 * Author URI: http://eligrey.com/
 */

function add_citedrag() {
  echo '<script type="text/javascript" src="'.WP_PLUGIN_URL.'/citedrag/citedrag.min.js"></script>';
}

add_action('wp_footer', 'add_citedrag');

?>
