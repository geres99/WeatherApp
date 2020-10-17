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
        document.getElementById("selector").appendChild(div) 
        }
    }
    console.log(map.has("Poland"))