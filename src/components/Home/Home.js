import { useEffect, useState } from "react";
import WeatherInfoCard from "../weather info card/WeatherInfoCard";
import axios from "axios";

const Home = (props) => {

    const [weatherData, setWeatherData] = useState();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await axios.get(`http://api.weatherapi.com/v1/current.json?key=131dcb1e52f444998f574148232612&q=${props.search}&aqi=yes`)
                const weather = await data.data;
                setWeatherData(await weather);
            } catch (error) {
                console.log("Fetching ERROR",error);
            }
        };
        fetchData();
    }, [props.search]);

    console.log(weatherData);

    return (
        <div className="w-full flex items-center justify-center mt-20">
            {/* {weatherData.map((d, i) => { */}
                {weatherData && <WeatherInfoCard
                    // key={i}
                    city={weatherData.location.name}
                    state={weatherData.location.region}
                    country={weatherData.location.country}
                    time={weatherData.location.localtime}
                    text={weatherData.current.condition.text}
                    icon={weatherData.current.condition.icon}
                    celsius={weatherData.current.temp_c}
                    fahrenheit={weatherData.current.temp_f}
                    windSpeed={weatherData.current.wind_kph}
                    humidity={weatherData.current.humidity}
                    co={weatherData.current.air_quality.co}
                    no2={weatherData.current.air_quality.no2}
                    o3={weatherData.current.air_quality.o3}
                    so2={weatherData.current.air_quality.so2}
                />}
            {/* })}; */}
        </div>
    );
}

export default Home;