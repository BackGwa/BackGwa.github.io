const context = document.getElementById("context");
const scope = document.querySelector("body");
const sysreboot = document.getElementById("sysreboot");
const fstoggle = document.getElementById("fstoggle");
const fbremove = document.getElementById("fbremove");
const openinfo = document.getElementById("openinfo");
const audioCM = document.getElementById("audioCM")
const audioER = document.getElementById("audioER")
const audioLO = document.getElementById("audioLO")
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

function removeall(){
    const removeElement = (element) => {
        if (element && element.parentNode) {
          element.parentNode.removeChild(element);
        }
      };
      
      removeElement(window_INFO);
      removeElement(window_IMAGE);
      removeElement(window_ERROR);
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

sysreboot.addEventListener("click", function () {
    context.classList.remove("visible");
    document.getElementById('iswait').classList.remove('cursor-default');
    document.getElementById('iswait').classList.add('cursor-wait');
    setTimeout(function(){
        removeall();
    }, 1000)
    setTimeout(function(){
        document.querySelector('.iconlist').remove();
    }, 1750)
    setTimeout(function(){
        audioLO.play();
        document.querySelector('.CRTON').style.animation = "ONEFFECT 5s reverse ease-out";
    }, 2000);
    setTimeout(function(){
        document.querySelector('.taskbar').remove();
    }, 2750)
    setTimeout(function(){
        location.href = './startup.html';
    }, 7000);
})

openinfo.addEventListener("click", function () {
    context.classList.remove("visible");
    window_INFO.classList.remove("ALARMHIDDEN");
    document.getElementById('mypc').classList.remove("ALARMHIDDEN");
})