<?php
// 创建索引数组
$arr1 = array('A','B','C','D','E');
$arr2 = ['A','B','C','D','E'];
// 输出数组
print_r($arr1);
// 数组拆分
print_r(array_chunk($arr1,3,true));

// 创建关联数组
$arr3 = array('A'=> 22,'B'=> 32,'C'=> 25,'D'=> 29,'E'=> 12);
print_r($arr3);

$arr4 = array(18,22,32,45,56);
print_r(array_combine($arr2,$arr4));

shuffle($arr3);
print_r($arr3);

$a = array(
    array(
      'id' => 5698,
      'first_name' => 'Bill',
      'last_name' => 'Gates',
    ),
    array(
      'id' => 4767,
      'first_name' => 'Steve',
      'last_name' => 'Jobs',
    ),
    array(
      'id' => 3809,
      'first_name' => 'Mark',
      'last_name' => 'Zuckerberg',
    )
);
print_r($a,'last_name');

print_r(array_merge($arr1,$arr2));
print_r(array_unique(array_merge($arr1,$arr2)));

$arr5 = array('A'=> 22,'B'=> 32,'C'=> 25,'D'=> 29,'E'=> 12);
print_r(array_keys($arr5));
print_r(array_values($arr5));

print_r(key($arr5));
print_r(current($arr5));
print_r(end($arr5));
print_r(reset($arr5));


$arr6 = array('A'=> 2,'B'=> 12,'C'=> 25,'D'=> 29,'E'=> 12);
sort($arr6);
print_r($arr6);

$arr7 = array('A'=> 2,'B'=> 12,'C'=> 25,'D'=> 29,'E'=> 12);
natsort($arr7);
print_r($arr7);
print_r(array_search(12,$arr7));

print_r(range(1,10,2));


?>