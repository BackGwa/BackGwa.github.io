
let move_scale;

window.onload = () => {
    move_scale = document.querySelector(".move-scale");

    move_scale.addEventListener("wheel", (e) => {
        if (e.ctrlKey) {
            document.querySelector(".move-layout").style.overflow = "hidden";
            transform_value = move_scale.style.transform
            scale_value = transform_value.match(/scale\(([^)]+)\)/);
            scale = parseFloat(scale_value[1]);

            if (e.deltaY > 0 && scale > 0.1) {
                scale = scale - 0.1;
            } else if (e.deltaY < 0 && scale > 0.1) {
                scale = scale + 0.1;
            } else {
                document.querySelector(".move-layout").style.overflow = "scroll";
            }
            move_scale.style.transform = `scale(${scale})`;
        } else {
            document.querySelector(".move-layout").style.overflow = "scroll";
        }
    });
}