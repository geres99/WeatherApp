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
    }
    let EventListenerKillerCountry = function() {
        if(!(document.querySelector("#selectorOfCountry").value === "Select your country")) {
        let deletingOption = document.querySelector("#deletedOption")
        deletingOption.remove()
        document.body.removeEventListener("mousemove", EventListenerKillerCountry)

        let divSelect =document.body.createElement("select")
        let divOption = document.body.createElement("option")
        let divTextNode = document.body.createTextNode("Select your city")
        divSelect.appendChild(divOption)
        divOption.appendChild(divTextNode)
        document.body.appendChild()
        }
    }
    document.body.addEventListener("mousemove", EventListenerKillerCountry)


    /* let EventListenerKillerCity = function() {
        if(!(document.querySelector("#selectorOfCity").value === "Select your city")) {
        let deletingOption = document.querySelector("#deletedOption")
        deletingOption.remove()
        document.body.removeEventListener("mousemove", EventListenerKillerCity)
        }
    }
    document.body.addEventListener("mousemove", EventListenerKillerCity) */
