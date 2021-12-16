<?php

require("lib/db.php");

$mysql_connect = new mysqli(
    $host,
    $user,
    $pass,
    $db_name
);
mysqli_set_charset($mysql_connect, "utf8");

$mysql_connect->query("UPDATE `web stats` SET `views`=`views`+1 WHERE `domain`='hzswdef.xyz'");
$result = $mysql_connect->query("SELECT `views` FROM `web stats` WHERE `domain`='hzswdef.xyz'");

while ($rows = mysqli_fetch_assoc($result)) {
    $view_count = $rows['views'];
}

mysqli_close($mysql_connect);

include_once("index.html");

?>

<div class="view-count unselectable">
    <img src="assets/eye.png"/>

    <span>
        <? echo $view_count; ?>
    </span>
</div>