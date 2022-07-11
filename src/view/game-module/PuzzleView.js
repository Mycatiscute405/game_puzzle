import React from 'react';

const oneSideBlock = 4;
const numArr = [];
const expArr = [];
const list = {};
for (let idx = 1; idx < Math.pow(oneSideBlock, 2); idx++) {
  numArr.push(idx);
}
for (let idx = 1; idx < Math.pow(oneSideBlock, 2); idx++) {
  if (numArr.length === 0) {
    break;
  }
  const t = Math.ceil(Math.random() * numArr.length) - 1;
  expArr.push(numArr[t]);
  numArr.splice(numArr.indexOf(numArr[t]), 1);
}
expArr.unshift(0);
for (let idx = 0; idx < Math.pow(oneSideBlock, 2); idx++) {
  list[idx] = expArr[idx];
}
// value값이 0인 위치의 key값 구하기
// 구한 key값을 기준으로 네방향의 key값 구하기
// let zero = 0;
// let selection = {
//   up: zero - 4 >= 0 ? zero - 4 : -1,
//   down: zero + 4 <= 15 ? zero + 4 : -1,
//   left: zero - 1 >= 0 ? zero - 1 : -1,
//   right: zero + 1 <= 15 ? zero + 1 : -1,
// };

const PuzzleView = () => {
  const onClickBlock = (e) => {
    const t = e.target.className.split(' ')[1].slice(7);
    console.log(t);
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
  let k = 0;
  const setRowBlock = (row) => {
    const arr = [];
    for (let idx = 0; idx < oneSideBlock; idx++) {
      arr.push(
        <span
          className={`block block-k${Object.keys(list)[k]} block-v${
            Object.values(list)[k]
          }`}
          onClick={onClickBlock}
          key={idx}
        >
          {`${Object.values(list)[k]}`}
        </span>
      );
      k++;
    }
    return arr;
  };
  return <div>{setBlock()}</div>;
};

export default PuzzleView;
