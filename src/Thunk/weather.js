import axios from "axios";
import { getWeather } from "../action";

export const requestUser = (city) => async (dispatch) => {
    try {
        await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7e8ba1e744c64067f9367c59ec604f52`)
            .then((res) => {
                console.log(res.data)
                dispatch(getWeather([res.data]))
                localStorage.setItem("City name", JSON.stringify(res.data.name))
                localStorage.setItem("country", JSON.stringify(res.data.sys.country))
                localStorage.setItem("weather description", JSON.stringify(res.data.weather[0].description))
                localStorage.setItem("weather temp_min", JSON.stringify(res.data.main.temp_min))
                localStorage.setItem("weather temp_max", JSON.stringify(res.data.main.temp_max))


            });
    } catch (err) {
        console.log(err)
    }
}

