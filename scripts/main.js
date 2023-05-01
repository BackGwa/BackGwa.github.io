
document.onclick = (e) => {
    document.querySelector(".message").style.animation = "ereft 0.1s forwards";
    setTimeout(() => {
        document.querySelector(".message").remove();
    }, 150);
    document.getElementById("boot").play();
    setTimeout(() => {
        document.getElementById("beep").play();
    }, 4000);
    setTimeout(() => {
        location.href = './startup.html';
    }, 9000);
}