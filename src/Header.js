
import React from 'react';
import './Header.css';
const headers=["Resonate with Flavor","Where Memories and Meals Linger","Timeless Tastes, Lasting Impressions","Savor the Essence, Hear the Echo"]
function getRandomInt(max){
    return Math.floor(Math.random()*(max+1))
 
}
const Header = () => {
    return (
        <>
            <h1>Echo Essence</h1>
            <p>{headers[getRandomInt(3)]}</p>
        </>
    );
};

export default Header;
