import { useDarkMode } from "../dark mode context/DarkModeContext";
import MiniWeatherContainer from "../mini weather container/MiniWeatherContainer";

const HourlyWeatherContainer = (props) => {
  const { isDarkMode } = useDarkMode();

  return (
    <div
      className={`w-11/12 h-40 flex items-center gap-3 overflow-auto rounded-lg px-2 shadow-lg sm:w-10/12 md:w-9/12 lg:w-8/12 xl:w-6/12 2xl:w-6/12 ${
        isDarkMode ? "dark:text-blue-300" : "bg-white/90"
      }`}
    >
      {props.futureData?.map((d, i) => {
        return (
          <MiniWeatherContainer
            key={i}
            time={d.time}
            text={d.condition.text}
            icon={d.condition.icon}
            celsius={d.temp_c}
            fahrenheit={d.temp_f}
          />
        );
      })}
    </div>
  );
};

export default HourlyWeatherContainer;
