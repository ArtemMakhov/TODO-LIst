// import { Box } from './Box';
import { GlobalStyle } from './GlobalStyle';
import { Box } from './Box';
import TodoList from './TodoList';
import { Component } from 'react';
import initialTodos from './todos.json';

class App extends Component {
  state = {
    todos: initialTodos,
    name: '',
    tag:'',
  };

  deleteTodo = (todoId) => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }))
  }

  hendleChange = event => {
    const { name, value } = event.currentTarget;

    this.setState({
      [name]: value,
    })
  }
  
  render() {
    const { todos } = this.state;

    const totalTodoCount = todos.length;
    const completedTodosCount = todos.reduce(
      (total, todo) => (todo.completed ? total + 1 : total),
      0,
    );

   
    
    return (
<>
        <Box>
          <form>
            <label>
              Name <input type="text" name='name' value={this.state.name} onChange={this.hendleChange} />
            </label>
            <label>
              Tag <input type="text" name='tag' value={this.state.tag} onChange={this.hendleChange} />
            </label>
          </form>
          <div>
            <p>Общее кол-во:{ totalTodoCount}</p>
            <p>Кол-во выполненых:{completedTodosCount}</p>
          </div>
      <TodoList todos={todos} onDeleteTodo={this.deleteTodo} />  
  </Box>
  <GlobalStyle/>
</>
     );
  }
}


export default App;

