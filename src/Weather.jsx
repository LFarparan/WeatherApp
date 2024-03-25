import './assets/style/Weather.css'
import { useState } from 'react'
import search from './assets/images/magnify.svg'

export default function Weather(){

    let [weather, setWeather] = useState('');
    let [place, setPlace] = useState('')

    async function handleClick(){
        try{
            place = document.getElementById('location').value;
            const url = "https://api.weatherapi.com/v1/current.json?key=eebb0bbdd2154f7983044610242403&q=" + place.toLowerCase();
            const response = await fetch(url, {mode: 'cors'} )
            weather = await response.json();
            setWeather(displayResults(weather))
        }
        catch{
            alert("Invalid Input, Try Again")
        }


    }

    function displayResults(weather){
        return (
            <>  
                <div className='iconDetail'>
                    <img className='weatherIcon' src={weather.current.condition.icon} alt= {weather.current.condition.text} /><br/>
                    <p id="label"> {weather.current.condition.text} </p>
                </div>
                <div className='weatherDetail'>
                    <p id='locationdisplay'> Location: {place} @ {weather.location.localtime} </p> 
                    <p id='region'> Region: {weather.location.region} | &nbsp;
                        {weather.location.country} | &nbsp;
                        {weather.location.tz_id}
                    </p>
                    <p id="temp"> 
                        Temperature: {weather.current.temp_c}&deg;C / {weather.current.temp_f}&deg;F <br/>
                        Gust: {weather.current.gust_kph} kph <br/>
                        Humidity: {weather.current.humidity}
                    </p>
                </div>
            </>
        )
    }



    return(
        <div className="weatherContainer">
            <div className='weatherBox'>
                <h3>Forecast Weather using the weatherAPI</h3>
                <div className='inputZone'>
                    <label htmlFor="location"> Enter location: </label>
                    <input type="text" name='location' id='location'/>
                    <button id="confirmLocation" onClick={handleClick}> <img id='searchbtn' src= {search} alt="search-button" /> </button>
                </div>
                <div className='displayWeather'>
                    {weather !== "" && weather}
                </div>
            </div>
        </div>
    )
}