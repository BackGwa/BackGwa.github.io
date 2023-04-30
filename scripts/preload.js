const WAIT = document.getElementById('WAIT');

function start(){
    document.querySelector(".screen").classList.remove("cursor-default");
    document.querySelector(".screen").classList.add("cursor-wait");
    setTimeout(() => {
        document.querySelector('.INFO').remove();
    }, 500);
    setTimeout(() => {
        document.getElementById("audioON").play();
    }, 1000);
    setTimeout(() => {
        WAIT.classList.remove('HIDDEN');
    }, 2000);
    setTimeout(() => {
        WAIT.remove();
    }, 6000);
    setTimeout(() => {
        location.href = './desktop.html';
    }, 7500);
}