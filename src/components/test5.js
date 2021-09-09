
import { useState } from "react"

export default function Counter2(){
    const [counter, setCounter] = useState(0);

    function increment(){
        setCounter(counter+1);
    }
    return (
        <div>
            <p>Counter2 app: {counter}</p>
            <button onClick={increment}>Incre</button>
        </div>
    )
}