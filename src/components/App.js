import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Header from './Header'

const App = () => {

    const LINKS = [
        {
            link: 'HOME',
            path: '/'
        },
        {
            link: 'Contact',
            path: '/contact'
        }
    ];

    return (
        <Router>
            <Header links={LINKS} />
            <Switch>
                {/* <Route path="/" component={} />
                <Route path="/contact" component={} /> */}
            </Switch>
        </Router>
    )
};

export default App;