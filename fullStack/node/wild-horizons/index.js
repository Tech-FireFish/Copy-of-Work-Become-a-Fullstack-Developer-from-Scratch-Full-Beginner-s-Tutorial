import {travelList} from "./data.js";

//Experiments
const filteredData = travelList.filter((whatToFilter)=>{
    return whatToFilter.continent.toLowerCase() === "asia"; 
});
console.log(filteredData);

export const sendJSONResponse = (res,statusCode,sendData) =>{
    res.setHeader("Content-Type","application/json");
    res.statusCode = statusCode;
    res.end(JSON.stringify(sendData));
}

// export const produceFilteredData = (data,locationType,locationName) =>{
//     return data.filter((destination) => {
//         return destination[locationType].toLowerCase() === locationName.tolowerCase();
//     })
// }

export const produceFilteredData = (listToSearch,arrayToSearch,urlPath) =>{
    return listToSearch.filter((whatToFilter)=>{
        return whatToFilter[arrayToSearch].toLowerCase() === urlPath.toLowerCase(); 
    });
}
