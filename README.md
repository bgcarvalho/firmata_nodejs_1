# Firmata protocol and Node.js
This example shows the basic way to connect Arduino and Node.js through serial 
port (USB).

To install firmata run (note the -g option: the package is installed globally):

```
npm install firmata -g
```

## Upload Firmata to Arduino

Use the StandardFirmata example. On Arduino IDE, select (macOS): File > 
Examples > Firmata > StandardFirmata. Assuming the USB is plugged, select: Sketch > Upload.

## Running with REPL
REPL - read, eval and print loop is a interactive form to excercise with programming
languages and environments. Firmata ships with this feature.
Running *firmata* on the terminal, it will ask where the Arduino is connected to. 
In this case is /dev/cu.usbmodem1411

```
$ firmata
Enter USB Port and press enter:
/dev/cu.usbmodem1411
Successfully Connected to /dev/cu.usbmodem1411
```

Then, you're connected and with a variable named 'board' ready to use.
Set the pin mode for pin 13 as output and 0 state (0 = LOW, 1 = HIGH).

```
$ board.pinMode(13, board.MODES.OUTPUT)
$ board.digitalWrite(13, 0)
```

Now, if the LED is connected to the digital 13, set it on:

```
$ board.digitalWrite(13, 1)
```

## Running indefinitely
Running as standalone, just type:

```
node main.js
```

Inspect the main.js file: it also connects via /dev/cu.usbmodem1411 and sets a 
blinking LED (1 second) on digital pin 13 (output).

# External
* https://github.com/firmata/firmata.js

# License
MIT