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
console.log(countryListArray,map.get("Poland").length - 1)
console.log(map)
for(let i = 0; i < countryListArray.length; i++) {
    let div = document.createElement("option")
    let countryText = document.createTextNode(map.get(countryListArray[i][0])[0])
    div.appendChild(countryText)
    document.getElementById("selectorOfCountry").appendChild(div)
}

document.querySelector("#selectorOfCountry").addEventListener("change", function() {
    if(!(document.querySelector("#selectorOfCountry").value === "Select your country")) {
        document.querySelector("#selectorOfCity").innerHTML = ""
        for(let i = 0; i < map.get(document.querySelector("#selectorOfCountry").value).length - 1; i++) {
                let div2 = document.createElement("option")
                let citiesOfWorld = map.get(document.querySelector("#selectorOfCountry").value)[i+1][0]
                let TextNodeCitiesOfWorld = document.createTextNode(citiesOfWorld)
                div2.appendChild(TextNodeCitiesOfWorld)
                document.getElementById("selectorOfCity").appendChild(div2)
                console.log(map.get(document.querySelector("#selectorOfCountry").value)[i+1][0])
        }
    }
}
)
let EventListenerKillerCountry = function() {
    if(!(document.querySelector("#selectorOfCountry").value === "Select your country")) {
        let deletingOption = document.querySelector("#deletedOption")
        deletingOption.remove()
        document.body.removeEventListener("mousedown", EventListenerKillerCountry)
}
}
document.body.addEventListener("mousedown", EventListenerKillerCountry)

async function fetchData() {
    const response = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + document.querySelector("#selectorOfCity").value + "&appid=d3c8097a4728795abb4a589545a952ee");
    const data = await response.text();
    const obj = JSON.parse(data)
    document.getElementById("testingObj").innerHTML = "The weather in " + obj.name + " is " + obj.weather[0].main + " with temperature of " + (Math.floor(obj.main.temp - 273.15)) + "C"
    console.log(obj.main.temp)
}