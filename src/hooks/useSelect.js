import React , { useState } from 'react';

const useSelect = (stateInicial, opciones) => {
    
    // state del custom hook
    const [ state , actualizarState ] = useState(stateInicial); // ACA EL STATE INICIAL HACE REFERENCIA A LA COLUMNA CON NOTICIAS QUE LE PASAMOS POR DEFAULT QUE ES GENERAL EN EL FORMULARIO

    const SelectNoticias = () => (
        <select
            className="browser-default"
            value = {state}
            //para acceder al valor del value
            onChange = { e => actualizarState(e.target.value)}
        >
            {opciones.map(opcion => (
                <option 
                    key = {opcion.value}
                    value = {opcion.value}
                > {opcion.label}</option>
            ))}
        </select>
    );

    return [ state, SelectNoticias];
}
 
export default useSelect;