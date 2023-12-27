import HeadingContainer from "../heading container/HeadingContainer";
import Section from "../section container/Section";
import WeatherDataConatiner from "../weather data container/WeatherDataContainer";

const WeatherInfoCard = (props) => {

    let time = new Date(props.time);
    time = time.toLocaleString();

    return (
        <div
            className="w-11/12 px-2 py-1 rounded-lg shadow-[1px_1px_10px_0px_grey]">
            <h1 className="text-lg font-semibold text-orange-400">
                {props.place}
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

            <Section justify="justify-between" padding="px-1">
                <HeadingContainer value={props.celsius} />
                <HeadingContainer value={props.fahrenheit} />
            </Section>

            <Section justify="justify-between" margin="mt-2">
                <WeatherDataConatiner 
                    text="Wind Speed"
                    value={props.windSpeed}
                />
                <WeatherDataConatiner 
                    text="Humidity"
                    value={props.humidity}
                />
            </Section>

            <Section justify="justify-evenly" margin="mt-2">
                <WeatherDataConatiner
                    text="CO (µg/m3)"
                    value={props.co}
                />
                <WeatherDataConatiner
                    text="NO2 (µg/m3)"
                    value={props.no}
                />
                <WeatherDataConatiner
                    text="O3 (µg/m3)"
                    value={props.o}
                />
                <WeatherDataConatiner
                    text="SO2 (µg/m3)"
                    value={props.so}
                />
            </Section>
        </div>
    );
}

export default WeatherInfoCard;