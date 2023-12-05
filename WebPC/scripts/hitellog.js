
function focus(){
    document.getElementById("message").focus();
}

document.addEventListener("keydown", (e) => focus());

focus();

function idchker() {
    idbox = document.getElementById("message");
    if(idbox.value == "" && idbox.value.length > 7) {
        return false;
    } else {
        return true;
    }
}