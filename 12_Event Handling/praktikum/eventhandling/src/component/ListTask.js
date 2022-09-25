import React, {useState} from "react";

const ListTask = (props) => {
    const {data, hapusTask} = props

    const [state, setState] = useState([{
        title: ""
    }])

    const onChange = (e) => {
        setState({
            [e.target.name] : e.target.value
        })
    }

    const submitTask = (e) => {
        e.preventDefault()
        if (state.title) {
            props.tambahTask({title:state.title})
            setState({
                title:""
            })
        }
        else {
            alert("tidak terinput")
        }
    }
    

    return (
        <div class="container">
            <h5 className="title text-center">todos</h5>
            <div className="input-group mb-3">
                <input type="text" onChange = {onChange} name="title" value={state.title} className="form-control" placeholder="Add todo..." />
                    <button className="input-group-text" id="basic-addon2" onClick={submitTask}>Submit</button>
            </div>

            { data.map ((ListTask => 
                <div className="input-group mb-3">
                    <div className="input-group-text">
                        <input className="form-check-input mt-0" type="checkbox" value="" aria-label="Checkbox for following text input" />
                    </div>  
                    <p key={ListTask.id} className={ListTask.completed? 'not-completed' : 'completed'}>{ListTask.title}</p>
                    <button className="input-group-text" id="basic-addon2" onClick={()=>{hapusTask(ListTask.id)}}>Delete</button>
                </div>
            ))}
        </div>
    )
}

export default ListTask