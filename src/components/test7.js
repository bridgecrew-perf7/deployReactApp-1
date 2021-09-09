import { useState, useEffect } from "react";


export default function Counter4(){
    const [counter, setCounter] = useState(0);

    function increment(){
        setCounter(counter + 1);
    }
    useEffect(()=>console.clear(), [counter]);

    return (
        <div>
            <p>Counter4 app: {counter}</p>
            <button onClick={increment}>Incre</button>
        </div>
    );
}