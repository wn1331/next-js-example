import React, { useState } from 'react';
import axios from 'axios';

function SignupForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/user/signup', { username, password });
      console.log(response.data); // 서버로부터 받은 응답 데이터 처리
      alert(response.data);
    } catch (error) {
      console.error(error);
    }
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
        <br />
        <br />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input type="submit" value="Sign up" />
      </form>
    </div>
  );
}

export default SignupForm;
