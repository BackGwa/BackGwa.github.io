const WAIT = document.getElementById('WAIT');
const audioER = document.getElementById("audioER");

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
    }, 6500);
    setTimeout(() => {
        location.href = './desktop.html';
    }, 7300);
}

document.getElementById("ATAG").disabled = true;
document.getElementById("passbox").oninput = (e) => {
    if(document.getElementById("passbox").value == ''){
        document.getElementById("ATAG").disabled = true;
    } else {
        document.getElementById("ATAG").disabled = false;
    }
}

function passchk(){
    if(document.getElementById("passbox").value == 'helloworld'){
        start();
    } else {
        AAable();
        audioER.play();
    }
}

document.addEventListener("keyup", function (e) {
    if (e.keyCode === 13) {
        if(document.getElementById("passbox").value != ''){
            passchk();
        }
    }
  });

function AAable(){
    document.getElementById('ERROR').classList.remove('ALARMHIDDEN');
    document.querySelector('.fulls').classList.remove('ALARMHIDDEN');
    document.querySelector('.fulls2').classList.remove('ALARMHIDDEN');
}

function DDisable(){
    document.getElementById('ERROR').classList.add('ALARMHIDDEN');
    document.querySelector('.fulls').classList.add('ALARMHIDDEN');
    document.querySelector('.fulls2').classList.add('ALARMHIDDEN');
}