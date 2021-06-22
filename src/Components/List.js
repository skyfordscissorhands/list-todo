import React from "react";
import "./Styles/styles.css";
 
// whenever we try yo render an array containing JSX,
function List(props) {
 return (
   <ul className="list-group">
     {props.groceries.map((item) => (
       <li className="list-group-item" key={item.id}>
           {/* key = keywrd assigns index to each array item */}
           {/* .map needs to include a key */}
         {item.name}
       </li>
     ))}
   </ul>
 );
}
 
export default List;
