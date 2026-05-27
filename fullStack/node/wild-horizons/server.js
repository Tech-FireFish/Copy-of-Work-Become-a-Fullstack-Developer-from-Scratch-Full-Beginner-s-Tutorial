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
//     }else{
//         res.setHeader("Content-Type","application/json");
//         res.statusCode = 404;
//         res.end(JSON.stringify({error:"NOT Found",message:"The requested route does not exist."}));
//     }
// });
// server.listen(PORT, ()=>console.log(`server running on port: ${PORT}`));

// Add Path Parameters//
// import {travelList} from "./data.js";
// const importedList = travelList;
// const PORT = 8000;
// const server = http.createServer(async (req,res)=>{
//     const data = await JSON.stringify(importedList);
//     if(req.url === '/api' && req.method === 'GET'){
//         console.log(req.url);
//         res.setHeader("Content-Type","application/json");
//         res.statusCode = 200;
//         res.end(data);
//     }else if(req.url === "/api/Europe" && req.method === 'GET'){
//         const path = req.url.split('/').pop();
//         console.log(path);
//         const filteredData = importedList.filter((whatToFilter)=>{
//             return whatToFilter.continent.toLowerCase() === path.toLowerCase(); 
//         });
//         res.setHeader("Content-Type","application/json");
//         res.statusCode = 200;
//         res.end(JSON.stringify(filteredData));
//     }else{
//         res.setHeader("Content-Type","application/json");
//         res.statusCode = 404;
//         res.end(JSON.stringify({error:"NOT Found",message:"The requested route does not exist."}));
//     }
// });
// server.listen(PORT, ()=>console.log(`server running on port: ${PORT}`));

// Modularise the Code 1//
// import {travelList} from "./data.js";
// import {sendJSONResponse} from "./index.js";
// const importedList = travelList;
// const PORT = 8000;
// const server = http.createServer(async (req,res)=>{
//     const data = importedList;
//     if(req.url === '/api' && req.method === 'GET'){
//         console.log(req.url);
//         sendJSONResponse(res,200,data);
//     }else if(req.url === "/api/Europe" && req.method === 'GET'){
//         const path = req.url.split('/').pop();
//         console.log(path);
//         const filteredData = importedList.filter((whatToFilter)=>{
//             return whatToFilter.continent.toLowerCase() === path.toLowerCase(); 
//         });
//         sendJSONResponse(res,200,filteredData);
//     }else{
//         sendJSONResponse(res,404,{
//             error:"NOT Found",
//             message:"The requested route does not exist."
//         });
//     }
// });
// server.listen(PORT, ()=>console.log(`server running on port: ${PORT}`));

// Modularise the Code 2//
// import {travelList} from "./data.js";
// import {sendJSONResponse} from "./index.js";
// import {produceFilteredData} from "./index.js";
// const importedList = travelList;
// const PORT = 8000;
// const server = http.createServer(async (req,res)=>{
//     const data = importedList;
//     if(req.url === '/api' && req.method === 'GET'){
//         console.log(req.url);
//         sendJSONResponse(res,200,data);
//     }else if(req.url.startsWith("/api/continent") && req.method === 'GET'){
//         const path = req.url.split('/').pop();
//         const filteredData = produceFilteredData(travelList,"continent",path);
//         sendJSONResponse(res,200,filteredData);
//     }else if(req.url.startsWith("/api/country") && req.method === 'GET'){
//         const path = req.url.split('/').pop();
//         const filteredData = produceFilteredData(travelList,"country",path);
//         sendJSONResponse(res,200,filteredData);
//     }else{
//         sendJSONResponse(res,404,{
//             error:"NOT Found",
//             message:"The requested route does not exist."
//         });
//     }
// });
// server.listen(PORT, ()=>console.log(`server running on port: ${PORT}`));

// Query Params//
//new URL is a url constructor requires two parameters:
//inputed url & the protocol/beginning of a url
// const PORT = 8000;
// const server = http.createServer((req,res)=>{
//     console.log(req.headers);
//     const urlObj = new URL(req.url, `http://${req.headers.host}`);
//     const queryObj = Object.fromEntries(urlObj.searchParams);
//     console.log(queryObj);
// })
// server.listen(PORT,()=> console.log(`Server listening on port ${PORT}`));

//Get the QUery Parameters
import {travelList} from "./data.js";
import {sendJSONResponse} from "./index.js";
import {produceFilteredData} from "./index.js";
import {getDataByQueryParams} from "./index.js";
const importedList = travelList;
const PORT = 8000;
const server = http.createServer(async (req,res)=>{
    const data = importedList;
    const urlObj = new URL(req.url, `http://${req.headers.host}`);
    const queryObj = Object.fromEntries(urlObj.searchParams);
    if(urlObj.pathname === '/api' && req.method === 'GET'){
        console.log(queryObj);
        console.log(req.url);
        let filteredData = getDataByQueryParams(travelList, queryObj);
        sendJSONResponse(res,200,filteredData);
    }else if(req.url.startsWith("/api/continent") && req.method === 'GET'){
        const path = req.url.split('/').pop();
        const filteredData = produceFilteredData(travelList,"continent",path);
        sendJSONResponse(res,200,filteredData);
    }else if(req.url.startsWith("/api/country") && req.method === 'GET'){
        const path = req.url.split('/').pop();
        const filteredData = produceFilteredData(travelList,"country",path);
        sendJSONResponse(res,200,filteredData);
    }else{
        sendJSONResponse(res,404,{
            error:"NOT Found",
            message:"The requested route does not exist."
        });
    }
});
server.listen(PORT, ()=>console.log(`server running on port: ${PORT}`));
