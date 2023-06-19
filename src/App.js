import Login from './pages/Login';
import Register from './pages/Register';
import {BrowserRouter,Route, Routes} from "react-router-dom";
import './styles/App.css';
import Main from './pages/Main';
import AddList from './pages/AddList';
import TaskPage from './pages/TaskPage';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/addList' element={<AddList />} />
          <Route path='/task' element={<TaskPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
