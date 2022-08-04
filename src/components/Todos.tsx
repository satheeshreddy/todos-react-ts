import { useContext } from "react";
import { TodosContext } from "../store/todos-context";
import TodoItem from "./TodoItem";
import classes from "./Todos.module.css";

const Todos: React.FC = () => {
    const { todos, removeTodoItem } = useContext(TodosContext);
    return (
        <ul className={classes.todos}>
            {
                todos.map(todo => {
                    return <TodoItem key={todo.id} todoText={todo.text} removeTodoItem={removeTodoItem.bind(null, todo.id)} />
                })
            }
        </ul>
    )
}

export default Todos;