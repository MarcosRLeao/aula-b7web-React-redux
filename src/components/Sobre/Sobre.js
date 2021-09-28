import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

function Sobre(props) {

    const name = useSelector(state => state.user.name)
    return (
        <div style={{background: "#000", color: "#fff", padding: "20px", margin: "20px 0"}}>
            <h1>COMPONENTE: SOBRE</h1>
           <p>buscando o nome do componente home: {name}</p>
        </div>
    );
}

export default Sobre;