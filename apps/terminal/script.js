const today = new Date();
let console_scroll;
let console_log;
let input;

window.onload = () => {
    input = document.querySelector("input");   
    console_log = document.querySelector(".console_log");
    console_scroll = document.querySelector(".console-scroll");
    log_write(`Last Login: ${today.toLocaleString('en-US')} on portfolio shell`);
}

function log_write(text) {
    console.log(text);
    console_log.innerHTML += '<div class="command">' + text + '</div>';
}

window.addEventListener("keydown", (e) => {
    if (e.keyCode == 13 && input.value) {
        command = input.value;
        input.value = "";

        log_write(`Guest@PORTFOLIO-Web ~ % ${command}`);

        switch (command) {
            case "help":
                log_write(`
                    help - 포트폴리오 쉘 도움말을 봅니다.<br>
                    clear - 콘솔 내용을 모두 지웁니다.<br>
                    profile - 프로필 앱을 엽니다.<br>
                    lang - 언어 스택 앱을 엽니다.<br>
                    tech - 기술 스택 앱을 엽니다.<br>
                    suite - SUITE Simulator 앱을 엽니다.<br>
                    career - 경력 사항 앱을 엽니다.<br>
                    contact - 연락처 앱을 엽니다.<br>
                    setting - 시스템 설정 앱을 엽니다.<br>
                    <br>
                `);
                break;
            case "clear":
                console_log.innerHTML = "";
                break;
            case "profile":
                parent.open_app("profile", true);
                break;
            case "lang":
                parent.open_app("lang-stack", true);
                break;
            case "tech":
                parent.open_app("tech-stack", true);
                break;
            case "suite":
                parent.open_app("simulator", true);
                break;
            case "career":
                parent.open_app("memo", true);
                break;
            case "contact":
                parent.open_app("contact", true);
                break;
            case "setting":
                parent.open_app("setting", true);
                break;
            default:
                log_write(`portfolio shell: command not found: ${command}`);
                break;
        }

        console_scroll.scrollTop = console_scroll.scrollHeight;
        input.focus();
    }
});