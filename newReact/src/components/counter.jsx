import { useState } from "react"

function Counter(){
    const [count, setCount] = useState(0)

    const handleClick = () =>{
        setCount(count + 1)
    }
    return(
        <div>
            <button onClick={handleClick}>Cliquez-ici</button>
            {/* <button onClick={() => setCount(count + 1)}>Cliquez-ici courte</button> */}
            <p>Vous avec cliqué {count} fois</p>
        </div>
    )
}

export default Counter