import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import injectContext from "./store/appContext";

import "./styles/App.css";
import { Home } from "./pages/home"
import { NavigationBar } from "./component/navigationbar";
import { Footer } from "./component/footer";


const Layout = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";

    return (
        <BrowserRouter basename={basename}>
            <ScrollToTop>
                <NavigationBar />
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    {/* <Route exact path="/characters/:uid">
                        <Character id="uid" />
                    </Route>
                    <Route exact path="/vehicles/:uid">
                        <Vehicle id="uid" />
                    </Route>
                    <Route exact path="/planets/:uid">
                        <Planet id="uid" />
                    </Route> */}
                </Switch>
                <Footer />
            </ScrollToTop>
        </BrowserRouter>
    );
};

export default injectContext(Layout);
