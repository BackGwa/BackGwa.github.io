const context = document.getElementById("context");
const scope = document.querySelector("body");
const fstoggle = document.getElementById("fstoggle");
const returnDOS = document.getElementById("returnDOS");

scope.addEventListener("contextmenu", (e) => {
    e.preventDefault();

    const {
        clientX: mouseX,
        clientY: mouseY
    } = e;

    context.style.top = mouseY + 'px';
    context.style.left = mouseX + 'px';

    context.classList.add("visible");

})

scope.addEventListener("click", (e) => {
    if(e.target.offsetParent != context) {
        context.classList.remove("visible");
    }
})


function toggleFullScreen() {
    fstoggle.innerHTML = "꽉 차지 않은 화면";
    if (!document.fullscreenElement &&
        !document.mozFullScreenElement && !document.webkitFullscreenElement) {
        if (document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen();
        } else if (document.documentElement.mozRequestFullScreen) {
            document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullscreen) {
            document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
        }
    } else {
        fstoggle.innerHTML = "꽉 찬 화면";
        if (document.cancelFullScreen) {
            document.cancelFullScreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen();
        }
    }
}


fstoggle.addEventListener("click", function () {
    toggleFullScreen();
    context.classList.remove("visible");
})
