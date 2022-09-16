// countries Name
// countries subregion
// countries region
// countries population

const xhr = new XMLHttpRequest();
xhr.open("GET","https://restcountries.com/v3.1/all");
xhr.send();
xhr.responseType="json";
xhr.onload=function displayResult()
{
    const countries=xhr.response;
    for(let index in countries){
        console.log( +index+1 ,` the country name is ${countries[index].name.common} 
    the country sub region is ${countries[index].subregion}
    the country region is ${countries[index].region}
    the country population ${countries[index].population}`);
    
}
}
