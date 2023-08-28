<?php
    $username = $_POST["Username"];
    $email = $_POST["Email"];
    $password = $_POST["Password"];
    $account_type = $_POST["account-type"];
    $term = filter_input(INPUT_POST,"terms",FILTER_VALIDATE_BOOLEAN);

    if(!$term){
        die("Terms and Conditions should be accepted to proceed");
    }

    var_dump($username,$password,$account_type,$email);
    $host = "@localhost";
    $dbname = "Web_Project";
    $username = "ta";
    $password ="030803";

    mysqli_connect($host,$username,$password,$dbname);

    if (mysqli_connect_errno()){
        die("Connection error: ".mysqli_error());
    }
//    if($account_type == "Admin"){
//        $id = "AD" +;
//    }
//    else $id ="US" +;
//    echo "Connection successful.";

    $sql = "INSERT INTO Account ($username,$email,$password)";