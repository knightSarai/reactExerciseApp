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
        if (rand === 1) {
            this.setState(curState => ({
                totalFlips: curState.totalFlips +1,
                headScore: curState.headScore + 1,
                face: curState.face = 1
            }))
        } else if (rand === 2) {
            this.setState(curState => ({
                totalFlips: curState.totalFlips +1,
                tailScore: curState.tailScore + 1,
                face: curState.face = 2
            }))
        }
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
