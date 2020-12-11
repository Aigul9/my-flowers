<?php
    include("header.php");
    $link = mysql_connect("localhost", "root", "") or
        die ("Не удается подключиться к серверу :(");
    mysql_select_db("myflowers") or
        die ("Не удается подключиться к базе данных :(");
    $postdata = file_get_contents("php://input");
    $data = json_decode($postdata);
    $id_bq = $_GET['id_bq'];
    $kolvo = $_GET['kolvo'];
    $id_order = $_GET['id_order'];
    // $id_order = rand(1000000, 9999999);
    // $date = date("m.d.y H:i:s");

    $strSQL1="select * from order_bouq";
    $result=mysql_query($strSQL1) or die("Запрос не выполнен :(");
    if($result) {
        $strSQL="INSERT INTO order_bouq (id_order, id_bq, kolvo) values ('".$id_order."', ".$id_bq.", ".$kolvo.")";
    }
    mysql_query($strSQL);
    mysql_free_result($result);
    mysql_close($link);
?>