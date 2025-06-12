function delayFn(time){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, time);
    });
}

console.log('Start');
delayFn(2000).then(() => {
    console.log('2 seconds have passed');
   
})

const divide=(a,b)=>{
    return new Promise((resolve,reject)=>{
        if(b==0){
            reject('cannot divide by zero')
        }
        resolve(a/b)
    })
}
divide(10,0).then((result)=>{
    console.log(result)
}).catch((err)=>{
    console.log(err)
})