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

    <div class="message_area">
        <div class="welcome_message">
            ### 하이텔에 들어오셨습니다.
        </div>
        <div class="welcome_message">
            ### 시간과 공간을 초월하는 꿈 , 하이텔과 함께!
        </div>
        <div class="constmargin"></div>
        <div class="constmargin"></div>
        <div class="welcome_message">
            'HiTEL' 서비스를 이용하시는 분은 이용자번호에 자신의 번호를 입력하십시오.
        </div>
        <div class="constmargin"></div>
        <div class="welcome_message">
            이용자번호 : 
            <form action="login.php" method="post" class="rmbtn" onsubmit="return idchker();">
                <input  type="text"
                        name="message"
                        id="message"
                        class="inputbox"
                        autocomplete="off"
                        placeholder="_____________"
                        >
                <input type="submit" class="rmbtnx">
            </form>
        </div>
    </div>

    <?php
    
        session_start();
        
        if(isset($_SESSION['uxid'])) {
            echo "<script>location.href = './hitel.php'</script>";
        }

    ?>

    <script src="./scripts/hitellog.js"></script>
</body>

</html>