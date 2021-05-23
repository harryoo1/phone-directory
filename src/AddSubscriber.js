import React, {Component} from 'react';
import Header from './Header';
import './addSubscriber.css';
import {Link} from 'react-router-dom';

class AddSubscriber extends Component{
    constructor() {
        super();
        this.state = {
            id: 0,
            name: '',
            phone: ''
        }
    }
    inputChangedHandler = (e) => {
        const state = this.state;
        state[e.target.name] = e.target.value;
        this.setState(state);
    }

    onFormSubmitted = (e) => {
        e.preventDefault();
        this.props.addSubscriberHandler(this.state);
        this.setState({id: 0, name: '', phone: ''});
        this.props.history.push('/');
    }

    render(){
        const {name, phone} = this.state;
        return(
            <div>
                <Header heading="Add Subscriber"/>
                <div className="component-body-container">
                    <Link to='/'><button className="custom-btn back-btn">Back</button></Link>
                    <form className="subscriber-form" onSubmit={this.onFormSubmitted.bind(this)}>
                        <label htmlFor="name" className="label-control">Name :</label><br/>
                        <input type="text" id="name" className="input-control" name="name" onChange={this.inputChangedHandler}/><br/><br/>
                        <label htmlFor="phone" className="label-control">Phone :</label><br/>
                        <input type="text" id="phone" className="input-control" name="phone" onChange={this.inputChangedHandler}/><br/><br/>
                        <div className="subscriber-info-container">
                            <span className="subscriber-to-add-heading">Subscriber to be added : </span><br/>
                            <span className="subscriber-info">Name : {name}</span><br/>
                            <span className="subscriber-info">Phone : {phone}</span>
                        </div>
                        <button className="custom-btn add-btn add-btn1">Add</button>
                    </form>
                </div>
            </div>
        )
    }
}
export default AddSubscriber;