
import React, { useState } from "react";
import Todo from "../models/todo";
type TodosContextType = {
    todos: Todo[];
    removeTodoItem: (id: string) => void;
    addNewTodo: (todoText: string) => void;
}
interface TodosContextProps {
    children: React.ReactNode;
}

export const TodosContext = React.createContext<TodosContextType>({
    todos: [],
    removeTodoItem: () => { },
    addNewTodo: (todoText: string) => { }

})

const TodosContextProvider: React.FC<TodosContextProps> = (props) => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const addNewTodoHandler = (todoName: string) => {
        setTodos((prevTodos) => {
            return prevTodos.concat(new Todo(todoName));
        });
    }

    const removeTodoItemHandler = (todoId: string) => {
        setTodos((prevTodos) => {
            return prevTodos.filter(todo => todo.id !== todoId);
        }
        );
    }

    const contextValue: TodosContextType = {
        todos,
        removeTodoItem: removeTodoItemHandler,
        addNewTodo: addNewTodoHandler
    }
    return (
        <TodosContext.Provider value={contextValue}>
           {props.children}
        </TodosContext.Provider>
    )
}

export default TodosContextProvider;