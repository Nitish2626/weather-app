const WeatherDataConatiner = (props) => {
    return (
        <section className="flex flex-col items-center justify-center">
            <h2 className="text-md text-gray-500 text-center">
                {props.text}
            </h2>
            <h1 className={`text-lg text-center ${props.styles}`} title={props.title}>
                {props.value}
            </h1>
        </section>
    );
}

export default WeatherDataConatiner;