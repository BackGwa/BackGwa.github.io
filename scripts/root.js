
// 페이지 로드 시
window.onload = () => {
    AudioEngine_init();
    page_init();
}

// 우클릭 비활성화
document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
});