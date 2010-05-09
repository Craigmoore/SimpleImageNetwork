<?php
    $URLs = array (
		'javascript/json/simpleimagegridjsontop.js',
		'javascript/json/simpleimagegridjsonright.js',
		'javascript/json/simpleimagegridjsonbottom.js',
		'javascript/json/simpleimagegridjsonleft.js',
		'images/stellar_gradient.png',
    	'http://www.flashygraphics.co.uk/simpleimagenetwork/',
    	'Original source of the simple image network',
    	'http://www.flashygraphics.co.uk/simpleimagenetwork/signup'
    );
    
    header('Content-type: application/json');
    echo json_encode($URLs);