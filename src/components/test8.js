

import { useState } from "react";

export default function Converter(){
    const [km, setKM] = useState(0);

    function convert(km){
        if(isNaN(parseFloat(km)))
            return 0;
        return parseFloat(km)*1000;
    }

    function handle(e){
        setKM(e.target.value);
    }

    return (
        <div>
            <input onChange={handle} type="text" value={km} placeholder="Km..."/>
            <p>Meter: {convert(km)}</p>
        </div>
    );
}