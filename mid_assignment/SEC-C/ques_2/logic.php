<!DOCTYPE html>
<html>
<head>
    <title>Number Logic</title>
</head>
<body>

<h2>Number Checker</h2>

<form method="POST">
    Enter Number: <input type="number" name="num">
    <input type="submit" name="check" value="Check">
</form>

<?php
if(isset($_POST['check'])) {

    $num = $_POST['num'];

    if(empty($num) && $num !== "0") {
        echo "<h3 style='color:red;'>Please enter a number</h3>";
    } else {

        // Even or Odd
        if($num % 2 == 0) {
            echo "<h3>$num is Even</h3>";
        } else {
            echo "<h3>$num is Odd</h3>";
        }

        // Table
        echo "<h3>Table of $num:</h3>";
        for($i = 1; $i <= 10; $i++) {
            echo "$num x $i = " . ($num * $i) . "<br>";
        }
    }
}
?>

</body>
</html>