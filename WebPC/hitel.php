<!DOCTYPE HTML>

<html>

    <head>
        <title>HITEL</title>
        <meta charset="utf-8">

        <link rel="shortcut icon" href="./favicon.ico" type="image/x-icon">
        <link rel="icon" href="./favicon.ico" type="image/x-icon">

        <link rel="stylesheet" href="./style/hitel.css">
        <link rel="stylesheet" href="./style/font.css">
    </head>

    <body>
        <?php 
            session_start();
            if(!isset($_SESSION["uxid"])){
                echo "<script>location.href = 'hitelloging.php'</script>";
            }
        ?>

        <div class="msgapp-title">
            자유로운 대화
        </div>

        <div class="gridx">
            <iframe src="./chatframe.php" frameborder="0" id="cf"></iframe>

            <form action="msgsender.php" method="post" class="msgerx" onsubmit="return submitchk();">
                <div class="msgboxa">
                    <input  type="text"
                            name="message"
                            id="message"
                            class="textbox"
                            oninput="chktext(this.value);"
                            autocomplete="off"
                            placeholder="______________________________________________"
                            >
                    <div class="cursor_blink" id="blinker"></div>
                    <div class="maxtxt" id="maxint">0/24</div>
                </div>
                <input type="submit" class="btn">
            </form>
        </div>

        <script src="./scripts/hitelchk.js"></script>
    </body>

</html>