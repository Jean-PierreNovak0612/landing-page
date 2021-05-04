import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Header from './Header'

const App = () => {

    const IMG_URL = `${process.env.PUBLIC_URL}/images/logo.png`;

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
            <Header links={LINKS} imageLogo={IMG_URL} />
            <Switch>
                {/* <Route path="/" component={} />
                <Route path="/contact" component={} /> */}
            </Switch>
               <br />
               <br />
               <br />
               <br />
               <br />
               <br />
               <br />
               <br />
               <br />
               <br />
               <br />
               <br />
               <br />
               <br />
               <br />
               <br />
               <br />
               <br />
               <br />
               <br />
               <br />
               <br />
               <br />
               <br />
               <br />
               <br />
               <br />
               <br />
               <br />
               <br />
               <br />
               <br />
               <br />
               <br />
               <br />
               <br />
               <br />
               <br />
               <br />
               <br />
               <br />
               <br />
               <br />
               <br />
               <br />
        </Router>
    )
};

export default App;