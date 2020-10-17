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
    for(let i = 0; i < citiesList.length; i++) {
        let countrys = citiesList[i].country
        let div = document.createElement("div")
        div.className = "country" + i
        let rozmowa = document.createTextNode(countrys)
        div.appendChild(rozmowa)
        if(!(rozmowa.nodeValue === "Poland")) {
        document.body.appendChild(div)
        }
        }
        console.log(countrys)