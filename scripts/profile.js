
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
    refresh_app_stat();
    refresh_profile();
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
    if (app.classList.contains("hidden-app")) {
        app.classList.remove("hidden-app");
        app.style.zIndex = 3;
    } else {
        app.classList.add("hidden-app");
        zIndex_reset();
    }
    refresh_profile();
    refresh_app_stat();
}

function refresh_app_stat() {
    program.forEach((i, index) => {
        target = document.querySelector(`#app-index-${index}`)
        if (i.classList.contains("hidden-app")) {
            target.classList.remove("has-focus");
        } else {
            target.classList.add("has-focus");
        }
    });
}

function refresh_profile() {
    profile_text = document.querySelector("#profile-toggle");
    profile = document.querySelector(".profile-app");

    if (profile.classList.contains("hidden-app")) {
        profile_text.innerText = "페이지에서 표시하기";
    } else {
        profile_text.innerText = "페이지에서 숨기기";
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
    const date = String(today.getDate()).padStart(2, '0');
    const week_index = today.getDay();

    hours = String(today.getHours()).padStart(2, '0');
    minutes = String(today.getMinutes()).padStart(2, '0');

    time_label.innerHTML = `${month}월 ${date}일 (${week[week_index]}) ${hours}:${minutes}`;
}

// 전체호면 스크린샷
function fullpage_screenshot() {
    html2canvas(document.querySelector('.gui-env')).then(function (canvas) {
        var imageDataURL = canvas.toDataURL('image/png');
    
        var link = document.createElement('a');
        link.href = imageDataURL;
        link.download = 'screenshot.png';
        link.click();
      });
}

// 특정 창 스크린샷
function screenshot() {
    let active_window;

    program.forEach(i => {
        if (!i.classList.contains("hidden-app")) {
            if (i.style.zIndex == 3) {
                active_window = i.classList[1];
            }
        }
    });

    if (active_window) {
        html2canvas(document.querySelector(`.${active_window}`), {
            backgroundColor: null
        }).then(function (canvas) {
            var imageDataURL = canvas.toDataURL('image/png');
        
            var link = document.createElement('a');
            link.href = imageDataURL;
            link.download = `${active_window}.png`;
            link.click();
          });
    }
}

// 전체화면 모드 전환
function fullscreen() {
    fullscreen_label = document.querySelector("#fullscreen-label");

    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
        fullscreen_label.innerText = "전체화면 종료하기";
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen();
          fullscreen_label.innerText = "전체화면으로 보기";
        }
      }
}