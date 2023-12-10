
let dock;
let time_label;
let dock_item;
let program;
let program_window;
let tab_item;
let profile_frame;
let tab_index = 0;
let select_index = 0;

// 페이지 초기화 작업
function page_init() {
    dock = document.querySelector(".bottom-dock");
    append_dock();
    dock_item = document.querySelectorAll(".dock-item");
    time_label = document.querySelector(".time-label");
    program = document.querySelectorAll(".app-window");
    program_window = document.querySelectorAll(".window-area");
    tab_item = document.querySelectorAll(".tab-item");
    profile_frame = document.querySelector("#profile-frame");
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
            refresh_focus();
        });

        window.addEventListener("mouseup", () => {
            program[index].classList.remove("window-focus");
        });

        window.addEventListener("mousemove", (e) => {
            if (program[index].classList.contains("window-focus") &&
                !program[index].classList.contains("stretch-app")) {
                program[index].style.left = `${e.clientX - e.clientX / 4}px`;
                program[index].style.top = `${e.clientY - 24}px`;
            }
        });
    });

    time_update();
    setInterval(() => time_update, 1000);
}

// 앱 열기 / 닫기
function open_app(name, dock = false) {
    const app = document.querySelector(`.${name}-app`);
    if (app.classList.contains("hidden-app")) {
        app.classList.remove("hidden-app");
        app.style.zIndex = 3;
    } else {
        if (dock) {
            zIndex_reset();
            app.style.zIndex = 3;
        } else {
            zIndex_reset();
            app.classList.add("hidden-app");
        }
    }
    refresh_focus();
    refresh_profile();
    refresh_app_stat();
}

function stretch_app(name) {
    const app = document.querySelector(`.${name}-app`);
    if (app.classList.contains("stretch-app")) {
        app.classList.remove("stretch-app");
        app.style.zIndex = 3;
    } else {
        app.classList.add("stretch-app");
        app.style.top = '1.8rem';
        app.style.left = '0px';
        app.style.zIndex = 3;
    }
}

// 앱 활성 상태 반영
function refresh_focus() {
    program.forEach(i => {
        if (i.style.zIndex == 3) {
            i.classList.remove("non-focus");
        } else {
            i.classList.add("non-focus");
        }
    });
}

// 앱 켜짐 상태 반영
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

// 프로필 라벨 상태 반영
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

// 전체화면 스크린샷
function fullpage_screenshot() {
    play("../res/sounds/macOS_ScreenCapture.mp3");
    html2canvas(document.querySelector('.gui-env')).then(function (canvas) {
        const imageDataURL = canvas.toDataURL('image/png');
        const link = document.createElement('a');
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
        play("../res/sounds/macOS_ScreenCapture.mp3");
        html2canvas(document.querySelector(`.${active_window}`), {
            backgroundColor: null
        }).then(function (canvas) {
            const imageDataURL = canvas.toDataURL('image/png');
            const link = document.createElement('a');
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

function tab_unfocus() {
    tab_item.forEach(i => {
        i.classList.remove("tab-item-focus");
    });
}

// 탭 변경
function tab_switch(index) {
    if (index != tab_index) {
        tab_index = index;
        tab_unfocus();
        tab_item[index].classList.add("tab-item-focus");
    
        profile_frame.classList.add("fade");
        
        setTimeout(() => {
            switch (index) {
                case 0:
                    profile_frame.src = "./apps/profile/profile.html";
                    break;
                case 1:
                    profile_frame.src = "./apps/profile/mbti.html";
                    break;
                case 2:
                    profile_frame.src = "./apps/profile/credit.html";
                    break;
            }
        }, 100);
    
    
        setTimeout(() => {
            profile_frame.classList.remove("fade");
        }, 200)
    }
}