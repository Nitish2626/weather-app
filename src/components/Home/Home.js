import { useEffect, useState } from "react";
import WeatherInfoCard from "../weather info card/WeatherInfoCard";
import axios from "axios";
import Loader from "../loader/Loader";

const Home = (props) => {

    const [currentWeatherData, setCurrentWeatherData] = useState();
    const [forecastWeatherData,setForecastWeatherData]=useState();
    const [loader, setLoader] = useState(false);

    useEffect(() => {
        const currentWeather = async () => {
            try {
                setLoader(true);
                const weatherCondition = await axios.get(`http://api.weatherapi.com/v1/current.json?key=131dcb1e52f444998f574148232612&q=${props.search}&aqi=yes`)
                const weather = await weatherCondition.data;
                setCurrentWeatherData(await weather);
                setLoader(false);
            } catch (error) {
                console.log("Fetching ERROR", error);
            }
        };
        const forecastWeather=async()=>{
            try{
                setLoader(true);
                const weatherCondition=await axios.get(`http://api.weatherapi.com/v1/forecast.json?key=131dcb1e52f444998f574148232612&q=${props.search}&days=1&aqi=no&alerts=no`)
                const weather=await weatherCondition.data;
                setForecastWeatherData(await weather);
                setLoader(false);
            }
            catch(err){
                console.log(err);
            }
        };

        currentWeather();
        forecastWeather();
    }, [props.search]);

    return (
        <div className="w-full flex items-center justify-center mt-20">
            {loader ? <Loader borderColor="border-orange-500" /> :
                <WeatherInfoCard
                    city={currentWeatherData?.location.name}
                    state={currentWeatherData?.location.region}
                    country={currentWeatherData?.location.country}
                    time={currentWeatherData?.location.localtime}
                    text={currentWeatherData?.current.condition.text || currentWeatherData?.error.message}
                    icon={currentWeatherData?.current.condition.icon}
                    celsius={currentWeatherData?.current.temp_c}
                    fahrenheit={currentWeatherData?.current.temp_f}
                    windSpeed={currentWeatherData?.current.wind_kph}
                    humidity={currentWeatherData?.current.humidity}
                    co={currentWeatherData?.current.air_quality.co}
                    no2={currentWeatherData?.current.air_quality.no2}
                    o3={currentWeatherData?.current.air_quality.o3}
                    so2={currentWeatherData?.current.air_quality.so2}
                    sunrise={forecastWeatherData?.forecast.forecastday[0].astro.sunrise}
                    sunset={forecastWeatherData?.forecast.forecastday[0].astro.sunset}
                />
            }
        </div>
    );
}

export default Home;