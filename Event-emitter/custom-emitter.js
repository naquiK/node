const EventEmitter = require('events');

class customEmitter extends EventEmitter{
    constructor(){
        super()
        this.greeting= 'Hello'

    }

    greet(name){
        this.emit('greeting', `${this.greeting} ,${name}`)
    }
}


const myCustomEmitter = new customEmitter();

myCustomEmitter.on('greeting', (data) => {
    console.log(` Greetong event `, data)
})

myCustomEmitter.greet('naqui')