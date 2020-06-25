import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Routes
import Pagina2 from 'views/1-basico/routes/Pagina2';
import Pagina3 from 'views/1-basico/routes/Pagina3';
import PaginaMain from 'views/1-basico/routes/PaginaInicio';
import NoFound from 'views/1-basico/routes/PaginaNoFound';

function Routes () {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/pagina3" component={Pagina3}/>
                <Route exact path="/pagina2" component={Pagina2}/>
                <Route exact path="/" component={PaginaMain}/>
                <Route  component={NoFound}/>
            </Switch>
            </BrowserRouter>
    );
}
 export default Routes;  