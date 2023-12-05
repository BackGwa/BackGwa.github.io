<head>
    <style>
        * {
            background: #0000a8;
        }
    </style>
</head>

<body>
    <?php

    session_start();
    $id = $_SESSION['uxid'];
    $msg = $_POST['message'];
    $dtime = date("Y-m-d H:i:s");

    $DB = mysqli_connect('localhost', '', '');

    mysqli_select_db($DB, 'backgwa');

    $query = "insert into message_log values(NULL, '".$id."', '".$msg."', '".$dtime."')";
    mysqli_query($DB, $query);
    mysqli_close($DB);

    echo "<script>location.href = 'hitel.php'</script>";
    ?>
</body>