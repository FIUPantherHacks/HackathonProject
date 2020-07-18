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
import Community from "./Components/Community";




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
                <Route path="/community">
                    <Community/>
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
