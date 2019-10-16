<?php

    if( !isset( $_COOKIE["user"] ) ) {
        
        echo "fail";
        
    } 

    else {
        
        include("db_connect.php");
    
        $email = $_COOKIE['user'];

        $sql = "SELECT * FROM guests WHERE email='" . $email . "' LIMIT 1";
        $result = mysqli_query($connection, $sql);

        if (mysqli_num_rows($result) == 1) {
            
            $row = mysqli_fetch_row($result);

            $user = new \stdClass();
            $user->id = $row[0];
            $user->name = $row[1];
            $user->email = $row[2];
            $user->subscribed = $row[3];
            $user->hosts = $row[4];
            $user->payment = $row[5];
            $user->status = $row[6];
            $user->code = $row[7];

            $data = json_encode($user);

            echo $data;
        
        }
    }

?>