const crypto = require('node:crypto')

console.log("first")


const start = Date.now()

crypto.pbkdf2Sync('password' , 'salt' , 100000 , 512 , 'sha512')        

console.log('Hash : ' , Date.now() - start)

crypto.pbkdf2Sync('password' , 'salt' , 100000 , 512 , 'sha512')        

console.log('Hash : ' , Date.now() - start)

console.log("second")