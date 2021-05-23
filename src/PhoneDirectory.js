import React, {Component} from 'react';
import AddSubscriber from './AddSubscriber';
import ShowSubscribers from './ShowSubscribers';
import {BrowserRouter as Router, Route} from 'react-router-dom';

class PhoneDirectory extends Component{

    constructor(){
        super();
        this.state = {
            userList: [
                {
                    id: 1,
                    name: "Harish",
                    phone: "8218610553"
                },
                {
                    id: 2,
                    name: "Golu",
                    phone: "8954113521"
                }
            ]
        }
    }

    addSubscriberHandler = (newUser) =>{
        let userList = this.state.userList;
        if(userList.length > 0){
            newUser.id = userList[userList.length - 1].id + 1;
        }
        else{
            newUser.id = 1;
        }
        userList.push(newUser);
        this.setState({userList: userList});
    }

    render() {
        return(
            //<AddSubscriber addSubscriberHandler={this.addSubscriberHandler}/>
            //<ShowSubscribers userList={this.state.userList}/>
            <Router>
                <div>
                <Route exact path='/' render={(props) => <ShowSubscribers {...props} userList={this.state.userList}/>}/>
                <Route exact path='/addSubscriber' render={({history}, props) => <AddSubscriber history={history} {...props} addSubscriberHandler={this.addSubscriberHandler}/>}/>
                </div>
            </Router>
        )
    }
}
export default PhoneDirectory;