import {BrowserRouter,Routes,Route} from "react-router-dom"
import Login from "./component/Forms/Login";
import HomePage from "./component/HomePage/HomePage";
import Register from "./component/Forms/Register";
import Navbar from "./component/Navbar/Navbar";
import AddTransaction from "./component/Forms/AddTransaction";

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      {/* path is called prop which is same as attribute. */}
    <Route path="/login" element={<Login/>}/>
    <Route path="/homepage" element={<HomePage/>}/>
    <Route path="/register" element={<Register/>}/>
    <Route path="/add-transaction" element={<AddTransaction/>}/>
      </Routes> 
    
    </BrowserRouter>
  );
}

export default App;