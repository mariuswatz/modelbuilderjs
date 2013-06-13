<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>

<?php
$path = '.';// realpath('.');

/*
	PHP Resource lister for JavaScript testing
	v.1 June 2013, Marius Watz

	Placed in the root folder of a JS project, this code will
	recursively list any resource files found in subdirectiores
	as with clickable links for easy access.
	
	The types of resources to be listed can be specified in the
	$extAccepted array.
	
	http://workshop.evolutionzone.com
	https://github.com/mariuswatz/modelbuilderjs	
	
*/

// Note that !== did not exist until 4.0.0-RC2

$filenum=0;
$extMovies=array("mov","avi","mp4","flv");
$extImg=array("jpg","png","psd","tif","gif");
$extText=array("pdf","doc","txt");
$extTypes=array("Text / vector ","Movies","Images (lo-res)","Images (hi-res)");

$extAccepted=array("html","js","pde","png","gif","jpg");

?>


<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">
<title>js</title>
<style type="text/css">
<!--
body {
	font-family:Verdana, Arial, Helvetica, sans-serif;
	font-size:12px;
	padding: 0px 20px 20px 20px;
}

a {
text-decoration:none;
color:#FF0099;
}

#credit {
	padding:5px 5px 15px 5px;
	font-size:10px;
}

.dirTitle {
	padding:0;
	margin:0;
}

.dirTitle .dot {
	padding:2px;
	font-weight:normal;
	border-bottom:1px dotted #FF0099;
	/*max-width:300px;*/
	font-size:10px;
}

.title {
	font-size: 24px;
	color: #000000;
	margin:0;
	padding:0;
	margin-bottom:20px;
}

.titlesmall {
	font-size: 16px;
	color: #000000;
	margin:0;
	margin-bottom:10px;
}
	
.columnContainer { 
	margin-top:45px;
}

.columnFooter,.columnContainer {width: 720px;}
.columnFooter {margin-top:30px; border-top:1px dotted #000000; clear:left;}

.column {
	width:300px; 
	float:left; 
	margin-right:30px;
}
.column:last-of-type {margin-right:0px;}

.column p,.column ul {
	width:250px;
	padding:0;
}

.column ul {
	padding:0px 0 0px 5px;
	list-style-type: none;
	margin-bottom:3em;
}

.column li  {width:220px; margin:4px 0; padding:0;}

-->
</style>
</head>

<body>

<div id="credit"><p><a href="https://workshop.evolutionzone.com">Marius Watz</a> | <a href="https://github.com/mariuswatz/modelbuilderjs">Modelbuilder.js</a></p></div>
<div class="title">Recursive list of HTML and resource files</div>
<div class="text" style="font-size:12px; margin:10px 0 10px 0; width: 600px;">
<p><strong>Root:</strong> <?php echo(realpath($path)); ?></p>
</div>

<?php

$objects = new RecursiveIteratorIterator(
	new RecursiveDirectoryIterator($path)
	//,FilesystemIterator::SKIP_DOTS
	,RecursiveIteratorIterator::SELF_FIRST
	); 


$allfiles=array();
$filenames=array();
$folders=array();

$filenum=0;

foreach($objects as $name => $object) {
	$path_parts = pathinfo($name);
	$dir=$path_parts['dirname'];
	$dir=substr($dir,2);

	if(!is_file($name)) {
		continue;
	}

	array_push($allfiles,$name);
	$ext="";
	

	if(in_array(strtolower($ext),$extAccepted)===TRUE) {
		array_push($filenames,$dir);

		$fname=$path_parts['filename']."$ext";
		array_push($filenames,$fname);

		$filenum++;
		if(!in_array($dir,$folders)) array_push($folders,$dir);
	}
}
?>

<div class="columnContainer">
<div class="column">
<?php

////// LIST

$numtotal=$filenum;

$num=0;
$cnt=0;

foreach($folders as $thedir) {

	$filenum=0;
	for($i=0; $i<count($filenames); $i+=2) {
		if(strnatcmp($thedir,$filenames[$i])==0) {
			if($filenum==0) {
				$dir=$filenames[$i];
				if(strlen($dir>40)) $dir="..".substr($dir,strlen($dir)-40);
				echo("<div class='dirTitle'><span class='dot'>$dir</span></div>\n"); 
				echo("<ul>\n"); 
			}
			$fname=$filenames[$i+1];
			echo "<li><a href=\"$dir/$fname\">$fname</a></li>\n";
			$num++;
			$filenum++;
		}
	}
	if($filenum>0) echo("</ul>");
	
	if($num+$cnt>($numtotal/2)) { ?>
</div>
<div class="column">
<?php
		$num=0;
	}

	$cnt+=0.5;
}
?>
</div>
<div class="columnFooter">&nbsp;</div>
</div> <!-- container -->

</body>
</html>
