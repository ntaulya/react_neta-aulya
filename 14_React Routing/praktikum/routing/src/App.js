import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import {Routes, Route} from 'react-router-dom';
import Home from './component/Home';
import AboutAuthor from './pages/AboutAuthor';
import AboutApp from './pages/AboutApp';

function App() {
    return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/AboutApp" element={<AboutApp />}></Route>
      <Route path="/AboutAuthor" element={<AboutAuthor />}></Route>
    </Routes>
  );


}

export default App;
