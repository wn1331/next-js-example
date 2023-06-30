import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/HomePage.css'

function HomePage() {
    const navigate = useNavigate();

    // const [user, setUser] = useState(null);


    const navigateToUserList = () => {
        navigate('/userlist');
    }

    const navigateToBoardList = () => {
        navigate('/boardlist');
    }

    const handleLogout = () => {
        // 여기서 로그아웃 로직을 수행합니다.
        // 로그아웃 후, 홈페이지 또는 로그인 페이지로 리다이렉트할 수 있습니다.
        navigate('/login');
    }

    const handleDeleteAccount = () => {
        // 여기서 회원탈퇴 로직을 수행합니다.
        // 회원탈퇴 후, 홈페이지 또는 로그인 페이지로 리다이렉트할 수 있습니다.
        navigate('/login');
    }

    useEffect(() => {

    }, []);

    return (
        <div>
            {/*{user ? <p>Welcome back, {user.name}!</p> : <p>Please log in.</p>}*/}
            <div>
                <h1>Home</h1>
                <button onClick={navigateToUserList}>Go to User List</button>
                <button onClick={navigateToBoardList}>Go to Board List</button>
                <button onClick={handleLogout}>Logout</button>
                <button onClick={handleDeleteAccount}>Delete Account</button>
            </div>
        </div>
    );


}

export default HomePage;
