import { useState } from "react"

import AddTaskForm from "./AddTaskForn"
import SearchTaskForm from "./SearchTaskForm"
import TodoInfo from "./TodoInfo"
import TodoList from "./TodoList"

const Todo = () => {
    const [tasks, setTasks] = useState([
        {id: 'task-1', title: "Win ufc champion belt", isDone: false},
        {id: 'task-2', title: "Sleep", isDone: true},
    ]);

    const [newTaskTitle, setNewTaskTitle] = useState('')

    const deleteAllTasks = () => {
        const isConfirm = confirm('Are you sure you want to delete all tasks?')

        if (isConfirm) {
            setTasks([])
        }
    }

    const deleteTask = (taskId) => {
        setTasks(tasks.filter(task => task.id !== taskId))
    }

    const toggleTaskComplete = (taskId, isDone) => {
        setTasks(tasks.map(task => {
            if (task.id === taskId) {
                return {...task, isDone}
            }

            return task
        }))
    }

    const filterTasks = (query) => {
        console.log(`searching: ${query}`)
    }

    const addTask = () => {
        if(newTaskTitle.trim().length > 0) {
            const newTask = {
                id: crypto?.randomUUID() ?? Date.now().toString(),
                title: newTaskTitle,
                isDone: false,
            }

            setTasks([...tasks, newTask])
            setNewTaskTitle('')
        }
    }

    return (
        <div className="todo">
            <h1 className="todo__title">To Do List</h1>
            <AddTaskForm
                addTask = {addTask}
                newTaskTitle = {newTaskTitle}
                setNewTaskTitle = {setNewTaskTitle}
            />
            <SearchTaskForm
                onSearchInput = {filterTasks}
            />
            <TodoInfo
                total = {tasks.length}
                done = {tasks.filter(({isDone}) => isDone).length}
                onDeleteAllButtonClick = {deleteAllTasks}
            />
            <TodoList
                tasks={tasks}
                onDeleteTaskButtonClick = {deleteTask}
                onTaskCompleteChange = {toggleTaskComplete}
            />
        </div>
    )
}

export default Todo