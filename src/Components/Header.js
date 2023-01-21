import React from 'react';
import {NavItem} from './NavItem';
export const Header = ({logoText}) => {
    return (
        <header className="header">
            <div className="container">
                <a href="" className="logo">
                    {logoText}
                </a>
                <NavItem  />
            </div>
        </header>
    );
}