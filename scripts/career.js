
let safari;

// 페이지 초기화 작업
function page_init() {
    time_label = document.querySelector(".time-label");
    safari = document.querySelector(".safari");
    frame = document.querySelector("iframe");
    time_update();
    register_time();
}

function document_open(file) {
    safari.classList.remove("non-display");
    frame.src = `./apps/safari/${file}.html`;
}

function document_close() {
    safari.classList.add("non-display");
}