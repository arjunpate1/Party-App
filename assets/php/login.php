<?php

    if(isset($_POST['search'])) {
        
        include("db_connect.php");
        
        $username = $_POST['username'];
        $password = $_POST['password'];
        $password = sha1($password);
        
        $sql = "SELECT * FROM admin WHERE email='" . $email . "' AND pass='".$password."' LIMIT 1";
        $result = mysqli_query($connection, $sql);
        
        if (mysqli_num_rows($result) == 1) {
            
            // Login Successful
            $row = mysqli_fetch_row($result);

            
            
            $details = new \stdClass();
            $details->first = $row[1];
            $details->url = $row[5];
            
            $myJSON = json_encode($details);
            
            echo $myJSON;
            
            
            
        }
        
        else {
            
            // Login Failed
            echo "fail";
            
        }
        
        exit();
    } 
?>