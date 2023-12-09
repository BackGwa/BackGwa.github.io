
let dock_item;
let select_index = 0;

// 페이지 초기화 작업
function page_init() {
    dock_item = document.querySelectorAll(".dock-item");
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