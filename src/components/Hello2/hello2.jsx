import React, {useState} from "react";

const Hello2 = (props) => {
    const [count, setCount] = useState(0);
    return (
        <>
            <h2>Hello 2</h2>
            <div>Hola {props.nombre}, {props.apellido}</div>
            <p>Has clickado {count} veces</p>
            <button onClick={()=> setCount(count + 1)}>Clicka aquí</button>
        </>
    );
}

export default Hello2;