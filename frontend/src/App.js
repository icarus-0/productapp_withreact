import Signin from "./Containers/Signin";
import Signup from "./Containers/Signup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Admin from "./Containers/Admin";
import Home from "./Containers/Home";
import Product from "./Containers/Product";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/signin" element={<Signin type="signin" />} />
          <Route exact path="/signup" element={<Signup type="signup" />} />
          <Route exact path="/dashboard" element={<Admin />} />
          <Route exact path="/product/:slug" element={<Product />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
