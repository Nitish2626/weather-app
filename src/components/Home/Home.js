import WeatherInfoCard from "../weather info card/WeatherInfoCard";

const Home = () => {
    return (
        <div className="w-full flex items-center justify-center mt-20">
            <WeatherInfoCard
                place="London, City of London, Greater London, United Kingdom"
                time="2023-12-27 3:49"
                icon="//cdn.weatherapi.com/weather/64x64/night/296.png"
                celsius="8.0℃"
                fahrenheit="46.4℉"
                windSpeed="15.1KPH"
                humidity="93%"
                co={240.3}
                no={8.5}
                o={55.1}
                so={5.2}
            />
        </div>
    );
}

export default Home;