import React, { Component } from 'react';
import './Styles/styles.css';
import Header from './Components/Header';
import TodoList from './Components/Todo';
import Submit from './Components/Submit';


import {Container, Row, Col} from 'reactstrap';


class App extends Component {
  state = {
    tasks: ['strawberries', 'oranges', 'grapes']
  
};


handleSubmit = task => {
  this.setState({tasks: [...this.state.tasks, task]});
};
handleDelete = (index) => {
  const newArr= [...this.state.tasks];
  newArr.splice(index, 1);
  this.setStare({tasks: newArr});
}

render() {
  return(
    <>
    <Container>
      <Row>
        <Col md="10">
          <div></div>
        </Col>

        <Col md="2">
        

        </Col>
      </Row>
    </Container>

    <div className='wrapper'>
      <div className='card frame'>
        <Header numTodos={this.state.tasks.length} />
        <TodoList tasks={this.state.tasks} onDelete={this.handleDelete} />
        <Submit onFormSubmit={this.handleSubmit} />



      </div>
    </div>
    </>
  );
  }
}


export default App;
