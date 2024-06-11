
let disk_item;
let select_index = 0;

// 페이지 초기화 작업
function page_init() {
    disk_item = document.querySelectorAll(".disk-item");

    play("../res/sounds/macOS_Startup.mp3");
    event_register();
    disk_item_focus();
}

// 페이지 이벤트 등록
function event_register() {

    // 모바일 페이지 감지 스크립트
    user_agent = navigator.userAgent.toLowerCase();
    mobile_list = ['iphone', 'ipod', 'ipad', 'android', 'blackberry', 'windows ce'];

    mobile_list.forEach(i => {
        if (user_agent.includes(i)) {
            location.href = "./profile_mobile.html";
        }
    });

    disk_item.forEach((i, index) => {

        // 마우스 호버 이벤트 등록
        i.addEventListener("mouseover", () => {
            select_index = index;
            disk_item_focus();
        });

        // 마우스 클릭 이벤트 등록
        i.addEventListener("click", () => {
            disk_boot();
        });

    });

    // 키보드 방향키 이벤트 등록
    window.addEventListener("keyup", (e) => {
        // 좌측 키 입력
        if (e.keyCode === 37) {
            key_left();
            disk_item_focus();
        }

        // 우측 키 입력
        else if (e.keyCode === 39) {
            key_right();
            disk_item_focus();
        }

        // 엔터 키 입력
        else if (e.keyCode === 13) {
            disk_boot();
        }
    });

}

// 포커싱 비주얼 이펙트 적용
function disk_item_focus() {
    disk_item_unfocus()
    disk_item[select_index].classList.add("disk-focus");
}

// 모든 포커싱 비주얼 이펙트 제거
function disk_item_unfocus() {
    disk_item.forEach(i => {
        i.classList.remove("disk-focus");
    });
}

// 키보드 왼쪽 입력 처리
function key_left() {
    if (select_index === 0) {
        select_index = disk_item.length - 1;
    } else {
        select_index--;
    }
}

// 키보드 오른쪽 입력 처리
function key_right() {
    if (disk_item.length - 1 === select_index) {
        select_index = 0;
    } else {
        select_index++;
    }
}

// 선택 디스크에 따른 페이지 이동
function disk_boot() {
    switch (select_index) {
        case 0:
            location.href = "./profile.html";
            break;
        case 1:
            location.href = "./club.html";
            break;
    }
}