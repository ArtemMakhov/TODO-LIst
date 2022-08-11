import {Todo, Button, ListItem, Text } from "./TodoList.styled";


const TodoList = ({ todos ,onDeleteTodo}) => (
    <Todo>
        {todos.map(({ id, text }) => (
        <ListItem key={id}>
            <Text>{text}</Text>
            <Button onClick={()=> onDeleteTodo(id)}>Удалить</Button>
        </ListItem>
        ))}
    </Todo>
);


export default TodoList;