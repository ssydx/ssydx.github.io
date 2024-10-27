<?php
// 姓名数组
// $arr[] = val为数组追加
 $a[] = "Ava";
 $a[] = "Brielle";
 $a[] = "Caroline";
 $a[] = "Diana";
 $a[] = "Elise";
 $a[] = "Fiona";
 $a[] = "Grace";
 $a[] = "Hannah";
 $a[] = "Ileana";
 $a[] = "Jane";
 $a[] = "Kathryn";
 $a[] = "Laura";
 $a[] = "Millie";
 $a[] = "Nancy";
 $a[] = "Opal";
 $a[] = "Petty";
 $a[] = "Queenie";
 $a[] = "Rose";
 $a[] = "Shirley";
 $a[] = "Tiffany";
 $a[] = "Ursula";
 $a[] = "Victoria";
 $a[] = "Wendy";
 $a[] = "Xenia";
 $a[] = "Yvette";
 $a[] = "Zoe";
 $a[] = "Angell";
 $a[] = "Adele";
 $a[] = "Beatty";
 $a[] = "Carlton";
 $a[] = "Elisabeth";
 $a[] = "Violet";

// 从 URL 获取 q 参数
// 获取请求数组中的q变量
$q = $_REQUEST["q"];

$hint = "";

// 查看数组中所有 hint，$q 是否与 "" 相同
// .是字符串连接符
if ($q !== "") {
    $q = strtolower($q);
    $len=strlen($q);
    foreach($a as $name) {
        // 如果q是name的子串
        if (stristr($q, substr($name, 0, $len))) {
            // 追加当前name到hint中
            if ($hint === "") {
                $hint = $name;
            } else {
                $hint .= ", $name";
            }
         }
    }
}

// 输出 "no suggestion"，如果未找到 hint 或输出正确的值
  echo $hint === "" ? "no suggestion" : $hint;
?>