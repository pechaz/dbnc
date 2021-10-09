import React from 'react';

class Question2 extends React.Component {


    state = {
        result: ''
    }

    onChangeNumber = (event) =>{
        const input = parseInt(event.target.value);
        if(!input){
            return;
        }
        let result = input;

        if((input % 2) === 0){
            result = 'foo';
        }

        if((input % 7) === 0){
            result = 'bar';
        }

        if((input % 14) === 0){
            result = 'foobar';
        }

        this.setState({
            result: result
        })
    }

    render() {

        return (
            <div className="mainContainer">
                <div className="inputContainer">
                    <input
                        placeholder="Enter your number here"
                        onChange={this.onChangeNumber}/>
                </div>

                <ul>
                    <li>
                        {this.state.result}
                    </li>
                </ul>
            </div>
        );
    }
}

export default Question2;
