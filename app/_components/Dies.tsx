import React, { useState } from 'react';
import '../style.css'

export function Dies() {
  const [rolls, setRolls] = useState<number[]>([]);

  // Handle dice selection and rolling in one function
  function handleDiceRoll(diceCount: number) {
    const newRolls = Array.from({ length: diceCount }, () => Math.floor(Math.random() * 6) + 1);
    setRolls(newRolls);
  }

  // Component to display a single die face
  const DieFace = ({ number }: { number: number }) => (
    <img className='imgdice'
      src={`/images/dies${number}.jpg`}
      alt={`Die face ${number}`}
    />
  );

  return (
    <>
      <h1 className='throw' >🎲 Throw the Dice 🎲</h1>
      <h2>
        {rolls.length > 0 &&
          rolls.map((roll, index) => <DieFace key={index} number={roll} />)}
      </h2>
      <div className='button-group'>
        <button className='button' onClick={() => handleDiceRoll(1)}> Roll 1 dice</button>
        <button className='button' onClick={() => handleDiceRoll(2)}> Roll 2 dice</button>
        <button className='button' onClick={() => handleDiceRoll(3)}> Roll 3 dice</button>
      </div>
    </>
  );
}
