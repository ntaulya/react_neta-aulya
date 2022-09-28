import React from 'react';
// import ListTask from './ListTask';
import {useState} from 'react';

const initialValue = [
    {
        id: 1,
        title: "Mengerjakan Excercise",
        completed: true,
    },
    {
        id: 2,
        title: "Mengerjakan Assignment",
        completed: false,
    }
]

const Home = () => {
    const [ListTask, setListTask] = useState([initialValue])

    const hapusTask = (id) => {
        const newTask = ListTask.filter((item) => item.id !== id)
        console.log(id);
        setListTask (newTask)
    }

    const tambahTask = (title) => {
        let id = initialValue[initialValue.length-1].id + 1
        let completed = false;
        const newTodo = {id, ...title, completed}
        setListTask ([...ListTask, newTodo])
    }

    return (
        <div>
            <ListTask /* initialValue={initialValue} */ tambahTask={tambahTask} hapusTask={hapusTask}/>
        </div>
    )
}  

    

export default Home