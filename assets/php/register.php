<?php

    if(isset($_POST['create_account'])) {
        
        include("db_connect.php");
        
        $name = $_POST['name'];
        $email = $_POST['email'];
        $subscribed = $_POST['subscribed'];
        $hosts = $_POST['hosts'];
        $payment = $_POST['payment'];
        $status = $_POST['status'];
        $code = $_POST['code'];
        
        $sql = "INSERT INTO guests (name,email,subscribed,hosts,payment,status,code) VALUES('$name','$email','$subscribed','$hosts','$payment','$status','$code')";
        mysqli_query($connection, $sql);
        
        setcookie("user", $email, time() + (86400 * 30 * 14), "/");
		
		echo "success";
        
        exit();
    } 
        
?>