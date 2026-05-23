//type in "npm init" in the terminal
////////
//TIPS//
////////
//if not working: 
//type in "get-executionpolicy"
//if output: Restricted
//type in "get-executionpolicy -scope currentuser"
//enter "remotesigned"
//
import http from 'node:http';
console.log("The server is running!");

// const PORT = 8000;
// const server = http.createServer((req,res)=>{
//     res.end('The request is successful!');
// });
// server.listen(PORT, ()=>console.log(`server running on port: ${PORT}`));

// import http from 'node:http'
// const PORT = 8000;
// const server = http.createServer((req,res) => {
//     res.write('This is some data \n');
//     res.write('This is some more data \n');
//     res.end('The server runs successfully! \n','utf8',()=>console.log('response end'));
//     res.end();
// })
// server.listen(PORT,()=>{
//     console.log(`The request was successful! on port: ${PORT}`);
// });

// const PORT = 8000;
// const server = http.createServer((req,res)=>{
//     if(req.url === '/api' && req.method === 'GET'){
//         console.log(req.url);
//     res.end('The request is successful!');
//     }
// });
// server.listen(PORT, ()=>console.log(`server running on port: ${PORT}`));

// const PORT = 8000;
// const animal = {
//     type:'elephant',
//     nickName:'Elon Tusk',
// };
// console.log(JSON.stringify(animal));
// const server = http.createServer((req,res)=>{
//     if(req.url === '/api' && req.method === 'GET'){
//         console.log(req.url);
//     res.end('The request is successful!');
//     }
// });
// server.listen(PORT, ()=>console.log(`server running on port: ${PORT}`));

// const randList = [{"color":"blue","shape":'rect'},];
// const PORT = 8000;
// const server = http.createServer(async (req,res)=>{
//     const data = await JSON.stringify(randList);
//     if(req.url === '/api' && req.method === 'GET'){
//         console.log(req.url);
//         res.end(JSON.stringify(data));
//     }
// });
// server.listen(PORT, ()=>console.log(`server running on port: ${PORT}`));

// import {placesToGo} from "./data.js";
// const randList = placesToGo;
// const PORT = 8000;
// const server = http.createServer(async (req,res)=>{
//     const data = await JSON.stringify(randList);
//     if(req.url === '/api' && req.method === 'GET'){
//         console.log(req.url);
//         res.setHeader("Content-Type","application/json");
//         res.statusCode = 200;
//         res.end(JSON.stringify(data));
//     }
// });
// server.listen(PORT, ()=>console.log(`server running on port: ${PORT}`));

import {placesToGo} from "./data.js";
const randList = placesToGo;
const PORT = 8000;
const server = http.createServer(async (req,res)=>{
    const data = await JSON.stringify(randList);
    if(req.url === '/api' && req.method === 'GET'){
        console.log(req.url);
        res.setHeader("Content-Type","application/json");
        res.statusCode = 200;
        res.end(JSON.stringify(data));
    }else{
        
    }
});
server.listen(PORT, ()=>console.log(`server running on port: ${PORT}`));
