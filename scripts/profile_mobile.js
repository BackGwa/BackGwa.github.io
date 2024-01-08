let app_area;

function page_init() {
    setTimeout(() => {
        play("../res/sounds/iPhone_Startup.mp3");
    }, 250);

    app_area = document.querySelector(".app-area");
    time_label = document.querySelector(".time-label");
    mobile_time_register();
    event_register();
}

function event_register() {

}

function show_app(app_name) {
    app_area.classList.add("show-app");
}

function unshow_app() {
    app_area.classList.remove("show-app");
}