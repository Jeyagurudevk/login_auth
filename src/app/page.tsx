'use client'; 

import React, { useState } from 'react';

const SignUp: React.FC = () => {
    const [firstName, setFirstName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const [emailOrMobile, setEmailOrMobile] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [dobDay, setDobDay] = useState<string>('');
    const [dobMonth, setDobMonth] = useState<string>('');
    const [dobYear, setDobYear] = useState<string>('');
    const [gender, setGender] = useState<string>('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!firstName || !lastName || !emailOrMobile || !password || !dobDay || !dobMonth || !dobYear || !gender) {
            alert('Please fill in all fields.');
            return;
        }

       
        if (!validateEmailOrMobile(emailOrMobile)) {
            alert('Please enter a valid email address or mobile number.');
            return;
        }

        console.log('Form submitted with data:', { firstName, lastName, emailOrMobile, password, dobDay, dobMonth, dobYear, gender });
    };

   
    const validateEmailOrMobile = (value: string): boolean => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const mobileRegex = /^\d+$/;

        return emailRegex.test(value) || (value.length === 10 && mobileRegex.test(value));
    };

    return (
        <div className="container">
            <h1>Sign Up</h1>
            <p>It's quick and easy.</p>
            <form onSubmit={handleSubmit}>
                <div className="formGroup">
                    <input 
                        type="text" 
                        className="input" 
                        placeholder="First name" 
                        value={firstName} 
                        onChange={(e) => setFirstName(e.target.value)} 
                        required
                    />
                    <input 
                        type="text" 
                        className="input" 
                        placeholder="Last name" 
                        value={lastName} 
                        onChange={(e) => setLastName(e.target.value)} 
                        required
                    />
                </div>
                <div className="formGroup">
                    <input 
                        type="text" 
                        className="input" 
                        placeholder="Mobile number or email address" 
                        value={emailOrMobile} 
                        onChange={(e) => setEmailOrMobile(e.target.value)} 
                        required
                    />
                </div>
                <div className="formGroup">
                    <input 
                        type="password" 
                        className="input" 
                        placeholder="New password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        required
                    />
                </div>
                <div className="formGroup">
                    <label className="label">Date of birth <span className="info">?</span></label>
                    <div className="dobGroup">
                        <select className="dobSelect" value={dobDay} onChange={(e) => setDobDay(e.target.value)} required>
                            <option value="">Day</option>
                            {Array.from({ length: 31 }, (_, i) => i + 1).map(day => (
                                <option key={day} value={day}>{day}</option>
                            ))}
                        </select>
                        <select className="dobSelect" value={dobMonth} onChange={(e) => setDobMonth(e.target.value)} required>
                            <option value="">Month</option>
                            {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"].map((month, index) => (
                                <option key={month} value={index + 1}>{month}</option>
                            ))}
                        </select>
                        <select className="dobSelect" value={dobYear} onChange={(e) => setDobYear(e.target.value)} required>
                            <option value="">Year</option>
                            {Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - i).map(year => (
                                <option key={year} value={year}>{year}</option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="formGroup">
                    <label className="label">Gender <span className="info">?</span></label>
                    <div className="genderGroup">
                        <label>
                            <input type="radio" name="gender" value="female" onChange={(e) => setGender(e.target.value)} required />
                            Female
                        </label>
                        <label>
                            <input type="radio" name="gender" value="male" onChange={(e) => setGender(e.target.value)} required />
                            Male
                        </label>
                        <label>
                            <input type="radio" name="gender" value="custom" onChange={(e) => setGender(e.target.value)} required />
                            Custom
                        </label>
                    </div>
                </div>
                <div className="formGroup">
                    <p className="terms">
                        People who use our service may have uploaded your contact information to Facebook. <a href="/learn">Learn more.</a>
                    </p>
                    <p className="terms">
                        By clicking Sign Up, you agree to our <a href="/terms">Terms</a>, <a href="/privacy">Privacy Policy</a> and <a href="/cookies">Cookies Policy</a>. You may receive SMS notifications from us and can opt out at any time.
                    </p>
                </div>
                <button type="submit" className="button">Sign Up</button>
            </form>
            <style jsx>{`
                .container {
                    max-width: 2000px;
                    margin: 0 auto;
                    padding: 50px;
                    border: 1px solid #ccc;
                    border-radius: 8px;
                    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
                    background-color: #fff;
                }
                h1 {
                    font-size: 24px;
                    font-weight: bold;
                    margin-bottom: 10px;
                    color: #000;
                }
                p {
                    margin-bottom: 20px;
                    color: #000;
                }
                .formGroup {
                    display: flex;
                    flex-direction: column;
                    margin-bottom: 15px;
                }
                .input {
                    padding: 10px;
                    margin-bottom: 10px;
                    border: 1px solid #dddfe2;
                    border-radius: 6px;
                    background: #f5f6f7;
                    font-size: 17px;
                    color: #000; 
                    width: calc(50% - 5px);
                }
                .input::placeholder {
                    color: #90949c;
                }
                .dobGroup, .genderGroup {
                    display: flex;
                    justify-content: space-between;
                }
                .dobSelect {
                    padding: 8px;
                    margin-right: 5px;
                    border: 1px solid #dddfe2;
                    border-radius: 6px;
                    background: #f5f6f7;
                    font-size: 17px;
                    color: #000; /* Set select text color to black */
                    width: calc(33% - 5px);
                }
                .label {
                    font-size: 14px;
                    font-weight: bold;
                    color: #000;
                    margin-bottom: 5px;
                }
                .info {
                    color: #90949c;
                    cursor: pointer;
                }
                .genderGroup label {
                    display: flex;
                    align-items: center;
                    font-size: 17px;
                    color: #000;
                }
                .genderGroup input {
                    margin-right: 8px;
                }
                .terms {
                    font-size: 11px;
                    color: #000;
                    margin-bottom: 10px;
                }
                .terms a {
                    color: #385898;
                    text-decoration: none;
                }
                .button {
                    padding: 10px;
                    background-color: #42b72a;
                    color: white;
                    border: none;
                    border-radius: 6px;
                    cursor: pointer;
                    font-size: 17px;
                    font-weight: bold;
                }
                .button:hover {
                    background-color: #36a420;
                }
            `}</style>
        </div>
    );
};

export default SignUp;
