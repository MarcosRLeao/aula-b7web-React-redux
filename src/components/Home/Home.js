import React from 'react';
import { useSelector, useDispatch } from 'react-redux';




function Home() {

    const dispatch = useDispatch();
    const name = useSelector(state => state.user.name);
    const contador = useSelector(state => state.user.contador);

    const handleChance = () => {
        dispatch({
            type: 'SET_NAME',
            payload: {name: 'Marcos'}
        })
    }

    const handleIncrement = () => {
        dispatch({
            type: 'INCREMENT'
        })
    }

    return (
        <div  style={{background: "#666", color: "#fff", padding: "20px", margin: "20px 0"}}>
            <h1>COMPONENTE: HOME</h1>
            <p>Nome: {name} <br/>Contador: {contador}</p>

            <button onClick={handleChance}>Nomear para Marcos</button>
            <button onClick={handleIncrement}>+1</button>
        </div>
    );
}

export default Home;