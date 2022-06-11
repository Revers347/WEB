import {
    BrowserRouter,
    Routes,
    Route
  } from "react-router-dom";
import Login from "../pages/login";
import Blogs from "../pages/blogs";
import Register from "../pages/register";
import Header from "./header";

const Navigation = () => {
    
    return (
    <BrowserRouter>
        <Header/>
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/" element={<Blogs />} />
        </Routes>
    </BrowserRouter>
)}

export default Navigation