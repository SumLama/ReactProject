import React, {useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login: React.FC = () => {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<string>('');
    const [usernameError, setUsernameError] = useState<string>('');
    const [passwordError, setPasswordError] = useState<string>('');

    // Initialize the navigate function from useNavigate
    const navigate = useNavigate();

    const validate = (): boolean => {
        let isValid = true;

        if (!username) {
            setUsernameError('Username is required');
            isValid = false;
        } else {
            setUsernameError('');
        }

        if (!password) {
            setPasswordError('Password is required');
            isValid = false;
        } else {
            setPasswordError('');
        }

        return isValid;
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        if (!validate()) {
            return;
        }

        try {
            const response = await axios.post('https://login.dataconstruct.com.np',
                {username,
                password
            });

            console.log('Response:', response.data); //console log to see response data

            if (response.data.message === "Login successful") {
                navigate('/welcome'); // Navigate to welcome page on successfull login
            } else {
                setError('Invalid username or password');
            }
        } catch (error) {
            setError('An error occurred. Please try again.');
        }
    };

    return (
        <div className="container container-box">
            <div className="form-box border py-4">
                <h2 className="fs-1">Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="row justify-content-center">
                        <div className=" col-12 col-md-10 px-4 px-md-0">
                            <div className="my-3">
                                <label className="d-block text-start my-2  fs-md-5">Username</label>
                                <input type="text" className="form-control" id="username" value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                />
                                {usernameError && <p className="d-flex text-start text-danger">{usernameError}</p>}
                            </div>
                            <div className="my-3">
                                <label className="d-block text-start my-2 fs-md-5">Password</label>
                                <input type="password" className="form-control" id="password" value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                />
                                {passwordError && <p className="d-flex text-start text-danger">{passwordError}</p>}
                            </div>
                            <div>
                                {error && <p className="text-danger">{error}</p>}
                                <div className="d-flex justify-content-end ">
                                    <button type="submit" className="btn btn-dark  fs-md-5 my-3">
                                        Login</button>
                                </div>  
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
