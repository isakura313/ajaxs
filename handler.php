<?php
$db = mysqli_connect("127.0.0.1", "pavel", "", "travel");
mysqli_set_charset($db, "utf8");


if($_GET['sort'] == "ASC"){
    $sql = "SELECT * FROM words ORDER BY price ASC";
    $json_data = ['Tags'=>[], "Img"=>[], "Price"=>[], "Rating"=>[]];
    $result = mysqli_query($db, $sql);
    while($row = $result-> fetch_assoc()){
        array_push($json_data['Tags'], $row['tags']);
        array_push($json_data['Img'], $row['img']);
        array_push($json_data['Price'], $row['price']);
        array_push($json_data['Rating'], $row['rating']);
    }
    $final_info = json_encode($json_data, JSON_UNESCAPED_UNICODE);
    echo $final_info;
}
if($_GET['sort'] == "DESC"){
    $sql = "SELECT * FROM words ORDER BY price DESC";
    $json_data = ['Tags'=>[], "Img"=>[], "Price"=>[], "Rating"=>[]];
    $result = mysqli_query($db, $sql);
    while($row = $result-> fetch_assoc()){
        array_push($json_data['Tags'], $row['tags']);
        array_push($json_data['Img'], $row['img']);
        array_push($json_data['Price'], $row['price']);
        array_push($json_data['Rating'], $row['rating']);
    }
    $final_info = json_encode($json_data, JSON_UNESCAPED_UNICODE);
    echo $final_info;
}