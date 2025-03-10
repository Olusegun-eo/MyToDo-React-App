import React, {Component} from 'react';
import Todos from './Todos';
import AddTodo from './AddTodo';


class App extends Component {
  state = {
    todos: [
      {id: 1, content: 'code a little more'},
      {id: 2, content: 'read, pray some more'}
    ]
  }
  deleteTodo = (id) => {
    // console.log(id);
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id;
    });
    this.setState({
      todos
    })
  }
  addTodo = (todo) =>{
    todo.id = Math.random();
    // console.log(this.state);
    let todos = [...this.state.todos, todo];
    this.setState({
      todos
    })
  }
  render () {
    return (
      <div className="todo-app container">
      <h1 className="center blue-text">Todo's</h1>
       <Todos deleteTodo={this.deleteTodo} todos={this.state.todos}/>
       <AddTodo addTodo={this.addTodo}/>
      </div>
    );
  }

}
export default App;
