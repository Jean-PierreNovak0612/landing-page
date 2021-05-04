import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Header from './Header'
import MainPage from './MainPage';
import Footer from './Footer';

const App = () => {

    const IMG_URL = `${process.env.PUBLIC_URL}/images/logo.png`;
    const FACEBOOK_LINK = "https://www.facebook.com/udrugamerida/";

    const SOCIAL = [
        {
            title: 'facebook',
            link: FACEBOOK_LINK
        }
    ]

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
            <Footer social={SOCIAL} />
        </Router>
    )
};

export default App;