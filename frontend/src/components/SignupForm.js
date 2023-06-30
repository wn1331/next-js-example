import React, {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

function SignupForm() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("/user/signup", {username, password});
            console.log(response.data); // 서버로부터 받은 응답 데이터 처리
            alert(response.data.username + " 회원가입 성공");
            navigate("/login")
        } catch (error) {
            console.error(error);
        }
    };
    const cancelButton = (e) => {
        e.preventDefault();
        navigate("/login");
    };

    return (
        <div>
            <h2>회원가입</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <br/>
                <br/>
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <input type="submit" value="Sign up"/>
                <button type="button" onClick={cancelButton}>Cancel</button>
            </form>
        </div>
    );
}

export default SignupForm;
