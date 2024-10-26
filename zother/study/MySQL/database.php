<?php
$servername = "localhost";
$username = "root";
$password = "ssydx";
$dbname = "ssydxdb";

try {
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    echo "连接成功";
} catch(PDOException $e) {
    echo "连接失败: " . $e->getMessage();
}

$conn = null;
?>