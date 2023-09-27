
import Create from './create';
import Navbar from './Navbar';

import Home from './Home';


import{BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import BlogDetails from './BlogDetails';


function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <div className="content">
        <Routes>
          <Route path="/"  element ={<Home/>}/>
          <Route path="/create"  element ={<Create/>}/>
          <Route path="/BlogDetails/:id" element={<BlogDetails/>}/>
        </Routes>
  

      </div>
    </div>
    </Router>
  );
}

export default App;
