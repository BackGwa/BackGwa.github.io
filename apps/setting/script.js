
const names = ['내 프로필', '경력 사항', '동아리 활동'];

let disk_item;
let tip;
let index;

window.onload = () => {
    disk_item = document.querySelectorAll('.disk-item');
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
            parent.location.href = "../../career.html";
            break;
        case 2:
            parent.location.href = "../../club.html";
            break;
    }
}