
import { List,Item, Text } from './TodoList.styled';


const TodoList = ({ todos, onDeleteTodo }) =>
    <List>
        {todos.map(({ id, text }) => (
    <Item key={id}>
        <Text>{text}</Text>
        <button onClick={()=> onDeleteTodo(id)}>delete</button>
    </Item>
        ))}
    </List>;

export default TodoList;