import './assets/style/Body.css'
import background from './assets/images/weatherbg.jpg'

export default function Body(){
    return(
        <div className="mainContainer">
            <img className="background" src={background} alt="background-img" />
        </div>
    )
}