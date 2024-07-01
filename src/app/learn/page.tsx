'use client'; // Ensure this is a client component

import React from 'react';

const LearnMore: React.FC = () => {
    return (
        <div className="container">
            <h1>Learn More</h1>
            <p>Welcome to the Learn More page. Here you can find more details about our services and policies.</p>
            
            <h2>Our Services</h2>
            <p>We provide a wide range of services to cater to your needs. From social networking to professional services, we have got you covered.</p>
            
            <h2>Privacy Policy</h2>
            <p>We are committed to protecting your privacy. Our privacy policy explains how we collect, use, and protect your personal information.</p>
            
            <h2>Terms of Service</h2>
            <p>By using our services, you agree to our terms of service. Please read them carefully to understand your rights and responsibilities.</p>
            
            <h2>Contact Us</h2>
            <p>If you have any questions, feel free to reach out to our support team. We are here to help you.</p>

            <h6>Back to Login page</h6>
            <a href="/" className="back-link">Back to login</a>            
            <style jsx>{`
                .container {
                    max-height: 1000px;
                    max-width: 2000px;
                    margin: 0 auto;
                    padding: 100px;
                    border: 1px solid #ccc;
                    border-radius: 8px;
                    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
                    background-color: #fff;
                }
                h1, h2, h6 {
                    font-size: 24px;
                    font-weight: bold;
                    margin-bottom: 10px;
                    color: #000;
                }
                p {
                    margin-bottom: 20px;
                    color: #000;
                    font-size: 16px;
                    line-height: 1.5;
                }
                .back-link {
                    color: #007bff; 
                    text-decoration: none;
                    margin-top: 20px;
                    display: inline-block;
                    font-size: 14px;
                }
                .back-link:hover {
                    text-decoration: underline; 
                }
            `}</style>
        </div>
    );
};

export default LearnMore;
