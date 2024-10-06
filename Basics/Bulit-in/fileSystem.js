const fs = require('fs')

console.log('first')

const fileContent = fs.readFileSync('./file.txt','utf-8')

console.log(fileContent);


// async function

const content = fs.readFile('./file.txt','utf-8', (error, data)=>{
    if(error) console.log(error);
    else console.log(data);
    
})

console.log('middle')

fs.writeFileSync('./greet.txt', 'Hello Guys')

fs.writeFile('./file.txt',' Hello Logesh',  {flag : 'a'}, (error)=>{
    if(error) console.log(error);
    else console.log('file written');
    
})

console.log('last')