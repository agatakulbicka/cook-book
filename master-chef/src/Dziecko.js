import React, {Component} from 'react';

class Dziecko extends Component {

    constructor(props) {
        super(props);

        this.state = {
            valueFromParent: Number(props.inputValue)
        };

        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }

    increment() {
        this.setState({
            valueFromParent: (Number(this.state.valueFromParent) + 1)
        })
    }

    decrement() {
        this.setState({
            valueFromParent: (Number(this.state.valueFromParent) - 1)
        })
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.inputValue !== this.state.valueFromParent) {
            this.setState({
                valueFromParent: Number(nextProps.inputValue)
            })
        }
    }

    render() {
        return (
            <div>
                <button onClick={this.increment}>+</button>
                <output>{this.state.valueFromParent}</output>
                <button onClick={this.decrement}>-</button>
            </div>
        )
    }
}

export default Dziecko;