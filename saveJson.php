<?php
if(isset($_POST['submit'])) {
	$file = "data.json";
	$json_string = json_encode($_POST, JSON_PRETTY_PRINT);
	file_put_contents($file, $json_string, FILE_APPEND);
	header('Location: thanks.php'); 
}
?>
<!doctype html>
<html>
<head>
</head>
<body>
<center>
    <h1>Form</h1>
          <form name="form1" method="post" action="saveJson.php">
            <p>
              <label for="name">Name: </label>
              <input type="text" name="name" id="name" placeholder="Your full name" autofocus required>
            </p>
            <p>
              <label for="email">Email: </label>
              <input type="email" name="email" id="email">
            </p>
            <p>
              <label for="cell">Cell: </label>
              <input type="tel" name="cell" id="cell">
            </p>
            <p>
              <label for="dob">Date of birth: </label>
              <input type="date" name="dob" id="dob">
            </p>
            <p>
              <label for="study">Years of art study: </label>
              0 <input type="range" name="study" id="study" min="0" max="16"> 16
            </p>
            <p style="text-align: center;">
              <input type="submit" name="submit" id="submit" value="Submit">
            </p>
          </form>
</center>
</body>
</html>