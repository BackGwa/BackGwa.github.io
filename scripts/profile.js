
let dock;
let time_label;
let dock_item;
let program;
let program_window;
let select_index = 0;

// 페이지 초기화 작업
function page_init() {
    dock = document.querySelector(".bottom-dock");
    append_dock();
    dock_item = document.querySelectorAll(".dock-item");
    time_label = document.querySelector(".time-label");
    program = document.querySelectorAll(".app-window");
    program_window = document.querySelectorAll(".window-area");
    event_register();
}

// 페이지 이벤트 등록
function event_register() {
    dock_item.forEach((i, index) => {
        // 마우스 호버 이벤트 등록
        i.addEventListener("mouseover", () => {
            select_index = index;
            dock_item_focus();
        });

        i.addEventListener("mouseout", dock_item_unfocus);
    });

    program_window.forEach((i, index) => {
        i.addEventListener("mousedown", () => {
            zIndex_reset();
            program[index].classList.add("window-focus");
            program[index].style.zIndex = 3;
        });

        window.addEventListener("mouseup", () => {
            program[index].classList.remove("window-focus");
        });

        window.addEventListener("mousemove", (e) => {
            if (program[index].classList.contains("window-focus")) {
                console.log(e);
                program[index].style.left = `${e.clientX - e.clientX / 4}px`;
                program[index].style.top = `${e.clientY - 24}px`;
            }
        });
    });

    time_update();
    setInterval(() => time_update, 1000);
}

// 앱 열기 / 닫기
function open_app(name) {
    const app = document.querySelector(`.${name}-app`);
    console.log(name);
    if (app.classList.contains("hidden-app")) {
        app.classList.remove("hidden-app");
    } else {
        app.classList.add("hidden-app");
        zIndex_reset();
        app.style.zIndex = 3;
    }
}

// zIndex 초기화
function zIndex_reset() {
    program.forEach(i => {
        i.style.zIndex = 2;
    });
}

// 포커싱 비주얼 이펙트 적용
function dock_item_focus() {
    dock_item_unfocus();
    dock_item[select_index].classList.add("dock-item-focus");
    try {
        dock_item[select_index - 1].classList.add("dock-item-focus-fade1");
    } catch {}
    try {
        dock_item[select_index + 1].classList.add("dock-item-focus-fade1");
    } catch {}
}

// 모든 포커싱 비주얼 이펙트 제거
function dock_item_unfocus() {
    dock_item.forEach(i => {
        i.classList.remove("dock-item-focus");
        i.classList.remove("dock-item-focus-fade1");
    });
}

// 시간 업데이트
function time_update() {
    const week = ['일', '월', '화', '수', '목', '금', '토'];
    const today = new Date();
    const month = String(today.getMonth()).padStart(2, '0');
    const day = String(today.getDay()).padStart(2, '0');
    const week_index = today.getDay();

    hours = String(today.getHours()).padStart(2, '0');
    minutes = String(today.getMinutes()).padStart(2, '0');

    time_label.innerHTML = `${month}월 ${day}일 (${week[week_index]}) ${hours}:${minutes}`;
}