function page_init() {
    setTimeout(() => {
        play("../res/sounds/iPhone_Startup.mp3");
    }, 250);

    time_label = document.querySelector(".time-label");
    mobile_time_register();
    event_register();
}

function event_register() {

}