import axios from "axios";
import { useEffect, useState } from "react";
import { useDarkMode } from "../dark mode context/DarkModeContext";

const SuggestionContainer = (props) => {
  const { isDarkMode } = useDarkMode();
  const [suggestion, setSuggestion] = useState([]);

  useEffect(() => {
    const suggestion = async () => {
      try {
        const suggest = await axios.get(
          `https://api.weatherapi.com/v1/search.json?key=131dcb1e52f444998f574148232612&q=${props.search}`
        );
        setSuggestion(await suggest.data);
      } catch (error) {
        alert("Something went wrong !");
      }
    };
    suggestion();
  }, [props.search !== ""]);

  return (
    <div
      className={`w-full flex items-center justify-center fixed mt-4 ${
        isDarkMode ? "dark:bg-black" : ""
      }`}
    >
      <div
        className={`w-11/12 flex flex-col items-center gap-2 rounded-md py-1 bg-white shadow-md ${
          isDarkMode ? "dark:bg-black" : ""
        } sm:w-10/12 md:w-9/12 lg:w-8/12 xl:w-6/12 2xl:w-4/12`}
      >
        {suggestion?.map((d, i) => {
          return (
            <h1
              key={i}
              className={`w-full text-lg cursor-pointer hover:bg-slate-200 px-2 ${
                isDarkMode ? "dark:hover:bg-gray-700 dark:text-blue-300" : ""
              }`}
              onClick={() => {
                props.value(d.name);
                props.suggestion(false);
              }}
              title="Suggestions"
            >
              {d.name}, {d.region}, {d.country}
            </h1>
          );
        })}
      </div>
    </div>
  );
};

export default SuggestionContainer;
