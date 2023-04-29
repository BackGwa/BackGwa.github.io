const context = document.getElementById("context");
const scope = document.querySelector("body");
const fstoggle = document.getElementById("fstoggle");
const fbremove = document.getElementById("fbremove");
const audioCM = document.getElementById("audioCM")
const audioER = document.getElementById("audioER")
const ERRORA = document.getElementById("ERROR");

scope.addEventListener("contextmenu", (e) => {
    audioCM.play();
    if (e.target.id != 'hintdisable') {
        e.preventDefault();

        context.classList.add("anime");

        const {
            clientX: mouseX,
            clientY: mouseY
        } = e;

        context.style.top = mouseY + 'px';
        context.style.left = mouseX + 'px';

        context.classList.add("visible");

        setTimeout(function () {
            context.classList.remove("anime");
        }, 300);
    } else {
        e.preventDefault();
    }

})

scope.addEventListener("click", (e) => {
    if (e.target.offsetParent != context) {
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

fbremove.addEventListener("click", function () {
    ERRORA.style.top = '50%';
    ERRORA.style.left = '50%';
    ERRORA.style.transform = 'translate(-50%, -50%)';
    audioER.play();
    ERRORA.classList.remove('ALARMHIDDEN');
    ERROR_over();
    context.classList.remove("visible");
})