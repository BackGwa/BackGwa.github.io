const time = document.getElementById('timedisplay');
const box = document.getElementById("box");
const desktop = document.getElementById("desktop");

let startPosition;
let isDragging;


const counter = setInterval(function(){
    const today = new Date();
    var options = { timeStyle: 'short' };
    time.innerHTML = today.toLocaleTimeString("ko-kr", options);
}, 1000);


document.onmousemove = (e) => {
    box.style.left = e.pageX + 'px';
    box.style.top = e.pageY + 'px';

    if (isDragging && e.target.id != 'hintdisable') {
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

document.onmousedown = (e) => {
    isDragging = true;
    startPosition = [e.clientX, e.clientY];
    box.style.opacity = '1.0';
}

document.onmouseup = () => {
    isDragging = false;
    box.style.width = '0px';
    box.style.height = '0px';
    box.style.opacity = '0.0';
}