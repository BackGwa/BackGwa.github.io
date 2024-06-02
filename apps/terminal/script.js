let console_scroll;
let console_log;
let input;
let __node__ = false;
const today = new Date();

let ConsoleLog = console.log;
let ConsoleWarn = console.warn;
let ConsoleError = console.error;

window.onload = () => {
    input = document.querySelector("input");
    command_tip = document.querySelector(".tip");
    console_log = document.querySelector(".console-log");
    console_scroll = document.querySelector(".console-scroll");
    log_write(`Last Login: ${today.toLocaleString('en-US')} on portfolio shell`);
}

function log_write(text) {
    console_log.innerHTML += '<div class="command">' + text + '</div>';
}

console.log = function () {
    var message = [].join.call(arguments, " ");
    log_write(message);
    ConsoleLog.apply(console, arguments);
};

console.warn = function () {
    var message = [].join.call(arguments, " ");
    log_write(`<div class="code-warn">${message}</div>`);
    ConsoleWarn.apply(console, arguments);
};

console.error = function () {
    var message = [].join.call(arguments, " ");
    log_write(`<div class="code-err">${message}</div>`);
    ConsoleError.apply(console, arguments);
};

window.addEventListener("keydown", (e) => {
    if (e.keyCode == 13 && input.value) {
        command = input.value;
        input.value = "";

        if (!__node__) {
            command_tip.innerHTML = "Guest@PORTFOLIO-Web ~ %";
            log_write(`Guest@PORTFOLIO-Web ~ % ${command}`);

            switch (command) {
                case "info":
                    log_write("<div class='root-version'></div>");
                    break;
                case "help":
                    log_write(`\
info     - 포트폴리오 페이지의 정보를 출력합니다.
help     - 포트폴리오 쉘 도움말을 봅니다.
mail     - 메일로 연락합니다.
tel      - 전화로 연락합니다.
node     - 자바스크립트 인터랙티브 쉘을 엽니다.
profile  - 프로필 앱을 엽니다.
lang     - 언어 스택 앱을 엽니다.
tech     - 기술 스택 앱을 엽니다.
suite    - SUITE Simulator 앱을 엽니다.
career   - 경력 사항 앱을 엽니다.
facetime - FaceTime을 엽니다.
contact  - 연락처 앱을 엽니다.
setting  - 시스템 설정 앱을 엽니다.
clear    - 콘솔 내용을 모두 지웁니다.
`);
                    break;
                case "clear":
                    console_log.innerHTML = "";
                    break;
                case "mail":
                    email = document.createElement('a');
                    email.href = 'mailto:backgwa@icloud.com';
                    email.click();
                    break;
                case "tel":
                    tel = document.createElement('a');
                    tel.href = 'tel:010-2876-5871';
                    tel.click();
                    break;
                case "node":
                    __node__ = true;
                    node_mode()
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
                case "facetime":
                    parent.open_app("facetime", true);
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
        } else {
            node_mode(command);
        }

        console_scroll.scrollTop = console_scroll.scrollHeight;
        input.focus();
    }
});

function node_mode(code = "{JOININ_SHELL}") {
    if (code == "{JOININ_SHELL}") {
        log_write(`Welcome to Portfolio.js`);
        log_write(`Type ".help" for more information.`);
        command_tip.innerHTML = ">";
    } else if (code.includes(".help")) {
        log_write(`> ${code}`);
        log_write(`.exit    Exit the REPL`);
        log_write(`.help    Print this help message`);
        log_write(` `);
        log_write(`Exit the REPL by typing .exit`);
        log_write(` `);
    } else if (code.includes(".exit")) {
        __node__ = false;
        log_write(`> ${code}`);
        log_write(` `);
        command_tip.innerHTML = "Guest@PORTFOLIO-Web ~ %";
    } else if (code.includes("__node__")) {
        log_write(`> ${code}`);
        log_write(`<div class="code-err">Not authorized</div>`);
    } else if (code != "{JOININ_SHELL}") {
        log_write(`> ${code}`);
        try {
            result = eval(code);
        } catch (e) {
            result = `<div class="code-err">${e}</div>`;
        }

        result = (result) ? result : `<div class="code-undefined">${result}</div>`

        log_write(result);
    }
}