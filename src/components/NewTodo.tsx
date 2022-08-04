import { useRef, useContext } from "react";
import { TodosContext } from "../store/todos-context";
import classes from "./NewTodo.module.css";
const NewTodo: React.FC = () => {
    const todoCtx = useContext(TodosContext);
    const todoNameRef = useRef<HTMLInputElement>(null);
    const submitHandler = (e: React.FormEvent) => {
        e.preventDefault();
        const todoName = todoNameRef.current?.value;
        if (todoName?.trim().length === 0) {
            return;
        }
        todoCtx.addNewTodo(todoName!);
    }

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <label htmlFor="text">Todo name</label>
            <input type="text" id="new-todo" ref={todoNameRef} />
            <button type="submit">Add</button>
        </form>)
}

export default NewTodo;