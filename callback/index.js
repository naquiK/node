//callback

function person(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Hello world')
        }, 2000)
    })
}

//callback hell
function person2(){
    setTimeout(() => {
        setTimeout(() => {
            console.log('Hello world')
            setTimeout(() => {
                console.log('Hello world')
                setTimeout(() => {
                    console.log('Hello world')
                    setTimeout(() => {
                        console.log('Hello world')
                    }, 2000)
                }, 2000)
            }, 2000)
        }, 2000)
    })
}