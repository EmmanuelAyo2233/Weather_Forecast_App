const searchform = document.querySelector(".search-location");
const cityvalue = document.querySelector(".search-location input");
const cityName = document.querySelector(".city-name p");
const cardBody  = document.querySelector(".card-body");
const timeImage  = document.querySelector(".card-top img");

const convertToCelcius = (kelvin) => {
    celcius = Math.round(kelvin - 273.15);
    return celcius;
}

const isDayTime = (icon)=>{
    if (icon.includes('d')){
          return true;  
    } else{
        return false
    }
}

updateWeatherApp = (city) =>{
    const imageName = city.weather[0].icon;
    const iconSrc = `https://openweathermap.org/img/wn/${imageName}@2x.png`
    cityName.textContent =city.name;
    cardBody.innerHTML =`
    <div class="card-mid row">
    <div class="col-7 text-center temp">
        <span>${convertToCelcius(city.main.temp)}&deg;C</span>
    </div>
    <div class="col-5 condition-temp">
        <p class="condition">${city.weather[0].description}</p>
        <p class="high">${convertToCelcius(city.main.temp_max)}&deg;C</p>
        <p class="low">${convertToCelcius(city.main.temp_min)}&deg;C</p>
    </div>
</div>
<div class="icon-container card shadow mx-auto">
    <img src="${iconSrc}" alt="">
</div>

<div class="card-bottom px-5 py-4 row">
   <div class="col text-center">
    <p>${convertToCelcius(city.main.feels_like)}&deg;C</p>
    <span>Feel Like</span>
   </div> 

   <div class="col text-center">
    <p>${city.main.humidity}%</p>
    <span>Humidity</span>
   </div> 
</div>
    `;

    if(isDayTime(imageName)){
        console.log("Day")
        timeImage.setAttribute("src", "img/day_image.svg")
        cityName.classList.add("text-dark")
    }else{
        console.log("night")
        timeImage.setAttribute("src", "img/night_img.svg")
        cityName.classList.add("text-white")
    }

}

searchform.addEventListener("submit", e =>{
    e.preventDefault();
    const citysearched =cityvalue.value.trim();
    console.log(citysearched)
    searchform.reset();
    
    requestCity(citysearched)
    .then((data) => {
        updateWeatherApp(data);

    })
    .catch((error) => {console.log(error)})
})