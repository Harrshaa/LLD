import React from "react"
import About from "./About";
import Body from "./Body";
import Team from "./Team";
import Login from "./Login";
import ProtectedRoute from "./ProtectedRoute";
import { BrowserRouter,Route,Routes } from "react-router-dom";


const App=()=>{
    return (
        <div>
            <header className="text-2xl font-bold py-5 flex border-black">
                <nav  className="p-2 m-2 w-96 justify-between text-lg">
                    <a href="/">Home</a>
                    <a href="/about">About</a>
                    <a href="/teams">Teams</a>
                    <a href="login">Login</a>
                </nav>
            </header>



        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Body/>}></Route>
            <Route element={<ProtectedRoute/>}>
            <Route path="/about" element={<About/>}></Route>
            </Route>
           
            <Route path="/teams" element={<Team/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
        </Routes>
        
        </BrowserRouter>
        </div>
    )
}
export default App;

