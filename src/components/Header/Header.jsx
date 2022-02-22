import React from 'react';
import './Header.scss';
import Button from '../Button/Button';
import Logo from '../../assets/logo/BrainFlix-logo.svg';
import UserAvatar from '../../assets/images/Mohan-muruge.jpg';

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <img
          src={Logo} className="header__logo" alt="logo"></img>
        <div className="header__wrapper">
          <input
            className="header__search input-field"
            placeholder="Search"
            name="search"
          ></input>
          <Button message="Upload" />
          <img
            src={UserAvatar} className="header__user-avatar" alt="userimage"></img>
        </div>
      </div>
    </header>
  );
};

export default Header;