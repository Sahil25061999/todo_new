import React from 'react';
import './cardlist.css';
import CARD from '../Card/Card';

const CARDLIST = ({ todo }) => {
  return (
    <div className="cardList">
      {todo.map((item) => {
        return <CARD title={item.title} desc={item.desc} />;
      })}
    </div>
  );
};

export default CARDLIST;
