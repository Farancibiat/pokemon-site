import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import injectContext from "./store/appContext";

import ButtonTop from "./component/buttontop"
import "./styles/App.css";
import { Home } from "./pages/home"
import { Favorites } from "./pages/favorites"
import { NavigationBar } from "./component/navigationbar";
import { Footer } from "./component/footer";


const Layout = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";

    return (
        <BrowserRouter basename={basename}>
            <ScrollToTop>
                <div className="wrapper">
                <NavigationBar />
                
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/favoritos">
                        <Favorites/>
                    </Route>
                    
                </Switch>
                <div className="push"></div>
                <ButtonTop/>
                <Footer />
                </div>
            </ScrollToTop>
        </BrowserRouter>
    );
};

export default injectContext(Layout);
