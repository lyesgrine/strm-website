<?php

if(isset($_POST["chapter"])){
    /* $conn = mysqli_connect("localhost","root","","strm"); */
    $conn = new PDO("mysql:host=localhost;dbname=strm", "root", "");
    $data = array();
    $input =$_POST["chapter"];
    if($input == "0"){
        $query="SELECT qst_text,opt,answer FROM questions WHERE qst_type='multichoice';";
    }
    if($input == "1"){
        $query="SELECT qst_text,opt,answer FROM questions WHERE qst_type='multichoice' AND chapter = '1';";
    }
    if($input == "2"){
        $query="SELECT qst_text,opt,answer  FROM questions WHERE qst_type='multichoice' AND chapter = '2';";
    }
    if($input == "3"){
        $query="SELECT qst_text,opt,answer  FROM questions WHERE qst_type='multichoice' AND chapter = '3';";
    }


    $result = $conn->query($query);

    foreach($result as $row){
        $data[] = array(
            "qst_text" => $row["qst_text"], "opt" => $row["opt"], "answer" =>  $row["answer"]
        );
    }
    echo json_encode($data);
}

?>