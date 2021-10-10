import React from 'react';
import {connect} from "react-redux";

import {clearWeather, getWeather} from "../redux/actions/mainAction";

class Question5Detail extends React.Component {

    componentDidMount() {
        const code = this.props.match.params.code;
        this.props.clear();
        this.props.getWeather(code);
    }

    render() {
        const response = this.props.response;
        if(!response){
            return  <div>Loading...</div>
        }

        const data = response.consolidated_weather;

        return (
            <div className="mainContainer">
                <h1>
                    title: {response.title}
                </h1>
                <ol>
                    {data.map(item =>{
                        return (
                            <li key={item.id}>
                                <div className="itemContainer">
                                    <div className="contentContainer">
                                        <h4>
                                            date: {item.applicable_date}
                                        </h4>
                                        <h4>
                                            weather: {item.weather_state_name}
                                        </h4>
                                        <h4>
                                            humidity: {item.humidity}
                                        </h4>
                                    </div>
                                </div>
                            </li>
                        );
                    })}
                </ol>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        response: state.main.cityWeatherResponse,
    };
}

const mapDispatchToProps = {
    getWeather: getWeather,
    clear: clearWeather,
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Question5Detail);
