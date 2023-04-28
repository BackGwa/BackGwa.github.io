const time = document.getElementById('timedisplay');
const box = document.getElementById("box");
const desktop = document.getElementById("desktop");

const window_INFO = document.getElementById("INFO");
const title_INFO = document.getElementById("INFOTITLE");

const window_IMAGE = document.getElementById("IMAGE");
const title_IMAGE = document.getElementById("IMAGETITLE");

const INFOEXIT = document.getElementById("INFOEXIT");


let startPosition;
let isDragging;

let windowsDrag = false;
let INFO = false;
let IMAGE = false;

const counter = setInterval(function(){
    const today = new Date();
    var options = { timeStyle: 'short' };
    time.innerHTML = today.toLocaleTimeString("ko-kr", options);
}, 1000);


document.onmousemove = (e) => {
    box.style.left = e.pageX + 'px';
    box.style.top = e.pageY + 'px';

    if (windowsDrag && INFO && isDragging) {
        console.log(`${e.pageX}, ${e.pageY}`);
        window_INFO.style.top = `${e.pageY}px`;
        window_INFO.style.left = `${e.pageX - 250}px`;
        window_INFO.style.transform = `translate(-50%, -5%)`
    }

    if (windowsDrag && IMAGE && isDragging) {
        console.log(`${e.pageX}, ${e.pageY}`);
        window_IMAGE.style.top = `${e.pageY}px`;
        window_IMAGE.style.left = `${e.pageX - 250}px`;
        window_IMAGE.style.transform = `translate(-50%, -5%)`
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
}

title_IMAGE.onmousedown = () => {
    windowsDrag = true;
    IMAGE = true;
}

document.onmousedown = (e) => {
    isDragging = true;
    startPosition = [e.clientX, e.clientY];
    box.style.opacity = '1.0';
}

document.onmouseup = () => {
    isDragging = false;
    windowsDrag = false;
    INFO = false;
    IMAGE = false;
    box.style.width = '0px';
    box.style.height = '0px';
    box.style.opacity = '0.0';
}