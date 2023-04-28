const time = document.getElementById('timedisplay');
const box = document.getElementById("box");

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


document.onmousemove = (e) => {
    box.style.left = e.pageX + 'px';
    box.style.top = e.pageY + 'px';
}