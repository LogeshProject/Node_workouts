const crypto = require('node:crypto')

console.log("first")

process.env.UV_THREADPOOL_SIZE = 8;

const start = Date.now()

// console.log(start)

const MAX_CALLS = 8;                  // libuv thread pool have 4 threads 

for(let i=0;i< MAX_CALLS ; i++){
    crypto.pbkdf2('password' , 'salt' , 100000 , 512 , 'sha512' , ()=>{
        console.log(`Hash : ${i+1}` , Date.now()- start)
    })
}       



console.log("second")