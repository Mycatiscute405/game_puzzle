import React, { useState } from 'react';

const PuzzleView = () => {
  const [oneSideBlock, setOneSideBlock] = useState(4);

  const onClickButton = () => {
    setOneSideBlock(oneSideBlock + 1);
  };
  const setBlock = () => {
    const arr = [];
    for (let idx = 0; idx < oneSideBlock; idx++) {
      arr.push(
        <div className="block-row" key={idx}>
          {setRowBlock(idx)}
        </div>
      );
    }
    return arr;
  };
  const setRowBlock = (row) => {
    const arr = [];
    for (let idx = 0; idx < oneSideBlock; idx++) {
      arr.push(
        <span
          className="block"
          key={idx}
          id={`${row}${idx}`}
        >{`${row}${idx}`}</span>
      );
    }
    return arr;
  };

  return (
    <div>
      <button onClick={onClickButton}>TEST</button>
      {setBlock()}
    </div>
  );
};

export default PuzzleView;
