import React, { useEffect, useState } from 'react';
import RandomNumberGenerator from './RandomNumberGenerator';
import styles from '../components/test.module.css';


function MyComponent() {
  const [inputValue, setInputValue] = useState(''); // テキストフィールドの値を保持するステート
  const [result1, setResult1] = useState(''); // 結果を表示するステート
  const [randomNumber, setRandomNumber] = useState(null);
  const [result, setResult] = useState('');

 useEffect(() => {
  setRandomNumber(RandomNumberGenerator());
 },[]);

  const handleButtonClick = () => {   //onClickで感知、ボタンが押された時の処理
    const number = parseInt(inputValue, 10); //inputValueをparseIntで整数型に変換、numberに格納
    if(!isNaN(number)){
      setResult('');
    }else{
      setResult('数字を入力してください、')
    }
    if(number == randomNumber)setResult1('認証しました')
    else setResult1('認証に失敗しました')
  };

  return (
    <div className={styles['my-component']}>
        <input
          type="text"
          value={inputValue}  //e.target.valueで<input>の要素を取得、serInputValueでInputValueにsetする
          onChange={(e) => setInputValue(e.target.value)} //ユーザーが変更した時にトリガー
          placeholder='暗証番号4桁を入力'
        />
        <button onClick={handleButtonClick}>認証</button> 
        <p className="random-number">認証コード: {randomNumber}</p>
        <p className="result">
          {result}
          {result1}
      </p>
    </div>
  );
}

export default MyComponent;