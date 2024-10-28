<?php
    $form = $_POST;
    $files = $_FILES['files'];
    // 遍历FIIES
    foreach ($files as $key => $value) {
        // echo $key . '<br>';
        if ($key != 'full_path') {
            foreach($value as $ele) {
                echo '多个' . $key . '：' . $ele . '<br>';;
            }
        }
    }
    // 遍历POST
    echo '该表单元素个数：' . count($form) . '<br>';
    foreach ($form as $key => $element) {
        if (is_array($element)) {
            foreach ($element as $ele) {
                echo '多个' . $key. '：' . $ele . '<br>';
            }
        }
        else {
            echo $key. '：' . $element . '<br>';
        }
    }

?>