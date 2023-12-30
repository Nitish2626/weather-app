import { useRef } from "react";
import search from "../../images/search.png";

const Search = (props) => {

    const searchRef = useRef();

    const focused = () => {
        props.search(searchRef.current.value);
        props.suggestion(true);
    };

    const blured = () => {
        props.suggestion(false);
    };

    return (
        <section
            className="w-full h-10 flex items-center justify-center fixed px-1 z-10">

            <input
                type="search"
                ref={searchRef}
                className="w-11/12 h-8 rounded-md text-lg px-2 outline-none shadow-[1px_1px_10px_0px_grey] sm:w-9/12 md:w-8/12 lg:w-6/12 3xl:w-4/12"
                placeholder="city name OR lat,lon"
                onFocus={focused}
                onBlur={blured}>
            </input>

            {/* <button
                className="w-10 h-8 flex items-center justify-center bg-white rounded-tr-md rounded-br-md shadow-[1px_1px_10px_0px_grey]" 
                onClick={searched}>

                <img
                    src={search}
                    className="w-4 h-4"
                    alt="search">
                </img>
            </button> */}

        </section>
    );
}
export default Search;