<?php
if(isset($_POST['submit'])) {
	$file = "../data.json";
	$json_string = json_encode($_POST, JSON_PRETTY_PRINT);
	file_put_contents($file, $json_string, FILE_APPEND);
	header('Location: thanks.php'); 
}
?>
