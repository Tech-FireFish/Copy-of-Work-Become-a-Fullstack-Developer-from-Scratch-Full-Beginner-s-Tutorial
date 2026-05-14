
const imageLabel = document.getElementById("imageLabel");
const uploadBtn = document.getElementById("uploadBtn");
uploadBtn.addEventListener("click",()=>{
console.log("The upload Btn is clicked");
images.map((image)=>{
    let coin = new Image()
    coin.src = `${image}`;
    let response ;
    coin.addEventListener('load',()=>{
        response = "Successfully loaded";
        console.log(response);
        imageLabel.innerHTML += `
<label class="imageLabel">Images name ${response}</label>`;
    })
    coin.addEventListener('error',()=>{
        response = "Failed to load";
        console.log(response);
        imageLabel.innerHTML += `
<label class="imageLabel">Images name ${response}</label>`;
    })
});

});
const images = [
    "A1.jpg",
    "A2.jpg",
    "A3.jpg"
];