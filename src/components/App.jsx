import { Component } from "react";
// import { GlobalStyle } from './GlobalStyle';
// import { Box } from './Box';
import TodoList from "./TodoList";
import initialTodos from './todos.json';

class App extends Component {
    state = {
        todos: initialTodos,
    };

    deleteTodo = (todoId) => {
        this.setState(prevState => ({
            todos: prevState.todos.filter(todo => todo.id !== todoId),
        }));
    };

    render() {
        const { todos } = this.state;

        const totalTodoCount = todos.length;
        const completedTodos = todos.reduce((acc, todo) => (todo.completed ? acc +1 : acc),0);

        return (
            <>
                
                <div>
                    <p>Общее кол-во:{totalTodoCount}</p>
                    <p>Кол-во выполненных:{completedTodos}</p>
                </div>
                <TodoList todos={todos} onDeleteTodo={this.deleteTodo} />
            </>
        );
    };
}




export default App;