'use client'; 

import React from 'react';


const CookiesPolicy: React.FC = () => {
    return (
        <div className="container">
            <h1>Cookies Policy</h1>
            <p>Last updated: [Date]</p>

            <h2>What Are Cookies</h2>
            <p>Cookies are small pieces of text sent by your web browser by a website you visit. A cookie file is stored in your web browser and allows the Service or a third-party to recognize you and make your next visit easier and the Service more useful to you.</p>

            <h2>How We Use Cookies</h2>
            <p>When you use and access the Service, we may place a number of cookies files in your web browser. We use cookies for the following purposes:</p>
            <ul>
                <li>To enable certain functions of the Service</li>
                <li>To provide analytics</li>
                <li>To store your preferences</li>
            </ul>

            <h2>Disabling Cookies</h2>
            <p>You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.</p>

            <h2>Changes to This Cookies Policy</h2>
            <p>We may update our Cookies Policy from time to time. We will notify you of any changes by posting the new Cookies Policy on this page.</p>
            <p>You are advised to review this Cookies Policy periodically for any changes. Changes to this Cookies Policy are effective when they are posted on this page.</p>

            <h2>Contact Us</h2>
            <p>If you have any questions about this Cookies Policy, please contact us:</p>
            <ul>
                <li>By email: [your email address]</li>
                <li>By visiting this page on our website: [your contact page URL]</li>
            </ul>
            <h6>Back to Login page</h6>
            <a href="/" className="back-link">Back to login</a>  

            
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
                h1, h2, h3 {
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
                ul {
                    margin-bottom: 20px;
                    padding-left: 20px;
                    color:black;
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

export default CookiesPolicy;
