let time_label;

// 시간 업데이트
function time_update() {
    const week = ['일', '월', '화', '수', '목', '금', '토'];
    const today = new Date();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const date = String(today.getDate()).padStart(2, '0');
    const week_index = today.getDay();

    hours = String(today.getHours()).padStart(2, '0');
    minutes = String(today.getMinutes()).padStart(2, '0');

    time_label.innerHTML = `${month}월 ${date}일 (${week[week_index]}) ${hours}:${minutes}`;
}

// 시간 업데이트 이벤트 등록
function register_time() {
    setInterval(time_update, 100);
}