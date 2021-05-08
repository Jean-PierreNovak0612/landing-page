import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Header from './Header'
import MainPage from './MainPage';
import Footer from './Footer';
import { IMG_URL, SOCIAL} from '../data';

import '../css/style.css';

const App = () => {

    return (
        <Router>
            <Header imageLogo={IMG_URL} textLogo={`Udruga za životinje "Merida"`} />
            <Switch>
                <Route path="/landing-page/" exact component={MainPage} />
            </Switch>
            <Footer className="bottom-position" social={SOCIAL} />
        </Router>
    )
};

export default App;