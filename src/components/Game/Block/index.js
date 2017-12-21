import React from 'react';
import styles from './styles.css';

class Block extends React.Component {
    constructor() {
        super();
        this.state = {
            top: 0,
            left: 0,
            visible: true,

        }
    }


    componentDidMount(){
        let block = this.props.block;
        if(block === null){return;}

        block.onPositionChangedCallback = ()=>{
            
            this.setState({
                percentTop: block.verticalPercent,
                percentLeft: block.horizontalPercent,
                visible: true

            })
        };
        block.beginAnimation();   
    }
    render() {
        let block = this.props.block;
        let borderOffset = 1*2 // styles.css (doubled for border on each side)
        let style = {
            position: 'absolute',
            left: (this.state.percentLeft) + '%',
            top: (this.state.percentTop) + '%',
            height: (block.height - borderOffset) + 'px',
            width: (block.width - borderOffset) + 'px',

        }
        //if(block.isPlaced){style.display = "none"}


        return (
            <div className={styles.block} style={style}></div>
        )
    }
}

export default Block;