import { useEffect, useState } from "react";
import WeatherInfoCard from "../weather info card/WeatherInfoCard";
import axios from "axios";
import Loader from "../loader/Loader";
import HourlyWeatherContainer from "../hourly weather container/HourlyWeatherContainer";
import { useDarkMode } from "../dark mode context/DarkModeContext";

const Home = (props) => {

    const { isDarkMode } = useDarkMode();
    const [forecastWeatherData, setForecastWeatherData] = useState();
    const [loader, setLoader] = useState(false);

    useEffect(() => {
        const forecastWeather = async () => {
            try {
                setLoader(true);
                const weatherCondition = await axios.get(`http://api.weatherapi.com/v1/forecast.json?key=131dcb1e52f444998f574148232612&q=${props.search}&days=1&aqi=yes&alerts=no`)
                const weather = await weatherCondition.data;
                setForecastWeatherData(await weather);
                setLoader(false);
            }
            catch (err) {
                console.log(err);
            }
        };

        forecastWeather();
    }, [props.search]);

    return (
        <div className={`w-full h-screen flex flex-col items-center justify-center gap-10 pt-20 pb-11 ${isDarkMode ? "dark:bg-black" : ""}`}>
            {loader ? <Loader borderColor={`${isDarkMode ? "border-blue-300" : "border-orange-500"}`} /> :
                <>
                    <WeatherInfoCard
                        city={forecastWeatherData?.location.name}
                        state={forecastWeatherData?.location.region}
                        country={forecastWeatherData?.location.country}
                        time={forecastWeatherData?.location.localtime}
                        text={forecastWeatherData?.current.condition.text}
                        icon={forecastWeatherData?.current.condition.icon}
                        celsius={forecastWeatherData?.current.temp_c}
                        fahrenheit={forecastWeatherData?.current.temp_f}
                        windSpeed={forecastWeatherData?.current.wind_kph}
                        humidity={forecastWeatherData?.current.humidity}
                        co={forecastWeatherData?.current.air_quality.co}
                        no2={forecastWeatherData?.current.air_quality.no2}
                        o3={forecastWeatherData?.current.air_quality.o3}
                        so2={forecastWeatherData?.current.air_quality.so2}
                        sunrise={forecastWeatherData?.forecast.forecastday[0].astro.sunrise}
                        sunset={forecastWeatherData?.forecast.forecastday[0].astro.sunset}

                    />

                    <HourlyWeatherContainer
                        futureData={forecastWeatherData?.forecast.forecastday[0].hour}
                    />
                </>
            }


        </div>
    );
}

export default Home;