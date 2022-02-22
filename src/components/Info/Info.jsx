import React from 'react';
import './Info.scss';

const Info = () => {
  return (
    <section className="info">
      <div className="info__container">
        <h2 className="info__title">VideoTitle</h2>
        <div className="info__left">
          <p className="info__author">By: XXX</p>
          <p className="info__date">01/02/03</p>
        </div>
        <div className="info__right">
          <div className="views__wrapper">
            <img src="" alt="eye-icon" className="views__icon" />
            <p className="views__count">543345343</p>
          </div>
          <div className="likes__wrapper">
            <img src="" alt="heart-icon" className="likes__icon" />
            <p className="likes__count">12345567</p>
          </div>
        </div>
        <div className="info__description">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Veniam qui asperiores a quas eaque deserunt illum culpa
          quaerat possimus itaque.
        </div>
        <p className="info__comments-count"></p>
      </div>
    </section>
  );
};

export default Info;