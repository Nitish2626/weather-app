const MiniWeatherContainer = (props) => {

    let time = props.time.split(" ");

    return (
        <section className="w-14 flex flex-col items-center justify-center">
            <h1 className="text-semibold">
                {time[1]}
            </h1>

            <img
                src={props.icon}
                alt={props.text}
                className="w-10 h-10">
            </img>

            <h1 className="w-full font-semibold text-orange-600 text-ellipsis overflow-hidden whitespace-nowrap">
                {props.text}
            </h1>

            <h1 className="font-semibold">
                {props.celsius}℃
            </h1>

            <h1 className="font-semibold">
                {props.fahrenheit}℉
            </h1>
        </section>
    );
}

export default MiniWeatherContainer;