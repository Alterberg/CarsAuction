import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from "./home/HomePage";
import AboutPage from "./about/AboutPage";
import Header from "./common/Header";
import PageNotFound from "./PageNotFound";
import CarsPage from "./cars/CarsPage";
import ManageCarsPage from "./cars/ManageCarsPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
    return (
        <div className="container-fluid">
            <Header />
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/cars" component={CarsPage} />
                <Route path="/about" component={AboutPage} />
                <Route path="/car/:slug" component={ManageCarsPage} />
                <Route path="/car" component={ManageCarsPage} />
                <Route component={PageNotFound} />
            </Switch>
           <ToastContainer autoClose={3000} hideProgressBar />
        </div>
    )
}

export default App;