import { createContext } from "react";
import useTasks from "./useTasks";
import useIncompleteTaskScroll from "./useIcompleteTaskScroll";

export const TasksContext = createContext({})

export const TaskProvider = (props) => {
    const { children } = props

    const {
        tasks,
        filteredTasks,
        deleteAllTasks,
        deleteTask,
        toggleTaskComplete,
        newTaskTitle,
        setNewTaskTitle,
        searchQuery, 
        setSearchQuery,
        newTaskInputRef,
        addTask,
        disappearingTaskId,
        appearingTaskId,
    } = useTasks()

    const {
        firstIncompleteTaskRef,
        firstIncompleteTaskId,
    } = useIncompleteTaskScroll(tasks)


    return (
        <TasksContext.Provider
            value={{
                tasks,
                filteredTasks,
                firstIncompleteTaskRef,
                firstIncompleteTaskId,
                deleteAllTasks,
                deleteTask,
                toggleTaskComplete,

                newTaskTitle,
                setNewTaskTitle,
                searchQuery, 
                setSearchQuery,
                newTaskInputRef,
                addTask,
                disappearingTaskId,
                appearingTaskId,
            }}
        >
            {children}
        </TasksContext.Provider>
    )
}