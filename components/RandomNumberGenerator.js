import React, { useState } from 'react';

const RandomNumberGenerator = () => {
  const generateRandomNumber = () => {
    const randomNumber = Math.floor(1000 + Math.random() * 9000); // 1000から9999のランダムな数を生成
    return randomNumber;
  };

  const randomNumber = generateRandomNumber();

  return randomNumber
};

export default RandomNumberGenerator