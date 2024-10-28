<?php
// 工作路径
$cwp = getcwd();
echo $cwp . PHP_EOL;
// 工作目录
$cwd = dirname($cwp);
echo $cwd . PHP_EOL;
// 工作文件
$cwb = basename($cwp);
echo $cwb . PHP_EOL;
$filearr = scandir($cwp);
print_r($filearr);


// 路径信息1
$pi = pathinfo($cwp . '\pic.png');
print_r($pi);
echo PHP_EOL;
// 路径信息2
$pi = pathinfo($cwp);
print_r($pi);
echo PHP_EOL;
// 路径信息3
$pi = pathinfo('pic.png');
print_r($pi);
echo PHP_EOL;
// 文件信息
$fi = stat('pic.png');
print_r($fi);
echo PHP_EOL;

echo is_file('pic.png') . PHP_EOL;



$f = 'pic.png';
// 文件所有者id
echo fileowner($f) . PHP_EOL;
// 文件权限
echo fileperms($f) . PHP_EOL;
// 文件大小
echo filesize($f) . PHP_EOL;
// 文件类型
echo filetype($f) . PHP_EOL;
// 文件inode
echo fileinode($f) . PHP_EOL;
// 文件组id
echo filegroup($f) . PHP_EOL;
// 上次访问时间
echo fileatime($f) . PHP_EOL;
// 上次修改时间
echo filemtime($f) . PHP_EOL;
// 上次inode改变时间
echo filectime($f) . PHP_EOL;

echo PHP_EOL;
echo disk_total_space('D:') . PHP_EOL;
echo disk_free_space('D:') . PHP_EOL;

$f = file('newfile.txt');
print_r($f);

echo is_dir('C:\Users\ssydx\Desktop\学习\GIT\ssydx.io\zother\study\PHP\test');

?>