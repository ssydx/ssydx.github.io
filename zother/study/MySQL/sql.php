<?php
$q = intval($_GET['q']);

$con = mysqli_connect('localhost','root','ssydx','pythondb');
if (!$con) {
    die('Could not connect: ' . mysqli_error($con));
}
$sql=" SELECT * FROM pytb WHERE id = $q ";
$result = mysqli_query($con,$sql);

echo '男';
echo "<table>";
while($row = mysqli_fetch_array($result)) {
    echo "<tr><th>id</th><td>" . $row['id'] . "</td></tr>";
    echo "<tr><th>name</th><td>" . $row['name'] . "</td></tr>";
    echo "<tr><th>gender</th><td>" . $row['gender'] . "</td></tr>";
    echo "<tr><th>age</th><td>" . $row['age'] . "</td></tr>";
}
echo "</table>";
mysqli_close($con);
?>