'use client';

import { useEffect } from "react";
import { useState } from "react";

const Ejercicio6 = () => {

    const [name, setName] = useState('SIN NOMBRE');

    const getNamePromise = () =>{
        let datetime1 = new Date().getTime();
        let datetime2 = datetime1+5000;

        while(datetime1 < datetime2){
            datetime1 = new Date().getTime();
        }

        return new Promise((resolve) => {
            resolve('Juan');
        })
    }

    const handleOnload = () =>{
        const promiseGetName = getNamePromise();
        promiseGetName.then((result) => {
            setName(result)
        })

    }
    
    useEffect(() => {
        handleOnload()
    }, [])

    return (
        <div>
            <h2>
                Ejercicio 6
            </h2>
            <p>
                Uso de Promises
            </p>
            Name: {name}
        </div>
    )
} 

export default Ejercicio6