const time = document.getElementById('timedisplay');
const box = document.getElementById("box");
let startPosition;
let isDragging;

function fullscreen() {
    var elem = document.documentElement;

    if (elem.requestFullscreen) elem.requestFullscreen();
    else if (elem.webkitRequestFullscreen) elem.webkitRequestFullscreen();
    else if (elem.msRequestFullscreen) elem.msRequestFullscreen();
}


const counter = setInterval(function () {
    const today = new Date();
    var options = { timeStyle: 'short' };
    time.innerHTML = today.toLocaleTimeString("ko-kr", options);
}, 100);


document.onmousemove = (e) => {
    box.style.left = e.pageX + 'px';
    box.style.top = e.pageY + 'px';
    if (isDragging) {
        let distanceX = e.pageX - startPosition[0];
        let distanceY = e.pageY - startPosition[1];
        box.style.width = distanceX + 'px';
        box.style.height = distanceY + 'px';
        console.log(`${distanceX} // ${distanceY}`);
    }
}

document.onmousedown = (e) => {
    isDragging = true;
    startPosition = [e.clientX, e.clientY];
    console.log(startPosition);
}

document.onmouseup = () => {
    isDragging = false;
    box.style.width = '0px';
    box.style.height = '0px';
}