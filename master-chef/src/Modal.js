import React, {Component} from 'react';

class Modal extends Component{
    render() {
        return (
            <div>
                <dialog open>
                    <h1>{this.props.title}</h1>
                    <p>{this.props.content}</p>
                </dialog>
            </div>
        );
    }
}

export default Modal;