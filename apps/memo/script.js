let items;
let frame;

window.onload = () => {
    items = document.querySelectorAll('.side-content');
    frame = document.querySelector('iframe');
}

function memo_change(index) {
    unfocus();
    items[index].classList.add('focus');
    frame.src = `./docs/frame${index}.html`;
}

function unfocus() {
    items.forEach(i => {
        i.classList.remove('focus');
    });
}