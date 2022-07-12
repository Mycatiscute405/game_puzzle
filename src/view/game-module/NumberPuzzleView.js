import React, { useEffect, useState } from 'react';

//___init___
let oneSideBlock = 4;
const blockArr = [];

for (let row = 0; row < oneSideBlock; row++) {
  const temp = [];
  for (let col = 0; col < oneSideBlock; col++) {
    temp.push(0);
  }
  blockArr.push(temp);
}

const NumberPuzzle = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {}, [count]);

  const onClickTest = () => {
    setCount(count + 1);
    console.log('move to right');
    for (let row = 0; row < oneSideBlock; row++) {
      for (let col = 0; col < oneSideBlock; col++) {
        console.log(row, oneSideBlock - 1);
        blockArr[row][oneSideBlock - 1] += blockArr[row][col];
        blockArr[row][col] = 0;
      }
    }
    console.log(blockArr);
  };
  const onClickBlock = () => {
    setCount(count + 1);
    let bound = 0;

    while (true) {
      bound += 1;

      const ranRow = Math.ceil(Math.random() * oneSideBlock) - 1;
      const ranCol = Math.ceil(Math.random() * oneSideBlock) - 1;

      if (blockArr[ranRow][ranCol] === 0) {
        blockArr[ranRow][ranCol] = 2;
        break;
      }
      if (bound === Math.pow(oneSideBlock, 2)) {
        console.log('game over');
        break;
      }
    }
    console.log(blockArr);
  };
  const getBlock = () => {
    const arr = [];
    for (let row = 0; row < oneSideBlock; row++) {
      arr.push(
        <div className="block-row" key={row}>
          {setRowBlock(row)}
        </div>
      );
    }
    return arr;
  };
  const setRowBlock = (row) => {
    const arr = [];
    for (let col = 0; col < oneSideBlock; col++) {
      arr.push(
        <span className={`block`} onClick={onClickBlock} key={col}>
          {blockArr[row][col]}
        </span>
      );
    }
    return arr;
  };

  return (
    <>
      <div>
        <button onClick={onClickTest}>TEST</button>
      </div>
      <div>{getBlock()}</div>
    </>
  );
};

export default NumberPuzzle;
