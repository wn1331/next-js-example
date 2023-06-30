import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import axios from "axios";

function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        // 로그인 처리 로직
        try {
            const response = await axios.post("/auth/login", {username, password});
            console.log(response.data); // 서버로부터 받은 응답 데이터 처리

            const data = response.data;
            localStorage.setItem('userToken', data.token);

            alert("Login successful");

            navigate('/home')
        } catch (error) {
            alert("Login Error");
            console.error(error);
        }

    };
    const signUpButtonClick = (e) => {
        e.preventDefault();
        navigate("/signup")
    };


    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit">Login</button>
                <button type="button" onClick={signUpButtonClick}>SignUp</button>

            </form>
            <br/> <br/> <br/> <br/>
        </div>
    );
};

export default LoginForm;
