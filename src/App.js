import { Route, Routes } from 'react-router-dom';
import './App.css';
import Details from './component/Details';
import Home from './component/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
        <Route
          path="*"
          element={<h3>Page Not Found!</h3>}
        />
      </Routes>
    </div>
  );
}

export default App;
