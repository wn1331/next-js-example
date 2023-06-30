import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";
// import BoardList from "./components/BoardList";
import UserList from "./components/UserList";
import HomePage from "./components/HomePage";

function App() {
    return (
        <Router>
            <Routes>
                <Route path={"/login"} element={<LoginForm/>}/>
                <Route path={"/signup"} element={<SignupForm/>}/>
                <Route path={"/home"} element={<HomePage/>}/>

                {/*<Route path={"/board"} element={<BoardList/>}/>*/}
                <Route path={"/userlist"} element={<UserList/>}/>

            </Routes>
        </Router>
    );
}

export default App;
