import React, { Component } from 'react'

const additem=[];
export default class Cart extends Component {
    constructor(props){
        super(props);
         
        this.state={
            additem,
        }
    }
    addItem =()=>{
        // let addItem = [...this.state.additem];
        this.state.additem.push(this.props.item);
       this.setState({})
    }
    render() {
        console.log(this.state.additem)
        return (
            <div>
             <button onClick={this.addItem}>Add To Cart</button>   
            </div>
        )
      
    }

}
