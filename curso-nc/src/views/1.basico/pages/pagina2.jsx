import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

function pagina2 (){
    return (
        
        <Fragment>
            <h2>Página 2</h2>
            <Link to='/'> <button> Pagina Inicio </button></Link>
            <Link to='/pagina2'> <button> pagina 2 </button></Link>
            <Link to='/pagina3'> <button> pagina 3 </button> </Link>

        </Fragment>
    );
}

export default pagina2;