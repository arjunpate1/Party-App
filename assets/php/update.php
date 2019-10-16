<?php

    session_start();

    if(isset($_POST['update_code'])) {
        
        include("db_connect.php");
        
        $email = $_POST['email'];
        $code = $_POST['code'];
        
        $sql = "UPDATE guests SET code = '$code' WHERE email = '$email'";
        mysqli_query($connection, $sql);
        
        $_SESSION['code'] = $code;
		
		echo "success";
        
        exit();
    } 
?>