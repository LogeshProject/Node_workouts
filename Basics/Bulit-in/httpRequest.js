const https = require('https');

const MAX_CALLS =  12 ;                            

const start = Date.now()

for(let i=0; i< MAX_CALLS ;i++){
    https.
    request('https://www.google.com' , (res)=>{                    // network I/O = http.request doesn't use Thread pool.
        res.on('data',()=>{})                                      // http.request doesn't affect cpu cores .
        res.on('end',()=>{
            console.log(`Request : ${i+1}` , Date.now() - start);
        })
    })
    .end();
}