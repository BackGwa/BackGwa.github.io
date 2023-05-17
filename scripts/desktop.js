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

const window_MC = document.getElementById("MC");
const hint_MC = document.getElementById("mchint");
const title_MC = document.getElementById("MCTITLE");

const INFOEXIT = document.getElementById("INFOEXIT");

const audio1 = document.getElementById("audio1")

const GAME = `<iframe id="GAMERM" loading="lazy" class="dragnull" src="https://emupedia.net/emupedia-game-minecraft-classic/" onload="this.focus();this.contentWindow.focus();" allowtransparency="true" allow="autoplay; fullscreen; accelerometer; gyroscope; geolocation; microphone; camera; midi; encrypted-media; clipboard-read; clipboard-write" sandbox="allow-forms allow-downloads allow-modals allow-pointer-lock allow-popups allow-popups-to-escape-sandbox allow-presentation allow-same-origin allow-scripts allow-top-navigation-by-user-activation" frameborder="0"></iframe>`

let startPosition;
let isDragging;

let windowsDrag = false;
let INFO = false;
let IMAGE = false;
let ERROR = false;
let MC = false;

let dummy = true;
let internet = false;
let minecraft = false;

let pagesize = [250, 350, 400];


const counter = setInterval(function () {
    const today = new Date();
    var options = { timeStyle: 'short' };
    time.innerHTML = today.toLocaleTimeString("ko-kr", options);
}, 500);

document.onclick = (e) => {
    console.log(e.target.classList);
    console.log((e.target.classList[0] == 'iconimg'));
    if (!(e.target.classList[0] == 'iconimg' || e.target.classList[0] == 'icontext' || e.target.classList[0] == 'icon')) {
        minecraft = false;
        internet = false;
        iconunselect();
    }
}

function iconunselect() {
    document.getElementById('mc-text').classList.remove('iconbackground');
    document.getElementById('ie-text').classList.remove('iconbackground');
    document.querySelector('.mc').classList.remove('iconenable');
    document.querySelector('.ie').classList.remove('iconenable');
}

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

    if (windowsDrag && MC && isDragging) {
        hint_MC.style.visibility = 'visible';
        hint_MC.style.top = `${e.pageY}px`;
        hint_MC.style.left = `${e.pageX - pagesize[2]}px`;
        hint_MC.style.transform = `translate(-50%, -5%)`
    }

    if (isDragging && e.target.id != 'hintdisable' && !windowsDrag) {
        let distanceX = e.pageX - startPosition[0];
        let distanceY = e.pageY - startPosition[1];

        let translateX = distanceX < 0 ? '0%' : '-100%';
        let translateY = distanceY < 0 ? '0%' : '-100%';

        box.style.transform = `translate(${translateX}, ${translateY})`;
        box.style.width = Math.abs(distanceX) + 'px';
        box.style.height = Math.abs(distanceY) + 'px';
    } else if (isDragging) {
        box.style.opacity = '0.0';
    }

}


title_INFO.onmousedown = () => {
    windowsDrag = true;
    INFO = true;
    INFO_over()
}

title_MC.onmousedown = () => {
    windowsDrag = true;
    MC = true;
    MC_over();
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
    if (INFO) {
        INFO = false;
        hint_INFO.style.visibility = 'collapse';
        window_INFO.style.top = `${e.pageY}px`;
        window_INFO.style.left = `${e.pageX - pagesize[0]}px`;
        window_INFO.style.transform = `translate(-50%, -5%)`
    }
    else if (IMAGE) {
        IMAGE = false;
        hint_IMAGE.style.visibility = 'collapse';
        window_IMAGE.style.top = `${e.pageY}px`;
        window_IMAGE.style.left = `${e.pageX - pagesize[0]}px`;
        window_IMAGE.style.transform = `translate(-50%, -5%)`
    }
    else if (ERROR) {
        ERROR = false;
        hint_ERROR.style.visibility = 'collapse';
        window_ERROR.style.top = `${e.pageY}px`;
        window_ERROR.style.left = `${e.pageX - pagesize[1]}px`;
        window_ERROR.style.transform = `translate(-50%, -5%)`
    }
    else if (MC){
        MC = false;
        hint_MC.style.visibility = 'collapse';
        window_MC.style.top = `${e.pageY}px`;
        window_MC.style.left = `${e.pageX - pagesize[2]}px`;
        window_MC.style.transform = `translate(-50%, -5%)`
    }
    box.style.width = '0px';
    box.style.height = '0px';
    box.style.opacity = '0.0';
}


