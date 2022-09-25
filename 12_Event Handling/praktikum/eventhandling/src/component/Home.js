import React from 'react';
import ListTask from './ListTask';

class Home extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            data : [
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
        }
    }

    hapusTask = (id) => {
        const newTask = this.state.data.filter((item) => item.id !== id)
        console.log(id);
        this.setState ({data : newTask})
    }

    tambahTask = (title) => {
        let id = this.state.data[this.state.data.length-1].id + 1
        let completed = false;
        const newTodo = {id, ...title, completed}
        this.setState({data: [...this.state.data, newTodo]})
    }

    render () {
        return (
            <div>
                <ListTask data={this.state.data} tambahTask={this.tambahTask} hapusTask={this.hapusTask}/>
            </div>
        )
    }
}

export default Home