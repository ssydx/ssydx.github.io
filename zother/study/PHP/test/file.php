<?php
// 文件上传是否有错误
if ($_FILES['file']['error'] > 0) {
    echo '上传错误！';
}
else {
    // 文件名称
    echo 'filename:' . $_FILES['file']['name'] . '<br>';
    // 文件类型
    echo 'filetype:' . $_FILES['file']['type'] . '<br>';
    // 文件大小
    echo 'filesize:' . $_FILES['file']['size'] . '<br>';
    // 临时名称
    echo 'filetmp_name:' . $_FILES['file']['tmp_name'] . '<br>';
    move_uploaded_file($_FILES['file']['tmp_name'], './file.txt');
}



?>
