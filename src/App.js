import { Route, Routes, BrowserRouter } from 'react-router-dom';
import NavBar from './components/NavBar';
import Details from './pages/Details';
import Home from './pages/Home';

function App() {
  return (
    <>
      <div className="content">
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/country/:countryName" element={<Details />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
