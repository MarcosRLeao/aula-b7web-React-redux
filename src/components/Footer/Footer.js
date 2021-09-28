import React from 'react';
import { useSelector , useDispatch } from 'react-redux';

function Footer(props) {
    const dispatch = useDispatch();
    const name = useSelector(state => state.user.name)
    const contador = useSelector(state => state.user.contador)

    const handleIncrement = () => {
        dispatch({
            type: 'DECREMENT'
        })
    }

    return (
        <div style={{background: "#666", color: "#ccc", padding: "20px", margin: "20px 0"}}>
            <h1>COMPONENTE: FOOTER</h1>
            <p>Ainda pegando dados de HOME: {name}</p>
            <p>Contador: {contador}</p>
            <button onClick={handleIncrement}>-1</button>
        </div>
    );
}

export default Footer;