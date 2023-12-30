import axios from "axios";
import { useEffect, useState } from "react";

const SuggestionContainer = (props) => {

    const [suggestion,setSuggestion]=useState();

    useEffect(()=>{
        const suggestion=async()=>{
            try {
                const suggest=await axios.get(`http://api.weatherapi.com/v1/search.json?key=131dcb1e52f444998f574148232612&q=${props.search}`)
                setSuggestion(await suggest.data);
            } catch (error) {
                console.log(error);
            }
        };
        suggestion();
    },[props.search]);

    return (
        <div className="w-full flex items-center justify-center fixed mt-10 bg-white">
            <div className="w-11/12 flex flex-col items-center gap-2 rounded-md py-1 shadow-[1px_1px_10px_0px_grey] sm:w-9/12 md:w-8/12 lg:w-6/12 3xl:w-4/12">
                {suggestion?.map((d,i)=>{
                    return <h1 key={i} className="w-full text-lg cursor-pointer hover:bg-slate-200 px-2" onClick={()=>props.value(d.name)}>
                        {d.name}, {d.region}, {d.country}
                    </h1>
                })}
            </div>
        </div>
    );
}

export default SuggestionContainer;