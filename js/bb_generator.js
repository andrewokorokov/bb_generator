
const audioCtx = new ( window.AudioContext || window.webkitAudioContext )();

const pitch = 200;
const freq = 4;
let oscLaunch = false;

// OSC > PAN > OUT
const oscL = audioCtx.createOscillator();
const panL = audioCtx.createStereoPanner();
oscL.frequency.value = pitch;
oscL.connect( panL );
panL.connect( audioCtx.destination );
panL.pan.value = ( -1 );

// OSC > PAN > OUT
const oscR = audioCtx.createOscillator();
const panR = audioCtx.createStereoPanner();
oscR.frequency.value = pitch + freq;
panR.connect( audioCtx.destination );
oscR.connect( panR );
panR.pan.value = 1;

function startBB() {
    if (oscLaunch) {
        panL.connect( audioCtx.destination );
        panR.connect( audioCtx.destination );
    } else {
        oscLaunch = true;
        oscL.start();
        oscR.start();
    }
    
    console.log( 'started' );
}

function stopBB() {
    panL.disconnect( audioCtx.destination );
    panR.disconnect( audioCtx.destination );

    console.log( 'stopped' );
}





