import { useRef } from "react";

const Search = (props) => {

    const searchRef = useRef();

    const search=()=>{
        props.search(searchRef.current.value);
    };

    const focused = () => {
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
                onInput={search}
                className="w-11/12 h-8 rounded-md text-lg px-2 outline-none shadow-[1px_1px_10px_0px_grey] sm:w-9/12 md:w-8/12 lg:w-6/12 3xl:w-4/12"
                placeholder="city name OR lat,lon"
                onFocus={focused}
                onBlur={blured}>
            </input>

        </section>
    );
}
export default Search;