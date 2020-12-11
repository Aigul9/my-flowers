<?php
    include("header.php");
    $link = mysql_connect("localhost", "root", "") or
        die ("Не удается подключиться к серверу :(");
    mysql_select_db("myflowers") or
        die ("Не удается подключиться к базе данных :(");
    $strSQL1="select id_order, bouquets.name_bq, kolvo from order_bouq, bouquets where bouquets.id_bq=order_bouq.id_bq order by id_order asc";
    $result=mysql_query($strSQL1) or die("Запрос не выполнен :(");
    if($result)
    {
        $rows = mysql_num_rows($result);
        $object1 = array();
        for ($i = 0 ; $i < $rows ; ++$i)
        {
            $row = mysql_fetch_row($result);
            $object1[$i]["id_order"]=$row[0];
            $object1[$i]["name_bq"]=$row[1];
            $object1[$i]["kolvo"]=$row[2];
        }
        echo json_encode($object1);
        mysql_free_result($result);
    }

    mysql_close($link);
?>