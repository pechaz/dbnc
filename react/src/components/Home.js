import React from 'react';
import {Link} from "react-router-dom";

import {URLS} from "../util/constants";


class Home extends React.Component {


    render() {
        return (
            <div className="mainContainer">
                <ol>
                    <li>
                        <Link to={URLS.QUESTION_1}>Question 1</Link>
                    </li>
                    <li>
                        <Link to={URLS.QUESTION_2}>Question 2</Link>
                    </li>
                    <li>
                        <Link to={URLS.QUESTION_5}>Question 5</Link>
                    </li>
                </ol>
            </div>
        );
    }
}

export default Home;
