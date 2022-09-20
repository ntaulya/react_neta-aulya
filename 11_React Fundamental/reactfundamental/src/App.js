import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

function App() {
  const datatodos = [
  {
    id: 1,
    name: "Membuat Komponen",
    completed: false,
  },
  {
    id: 2,
    name: "Unit Testing",
    completed: false,
  },
  {
    id: 3,
    name: "Setup Development Environment",
    completed: true,
  },
  {
    id: 4,
    name: "Deploy ke Server",
    completed: false,
  }
]

  
  return (
      <div className="Todo">
        <div className='ms-2'>
          <h4>To Do App</h4>
        </div>
        <hr />
        <div className="List">
          {/* <button type="button" className="btn btn-outline-dark" id="btn1">Membuat Komponen</button><br></br>
          <button type="button" className="btn btn-outline-dark" id="btn2">Unit Testing</button><br></br>
          <button type="button" className="btn btn-outline-dark" id="btn3">Setup Development Environment</button><br></br>
          <button type="button" className="btn btn-outline-dark" id="btn4">Deploy ke Server</button><br></br> */}
          { datatodos.length !== 0 ? (
            datatodos.map (datatodos => {
              const {id, name, completed} = datatodos;
              return(
                <p key={id} className={completed? 'not-completed' : 'completed'}>{name}</p>
              )
            })
          ) : (
            <p>Now loading</p>
          )}
          
        </div>
      </div>
  );
}

export default App;
