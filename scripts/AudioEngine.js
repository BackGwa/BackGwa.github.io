let audio_engine;

function AudioEngine_init() {
    try     { audio_engine = document.querySelector('audio'); }
    catch   { console.error('AudioEngine : AudioEngine is Not Found!'); }
}

function play(src, loop = false) {
    audio_engine.loop = loop;
    audio_engine.pause();
    audio_engine.src = src;
    audio_engine.play();
}

function stop() {
    audio_engine.loop = false;
    audio_engine.pause();
}