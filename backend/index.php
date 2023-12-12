<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
//header("Content-Type: application/json");


    $data1 = array(
        'h1' => 'I will this work hmm'
    );

    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        $username = isset($_POST['username']) ? $_POST['username'] : '';
        $discription = isset($_POST['discription']) ? $_POST['discription'] : '';

       // $data = json_encode(array('username' => $username, 'discription' => $discription), JSON_PRETTY_PRINT | JSON_OBJECT_AS_ARRAY);
       // $putContentJSON = file_put_contents('data.json', $data, FILE_APPEND);

       $str = file_get_contents('data.json');
       $arr = json_decode($str, true);
   
       if (!isset($arr["msg"])) {
           $arr["msg"] = array();
       }
   
       $arrne['username'] = $username;
       $arrne['discription'] = $discription;
       array_push($arr["msg"], $arrne);
   
       $str = json_encode($arr, JSON_PRETTY_PRINT);
   
       if (json_decode($str) != null) {
           $file = fopen('data.json', 'w');
           fwrite($file, $str);
           fclose($file);
       }

       echo json_encode($arr["msg"]);

    }
    //echo json_encode($data1);
    //var_dump($putContentJSON);
