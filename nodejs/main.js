//
// Main.js file - Entry point set for thsi Node.js project
// 

// This example uses serial port to communicate to Arduino
var Serialport = require("serialport");
var Board = require("firmata");

// Running on macOS - this was the USB port
var arduino = new Board(new Serialport('/dev/cu.usbmodem1411'));

// 
// Define callbacks
// 
function arduinoReady(e) {
    
    console.log("Arduino is ready");

    // Testing with a simple LED on digital Pin 13
    var pin = 13;
    var state = 1;

    arduino.pinMode(pin, arduino.MODES.OUTPUT);

    // make it blink
    setInterval(function() {
      arduino.digitalWrite(pin, (state ^= 1));
    }, 1000);
}

function arduinoClose(e) {
	console.log("Connectin closed");
}

// register callbacks
arduino.on("ready", arduinoReady);
arduino.on("close", arduinoClose);
