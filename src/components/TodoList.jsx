import { useContext } from "react";
import TodoItem from "./TodoItem"
import { TasksContext } from "../context/TaskContext.jsx";

const TodoList = () => {
    const {
        tasks,
        filteredTasks,
    } = useContext(TasksContext)


    const hasTasks = tasks.length > 0;
    const isEmptyFilteredTasks = filteredTasks?.length === 0
    
    if (!hasTasks) {
        return (
            <div className="todo__empty-message">There are not tasks yet</div>
        )
    }

    if (isEmptyFilteredTasks && hasTasks) {
        return (
            <div className="todo__empty-message">Tasks not found</div>
        )
    }

    return (
        <ul className="todo__list">
            {(filteredTasks ?? tasks).map(task => (
                <TodoItem
                    {...task}
                    className = 'todo__item'
                    key = {task.id}
                />
            ))}
        </ul>
    )
}

export default TodoList