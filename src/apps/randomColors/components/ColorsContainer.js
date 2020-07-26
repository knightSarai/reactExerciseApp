import React, { Component } from 'react'

import ColorBox from './ColorBox'

import '../css/ColorsContainer.css'

export default class ColorsContainer extends Component {
    static defaultProps = {
        BoxNum: 24,
        colors : ["#364f6b", "#3fc1c9", "#dbe2ef", "#fc5185", "#3f72af", "#112d4e", "#000000", "#212121", " #ff9a00", "#ffc300", "#240041", "#fc5185", "#45eba5", "#e4eddb", "#071a52", "#17b978"]
    }
    
    render() {
        const boxes = Array.from({length: this.props.BoxNum}).map(()=> (<ColorBox colors= {this.props.colors} />))
        console.log(boxes);
        return (
            <div className="ColorContainer">
               {boxes}
            </div>
        )
    }
}
