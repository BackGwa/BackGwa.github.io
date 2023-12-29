
const pre_img = [
    "img2.jpg",
    "img0.jpg",
    "img1.jpg",
    "img1.jpg"
]
const pre_content = [
    ["강찬영", "강찬영", "BackGwa", "k._.iel7"],
    ["전화번호", "주소", "아이디", "아이디"],
    ["<a href='tel:010-2876-5871'>010-2876-5871</a>", "<a href='mailto:backgwa@icloud.com'>backgwa@icloud.com</a>", "<a href='https://github.com/BackGwa' target='_blank'>BackGwa</a>", "<a href='https://www.instagram.com/k._.iel7/' target='_blank'>@k._.iel7</a>"],
    ["연락 전 문자 메세지를 먼저 남겨주세요.", "12시간 ~ 2일 내 답장 가능합니다.", "다양한 프로젝트를 하고 있습니다.", ""]
]

let side_content;
let img;
let title;
let id_tip;
let id;
let memo;
let index;

window.onload = () => {
    side_content = document.querySelectorAll('.side-content');
    img = document.querySelector(".image-contact");
    title = document.querySelector(".contact-title");
    id_tip = document.querySelector(".contact-id-tip");
    id = document.querySelector(".contact-id");
    memo = document.querySelector(".contact-memo");
    tab_switch(0);
}

function tab_switch(idx) {
    index = idx;
    unfocus();
    side_content[index].classList.add('focus');
    change_content();
}

function unfocus() {
    side_content.forEach(i => {
        i.classList.remove('focus');
    });
}

function change_content() {
    img.src = './res/' + pre_img[index];
    title.innerText = pre_content[0][index];
    id_tip.innerText = pre_content[1][index];
    id.innerHTML = pre_content[2][index];
    memo.innerText = pre_content[3][index];
}