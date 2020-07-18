import React from 'react';
import MainPage from './Components/MainPage/MainPage'
import Statistics from './Components/Statistics/'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";




export default function App() {
  
  return (
    <div>
        <Router>
            {/*Routing is done here */}
            <Switch>
                <Route path="/health">
                    <Statistics/>
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
