import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../style/UserList.css'
import {useNavigate} from "react-router-dom";
function UserList() {
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();
    const goback=(e)=>{
        navigate("/home");
    }

    useEffect(() => {
        const fetchUsers = async () => {
            const response = await axios.get('/user/user-list');
            setUsers(response.data);
            console.log(response.data);
        };

        fetchUsers();
    }, []);

    return (
        <div>
            <h2>User List</h2>
            <table>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Username</th>
                    <th>Password</th>
                </tr>
                </thead>
                <tbody>
                {users.map(user => (
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.username}</td>
                        <td>{user.password}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            <button type="button" onClick={goback}>뒤로</button>
        </div>
    );
}

export default UserList;
