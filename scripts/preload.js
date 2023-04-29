
function start(){
    document.querySelector(".screen").classList.remove("cursor-default");
    document.querySelector(".screen").classList.add("cursor-wait");
    setTimeout(() => {
        document.querySelector('.program').remove();
    }, 500);
    setTimeout(() => {
        document.getElementById("audioON").play();
    }, 2000);
    setTimeout(() => {
        location.href = './desktop.html';
    }, 7500);
}