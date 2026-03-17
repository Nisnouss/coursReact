// import { useState } from "react"
import { useCounter } from "../store/counterStore"

function Counter(){
    const {counter, increaseCount, decreaseCount, updateCounter} = useCounter()
    // const [count, setCount] = useState(0)

    // const handleClick = () =>{
    //     setCount(count + 1)
    // }
    return(
        <div>
            <button onClick={increaseCount}>Plus 1</button>
            <button onClick={decreaseCount}>Moins 1</button>
            <button onClick={() => updateCounter(12)}>Initialise à 12</button>
            {/* <button onClick={() => setCount(count + 1)}>Cliquez-ici courte</button> */}
            <p>Vous avec cliqué {counter} fois</p>
        </div>
    )
}

export default Counter