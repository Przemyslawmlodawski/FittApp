import "./App.css";
import Navbar from "./components/navBar/Navbar";
import { BrowserRouter as Router, Switch, Route, useHistory } from "react-router-dom";
import Home from "./components/pages/Home";
import Form from "./components/register/Form";
import Login from './components/Login/Login'
import { SidebarContainer } from "./components/Sidebar/SidebarElement";
import Sidebar from './components/Sidebar/Sidebar'
import LoginSuccess from "./components/Login/LoginSuccess";
import Dashboard from './components/Dashboard/Dashboard'
import Customers from "./components/Dashboard/Customers";
import ActivationEmail from "./components/Dashboard/auth/ActivationEmail";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
import { dispatchLogin, fetchUser, dispatchGetUser } from './redux/actions/authAction'
import NotFound from "./components/utils/NotFound/NotFound";
import ForgetPassword from "./components/Dashboard/auth/ForgetPassword";
import ResetPassword from "./components/Dashboard/auth/ResetPassword";
function App() {
  const dispatch = useDispatch()
  const token = useSelector(state => state.tokenReducer)
  const auth = useSelector(state => state.authReducer)
  const { isLogged } = auth
  useEffect(() => {
    const firstLogin = localStorage.getItem('firstLogin')
    if (firstLogin) {
      const getToken = async () => {
        const res = await axios.post('/user/refresh_token', null)
        console.log(res)
        dispatch({ type: 'GET_TOKEN', payload: res.data.access_token })
      }
      getToken()
    }


  }, [auth.isLogged, dispatch]);


  useEffect(() => {

    if (token) {
      const getUser = () => {
        dispatch(dispatchLogin())
        return fetchUser(token).then(res => {
          dispatch(dispatchGetUser(res))
        })
      }
      getUser()
    }

  }, [token, dispatch]);


  return (
    <>

      <Router>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/sign-up" exact component={isLogged ? NotFound : Form}></Route>
          <Route path="/forgot_password" exact component={isLogged ? NotFound : ForgetPassword}></Route>
          <Route path="/user/reset/:token" exact component={isLogged ? NotFound : ResetPassword}></Route>
          <Route path="/login" exact component={isLogged ? NotFound : Login}></Route>
          <Route path="/LoginSuccess" exact component={LoginSuccess}></Route>
          <Route path="/dashboard/" component={isLogged ? Dashboard : NotFound} ></Route>
          <Route path="/user/activate/:activation_token" component={ActivationEmail} ></Route>

        </Switch>
      </Router>
    </>
  );
}

export default App;
