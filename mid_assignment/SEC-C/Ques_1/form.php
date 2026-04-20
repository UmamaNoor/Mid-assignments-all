<!DOCTYPE html>
<html>
<head>
    <title>Form Handling</title>
</head>
<body>

<h2>User Form</h2>

<form method="POST">
    Name: <input type="text" name="name"><br><br>
    Email: <input type="text" name="email"><br><br>
    Age: <input type="number" name="age"><br><br>

    <input type="submit" name="submit" value="Submit">
</form>

<?php
if(isset($_POST['submit'])) {

    $name = $_POST['name'];
    $email = $_POST['email'];
    $age = $_POST['age'];

    // Validation
    if(empty($name) || empty($email) || empty($age)) {
        echo "<h3 style='color:red;'>All fields are required!</h3>";
    } else {
        echo "<h3>Form Data:</h3>";
        echo "Name: " . $name . "<br>";
        echo "Email: " . $email . "<br>";
        echo "Age: " . $age . "<br>";
    }
}
?>

</body>
</html>