'use client';

import courseapi from '@/api/course.js'
import { useEffect, useState } from 'react';

const Ejercicio5 = () => {

    const datosDefault = {name: "", avatar: ""}
    
    const [datos, setDatos] = useState(datosDefault);
    const [busqueda, setBusqueda] = useState(1);
    
    const handleOnClick = async () => {
        const datosRaw = await courseapi.get(busqueda);
        setDatos(datosRaw.data);
    }

    useEffect(()=>{
        handleOnClick();
    },[])


    return (
        <div>
            <h2>
                Ejercicio 2
            </h2>
            <p>
                Uso de fetch / axios
            </p>
            <input type='text' value={busqueda} onChange={e => setBusqueda(e.target.value)}></input>
            <button onClick={() => handleOnClick()}>CONSULTA</button>
            <p>
                {datos.name}
            </p>
            <img src={datos.avatar}/>
        </div>
    )
} 

export default Ejercicio5