const citiesList = JSON.parse(cities)
let countryListArray = []
let map = new Map()
let v = -1
for(let i = 0; i < citiesList.length; i++) {
    if(!(map.has(citiesList[i].country))) {
        countryListArray.push([citiesList[i].country])
        countryListArray[v+1].push([citiesList[i].name])
        map.set(citiesList[i].country, countryListArray[v+1])
        v++
    }
    else {
        countryListArray[v].push([citiesList[i].name])
    }
}
async function fetchData() {
    const response = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + document.querySelector("#selectorOfCity").value + "&appid=d3c8097a4728795abb4a589545a952ee");
    const data = await response.text();
    const obj = JSON.parse(data)
    document.getElementById("testingObj").innerHTML = "The weather in " + obj.name + " is " + obj.weather[0].main + " with temperature of " + (Math.floor(obj.main.temp - 273.15)) + "C"
}
let keys = map.keys()
console.log(keys.next().value)
console.log(keys.next().value)
console.log(countryListArray,map.get(citiesList[0].country)[1][0])
