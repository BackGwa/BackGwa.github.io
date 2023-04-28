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

        let translateX = distanceX < 0 ? '0%' : '-100%';
        let translateY = distanceY < 0 ? '0%' : '-100%';

        if(translateX == '0%') distanceX = startPosition[0] - e.pageX;
        if (translateY == '0%') distanceY = startPosition[1] - e.pageY;

        box.style.transform = `translate(${translateX}, ${translateY})`;
        
        console.log(`PX=${e.pageX} / PY=${e.pageY}\nSP0=${startPosition[0]} / SP1=${startPosition[1]}\nDX=${distanceX} / DY=${distanceY}`);

        box.style.width = distanceX + 'px';
        box.style.height = distanceY + 'px';

    }
}

document.onmousedown = (e) => {
    isDragging = true;
    startPosition = [e.clientX, e.clientY];
}

document.onmouseup = () => {
    isDragging = false;
    box.style.width = '0px';
    box.style.height = '0px';
}