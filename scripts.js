async function fetchData() {
    const data = await fetch({
        url: "https://api.openweathermap.org/data/2.5/weather?q=warsaw&appid=d3c8097a4728795abb4a589545a952ee",
    });
    console.log("DATA:", data);
}
