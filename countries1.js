// countries flags

const xhr = new XMLHttpRequest();
xhr.open("GET","https://restcountries.com/v3.1/all");
xhr.send();
xhr.responseType="json";
xhr.onload=function displayResult()
{
    const countries=xhr.response;
    for(let index in countries){
    
         console.log(+index +1,countries[index].flags);
    
}
}

// how to compare two JSON have the same properties without order?

var Obj1={name:"sathish",age:"25" };
var Obj2={age:"25",name:"sathish"};
console.log(JSON.stringify(Obj1)===JSON.stringify(Obj2));