const key = "34dd2fce42f8a3d38599f49d21ac6412";

// const baseURL = "https://api.openweathermap.org/data/2.5/weather?q=Lagos&appid=34dd2fce42f8a3d38599f49d21ac6412";

//  fetch(baseURL)
//     .then((data) => { console.log ("Response", data.json()) })
//     .catch((error) => {
//         console.log(error)
//     })

const requestCity = async (city) => {
    const baseURL = "https://api.openweathermap.org/data/2.5/weather"
    const query = `?q=${city}&appid=${key}`;

    // make fetch (promise call)

    const response = await fetch(baseURL + query);

    //promise data

    const data = await response.json();
    return data;

}