import React from 'react';
 
function Header (props) {
   // js is coded above the return ket
   const name= "Sky";
   const date= new Date();
   const hours= date.getHours();
   const minutes= date.getMinutes();
 
   return (
      
<div className= "card-header">
<h1 className= "card-header-title header">You have {props.numTodos} Tasks to do</h1>
{/* passed through single curly brackets */}
<h2>Hello {name} It is currently {hours % 12} : {minutes}</h2>
</div>
    )
 
}
 
export default Header;
