<?php

$cwd = getcwd();
echo $cwd . PHP_EOL;

$dir = opendir($cwd);
print_r($dir);
$file = readdir($dir);
while ($file !== false) {
    echo $file . PHP_EOL;
    $file = readdir($dir);
}
closedir($dir);


?>