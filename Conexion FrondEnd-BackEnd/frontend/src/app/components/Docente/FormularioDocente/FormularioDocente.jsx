
import { useState } from 'react'
import  Button  from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

const FormularioDocente = ({ docente, onClick, onCancelar }) =>{

    const [datosDocente, setDatosDocente] = useState(docente);

    const handleOnClick = async () =>{
        await onClick(datosDocente)
    }

    const handleOnCancelar = () =>{
        onCancelar()
    }

    return(
        <>
            <h2>Agregar docente</h2>
            <br/>
            <Form.Control size='lg' type='text' placeholder='Nombre' value={datosDocente.name} onChange={e => setDatosDocente({...datosDocente, name: e.target.value})}/>
            <br/>
            <Form.Control size='lg' type='text' placeholder='Apellido' value={datosDocente.lastname} onChange={e => setDatosDocente({...datosDocente, lastname: e.target.value})}/>
            <br/>
            <Button variant= "primary" style={{marginRight: '10px'}} onClick={() => handleOnClick()}>GUARDAR</Button>
            <Button variant= "secondary" style={{marginRight: '10px'}} onClick={() => handleOnCancelar()}>Cancelar</Button>
        </>
    )
}

export default FormularioDocente