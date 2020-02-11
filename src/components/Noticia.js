import React from 'react';
import PropTypes from 'prop-types';
import styles from './Noticia.module.css';

const Noticia = ({noticia}) => {
    // extraer los datos
    const { urlToImage , url , title , source} = noticia;
    
    const imagen = {urlToImage} ?
        <div className="card-image">
            <img className={`${styles.imagen}`} src={urlToImage} alt={title}/>
            <span className="card-title">{source.name}</span>
        </div>
    :null;

    return (
        <div className="col s12 m6 l4">
            <div className="card medium">
                {imagen}
                <div className={`${styles.contenido_card} card-content`}>
                    <h5 className={`${styles.title}`}>{title}</h5>
                    {/* <p className={`${styles.description}`}>{description}</p> */}
                </div>
                <div className="card-action center">
                    <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="waves-effect waves-light btn"
                    >Ver Noticia Completa</a>
                   
                </div>
            </div>
        </div>
    );
}


Noticia.propTypes = {
    noticia : PropTypes.object.isRequired
}
export default Noticia;