<?php
    include("header.php");
    $link = mysql_connect("localhost", "root", "") or
        die ("Не удается подключиться к серверу :(");
    mysql_select_db("myflowers") or
        die ("Не удается подключиться к базе данных :(");
    $strSQL1="select id_bq, name_bq, price_bq, comp_bq, image_bq, name_type, country_sup from bouquets, suppliers, flowertypes where bouquets.id_type=flowertypes.id_type AND
    bouquets.id_sup=suppliers.id_sup AND bouquets.id_type=8";
    $result=mysql_query($strSQL1) or die("Запрос не выполнен :(");
    if($result)
    {
        $rows = mysql_num_rows($result);
        $object1 =array();
        for ($i = 0 ; $i < $rows ; ++$i)
        {
            $row = mysql_fetch_row($result);
            $object1[$i]["id_bq"]=$row[0];
            $object1[$i]["name_bq"]=$row[1];
            $object1[$i]["price_bq"]=$row[2];
            $object1[$i]["comp_bq"]=$row[3];
            $object1[$i]["image_bq"]=$row[4];
            $object1[$i]["name_type"]=$row[5];
            $object1[$i]["country_sup"]=$row[6];
        }
        echo json_encode($object1);
        mysql_free_result($result);
    }
    mysql_close($link);
?>