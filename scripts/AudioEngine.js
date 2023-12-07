let audio_engine;

function AudioEngine_init() {
    try {
        audio_engine = document.querySelector('audio');
    } catch {
        console.error('Audio Element not found!');
    }
}

function play(src) {
    audio_engine.pause();
    audio_engine.src = src;
    audio_engine.play();
}