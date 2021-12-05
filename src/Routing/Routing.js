import React from "react";
import { Route, Switch } from 'react-router';
import HomePage from '../Pages/HomePage/HomePage'




const Routing = () => {
    return (
        <Switch>
            <Route path='/' component={HomePage} exact />
            {/* <Route path='/aboutUs' component={AboutUsPage} />
            <Route path='/services' component={ServicesPage} exact/>
            <Route path='/services/:id' component = {ServicesPage} />
            <Route path='/contact' component={ContactPage} /> */}

        </Switch>
    )

}

export default Routing;