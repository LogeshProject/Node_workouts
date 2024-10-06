const fs = require('node:fs')

console.log("first")

// fs.readFile('./file.txt' , 'utf-8', (err , data)=>{             
//     console.log(data)                                        // async
// })


const fileContent = fs.readFileSync('./file.txt','utf-8')      // sync

console.log(fileContent);



console.log("second")