<?php
    $uxid = $_POST['message'];

    session_start();
    $_SESSION['uxid'] = $uxid;

    $DB = mysqli_connect('localhost', '', '');
    $dtime = date("Y-m-d H:i:s");

    mysqli_select_db($DB, 'backgwa');

    $query = "insert into message_log values(NULL, '"."입장"."', '".$uxid."님이 입장하셨습니다."."', '".$dtime."')";
    mysqli_query($DB, $query);
    mysqli_close($DB);

    echo '<script>location.href = "hitel.php"</script>'
?>