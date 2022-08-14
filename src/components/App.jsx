// import { Box } from './Box';
import { GlobalStyle } from './GlobalStyle';
import { Box } from './Box';
// import TodoList from './TodoList';
import Form from './Form/Form';
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

  formSubmitHendler = data => {
    console.log(data);
  }

  
  render() {
    // const { todos } = this.state;

    // const totalTodoCount = todos.length;
    // const completedTodosCount = todos.reduce(
    //   (total, todo) => (todo.completed ? total + 1 : total),
    //   0,
    // );

   
    
    return (
<>
        <Box>
          <Form onSubmit={this.formSubmitHendler} />     
          {/* <div>
            <p>Общее кол-во:{ totalTodoCount}</p>
            <p>Кол-во выполненых:{completedTodosCount}</p>
          </div>
      <TodoList todos={todos} onDeleteTodo={this.deleteTodo} />   */}
  </Box>
  <GlobalStyle/>
</>
     );
  }
}


export default App;

