
function createPromise(){
    return new Promise((resolve, reject)=>{
        const success = Math.random() > 0.5;
        if (success){
            console.log("Operation successful");
            resolve("Operation successful");
        }else {
            reject("Operation failed");
        }
    })
}
try{
    const promise1 = createPromise();
    const promise2 = createPromise();
    const promise3 = createPromise();
    const result = await Promise.all([promise1, promise2, promise3]);
    console.log(result);
}catch(err){
    console.log(err);
}

//v.2
// try{
//     await uploadFile();
//     await processFile();
//     await notifyUser();
//     console.log("All processes completed.");
// }catch(err){
//     console.log(err);
// }
//v.1
// const order = async () => {
//     await uploadFile();
//     await processFile();
//     await notifyUser();
//     console.log("All processes completed.");
// }
// order();
// function uploadFile(){
//     return new Promise ( (resolve, reject) => {
//         console.log("step1, file is uploading");
//         setTimeout(()=>{
//             resolve();
//         },1000);
//     })
// }
// function processFile(){
//     return new Promise ( (resolve, reject) => {
//         console.log("step2, file is processing");
//         setTimeout(()=>{
//             resolve();
//         },1000);
//     })
// }
// function notifyUser(){
//     return new Promise ( (resolve, reject) => {
//         console.log("step3, notifying user");
//         setTimeout(()=>{
//             resolve();
//         },1000);
//     })
// }

//eventListener for 'load' y 'error'
//new Image()
// function preLoadImg(url){
//     return new Promise((resolve, reject)=>{
//         const img = new Image();
//         img.src=url;
//         img.alt="image of a beautiful scene";
//         img.addEventListener('load',()=> resolve(img));
//         img.addEventListener('error',()=> reject('Image has not loaded'));
//     })
// }
//v.1
// const preLoadImg = async (url) =>{
//         const response = await fetch(url);
//         const data = await response.json();
//         console.log(data);
//         return data;
// }
// try{
//     const results = await preLoadImg('https://images.dog.ceo/breeds/terrier-kerryblue/n02093859_2449.jpg');
//     // const img = document.createElement("img");
//     // img.src=`${results.message}`;
//     // img.alt="image of a dog";
//     document.getElementById('board').appendChild(results);
// }catch (error){
//     console.log(error);
// }


//Another way of resolve y reject
// const promise = new Promise((resolve, reject)=>{
//     const success = Math.random() > 0.5;
//     if (success){
//         resolve("Operation successful");
//     }else {
//         reject("Operation failed");
//     }
// })
// promise.then(response => console.log(response));
// try{
//     const response = await promise;
//     console.log(response);
// }catch(err){
//     console.log(err);
// }

// try{
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts", 
//         {
//             method: 'POST',
//             body: JSON.stringify({
//                 title: 'Hello world',
//                 body: 'Hello',
//                 userId:100,
//         }),
//         header: {
//             'Content-type': 'application/json',
//         }
//     });
// }catch(err){
//     console.log("Something went wrong!", err);
// }finally{
//     console.log("The operation is finished.");
// }

// try{
//     const response = await fetch("https://scrimba.com/jsonplaceholder");
//     if (!response.ok){
//         throw new Error("There was a problem with the API");
//     }
//     const data = await response.json();
//     console.log(response);
// }catch(err){
//     console.log("Something went wrong:", err);
// }finally{
//     console.log("The operation is finished.");
// }

//try structure
// try{
//     const response = await fetch("https://apis.scrimba.com/bored/api/activity");
//     // console.log(!response.ok);
//     if (!response.ok){
//         throw new Error('There was a probelm with the API')
//     }
//     const data = await response.json();
//     console.log(data)
// }catch(err){
//     console.log(err);
// }finally{
//     console.log("The operation is finished.")
// }

// fetch("https://apis.scrimba.com/bored/api/activity")
//     .then(response => response.json())
//     .then(data => {
//         console.log(data)
//     })
//     .catch(err => {
//         console.log(err);
//     })
//     .finally(()=> console.log("The operation completed."))

//async y await explains .then is run after last is completed.
//v.2
// async function suggestActivity() {
//     const response = await fetch('https://apis.scrimba.com/bored/api/activity')
//     const data = await response.json();
//     console.log(data);
// }
// suggestActivity();
//v.1
// fetch("https://apis.scrimba.com/bored/api/activity")
//     .then(response => response.json())
//     .then(data => {
//         console.log(data)
//     });

//First fetch, gives message and display by loading img tag
//https://apis.scrimba.com/dog.ceo/api
// fetch("https://apis.scrimba.com/dog.ceo/api/breeds/image/random")
//     .then(response => response.json())
//     .then(data => {
//         console.log(data)
//         const a = document.createElement("img");
//         a.src = data.message;
//         a.alt= "dog";
//         document.getElementById("board").appendChild(a);
//     });