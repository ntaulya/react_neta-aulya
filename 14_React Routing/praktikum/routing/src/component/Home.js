import React from 'react';
import ListTask from './ListTask';
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

export default function Home() {
    const [listTask, setListTask] = useState(initialValue)

    const hapusTask = (id) => {
        const newTask = listTask.filter((item) => item.id !== id)
        console.log(id);
        setListTask (newTask)
    }

    const tambahTask = (title) => {
        let id = initialValue[initialValue.length-1].id + 1
        let completed = false;
        const newTodo = {id, ...title, completed}
        setListTask ([...listTask, newTodo])
    }
    
    return (
        <div>
            <ListTask initialValue={listTask} tambahTask={tambahTask} hapusTask={hapusTask} />
        </div>
    );
}