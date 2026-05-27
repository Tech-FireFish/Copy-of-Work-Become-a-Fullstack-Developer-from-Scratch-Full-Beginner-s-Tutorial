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

export const produceFilteredData = (listToSearch,arrayToSearch,urlPath) =>{
    return listToSearch.filter((whatToFilter)=>{
        return whatToFilter[arrayToSearch].toLowerCase() === urlPath.toLowerCase(); 
    });
}

export const getDataByQueryParams = (data, queryObj)=>{
    const {continent, country, is_open_to_public} = queryObj;
    if(continent){
        data = data.filter( valueInData =>
            valueInData.continent.toLowerCase() === continent.toLowerCase(),
        )
    };
    if(country){
        data = data.filter( valueInData =>
            valueInData.country.toLowerCase() === country.toLowerCase(),
    );
    }
    if(is_open_to_public){
        data = data.filter( valueInData =>
            valueInData.is_open_to_public === JSON.parse(is_open_to_public),
        )
    };
    // if(is_open_to_public){
    //     data = data.filter( valueInData =>{
    //         console.log( valueInData.is_open_to_public, JSON.parse(is_open_to_public));
    //         return valueInData.is_open_to_public === is_open_to_public;
    //     })
    // };
    return data;
}