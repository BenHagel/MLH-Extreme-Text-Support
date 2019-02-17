var SOUND = {};

function preload() {
    soundFormats('mp3', 'ogg');
    SOUND.RicardoOne = loadSound(Ric.baseURL_res + 'Ricardo1.mp3');
    SOUND.RicardoOne.setVolume(0.2);
    console.log('done loading????');
}

function setup() {
    frameRate(4);
}

function draw() {

}