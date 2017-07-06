import React from 'react';
import { Router, Route} from 'react-router';

import App from './App';
import Members from  './pages/Members/Members';
import NotFound from './pages/NotFound/NotFound';
import Pricing from './pages/Pricing/Pricing';
import Services from './pages/Services/Services';

const Routes = (props)=> (
    <Router {...props}>
        <Route path="/" component={App}>
            <Route path="/Members" component={Members} />
            <Route path="/Pricing" component={Pricing} />
            <Route path="/Services" component={Services} />
            <Route path="*" component={NotFound} />
        </Route>
    </Router>
);

export default Routes;