import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Header from './Header'
import MainPage from './MainPage';

const App = () => {

    const IMG_URL = `${process.env.PUBLIC_URL}/images/logo.png`;

    const LINKS = [
        {
            link: 'HOME',
            path: '/landing-page/'
        },
        {
            link: 'Contact',
            path: '/landing-page/contact'
        }
    ];

    return (
        <Router>
            <Header links={LINKS} imageLogo={IMG_URL} textLogo={`Udruga za životinje "Merida"`} />
            <Switch>
                <Route path="/landing-page/" exact component={MainPage} />
                {/* <Route path="/contact" component={} /> */}
            </Switch>
        </Router>
    )
};

export default App;