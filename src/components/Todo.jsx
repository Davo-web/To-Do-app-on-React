import AddTaskForm from "./AddTaskForn"
import SearchTaskForm from "./SearchTaskForm"
import TodoInfo from "./TodoInfo"
import TodoList from "./TodoList"

const Todo = () => {
    const tasks = [
        {id: 'task-1', title: "Win ufc champion belt", isDone: false},
        {id: 'task-2', title: "Sleep", isDone: true},
    ]

    const deleteAllTasks = () => {
        console.log('delete all tasks')
    }

    const deleteTask = (taskId) => {
        console.log(`delete task with id: ${taskId}`)
    }

    const toggleTaskComplete = (taskId, isDone) => {
        console.log(`task with id: ${taskId} ${isDone ? 'done' : 'undone'}`)
    }

    const filterTasks = (query) => {
        console.log(`searching: ${query}`)
    }

    const addTask = () => {
        console.log('task added')
    }

    return (
        <div className="todo">
            <h1 className="todo__title">To Do List</h1>
            <AddTaskForm
                addTask = {addTask}
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