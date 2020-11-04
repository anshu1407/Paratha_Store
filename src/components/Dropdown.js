import React, { Component } from "react";

export default class Dropdown extends Component {
 

  render() {
    return (
      <div>
        <div>
         <select>
         {this.props.data.map((item,i)=>{return( <option key={i}>{item}</option>)})
            
           
         }
         </select>
        </div>
       
      </div>
    );
  }
}
