//================TASK 1=====================
//How to compare two JSON have the same properties without order
var obj1 = { name: "Person 1", age:"5" };
var obj2 = { age:"5", name: "Person 1" };

var flag=true;

if(Object.keys(obj1).length==Object.keys(obj2).length){
    for(key in obj1) { 
        if(obj1[key] == obj2[key]) {
            continue;

        }
        else {
            flag=false;
            break;
        }
    }
}
else {
    flag=false;
}
console.log(flag);


// ==================TASK 2====================

async function getData(){
    let main = await fetch('https://restcountries.com/v2/all');
    let data = await main.json();
    // display all the country flags in console

    let flags = data.map(country=>country.flag)
    console.log(flags);


    // Use the same rest countries and print all countries name, region, sub region and population
 let con = data.map((country)=> {
     return {
         name:country.name,
         region:country.region,
         subregion:country.subregion,
         population:country.population
     }
 })
 console.log(con);
}

getData();
