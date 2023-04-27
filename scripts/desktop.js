const time = document.getElementById('timedisplay');

function fullscreen(){
    var elem = document.documentElement;

    if (elem.requestFullscreen) elem.requestFullscreen();
    else if (elem.webkitRequestFullscreen) elem.webkitRequestFullscreen();
    else if (elem.msRequestFullscreen)elem.msRequestFullscreen();
}


const counter = setInterval(function(){
    const today = new Date();
    var options = {timeStyle: 'short'};
    time.innerHTML = today.toLocaleTimeString("ko-kr", options);
}, 100);