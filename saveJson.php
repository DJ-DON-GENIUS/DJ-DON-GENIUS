<?php
if(isset($_POST['submit'])) {
	$file = "https://raw.githubusercontent.com/DJ-DON-GENIUS/DJ-DON-GENIUS/master/data.json";
	$json_string = json_encode($_POST, JSON_PRETTY_PRINT);
	file_put_contents($file, $json_string, FILE_APPEND);
	header('Location: thanks.php'); 
}
?>
