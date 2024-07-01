'use client'; 

import React, { useState } from 'react';

const Login: React.FC = () => {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!username || !password) {
            alert('Please enter both username and password.');
            return;
        }

        console.log('Form submitted with data:', { username, password });
    };

    return (
        <div className="container">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div className="formGroup">
                    <input 
                        type="text" 
                        className="input" 
                        placeholder="Username" 
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)} 
                        required 
                    />
                </div>
                <div className="formGroup">
                    <input 
                        type="password" 
                        className="input" 
                        placeholder="Password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        required 
                    />
                </div>
                <button type="submit" className="button">Login</button>
            </form>
            <style jsx>{`
                .container {
                    max-width: 400px;
                    margin: 0 auto;
                    padding: 20px;
                    border: 1px solid #ccc;
                    border-radius: 8px;
                    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
                    background-color: #fff;
                    text-align: center;
                }
                h1 {
                    font-size: 24px;
                    font-weight: bold;
                    margin-bottom: 20px;
                    color: #000;
                }
                .formGroup {
                    margin-bottom: 15px;
                }
                .input {
                    width: 100%;
                    padding: 10px;
                    margin-bottom: 10px;
                    border: 1px solid #dddfe2;
                    border-radius: 6px;
                    background: #f5f6f7;
                    font-size: 17px;
                    color: #000; 
                }
                .input::placeholder {
                    color: #90949c;
                }
                .button {
                    width: 100%;
                    padding: 10px;
                    background-color: #007bff;
                    color: white;
                    border: none;
                    border-radius: 6px;
                    cursor: pointer;
                    font-size: 17px;
                    font-weight: bold;
                }
                .button:hover {
                    background-color: #0056b3;
                }
            `}</style>
        </div>
    );
};

export default Login;
