import React, {Component} from 'react';
import Dziecko from "./Dziecko"

class Rodzic extends Component {

    constructor(props) {
        super(props);

        this.state = {
            inputValue: null,
            forwardValue: null
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(event) {
        this.setState({ inputValue: event.target.value });
    }

    handleClick() {
        this.setState({
            forwardValue: this.state.inputValue
        });
    }

    render() {
        return (
            <div>
                <input onChange={this.handleChange} type="number" />
                <button onClick={this.handleClick}>Propagate to child</button>
                {this.state.forwardValue && <Dziecko inputValue={this.state.forwardValue}/>}
            </div>
        )
    }
}

export default Rodzic;