import React, { useState } from 'react'
import '../style.css'

export function Coin() {
  const [toss, setToss] = useState<null | number>(null)

  function handleClick() {

    const random = Math.random() * 2

    setToss(random)
  }

  const Head = () => <img src="/images/head.jpg" />
  const Tail = () => <img src="/images/tail.jpg" />


  return (
    <>
      <div className='toss'>🪙Toss A Coin🪙</div>
      <h2 className='tossimg'>
        {toss && (toss <= 1 ? <Head /> : <Tail />)}
      </h2>
      <button className="tossbutton" onClick={handleClick}>Toss a coin</button>
    </>
  )
}