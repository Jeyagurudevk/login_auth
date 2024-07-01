'use client'; 

import React from 'react';

const TermsAndPolicy: React.FC = () => {
    return (
        <div className="container">
            <h1>Terms and Policy</h1>
            <p>Welcome to our Terms and Policy page. Here you can find important information regarding the use of our services.</p>
            
            <h2>Terms of Service</h2>
            <p>By using our services, you agree to our terms of service. Please read them carefully to understand your rights and responsibilities.</p>
            
            <h2>Privacy Policy</h2>
            <p>We are committed to protecting your privacy. Our privacy policy explains how we collect, use, and protect your personal information.</p>
            
            <h2>Cookie Policy</h2>
            <p>We use cookies to improve your experience on our site. Our cookie policy details how we use cookies and how you can manage them.</p>
            
            <h2>Disclaimer</h2>
            <p>The information provided on this website is for general informational purposes only. We make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose.</p>

            <h2>Contact Us</h2>
            <p>If you have any questions about our terms and policies, feel free to contact our support team.</p>

            <h6>Back to Login page</h6>
            <a href="/">Back to login</a>            
            <style jsx>{`
                .container {
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

export default TermsAndPolicy;
