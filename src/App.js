import React, { Component } from 'react';
import Header from "./Header";
import "./App.css";

class App extends Component {

  render() {  
    let users = [
      {
        id: 1,
        name: "Shilpa",
        phone: "8888888888"
      },
      {
        id: 2,
        name: "Shrishti",
        phone: "9999999999"
      }
    ];
    return (
      <div>
        <Header/>
        <div className="component-body-container">
          <button className="custom-btn add-btn">Add</button>

          <div className="grid-container heading-container">
            <span className="grid-item name-heading">Name</span>
            <span className="grid-item phone-heading">Phone</span>
          </div>
          {
            users.map(sub => {
              return (
               <div key={sub.id} className="grid-container">
                  <span className="grid-item">{sub.name}</span>
                  <span className="grid-item">{sub.phone}</span>
                  <button className="custom-btn delete-btn">Delete</button>
               </div>
              )
            })
          }
        </div>
      </div>
    );
  }
}
export default App; 