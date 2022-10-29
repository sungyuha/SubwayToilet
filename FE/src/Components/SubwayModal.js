import React from 'react';

import classes from './SubwayModal.module.css';

const SubwayModal = ({title, message, onConfirm}) => {
  return (
    <div>
      <div className={classes.backdrop} onClick={ onConfirm } />
      <div className={classes.modal}>
        <header className={classes.header}>
          <h2>{ title }</h2>
        </header>
        <div className={classes.content_box}>
          <div className={classes.content}>
            <p>{ message }</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubwayModal;