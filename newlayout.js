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
        let countryFlagChosen = document.createElement("img")
        countryFlagChosen.src = "Images/Flags/" + document.querySelector("#selectorOfCountry").value + "-flag-small.png"
        countryFlagChosen.style = "width:25px"
        countryFlagChosen.className = "flex-item"
        let CityImageChosen = document.createElement("img")
        CityImageChosen.src = "Images/Flags/" + document.querySelector("#selectorOfCountry").value + "-flag-small.png"
        CityImageChosen.style = "width:25px"
        CityImageChosen.className = "flex-item"
        document.querySelector("#countryFlag").innerHTML = ""
        document.querySelector("#cityImage").innerHTML = ""
        document.querySelector("#countryFlag").appendChild(countryFlagChosen)
        document.querySelector("#cityImage").appendChild(CityImageChosen)
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
    let WeatherImage = document.createElement("img")
        WeatherImage.src = "Images/Weather/3127120-weather/png/" + obj.weather[0].main + ".png"
        WeatherImage.style = "width:200px"
        document.querySelector(".weather").innerHTML = ""
        document.querySelector(".weather").appendChild(WeatherImage)
    let div = document.createElement("div")
    div.className = "textTemperature"
    let temperature = document.createTextNode("TEMPERATURE: " + (Math.floor(obj.main.temp - 273.15)) + "C")
    div.appendChild(temperature)

    let TempImage = document.createElement("img")
    if((Math.floor(obj.main.temp - 273.15)) <= 5) {
        TempImage.src = "Images/Weather/3127120-weather/png/" + "TempLow" + ".png"
    }
    if((Math.floor(obj.main.temp - 273.15) > 5 && Math.floor(obj.main.temp - 273.15) <= 25)) {
        TempImage.src = "Images/Weather/3127120-weather/png/" + "TempMedium" + ".png"
    }
    if((Math.floor(obj.main.temp - 273.15) > 25)) {
        TempImage.src = "Images/Weather/3127120-weather/png/" + "TempHigh" + ".png"
    }
    TempImage.style = "width:18px"
    TempImage.style = "height:18px"
    div.appendChild(TempImage)
    document.querySelector(".weather").appendChild(div)
}