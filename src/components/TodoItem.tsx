import classes from "./TodoItem.module.css";
const TodoItem: React.FC<{ todoText: string; removeTodoItem: () => void }> = (props) => {
    return (<li className={classes.item} onClick={props.removeTodoItem}>{props.todoText}</li>)
}

export default TodoItem;