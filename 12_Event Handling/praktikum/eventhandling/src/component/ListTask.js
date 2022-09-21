const ListTask = (props) => {
    const {data} = props
    
    return (
        <div class="container">
            <h5 class="title text-center">todos</h5>
            <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="Add todo..." />
                    <button class="input-group-text" id="basic-addon2">Submit</button>
            </div>

            <div class="input-group mb-3">
                <div class="input-group-text">
                    <input class="form-check-input mt-0" type="checkbox" value="" aria-label="Checkbox for following text input" />
                </div>  
                { data.map ((ListTask => 
                    
                    <p key={ListTask.id} className={ListTask.completed? 'not-completed' : 'completed'}>{ListTask.name}</p>
                ))}
                <button class="input-group-text" id="basic-addon2">Delete</button>
            </div>

            <div class="input-group mb-3">
                <div class="input-group-text">
                    <input class="form-check-input mt-0" type="checkbox" value="" aria-label="Checkbox for following text input" />
                </div>
                { data.map ((ListTask => 
                    <p key={ListTask.id} className={ListTask.completed? 'not-completed' : 'completed'}>{ListTask.name}</p>
                ))}
                <button class="input-group-text" id="basic-addon2">Delete</button>
            </div>
        </div>
    )
}

export default ListTask