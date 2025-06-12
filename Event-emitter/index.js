const EventEmitter = require('events');

const myFirstEvent = new EventEmitter();

myFirstEvent.on('hello', (name) => {
    console.log(`Hello ${name}`);
});

myFirstEvent.emit('hello' , 'naqui');