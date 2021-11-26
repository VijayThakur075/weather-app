import { Button } from "react-bootstrap";
import { requestUser } from "../Thunk/weather";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getCity } from "../action";
import { getWeather } from "../action";
import { useEffect } from "react";
import { history } from "./History";
import { useHistory } from "react-router";


export const Dashboard = () => {
    const dispatch = useDispatch();
    const history= useHistory();
    const selector = useSelector((state) => state.weatherApi.api);
    const setCity = useSelector((state) => state.weatherApi.city);

    const handleSubmit = async (e) => {
        e.preventDefault()
        dispatch(requestUser(setCity))

    }


    const showHistory =() =>{
        history.push('/History')
    }

    //const Key= "38b59c131de3f3eaa9ccc110da75410e";
    // const[city, setCity]=useState("mumbai");

    //  const getCity= async () =>{
    //  await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${Key}`).then((response)=>{
    //  console.log(response.data)        
    //  setCity(response.data)
    //      });
    //  }

    return (
        <>
            <div>
                <h3>welcome to dashboard</h3>
                <input type="text" placeholder="city" name="city" onChange={(e) => dispatch(getCity(e.target.value))} />
                <Button varient="primary" onClick={handleSubmit}>ENTER</Button>
                <Button variant="secondry" onClick={showHistory}>HISTORY</Button>
            </div>

            {selector.map((data) => (
                <>
                    <ul>
                        <li>City name : {data.name}</li>
                        <li> country : {data.sys.country}</li>
                        <li> wind speed : {data.wind.speed}</li>
                        <li> weather description : {data.weather[0].description}</li>
                        <li>weather temp_min : {data.main.temp_min}</li>
                        <li>weather temp_max : {data.main.temp_max}</li>
                    </ul>

                </>
            ))}
            
        </>
    )
}