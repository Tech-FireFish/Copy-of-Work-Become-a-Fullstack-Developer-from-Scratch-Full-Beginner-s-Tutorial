import {travelList} from "./data.js";

//Experiments
const filteredData = travelList.filter((whatToFilter)=>{
    return whatToFilter.continent.toLowerCase() === "asia"; 
});
console.log(filteredData);

