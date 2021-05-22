import React from 'react';
//import React, { Component } from 'react';

 const Header = function(){
     
     const headerStyle = {
         textAlign: 'center',
         padding: 20,
         backgroundColor: 'black',
         color: 'white',
         textTransform: 'uppercase'
        };
     return(
         <div style={headerStyle}>
            Phone Directory
         </div>
     )
 }

// class Header extends Component {
//    render() {
//        return (
//            <div className="header">
//                Phone Directory
//            </div>
//        )
//    }
// }


export default Header;