import { useRef } from "react";

const Search = (props) => {

    const searchRef = useRef();

    const search=()=>{
        props.search(searchRef.current.value);
    };

    const focused = () => {
        props.suggestion(true);
    };

    return (
        <section
            className="w-full h-10 flex items-center justify-center fixed z-10">

            <input
                type="search"
                ref={searchRef}
                onInput={search}
                className="w-11/12 h-8 rounded-md text-lg px-2 outline-none shadow-[1px_1px_10px_0px_grey] sm:w-10/12 md:w-9/12 lg:w-8/12 xl:w-6/12 2xl:w-6/12"
                placeholder="city name OR lat,lon"
                onFocus={focused}>
            </input>

        </section>
    );
}
export default Search;