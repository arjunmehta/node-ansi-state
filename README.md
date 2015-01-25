# node-ansi-state
Use this module to save and restore ANSI colors and style states.

Sometimes you need to keep the track of multiple ANSI style states, though you may not know what they are. This module provides:

- Full ANSI style code support, including: foreground & background colour (xterm colours included!), intensity, italic, underline, blink, polarity, conceal, strikethrough, font, framed and overlined styles.
- A streamable interface (pipe or write to update).
- Create multiple instances to save multiple style states.
- Restore any state instance at any time.

## Installation
```bash
npm install --save ansi-state
```

## Basic Usage

### Include

```javascript
var ANSIState = require('ansi-state');
```

### Create a New State
Instantiate a new state with the constructor:

```javascript
var state = new ANSIState();
```

### Manually Save ANSI Style Codes
You can `update` the state by calling the corresponding method on it and passing in a string or array that contains ansi style codes.

```javascript
state.update('\033[32mHi there! \033[31mRed text');
//current state becomes: \033[31m
state.update('\033[1mBolding the text too');
//current state becomes: \033[1;31m
state.update('\033[34;38;5;211mxterm colors too!');
//current state becomes: \033[1;38;5;211m
```

### Automatically Save by Writing/Piping

```javascript
// Pipe to automatically capture whatever style codes are written to stdout
process.stdout.pipe(state);
// OR manually
state.write('\033[32mHi there! This is some \033[31mred text');
```

### Restore ANSI State

```javascript
process.stdout.write(state.code); // outputs current state code, same as restore()
```

### Create a New ANSI State from an Old One

```javascript
var new_state = new ANSIState(state);
// OR
var new_state = new ANSIState(state.code);
```


### Reset ANSI State

```javascript
// resets the state to the default terminal state
state.reset(); // '\033[0m'
// OR
process.stdout.write(state.reset().code);
```



## API
### state.update()
### state.reset()
### state.code
### state.restore()
### state.write
### state.pipe

// OR
state.update(['\033[32m', '\033[31m', '\033[34;38;5;211m']);

// OR
state.update([32, 31, 34, 38, 5, 211]);



## Use Scenario

Imagine you have many different text inputs and they all have different ansi styles, but they are being written/merged to the same output (ie. stdout). The way ansi style codes work, you'll need to find a way to restore the style as you switch between outputting the different inputs! This module provides what you need to switch between various ansi style states. View the streams example to get a good idea of how to implement this.

```javascript
stateA.write("\033[31mthis is red");
stateB.write("\033[32mthis is green");
stateC.write("\033[37mthis is blue");
```



## License
MIT, 2014 Arjun Mehta