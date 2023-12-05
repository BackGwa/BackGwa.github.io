<head>
    <link rel="stylesheet" href="./style/hitel.css">
    <link rel="stylesheet" href="./style/font.css">
</head>

<body class="wth">

    <?php
        session_start();
        $id = $_SESSION['uxid'];
        $query = "select * from message_log order by idx";

        $DB = mysqli_connect('localhost', '', '');
        mysqli_select_db($DB, 'backgwa');
        $result = mysqli_query($DB, $query);
        
        while($row = mysqli_fetch_array($result)){
            echo '<div class="message">';
            if($id == $row['id']){
                echo "<div class='userid thismine'>[ ".$row['id']." ]</div>";
            } else if ($row['id'] == "입장") {
                echo "<div class='userid admin'>　　입장 -></div>";
            } else {
                echo "<div class='userid'>[ ".$row['id']." ]</div>";
            }
            echo "<div class='msgbox'>".$row['msg']."</div>";
            echo '</div>';
        }

        mysqli_close($DB);
    ?>
</body>