import React from 'react';
import {connect} from "react-redux";
import {searchCity} from "../redux/actions/mainAction";
import {Link} from "react-router-dom";
import {URLS} from "../util/constants";

class Question5 extends React.Component {

    componentDidMount() {
        this.props.searchCity('a');
    }

    search = (cityName) => {
        this.props.searchCity(cityName);
    }

    renderItems = () => {
        if (!this.props.response) {
            return <div></div>;
        }

        return this.props.response.map((item, index) => {
            const url = URLS.QUESTION_5_DETAIL.replace(":id", item.woeid);
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
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Question5);
