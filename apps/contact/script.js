
let side_content;
let index;

window.onload = () => {
    side_content = document.querySelectorAll('.side-content');
    tab_switch(0)
}

function tab_switch(idx) {
    index = idx;
    unfocus();
    side_content[index].classList.add('focus');
}

function unfocus() {
    side_content.forEach(i => {
        i.classList.remove('focus');
    });
}