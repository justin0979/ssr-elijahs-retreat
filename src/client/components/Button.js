import React from 'react';

export default props => {
  return (
    <button className={props.cn} onClick={props.renderBtn}>
      {props.text}
    </button>
  );
};
