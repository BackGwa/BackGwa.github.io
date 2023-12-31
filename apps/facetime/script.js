let video;
let sidebar;
let dialog;

window.onload = () => {
    AudioEngine_init();
    video = document.querySelector("#camera");
    sidebar = document.querySelector(".side-bar");
    dialog = document.querySelector(".calling-dialog");
}

function facetime_open() {
    if (navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: true })
            .then((stream) => { 
                video.srcObject = stream;
                video.play();
            })
            .catch(function (e) {
                console.log(e);
                return;
            });
    };
}

function facetime_close() {
    if (video.srcObject) {
        stop();
        video.srcObject = null;
        sidebar.classList.remove("calling");
        dialog.classList.add("hide-dialog");
    }
}

function newcall() {
    sidebar.classList.add("calling");
    dialog.classList.remove("hide-dialog");
    play("./res/calling.mp3", true);
}