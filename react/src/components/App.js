import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";

import {URLS} from "../util/constants";
import Question1 from "./Question1";
import Home from "./Home";
import Question2 from "./Question2";
import Question5 from "./Question5";
import Question5Detail from "./Question5Detail";

class App extends React.Component {

    render() {

        return (
            <Router>
                <Route component={Home} path={URLS.HOME} exact/>
                <Route component={Question1} path={URLS.QUESTION_1} exact/>
                <Route component={Question2} path={URLS.QUESTION_2} exact/>
                <Route component={Question5} path={URLS.QUESTION_5} exact/>
                <Route component={Question5Detail} path={URLS.QUESTION_5_DETAIL} exact/>
            </Router>
        );
    }
}

export default App;
