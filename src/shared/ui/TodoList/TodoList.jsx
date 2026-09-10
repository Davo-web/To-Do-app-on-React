import { useContext } from "react";
import TodoItem from "../TodoItem/TodoItem.js"
import { TasksContext } from "../../model/TaskContext.jsx";

const TodoList = (props) => {
    const { styles } = props

    const {
        tasks,
        filteredTasks,
    } = useContext(TasksContext)


    const hasTasks = tasks.length > 0;
    const isEmptyFilteredTasks = filteredTasks?.length === 0
    
    if (!hasTasks) {
        return (
            <div className={styles.emptyMessage}>There are not tasks yet</div>
        )
    }

    if (isEmptyFilteredTasks && hasTasks) {
        return (
            <div className={styles.emptyMessage}>Tasks not found</div>
        )
    }

    return (
        <ul className={styles.list}>
            {(filteredTasks ?? tasks).map(task => (
                <TodoItem
                    {...task}
                    className = {styles.item}
                    key = {task.id}
                />
            ))}
        </ul>
    )
}

export default TodoList