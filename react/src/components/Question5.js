import React from 'react';
import {connect} from "react-redux";
import {Link} from "react-router-dom";

import {clear, searchCity} from "../redux/actions/mainAction";
import {URLS} from "../util/constants";

class Question5 extends React.Component {

    componentDidMount() {
        if(!this.props.response){
            this.props.searchCity('a');
        }
    }

    search = (cityName) => {
        this.props.searchCity(cityName);
    }

    renderItems = () => {
        if (!this.props.response) {
            return <div></div>;
        }

        return this.props.response.map((item, index) => {
            const url = URLS.QUESTION_5_DETAIL.replace(":code", item.woeid);
            return (
                <li key={index}>
                    <Link to={url}>
                        {item.title}
                    </Link>
                </li>
            );
        });
    }

    render() {

        return (
            <div className="mainContainer">
                <div className="inputContainer">
                    <input
                        placeholder="Enter city name here"
                        onKeyPress={event => {
                            if (event.code === "Enter") {
                                this.search(event.target.value);
                            }
                        }}/>
                </div>

                <ol>
                    {this.renderItems()}
                </ol>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        response: state.main.cityListResponse,
    };
}

const mapDispatchToProps = {
    searchCity: searchCity,
    clearList: clear
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Question5);
