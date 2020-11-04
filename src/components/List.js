import React, { Component } from "react";
import Dropdown from "./Dropdown";
import Cart from "./Cart";


export default class List extends Component {
 

  render() {
    const dishes = [
      { id:1, name: "Plain Paratha and Yogurt", price: 40, addons: ["Extra sauce"] },
      {id:2,
        name: "Aalo Paratha",
        price: 50,
        addons: ["Extra Sauce", "Yogurt", "Cheese"],
      },
      {id:3,
        name: "Veg Paratha",
        price: 50,
        addons: ["Corn","Cabbage", "Fenugreek", "Cheese"],
      },
      {id:4,
        name: "Double Cheese Paratha",
        price: 70,
        addons: ["Extra sauce", "Yogurt", "Corn"],
      },
      {id:5,
        name: "Corn Cheese Paratha",
        price: 80,
        addons: ["Extra Sauce", "Yogurt", "Cheese"],
      },
    ];
    return (
      <div>
        <div>
        <table>
          <tr>
            <th>Dishes</th>
            <th>Price</th>
            <th>Available Addons</th>
          </tr>

          {dishes.map((dish) => {
            return (
              <tr>
                <td key={dish.id}>{dish.name}</td>
                <td key={dish.id}>{dish.price}</td>
                <td>
                  <Dropdown data={dish.addons} />
                </td>
                <td>
                  <Cart item={dish}></Cart>
                </td>
              </tr>
            );
          })}
        </table>
        </div>
       
      </div>
    );
  }
}
