import MiniWeatherContainer from "../mini weather container/MiniWeatherContainer";

const HourlyWeatherContainer = (props) => {
    return (
        <div className="w-11/12 h-40 flex items-center gap-3 overflow-auto rounded-lg px-2 shadow-[1px_1px_10px_0px_grey] sm:w-9/12">
            {props.futureData?.map((d,i)=>{
                return <MiniWeatherContainer 
                    key={i}
                    time={d.time}
                    text={d.condition.text}
                    icon={d.condition.icon}
                    celsius={d.temp_c}
                    fahrenheit={d.temp_f}
                />
            })}
        </div>
    );
}

export default HourlyWeatherContainer;