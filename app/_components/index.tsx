'use client'
import { Coin } from './Coin'
import { Dies } from './Dies'

export function Home() {
    return <>
        <div className='wrapper'>
            <div className='content'>
                <Coin />
                <Dies />
            </div>
        </div>
    </>
}
