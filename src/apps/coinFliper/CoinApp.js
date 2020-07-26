import React, { Component } from 'react'

import Coin from './Coin'

import './css/CoinApp.css'

export default class CoinApp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            totalFlips: 0,
            headScore:0,
            tailScore:0,
            face:1
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.flipCoin()
    }

    flipCoin() {
        const rand = this.randNum()
        this.setState(curState => ({
            totalFlips: curState.totalFlips +1,
            headScore:  curState.headScore + (rand === 1 ? 1 : 0),
            tailScore:  curState.tailScore + (rand === 2 ? 1 : 0),
            face : rand === 1 ? 1 : 2
         })
        )
    }

    randNum () {
        return Math.floor(Math.random() * 2) +1
    }

    render() {
        let state = this.state
        return (
            <div className="CoinApp">
                <h1 className="coinApp-title">Let's flip a coin</h1>
                <Coin num={state.face}/>
                <button onClick={this.handleClick}>Flip Me!</button>
                <p>Out of {state.totalFlips} flips, there have been {state.headScore} heads and {state.tailScore} tails</p>
            </div>
        )
    }
}
