import React from 'react';
export const Footer = ({ logoText }) => {
    return (
        <footer className="footer">
            <div className="container">
                <a href="" className="logo">
                    {logoText}
                </a>
                <p className="copyright">
                    Small static blog @ 2022
                </p>
            </div>
        </footer>
    );
}