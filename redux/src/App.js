
import './App.css';
import { Routes, Route } from 'react-router-dom'
import { Redux, Middle } from './pages'

function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Redux/>} />
        <Route path='/middle' element={<Middle/>} />
      </Routes>
    </div>
  );
}

export default App;
