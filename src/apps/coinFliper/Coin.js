import React, { Component } from 'react'

import './css/Coin.css'

import head from './img/Head_Half_Dollar.jpg'
import tail from './img/Tail_Half_Dollar.jpg'

export default class Coin extends Component {
    render() {
        return (
            <div className="Coin">
                {this.props.num === 1 ? <img className="Coin-img" src={head} alt="head"></img> : <img className="Coin-img" src={tail} alt="tail"></img>}
            </div>
        )
    }
}
