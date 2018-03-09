import React, {Component} from 'react';

class DateComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            date: new Date()
        };
    }

    componentDidMount() {
        this.timerId = window.setInterval(this.updateDate.bind(this), 1000);
    }

    componentWillUnmount() {
        window.clearInterval(this.timerId);
    }

    updateDate() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        const dateStr = this.state.date.toString();
        return <time>{dateStr}</time>;
    }
}

export default DateComponent;