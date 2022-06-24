import React, { Component } from 'react';
import "./Coin.css"

class Coin extends Component {
    render() {
        return (
            <div className='Coin'>
            <img src={this.props.info.imgSrc} alt={this.props.info.side} />
            {// now it stil woulnd not work because at the beginning we set currCoin to be null so what we could do is to use this in CoinContainer this.state.currCoin && what there was because if that is not true we are not even going to check the second part
            }
            </div>
        )
    }
}

export default Coin;