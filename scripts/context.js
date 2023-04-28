const context = document.getElementById("context");
const scope = document.querySelector("body");

scope.addEventListener("contextmenu", (e) => {
    e.preventDefault();

    const {
        clientX: mouseX,
        clientY: mouseY
    } = e;

    context.style.top = mouseY + 'px';
    context.style.left = mouseX + 'px';

    context.classList.add("visible");

})

scope.addEventListener("click", (e) => {
    if(e.target.offsetParent != context) {
        context.classList.remove("visible");
    }
})