function INFO_over() {
    window_INFO.style.zIndex = '4';
    window_IMAGE.style.zIndex = '3';
    window_ERROR.style.zIndex = '3';
    window_MC.style.zIndex = '3';
    try {
        document.querySelector(".INFO .TITLE").style.background = 'linear-gradient(0.25turn, #00003f, #a6c6f7)';
        document.querySelector(".MC .TITLE").style.background = 'linear-gradient(0.25turn, #808080, #c3c2bf)';
        document.querySelector(".IMAGE .TITLE").style.background = 'linear-gradient(0.25turn, #808080, #c3c2bf)';
        document.querySelector(".ERROR .TITLE").style.background = 'linear-gradient(0.25turn, #808080, #c3c2bf)';
    } catch {

    }
    document.getElementById("mypc").classList.add('taskover');
    document.getElementById("imgviewer").classList.remove('taskover');
}


function IMAGE_over() {
    window_IMAGE.style.zIndex = '4';
    window_INFO.style.zIndex = '3';
    window_ERROR.style.zIndex = '3';
    window_MC.style.zIndex = '3';
    try {
        document.querySelector(".IMAGE .TITLE").style.background = 'linear-gradient(0.25turn, #00003f, #a6c6f7)';
        document.querySelector(".MC .TITLE").style.background = 'linear-gradient(0.25turn, #808080, #c3c2bf)';
        document.querySelector(".INFO .TITLE").style.background = 'linear-gradient(0.25turn, #808080, #c3c2bf)';
        document.querySelector(".ERROR .TITLE").style.background = 'linear-gradient(0.25turn, #808080, #c3c2bf)';
    } catch {

    }
    document.getElementById("imgviewer").classList.add('taskover');
    document.getElementById("mypc").classList.remove('taskover');
}

function ERROR_over() {
    window_ERROR.style.zIndex = '4';
    window_INFO.style.zIndex = '3';
    window_IMAGE.style.zIndex = '3'
    window_MC.style.zIndex = '3';
    try {
        document.querySelector(".ERROR .TITLE").style.background = 'linear-gradient(0.25turn, #00003f, #a6c6f7)';
        document.querySelector(".INFO .TITLE").style.background = 'linear-gradient(0.25turn, #808080, #c3c2bf)';
        document.querySelector(".IMAGE .TITLE").style.background = 'linear-gradient(0.25turn, #808080, #c3c2bf)';
        document.querySelector(".MC .TITLE").style.background = 'linear-gradient(0.25turn, #808080, #c3c2bf)';
    } catch {

    }
}


function MC_over() {
    window_MC.style.zIndex = '4';
    window_INFO.style.zIndex = '3';
    window_IMAGE.style.zIndex = '3';
    window_ERROR.style.zIndex = '3'
    try {
        document.querySelector(".MC .TITLE").style.background = 'linear-gradient(0.25turn, #00003f, #a6c6f7)';
        document.querySelector(".INFO .TITLE").style.background = 'linear-gradient(0.25turn, #808080, #c3c2bf)';
        document.querySelector(".IMAGE .TITLE").style.background = 'linear-gradient(0.25turn, #808080, #c3c2bf)';
        document.querySelector(".ERROR .TITLE").style.background = 'linear-gradient(0.25turn, #808080, #c3c2bf)';
    } catch {

    }
}

function killscreen() {
    audio1.play();
}

function ERROR_Disable() {
    ERRORA.classList.add('ALARMHIDDEN');
}

function removepiler() {
    fbremove.remove();
    piler = false;
    pagesize = [0, 0, 0];
    document.querySelector('.fbl').remove();
    document.querySelector('.fbr').remove();
    document.querySelector('.effect').remove();
    document.querySelector('.screen').style.width = '100%';
}

function imgviewrm() {
    window_IMAGE.classList.add("ALARMHIDDEN");
    document.getElementById('imgviewer').classList.add("ALARMHIDDEN");
    killscreen();
}

function inform() {
    window_INFO.classList.add("ALARMHIDDEN");
    document.getElementById('mypc').classList.add("ALARMHIDDEN");
    killscreen();
}

function mcrm() {
    window_MC.classList.add("ALARMHIDDEN");
    document.getElementById("GAMERM").remove;
    killscreen();
}


document.getElementById('minecraft').onclick = () => {

    if(minecraft){
        document.getElementById("GAME").innerHTML = GAME;
        window_MC.classList.remove("ALARMHIDDEN");
    }

    if(internet){
        document.getElementById('ie-text').classList.remove('iconbackground');
        document.querySelector('.ie').classList.remove('iconenable');
        internet = false;
    }

    minecraft = true;

    document.getElementById('mc-text').classList.add('iconbackground');
    document.querySelector('.mc').classList.add('iconenable');
    audio1.play();
}

document.getElementById('internet').onclick = () => {

    if(internet){
        alert('인터넷 오버도즈~');
    }

    if(minecraft){
        document.getElementById('mc-text').classList.remove('iconbackground');
        document.querySelector('.mc').classList.remove('iconenable');
        minecraft = false;
    }

    internet = true;

    document.getElementById('ie-text').classList.add('iconbackground');
    document.querySelector('.ie').classList.add('iconenable');
    audio1.play();
}

document.getElementById('mypc').onclick = () => {
    INFO_over();
}

document.getElementById('imgviewer').onclick = () => {
    IMAGE_over();
}

