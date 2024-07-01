'use client'; 



import React from 'react';


const PrivacyPolicy: React.FC = () => {
    return (
        <div className="container">
            <h1>Privacy Policy</h1>
            <p>Last updated: [Date]</p>

            <h2>Information Collection and Use</h2>
            <p>We collect several types of information for various purposes to provide and improve our Service to you.</p>

            <h3>Types of Data Collected</h3>
            <p>Personal Data: While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ("Personal Data"). Personally identifiable information may include, but is not limited to:</p>
            <ul>
                <li>Email address</li>
                <li>First name and last name</li>
                <li>Phone number</li>
                <li>Address, State, Province, ZIP/Postal code, City</li>
                <li>Cookies and Usage Data</li>
            </ul>

            <h2>Use of Data</h2>
            <p>We may use your Personal Data to contact you with newsletters, marketing or promotional materials and other information that may be of interest to you. You may opt out of receiving any, or all, of these communications from us by following the unsubscribe link or instructions provided in any email we send.</p>

            <h2>Security of Data</h2>
            <p>The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.</p>

            <h2>Changes to This Privacy Policy</h2>
            <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.</p>
            <p>You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</p>

            <h2>Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us:</p>
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

export default PrivacyPolicy;
