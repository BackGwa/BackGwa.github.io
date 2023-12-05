
document.onclick = (e) => {
    document.querySelector(".message").style.animation = "ereft 0.1s forwards";
    setTimeout(() => {
        document.querySelector(".message").remove();
    }, 150);
    setTimeout(() => {
        document.getElementById("beep").play();
    }, 1000);
    setTimeout(() => {
        location.href = './startup.html';
    }, 2000);
}