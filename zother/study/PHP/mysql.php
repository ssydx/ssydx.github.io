<?php

$sql = mysqli_connect('localhost','root','ssydx','pythondb');
print_r($sql);
$result = mysqli_query($sql, 'table pytb');
$arrs = mysqli_fetch_all($result);
print_r($arrs);
mysqli_close($sql);

$sql = mysqli_connect('localhost','root','ssydx','pythondb');
$result = mysqli_query($sql, 'table pytb');
$arr = mysqli_fetch_array($result);
print_r($arr);
print_r($arr['name']);
$arr = mysqli_fetch_assoc($result);
print_r($arr);
$arr = mysqli_fetch_row($result);
print_r($arr);
$arr = mysqli_fetch_object($result);
print_r($arr);
print_r($arr->name);
print_r(mysqli_fetch_lengths($result));
print_r(mysqli_fetch_fields($result));
print_r(mysqli_fetch_field($result));
print_r(mysqli_fetch_field($result));
print_r(mysqli_fetch_field($result));

echo "MySQL client info: " . mysqli_get_client_info() . PHP_EOL;
echo "MySQL client info: " . mysqli_get_host_info($sql) . PHP_EOL;
echo "MySQL client info: " . mysqli_get_proto_info($sql) . PHP_EOL;
echo "MySQL client info: " . mysqli_get_server_info($sql) . PHP_EOL;



mysqli_close($sql);





?>