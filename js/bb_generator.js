
const ctx = new ( window.AudioContext || window.webkitAudioContext )();

let pitch = 440;
let freq = 4;
let oscIsPlaying = 0;

let leftOsc = ctx.createOscillator();
let leftPan = ctx.createPanner();
let leftVol = ctx.createGain();
leftOsc.connect( leftPan );
leftPan.connect( leftVol );
leftVol.connect( ctx.destination );
leftOsc.frequency.value = pitch;
leftPan.pan.value = ( -1 );

let rightOsc = ctx.createOscillator();
let rightPan = ctx.createPanner();
let rightVol = ctx.createGain();
rightOsc.connect( rightPan );
rightPan.connect( rightVol );
rightVol.connect( ctx.destination );
rightOsc.frequency.value = pitch + freq;
rightPan.pan.value = 1;

function playOsc() {
    if (oscIsPlaying) {
        leftOsc.connect( leftPan );
        rightOsc.connect( rightPan );
    } else {
        oscIsPlaying = 1;

        leftOsc.start();
        rightOsc.start();
    }
}

function stopOsc() {
    leftOsc.disconnect( leftPan );
    rightOsc.disconnect( rightPan );
}




