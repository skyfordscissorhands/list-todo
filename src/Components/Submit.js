import React, { Component } from 'react'
//we are passing state
// whenever we change teh state of the comonent we need a class extends component
 
 class Submit extends Component {
   state = { term: '' };
    handleSubmit = (e) => {
     e.preventDefault();
     if(this.state.term === '') return;
     this.props.onFormSubmit(this.state.term);
     this.setState({ term: '' });
   }
    render() {
     return(
       <>
       <form onSubmit={this.handleSubmit}>
         <input
           type='text'
           className='input'
           placeholder='Enter Item'
           value={this.state.term}
           //changes are rendered through React not the browser
           onChange={(e) => this.setState({term: e.target.value})}
         />
         <button className='button'>Submit</button>
       </form>
    
      
       </>
     );
   }
 }
export default Submit;
