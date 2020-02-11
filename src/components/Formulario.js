import React from 'react';
import styles from './Formulario.module.css';
import useSelect from '../hooks/useSelect';
import PropTypes from 'prop-types';

const Formulario = ({guardarCategoria}) => {

    const OPCIONES = [
        {value:'general' , label:'General'},
        {value:'business' , label:'Negocios'},
        {value:'entertainment' , label:'Entretenimiento'},
        {value:'health' , label:'Salud'},
        {value:'science' , label:'Ciencia'},
        {value:'sports' , label:'Deportes'},
        {value:'technology' , label:'Tecnología'}
    ]
    //utilizar custom Hook
    const [ categoria , SelectNoticas ] = useSelect('general',OPCIONES); // le pasamos general que es las noticas que se van abrir al principio y le pasamos opciones


    // submit al form , pasar categoria a app.js
    const buscarNoticass = e => {
        e.preventDefault();

        guardarCategoria(categoria);
    }


    return ( 
        <div className = {`${styles.buscador} row`}>
            <div className="col s12 m8 offset-m2">
                <form
                    onSubmit = {buscarNoticass}
                >
                    <h2 className={styles.heading}>Encuentra Noticias por Categoría</h2>
                    
                    <SelectNoticas />
                    
                    <div className="input-field col s12">
                        <input
                            type="submit"
                            className={`${styles['btn-block']} btn-large amber darken-2`} //cuando tiene guion medio en el css se usa styles['y el nombre de la variable que ponemos en css']
                            value ="Buscar"
                        />
                    </div>
                </form>
            </div>
        </div>
     );
}

Formulario.propTypes = {
    guardarCategoria : PropTypes.func.isRequired
}
export default Formulario;