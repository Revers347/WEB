import { Link, useNavigate } from "react-router-dom"
import "../App.css"
import logo from "../img/logo.png"
import profile from "../img/profile_default.png"
import Login from "../pages/login"

const Header = () => {

    const navigate = useNavigate()

    const toBlogs = () => {
      navigate('/blogs')
    }

    const toProfile = () => {
      navigate('/profile')
    }

    const toLogin = () => {
      navigate('/login')
    }

    const signOut = () => {
      
    }

    return (
        <header>
        <div className="logo-wrapper">
          <button className="logo-button" onClick={toBlogs}>
            <img src={logo} alt="advertisemen" className="logo-img"/>
          </button>
        </div>
      
        <div className="header-right-menu">
          <div className="auth-buttons">
            <div className="auth"><Link to='/register'>Sign up</Link></div>
            <div className="auth"><Link to='/login'>Login</Link></div>
          </div>
      
          <button className="logo-button" onClick={toProfile}>
            <img src={profile} alt="advertisement" className="profile-img"/>
          </button>
        </div>
        </header>
)}

export default Header