import React, {Component} from 'react';
import ProductBook from './Products/ProductBook';
import './App.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
            allCounter: 0,
            dateVisible: true
        };
    }

    increment() {
        this.incrementAll();
        this.setState({
            counter: this.state.counter + 1
        })
    }

    decrement() {
        this.incrementAll();
        this.setState({
            counter: this.state.counter - 1
        })
    }

    incrementAll() {
        this.setState({
            allCounter: this.state.allCounter + 1
        })
    }

    onButtonClick() {
        this.setState(state => ({ dateVisible: !state.dateVisible }));
    }


    render() {
        return (
            <div >
               {/* <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.13/semantic.min.css" />
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>

                <Modal title="siema" content="dodałem propsy" niematakiego="sdfs"/>

                <div>
                    <AppHeader />
                    <main className="ui main text container">
                        <ContactsList />
                    </main>
                </div>

                <div>
                    <button onClick={this.increment.bind(this)}>+</button>
                    <output>{this.state.counter}</output>
                    <button onClick={this.decrement.bind(this)}>-</button>

                    <output>{this.state.allCounter}</output>


                    <button onClick={this.onButtonClick.bind(this)}>Kliknij</button>
                    {this.state.dateVisible && <DateComponent />}
                </div>
                */}

                {/*<Rodzic/>*/}

                <ProductBook />
            </div>
        );
    }
}

function AppHeader() {
    return (
        <header className="ui fixed menu">
            <nav className="ui container">
                <a href="#" className="header item">
                    <img
                        className="logo"
                        src="https://typeofweb.com/wp-content/uploads/2017/08/cropped-typeofweb_logo-04-white-smaller-1-e1504359870362.png"
                    />
                    Lista kontaktów
                </a>
                <div className="header item">
                    <button className="ui button">Dodaj</button>
                </div>
            </nav>
        </header>
    );
}

function ContactsList() {
    return (
        <ul className="ui relaxed divided list selection">
            <ContactItem
                login="typeofweb1"
                name="Lena"
                department="JavaScript Developer"
            />
            <ContactItem
                login="typeofweb2"
                name="Brian"
                department="Human Resources"
            />
            <ContactItem
                login="typeofweb3"
                name="Rick"
                department="QA"
            />
        </ul>
    );
}

function ContactItem({ login, name, department }) {
    const imgUrl = `https://api.adorable.io/avatars/55/${login}.png`;

    return (
        <li className="item">
            <img
                src={imgUrl}
                className="ui mini rounded image"
            />
            <div className="content">
                <h4 className="header">{name}</h4>
                <div className="description">{department}</div>
            </div>
        </li>
    );
}

export default App;





