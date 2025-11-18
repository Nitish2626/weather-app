import { useRef } from "react";
import { useDarkMode } from "../dark mode context/DarkModeContext";
import { IoSearchOutline } from "react-icons/io5";

const Search = (props) => {
  const { isDarkMode } = useDarkMode();
  const searchRef = useRef();

  const search = () => {
    props.search(searchRef.current.value);
    props.suggestion(true);
  };

  return (
    <section
      className={`w-8/12 h-10 flex items-center justify-center gap-2 px-2 z-10 rounded-md text-lg shadow-md sm:w-10/12 md:w-9/12 lg:w-8/12 xl:w-6/12 2xl:w-4/12 ${
        isDarkMode ? "dark:bg-black dark:text-blue-300" : ""
      }`}
    >
      <IoSearchOutline />
      <input
        type="search"
        ref={searchRef}
        onInput={search}
        className={`w-full outline-none ${
          isDarkMode ? "dark:bg-black" : ""
        }`}
        placeholder="city name OR lat,lon"
        title="Search City name OR latitude,longitude"
      ></input>
    </section>
  );
};
export default Search;
