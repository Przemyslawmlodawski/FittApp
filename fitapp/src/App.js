import "./App.css";
import Navbar from "./components/navBar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Form from "./components/register/Form";
import Login from './components/Login/Login'
import { SidebarContainer } from "./components/Sidebar/SidebarElement";
import Sidebar from './components/Sidebar/Sidebar'
import LoginSuccess from "./components/Login/LoginSuccess";
import Dashboard from './components/Dashboard/Dashboard'
import Customers from "./components/Dashboard/Customers";
import ActivationEmail from "./components/Dashboard/auth/ActivationEmail";


function App() {
  return (
    <>

      <Router>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/sign-up" exact component={Form}></Route>
          <Route path="/login" exact component={Login}></Route>
          <Route path="/LoginSuccess" exact component={LoginSuccess}></Route>
          <Route path="/dashboard/" component={Dashboard} ></Route>
          <Route path="/user/activate/:activation_token" component={ActivationEmail} ></Route>

        </Switch>
      </Router>
    </>
  );
}

export default App;
