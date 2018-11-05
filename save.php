<?php

$array=explode('&',file_get_contents("php://input"));
file_put_contents("./projects/".$array[0],$array[1]);
echo "Project ".$array[0]." is saved";

?>