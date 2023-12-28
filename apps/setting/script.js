
const names = ['내 프로필', '동아리 활동'];

let disk_item;
let side_content;
let tip;
let index;

window.onload = () => {
    disk_item = document.querySelectorAll('.disk-item');
    side_content = document.querySelectorAll('.side-content');
    tip = document.querySelector(".inner-bottom-text");
    disk_select(0);
}

function disk_select(idx) {
    index = idx;
    disk_unfocus();
    disk_item[index].classList.add('item-focus');
    tip.innerText = `"${names[index]}" 디스크를 선택했습니다.`;
}

function disk_unfocus() {
    disk_item.forEach(i => {
        i.classList.remove('item-focus');
    });
}

function disk_boot() {
    switch (index) {
        case 0:
            parent.location.href = "../../profile.html";
            break;
        case 1:
            parent.location.href = "../../club.html";
            break;
    }
}

function search_event(e) {
    input = e.value.replace(/ /g,"")
    if (input) {
        side_content.forEach(i => {
            item_name = i.innerText.replace(/ /g,"");
            if (item_name.includes(input)) {
                i.classList.remove('hidden');
            } else {
                i.classList.add('hidden');
            }
        });
    } else {
        side_content.forEach(i => {
            i.classList.remove('hidden');
        });
    }
}