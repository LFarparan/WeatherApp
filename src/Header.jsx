import logo from './assets/images/weatherlogo.svg'
import './assets/style/Header.css'


export default function Header(){

    return(
        <div className='mainHeader'>
            <div className='headerContainer'>
                <img src={logo} className="logo" alt="weather-app-logo" />
                <h2> Simple Weather App </h2>

            
            
            </div>
        </div>
    )



}