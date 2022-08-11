// import { Box } from './Box';
import { GlobalStyle } from './GlobalStyle';
import { Box } from './Box';
import TodoList from './TodoList';
import { Component } from 'react';
import initialTodos from './todos.json';

class App extends Component {
  state = {
    todos: initialTodos,
  };

  deleteTodo = (todoId) => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }))
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

