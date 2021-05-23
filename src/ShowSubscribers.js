import React, { Component } from 'react';
import Header from "./Header";
import "./showSubscribers.css";
import {Link} from 'react-router-dom';

// let users = [
//       {
//         id: 1,
//         name: "Shilpa",
//         phone: "8888888888"
//       },
//       {
//         id: 2,
//         name: "Shrishti",
//         phone: "9999999999"
//       }
//     ];

class ShowSubscribers extends Component {

  render() {  
    return (
      <div>
        <Header heading="Phone Directory"/>
        <div className="component-body-container">
          <Link to='/addSubscriber'><button className="custom-btn add-btn">Add</button></Link>

          <div className="grid-container heading-container">
            <span className="grid-item name-heading">Name</span>
            <span className="grid-item phone-heading">Phone</span>
          </div>
          {
            this.props.userList.map(sub => {
              return <div key={sub.id} className="grid-container">
                  <span className="grid-item">{sub.name}</span>
                  <span className="grid-item">{sub.phone}</span>
                  <button className="custom-btn delete-btn">Delete</button>
               </div>
            })
          }
        </div>
      </div>
    );
  }
}
export default ShowSubscribers; 