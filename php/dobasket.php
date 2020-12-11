<?php
    include("header.php");
    $link = mysql_connect("localhost", "root", "") or
        die ("Не удается подключиться к серверу :(");
    mysql_select_db("myflowers") or
        die ("Не удается подключиться к базе данных :(");
    // $postdata = file_get_contents("php://input");
    // $data = json_decode($postdata);
    $id_bask = $_GET['id_bask'];
    $type = $_GET['type'];

    if($type==1) {
        $id_bq = $_GET['id_bq'];
        $kolvo = $_GET['kolvo'];
        $strSQL="SELECT * FROM basket_bouq WHERE id_bq=".$id_bq." AND id_bask='".$id_bask."'";
        $result=mysql_query($strSQL) or die ("Не получается выполнить запрос к корзине :(");
        if ($row=mysql_fetch_array($result))
        {
            $strSQL="UPDATE basket_bouq SET kolvo=".$kolvo." WHERE id_bq=".$id_bq." AND id_bask='".$id_bask."'";
        }
        else
        {
            $strSQL="INSERT INTO basket_bouq (id_bask, id_bq, kolvo, date_bask) VALUES ('".$id_bask."', ".$id_bq.", 1, CURDATE())";
        }
    }
    if($type==2) {
        $strSQL="DELETE FROM basket_bouq WHERE id_bask='".$id_bask."'";
        $result=mysql_query($strSQL) or die ("Не получается выполнить запрос к корзине :(");
    }
    if($type==3) {
        $id_bq = $_GET['id_bq'];
        $strSQL="DELETE FROM basket_bouq WHERE id_bq=".$id_bq." AND id_bask='".$id_bask."'";
        $result=mysql_query($strSQL) or die ("Не получается выполнить запрос к корзине :(");
    }
    mysql_query($strSQL);
    // mysql_free_result($result);
    mysql_close($link);
?>