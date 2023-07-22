import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './Layout/Layout';
import User from './Components/User/User';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout/>} >
        <Route path='/user' element={<User/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
