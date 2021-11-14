import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navigation/Navbar";
import ProtectedRoute from "./components/Navigation/ProtectedRoute";
import Home from "./pages/Home";
import Main from "./pages/Main";

import Login from "./pages/users/Login";
import Register from "./pages/users/Register";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <ProtectedRoute exact path="/profile" component={Main} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
