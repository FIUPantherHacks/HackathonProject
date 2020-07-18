import React from 'react';
import MainPage from './Components/MainPage/MainPage'
import Statistics from './Components/Statistics/'
import Health from './Components/Health/Health'

import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Header from "./Components/Header/Header";




export default function App() {
  
  return (
    <div>
        <Router>
            {/*Routing is done here */}
            <Switch>
                <Route path="/header">
                    <Header/>
                </Route>
                <Route path="/health">
                    <Health/>
                </Route>
                <Route path="/statistics">
                    <Statistics/>
                </Route>
                <Route path="/">
                    <MainPage />
                </Route>
            </Switch>
        </Router>
    </div>
  );
}
