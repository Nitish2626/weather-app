import HeadingContainer from "../heading container/HeadingContainer";
import Section from "../section container/Section";
import WeatherDataConatiner from "../weather data container/WeatherDataContainer";
import { useDarkMode } from "../dark mode context/DarkModeContext";
import { useEffect, useState } from "react";

const WeatherInfoCard = (props) => {
  const { isDarkMode } = useDarkMode();

  const dateTime = new Date(props.time);
  const day = dateTime.toDateString().slice(0, 4);
  const date = dateTime.toDateString().slice(4);
  const time = dateTime.toLocaleTimeString();

  const [aqiLevel, setAqiLevel] = useState();
  const [aqiLevelStatus, setAqiLevelStatus] = useState();

  const calculateAQI = () => {
    let iLow,
      iHigh,
      bpLow,
      bpHigh,
      aqi = 0;

    if (props.pm2_5 >= 0 && props.pm2_5 <= 30) {
      iLow = 1;
      iHigh = 50;
      bpLow = 1;
      bpHigh = 30;
    } else if (props.pm2_5 >= 31 && props.pm2_5 <= 60) {
      iLow = 51;
      iHigh = 100;
      bpLow = 31;
      bpHigh = 60;
    } else if (props.pm2_5 >= 61 && props.pm2_5 <= 90) {
      iLow = 101;
      iHigh = 200;
      bpLow = 61;
      bpHigh = 90;
    } else if (props.pm2_5 >= 91 && props.pm2_5 <= 120) {
      iLow = 201;
      iHigh = 300;
      bpLow = 91;
      bpHigh = 120;
    } else if (props.pm2_5 >= 121 && props.pm2_5 <= 250) {
      iLow = 301;
      iHigh = 400;
      bpLow = 121;
      bpHigh = 250;
    } else if (props.pm2_5 >= 251 && props.pm2_5 <= 350) {
      iLow = 401;
      iHigh = 500;
      bpLow = 251;
      bpHigh = 350;
    }

    aqi = Math.round(
      ((iHigh - iLow) / (bpHigh - bpLow)) * (props.pm2_5 - bpLow) + iLow
    );
    setAqiLevel(aqi);

    if (aqi >= 0 && aqi <= 50) {
      setAqiLevelStatus({
        name: "Good",
        description: "Minimal impact",
        color: "text-green-700",
      });
    } else if (aqi >= 51 && aqi <= 100) {
      setAqiLevelStatus({
        name: "Satisfactory",
        description: "Minor breathing discomfort to sensitive people",
        color: "text-green-500",
      });
    } else if (aqi >= 101 && aqi <= 200) {
      setAqiLevelStatus({
        name: "Moderate",
        description: "Breathing discomfort to people with lungs/heart issues",
        color: "text-yellow-500",
      });
    }
    if (aqi >= 201 && aqi <= 300) {
      setAqiLevelStatus({
        name: "Poor",
        description: "Breathing discomfort to most people",
        color: "text-orange-500",
      });
    }
    if (aqi >= 301 && aqi <= 400) {
      setAqiLevelStatus({
        name: "Very Poor",
        description: "Respiratory illness on prolonged exposure",
        color: "text-red-500",
      });
    }
    if (aqi >= 401) {
      setAqiLevelStatus({
        name: "Severe",
        description: "Serious health impact; affects healthy people too",
        color: "text-red-700",
      });
    }
  };

  useEffect(() => {
    calculateAQI();
  }, [props.pm2_5]);

  return (
    <div
      className={`w-11/12 px-2 py-1 rounded-lg shadow-xl xs:w-80 ${
        isDarkMode ? "dark:text-blue-300" : "bg-white/90"
      } `}
    >
      <h1 className="text-lg font-semibold text-orange-400">
        {props.city}, {props.state}, {props.country}
      </h1>

      <h3 className="text-lg text-gray-400">
        {day}, {date} {time}
      </h3>

      <Section justify="justify-center">
        <img src={props.icon} className="w-20 h-20" alt="weather"></img>
      </Section>

      <h1 className="text-xl font-semibold text-center text-orange-500">
        {props.text}
      </h1>

      <Section justify="justify-center" padding="px-1" margin="mt-2">
        <HeadingContainer value={`${props.celsius}℃`} />
        <span className="mx-2 font-semibold">/</span>
        <HeadingContainer value={`${props.fahrenheit}℉`} />
      </Section>

      <Section justify="justify-between" margin="mt-2">
        <WeatherDataConatiner
          text="Wind Speed"
          value={`${props.windSpeed}KPH`}
        />
        <WeatherDataConatiner text="Humidity" value={`${props.humidity}%`} />
      </Section>

      <Section justify="justify-evenly" margin="mt-2">
        <WeatherDataConatiner
          text={
            <h1>
              pm2.5 (µg/m<sup>3</sup>)
            </h1>
          }
          value={props.pm2_5}
        />
        <WeatherDataConatiner
          text={
            <h1>
              pm10 (µg/m<sup>3</sup>)
            </h1>
          }
          value={props.pm10}
        />
        <WeatherDataConatiner text={<h1>AQI (pm2.5)</h1>} value={aqiLevel || ""} />
        <WeatherDataConatiner
          text={
            <h1>
              Air<br></br>Quality
            </h1>
          }
          value={aqiLevelStatus?.name}
          styles={`${aqiLevelStatus?.color} font-semibold`}
          title={aqiLevelStatus?.description}
        />
      </Section>

      <Section justify="justify-between" margin="mt-2">
        <WeatherDataConatiner text="Sunrise" value={`${props.sunrise}`} />
        <WeatherDataConatiner text="Sunset" value={`${props.sunset}`} />
      </Section>
    </div>
  );
};

export default WeatherInfoCard;
