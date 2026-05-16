
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

try{
    const response = await fetch('https://apis.scrimba.com/jsonplaceholder/posts',{
        method:'POST',
        body: JSON.stringify({
            title:'mysterious box',
            body:'undefined',
            userId:1000,
        }),
        headers:{
            'Content-Type':'application/json',
        },
    });
    if(!response.ok){
        console.log('Endpoint Error');
    }; 
    const data = await response.json();
    console.log(data); 
}catch(err){
    console.log(err);  
}finally{
    console.log('The operation has completed!')
}
///////////
//PART II//
///////////

