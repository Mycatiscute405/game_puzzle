import React, { useEffect, useState } from 'react';

const oneSideBlock = 4;
const rightArr = []
const numArr = [];
const expArr = [];
let lock = false

for (let idx = 1; idx < Math.pow(oneSideBlock, 2); idx++) {
  numArr.push(idx);
  rightArr.push(false)
}
for (let idx = 1; idx < Math.pow(oneSideBlock, 2); idx++) {
  if (numArr.length === 0) {
    break;
  }
  const temp = Math.ceil(Math.random() * numArr.length) - 1;
  expArr.push(numArr[temp]);
  numArr.splice(numArr.indexOf(numArr[temp]), 1);
}
expArr.unshift(0);

let zeroIndex = 0;
let clickableBlockIndex = [] 
const findClickableBlock = () => {
  zeroIndex = expArr.indexOf(0)
  clickableBlockIndex = [zeroIndex - 4, zeroIndex + 4, zeroIndex - 1, zeroIndex + 1]
}

const PuzzleView = () => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    findClickableBlock()
    }, [count]
  )

  const onClickBlock = (e) => {
    const clickedBlockIndex = Number(e.target.className.split(' ')[1].slice(7))
    if (lock === false) {
      if (clickedBlockIndex % oneSideBlock === 0) {
        clickableBlockIndex[3] = -1
      } else if (clickedBlockIndex % oneSideBlock === 3) {
        clickableBlockIndex[2] = -1
      }
      if (clickableBlockIndex.indexOf(clickedBlockIndex) >= 0) {
        const temp = expArr[clickedBlockIndex]
        expArr[clickedBlockIndex] = 0
        expArr[zeroIndex] = temp
        setCount(count + 1)
      }
    }
  };
  const getBlock = () => {
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
  let k = 0;
  const setRowBlock = (row) => {
    const arr = [];
    for (let idx = 0; idx < oneSideBlock; idx++) {
      arr.push(
        <span
          className={`block block-i${k} block-v${
            expArr[k]
          } ${ k + 1 === expArr[k]? 'block-right':''}`}
          onClick={onClickBlock}
          key={idx}
        >
          {expArr[k]}
          {
          k + 1 === expArr[k]? rightArr[k] = true:rightArr[k] = false
          }
        </span>
      );
      k++;
    }
    return arr;
  };
  const getCongratulations = () => {
    if (rightArr.filter(e => e === true).length === Math.pow(oneSideBlock, 2) - 1) {
      lock = true
      return (
        <>
          <h1>CONGRATULATIONS!</h1>
        </>
      )
    }    
  }

  return(
    <div>
      <div>
        {getCongratulations()}
      </div>
      <div>
        {getBlock()}
      </div>
      <div>
        <h3>
          COUNT: {count}
        </h3>
      </div>
    </div>
  );
};

export default PuzzleView;