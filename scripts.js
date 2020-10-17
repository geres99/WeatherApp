async function fetchData() {
    const response = await fetch("https://api.openweathermap.org/data/2.5/weather?q=warsaw&appid=d3c8097a4728795abb4a589545a952ee");
    //console.log("dupa17", response);
    const data = await response.text();
    //console.log("DATA:", data);
    const obj = JSON.parse(data)
    document.getElementById("testingObj").innerHTML = obj.name
}
    const citiesList = JSON.parse(cities)
    console.log(citiesList)
    let map = new Map()
    for(let i = 0; i < citiesList.length; i++) {
        let countrys = citiesList[i].country
        let div = document.createElement("option")
        let TextNodeCities = document.createTextNode(countrys)
        div.appendChild(TextNodeCities)
        if (!(map.has(TextNodeCities.nodeValue))) {
        map.set(TextNodeCities.nodeValue)
        document.getElementById("selectorOfCountry").appendChild(div) 
        }
        let div1 = document.createElement("option")
        let citiesOfCountry = citiesList[i].name
        let TextNodeCitiesOfCountry = document.createTextNode(citiesOfCountry)
        div1.appendChild(TextNodeCitiesOfCountry)
        div1.className = citiesList[i].country
        div1.className = "hiddenCountry"
        document.getElementById("selectorOfCity").appendChild(div1)

    }
    let EventListenerKillerCountry = function() {
        if(!(document.querySelector("#selectorOfCountry").value === "Select your country")) {
        let deletingOption = document.querySelector("#deletedOption")
        deletingOption.remove()
        document.body.removeEventListener("mousedown", EventListenerKillerCountry)

        let divOption = document.createElement("option")
        let divTextNode = document.createTextNode("Select your city")
        divOption.appendChild(divTextNode)
        document.querySelector("#selectorOfCity").appendChild(divOption)
        }
    }
    document.body.addEventListener("mousedown", EventListenerKillerCountry)
