import HeadingContainer from "../heading container/HeadingContainer";
import Section from "../section container/Section";
import WeatherDataConatiner from "../weather data container/WeatherDataContainer";
import { useDarkMode } from "../dark mode context/DarkModeContext";

const WeatherInfoCard = (props) => {

    const {isDarkMode}=useDarkMode();

    let time = new Date(props.time);
    time = time.toLocaleString();

    return (
        <div
            className={`w-11/12 px-2 py-1 rounded-lg shadow-[1px_1px_10px_0px_grey] xs:w-80 ${isDarkMode ? "dark:text-blue-300" : ""} `}>
            <h1 className="text-lg font-semibold text-orange-400">
                {props.city}, {props.state}, {props.country}
            </h1>

            <h3 className="text-lg text-gray-400">
                {time}
            </h3>

            <Section justify="justify-center">
                <img
                    src={props.icon}
                    className="w-20 h-20"
                    alt="weather">
                </img>
            </Section>

            <h1 className="text-xl font-semibold text-center text-orange-500">{props.text}</h1>

            <Section justify="justify-between" padding="px-1" margin="mt-2">
                <HeadingContainer value={`${props.celsius}℃`} />
                <HeadingContainer value={`${props.fahrenheit}℉`} />
            </Section>

            <Section justify="justify-between" margin="mt-2">
                <WeatherDataConatiner
                    text="Wind Speed"
                    value={`${props.windSpeed}KPH`}
                />
                <WeatherDataConatiner
                    text="Humidity"
                    value={`${props.humidity}%`}
                />
            </Section>

            <Section justify="justify-evenly" margin="mt-2">
                <WeatherDataConatiner
                    text={<h1>CO (µg/m<sup>3</sup>)</h1>}
                    value={props.co}
                />
                <WeatherDataConatiner
                    text={<h1>NO<sub>2</sub> (µg/m<sup>3</sup>)</h1>}
                    value={props.no2}
                />
                <WeatherDataConatiner
                    text={<h1>O<sub>3</sub> (µg/m<sup>3</sup>)</h1>}
                    value={props.o3}
                />
                <WeatherDataConatiner
                    text={<h1>SO<sub>2</sub> (µg/m<sup>3</sup>)</h1>}
                    value={props.so2}
                />
            </Section>

            <Section justify="justify-between" margin="mt-2">
                <WeatherDataConatiner
                    text="Sunrise"
                    value={`${props.sunrise}`}
                />
                <WeatherDataConatiner
                    text="Sunset"
                    value={`${props.sunset}`}
                />
            </Section>
        </div>
    );
}

export default WeatherInfoCard;