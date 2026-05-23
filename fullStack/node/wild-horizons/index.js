import {} from "./data.js";

const response = await fetch("url",{
    method:"POST",
    body:JSON.stringify({username:"tom_1"}),
    headers:{
        "Content-Type":"application/json",
    }
})