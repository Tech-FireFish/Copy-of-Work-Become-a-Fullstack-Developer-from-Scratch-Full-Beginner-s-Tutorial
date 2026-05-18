
import {} from "./data.js";

// fetch('https://apis.scrimba.com/dog.ceo/api/breeds/image/random')
//     .then(response => response.json())
//     .then(c=>{
//         console.log(c);
//         const imageContainer = document.createElement('img');
//         imageContainer.src=c.message;
//         document.getElementById('image-container').appendChild(imageContainer)
//     })

// fetch('https:apis.scrimba.com/bored/api/activity')
//     .then(response=>response.json())
//     .then(data=>console.log(data.activity))
//     .then(data=>{
//         const board = document.createElement('h1');
//         board.textContent = data.activity;
//         document.getElementById('image-container').appendChild(board);
//     })

// async function getActivity(){    
//     const response = await fetch('https:apis.scrimba.com/bored/api/activity');
//     const data = await response.json();
//     console.log(data);
// }
// getActivity();

// fetch('https://apis.scrimba.com/dog.ceo/api/breeds/image/random')
//     .then(response => response.json())
//     .then(c=>console.log(c))
//     .catch(err => {
//         console.log(err)
//         throw new Error("The website link is not correct!")
//     })
//     .finally(()=>console.log('The operation has completed successfully!'))

// try {
//     const response = await fetch('https://apis.scrimba.com/dog.ceo/api/breeds/image/random')
//     const data = await response.json()
//     console.log(data)
//     if(data.status ==='error'){
//         console.log('PATH ERROR')
//     }
// } catch(err){
//     console.log(err)
//     throw new Error("Verify the input link")
// } finally{
//     console.log('The operation is completed')
// }

// try {
//     const response = await fetch('https://apis.scrimba.com/dog.ceo/api/breeds/image/random')
//     const data = await response.json()
//     console.log(data)
//     if(!response.ok){
//         console.log('PATH ERROR')
//     }
// } catch(err){
//     console.log(err)
//     throw new Error("Verify the input link")
// } finally{
//     console.log('The operation is completed')
// }

// try{
//     const response = await fetch('https://apis.scrimba.com/jsonplaceholder/posts',{method: 'GET'});
//     if(!response.ok){
//         console.log('Endpoint Error');
//     }; 
//     const data = await response.json();
//     console.log(data); 
// }catch(err){
//     console.log(err);  
// }finally{
//     console.log('The operation has completed!')
// }

// try{
//     const response = await fetch('https://apis.scrimba.com/jsonplaceholder/posts',{
//         method:'POST',
//         body: JSON.stringify({
//             title:'mysterious box',
//             body:'undefined',
//             userId:1000,
//         }),
//         headers:{
//             'Content-Type':'application/json',
//         },
//     });
//     if(!response.ok){
//         console.log('Endpoint Error');
//     }; 
//     const data = await response.json();
//     console.log(data); 
// }catch(err){
//     console.log(err);  
// }finally{
//     console.log('The operation has completed!')
// }
///////////////////
//PART II-Promise//
///////////////////

// const promise = new Promise((resolve, reject)=>{
//     const success= Math.random() > 0.5
//     if(success){
//         resolve('Operation successful')
//     } else{
//         reject('Operation failed')
//     }
// });
// //METHOD1: promise.then(response => console.log(response))
// //METHOD2:
// try{
//     const response = await promise;
//     console.log(response);
// }catch(err){
//     console.log(err);
// }

// const promise = new Promise((resolve, reject)=>{
//     const success = Math.random() > 0.5;
//     if (success){
//         resolve('Operation successful');
//     } else{
//         reject('Operation failed');
//     }
// });
// try{
//     const response = await promise;
//     console.log(response);
// }catch(err){
//     console.log(err);
// }

// function preLoading(url){
//     return new Promise((resolve, reject)=>{
//         const img = new Image();
//         img.src=url;
//         img.alt='Landscape Image Failed';
//         img.addEventListener('load',()=>resolve(img));
//         img.addEventListener('error',()=>reject('Image has NOT loaded'));
//     })
// }
// try{
//     const results = await preLoading('https://scrimba.ams3.cdn.digitaloceanspaces.com/assets/courses/gadvancedjs/scenic1.jpg');
//     console.log(results);
//     document.getElementById('image-container').appendChild(results);
// }catch(err){
//     console.log(err);
// }

// function upload(){
//     return new Promise((resolve,reject)=>{
//         console.log('STEP1: Uploading file...');
//         setTimeout(()=>{
//             resolve()
//         },1000)
//     })
// }
// function process(){
//     return new Promise((resolve,reject)=>{
//         console.log('STEP1: Processing file...');
//         setTimeout(()=>{
//             resolve()
//         },1000)
//     })
// }
// function notify(){
//     return new Promise((resolve,reject)=>{
//         console.log('STEP1: Notifying user...');
//         setTimeout(()=>{
//             resolve()
//         },1000)
//     })
// }
// try{
//     await upload();
//     await process();
//     await notify();
//     await console.log('All tasks completed.')
// }catch(err){
//     console.log(err);
// }

// function createPromise(){
//     return new Promise((resolve,reject)=>{
//         const success = Math.random() > 0.5;
//         if(success){
//             resolve('Operation successful');
//         }else{
//             reject('Operation failed.');
//         }
        
//     });
// }
// try{
//     const promise1 = createPromise();
//     const promise2 = createPromise();
//     const promise3 = createPromise();
//     const result = await Promise.all([promise1,promise2,promise3]);
//     console.log(result)
// }catch(err){
//     console.log(err);
// }

///////////////////
//Super Challenge//
///////////////////
// function getImagePromise(url){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             const img = new Image();
//             img.src=url;
//             img.alt="The image link is: "+url;
//             img.addEventListener('load',()=>resolve(img))
//             img.addEventListener('error',()=>reject(new Error('Image NOT Found')))
//         },500)
//     })
// }
// const images = [
//     'https://scrimba.com/links/advancedjs-resources-images-scenic1',
//     'https://scrimba.com/links/advancedjs-resources-images-scenic2',
//     'https://scrimba.com/links/advancedjs-resources-images-scenic3',
// ]
// async function preloadImages(imageUrlArr){
//     const imageContainer = document.getElementById('image-container');
//     // const uploadContainer = document.getElementById('upload-container');
//     try{
//         // ONE WAY
//         // const promise1 = getImagePromise(imageUrlArr[0]);
//         // const promise2 = getImagePromise(imageUrlArr[1]);
//         // const promise3 = getImagePromise(imageUrlArr[2]);
//         //const result = await Promise.all([promise1,promise2,promise3]);
//         // THE OTHER
//         const promises = imageUrlArr.map((url)=>getImagePromise(url));
//         const result = await Promise.all(promises);
//         console.log(result);
//         console.log('Operation Successful');
//         //Advanced Method:
//         result.forEach((img)=>imageContainer.appendChild(img));
//         //Foundemental Method:
//         // for(let i=0;i<result.length;i++){
//         //     imageContainer.appendChild(result[i]);
//         // }
//     }catch(err){
//         console.log(err);
//     }
// }
// preloadImages(images);
