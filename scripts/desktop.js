const time = document.getElementById('timedisplay');
const box = document.getElementById("box");
const desktop = document.getElementById("desktop");

const window_INFO = document.getElementById("INFO");
const hint_INFO = document.getElementById("infohint");
const title_INFO = document.getElementById("INFOTITLE");

const window_IMAGE = document.getElementById("IMAGE");
const hint_IMAGE = document.getElementById("imagehint");
const title_IMAGE = document.getElementById("IMAGETITLE");

const window_ERROR = document.getElementById("ERROR");
const hint_ERROR = document.getElementById("errorhint");
const title_ERROR = document.getElementById("ERRORTITLE");

const INFOEXIT = document.getElementById("INFOEXIT");

const audio1 = document.getElementById("audio1")

let startPosition;
let isDragging;

let windowsDrag = false;
let INFO = false;
let IMAGE = false;
let ERROR = false;

let pagesize = [250, 350];

const counter = setInterval(function(){
    const today = new Date();
    var options = { timeStyle: 'short' };
    time.innerHTML = today.toLocaleTimeString("ko-kr", options);
}, 500);


document.onmousemove = (e) => {
    box.style.left = e.pageX + 'px';
    box.style.top = e.pageY + 'px';

    if (windowsDrag && INFO && isDragging) {
        hint_INFO.style.visibility = 'visible';
        hint_INFO.style.top = `${e.pageY}px`;
        hint_INFO.style.left = `${e.pageX - pagesize[0]}px`;
        hint_INFO.style.transform = `translate(-50%, -5%)`
    }

    if (windowsDrag && IMAGE && isDragging) {
        hint_IMAGE.style.visibility = 'visible';
        hint_IMAGE.style.top = `${e.pageY}px`;
        hint_IMAGE.style.left = `${e.pageX - pagesize[0]}px`;
        hint_IMAGE.style.transform = `translate(-50%, -5%)`
    }

    if (windowsDrag && ERROR && isDragging) {
        hint_ERROR.style.visibility = 'visible';
        hint_ERROR.style.top = `${e.pageY}px`;
        hint_ERROR.style.left = `${e.pageX - pagesize[1]}px`;
        hint_ERROR.style.transform = `translate(-50%, -5%)`
    }

    if (isDragging && e.target.id != 'hintdisable' && !windowsDrag) {
        let distanceX = e.pageX - startPosition[0];
        let distanceY = e.pageY - startPosition[1];

        let translateX = distanceX < 0 ? '0%' : '-100%';
        let translateY = distanceY < 0 ? '0%' : '-100%';

        box.style.transform = `translate(${translateX}, ${translateY})`;
        box.style.width = Math.abs(distanceX) + 'px';
        box.style.height = Math.abs(distanceY) + 'px';
    } else if(isDragging) {
        box.style.opacity = '0.0';
    }

}

title_INFO.onmousedown = () => {
    windowsDrag = true;
    INFO = true;
    INFO_over()
}

title_IMAGE.onmousedown = () => {
    windowsDrag = true;
    IMAGE = true;
    IMAGE_over();
}

title_ERROR.onmousedown = () => {
    windowsDrag = true;
    ERROR = true;
    ERROR_over();
}

document.onmousedown = (e) => {
    isDragging = true;
    startPosition = [e.clientX, e.clientY];
    box.style.opacity = '1.0';
}

document.onmouseup = (e) => {
    isDragging = false;
    windowsDrag = false;
    if(INFO){
        INFO = false;
        hint_INFO.style.visibility = 'collapse';
        window_INFO.style.top = `${e.pageY}px`;
        window_INFO.style.left = `${e.pageX - pagesize[0]}px`;
        window_INFO.style.transform = `translate(-50%, -5%)`
    }
    else if(IMAGE){
        IMAGE = false;
        hint_IMAGE.style.visibility = 'collapse';
        window_IMAGE.style.top = `${e.pageY}px`;
        window_IMAGE.style.left = `${e.pageX - pagesize[0]}px`;
        window_IMAGE.style.transform = `translate(-50%, -5%)`
    }
    else if(ERROR){
        ERROR = false;
        hint_ERROR.style.visibility = 'collapse';
        window_ERROR.style.top = `${e.pageY}px`;
        window_ERROR.style.left = `${e.pageX - pagesize[1]}px`;
        window_ERROR.style.transform = `translate(-50%, -5%)`
    }
    box.style.width = '0px';
    box.style.height = '0px';
    box.style.opacity = '0.0';
}


function INFO_over(){
    window_INFO.style.zIndex = '3';
    window_IMAGE.style.zIndex = '2';
    window_ERROR.style.zIndex = '2';
    try {
        document.querySelector(".INFO .TITLE").style.background = 'linear-gradient(0.25turn, #00003f, #a6c6f7)';
        document.querySelector(".IMAGE .TITLE").style.background = 'linear-gradient(0.25turn, #808080, #c3c2bf)';
        document.querySelector(".ERROR .TITLE").style.background = 'linear-gradient(0.25turn, #808080, #c3c2bf)';
    } catch {

    }
}


function IMAGE_over(){
    window_IMAGE.style.zIndex = '3';
    window_INFO.style.zIndex = '2';
    window_ERROR.style.zIndex = '2';
    try {
        document.querySelector(".IMAGE .TITLE").style.background = 'linear-gradient(0.25turn, #00003f, #a6c6f7)';
        document.querySelector(".INFO .TITLE").style.background = 'linear-gradient(0.25turn, #808080, #c3c2bf)';
        document.querySelector(".ERROR .TITLE").style.background = 'linear-gradient(0.25turn, #808080, #c3c2bf)';
    } catch {

    }
}

function ERROR_over(){
    window_ERROR.style.zIndex = '3';
    window_INFO.style.zIndex = '2';
    window_IMAGE.style.zIndex = '2'
    try {
        document.querySelector(".ERROR .TITLE").style.background = 'linear-gradient(0.25turn, #00003f, #a6c6f7)';
        document.querySelector(".INFO .TITLE").style.background = 'linear-gradient(0.25turn, #808080, #c3c2bf)';
        document.querySelector(".IMAGE .TITLE").style.background = 'linear-gradient(0.25turn, #808080, #c3c2bf)';
    } catch {

    }
}

function killscreen(){
    audio1.play();
}

function ERROR_Disable(){
    ERRORA.classList.add('ALARMHIDDEN');
}

function removepiler(){
    piler = false;
    pagesize = [0 , 0];
    document.querySelector('.fbl').remove();
    document.querySelector('.fbr').remove();
    document.querySelector('.effect').remove();
    document.querySelector('.screen').style.width = '100%';
}