let app_area;
let initialX;
let initialY;

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
    window.addEventListener("touchstart", initTouch);
    window.addEventListener("touchmove", swipeDirection);
    window.addEventListener("mousedown", (e) => {
      initTouch(e),
      window.addEventListener("mousemove", swipeDirection)
    });
    window.addEventListener("mouseup", () => {
      window.removeEventListener("mousemove", swipeDirection);
    });
}

function initTouch(e) {
    initialX = `${e.touches ? e.touches[0].clientX : e.clientX}`;
    initialY = `${e.touches ? e.touches[0].clientY : e.clientY}`;
  };
  
  function swipeDirection(e) {
    if (initialX !== null && initialY !== null) {
      const currentX = `${e.touches ? e.touches[0].clientX : e.clientX}`,
        currentY = `${e.touches ? e.touches[0].clientY : e.clientY}`;
  
      let diffX = initialX - currentX,
        diffY = initialY - currentY;
  
      Math.abs(diffX) > Math.abs(diffY)
      ? (
        0 < diffX
        ? console.log("to left")
        : console.log("to right")
      )
      : (
        0 < diffY
        ? unshow_app()
        : console.log("to bottom")
      )
  
      initialX = 0;
      initialY = 0;
    }
  }

function show_app(app_name) {
    app_area.classList.add("show-app");
}

function unshow_app() {
    if (app_area.classList.contains("show-app")) {
        app_area.classList.remove("show-app");
    }
}