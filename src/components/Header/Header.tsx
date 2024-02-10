import React from 'react';
import s from './Header.module.css'
const Header = () => {
    return (
        <header className={s.header}>
            <img
                src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT52WGXkKDrU21sfxN84wQKnElWYj5PzINq7A&usqp=CAU'}/>
        </header>
    );
};

export default Header;