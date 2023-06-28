
function submitchk() {
    value = document.getElementById("message").value;
    localStorage.clear();
    
    if(value.length > 24) {
        return false;
    } else if (value == "") {
        return false
    } else {
        return true;
    }
    
}

function chktext(value) {
    maxint = document.getElementById("maxint");
    blinker = document.getElementById("blinker");

    maxint.innerHTML = value.length + '/24';
    if(value.length > 24) {
        maxint.classList.add("redhigh");
    } else {
        maxint.classList.remove("redhigh");
    }

    if(value.length == 0) {
        blinker.classList.remove("blinker_hidden");
    } else {
        blinker.classList.add("blinker_hidden");
    }

}

setInterval(() => {
    document.getElementById('cf').src = document.getElementById('cf').src;
}, 2500);

document.addEventListener("keydown", (e) => {
    document.getElementById("message").focus();
});