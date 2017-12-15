import React from 'react'
import classnames from 'classnames'
import styles from './styles.css'

class Point extends React.Component{
    constructor(){
        super()
        let symbol_0 = <div className={styles.symbol_0}/>
        let symbol_1 = <div className={styles.symbol_1}/>
        this.symbols = [symbol_0, symbol_1]
        
    }
    render(){
        let marginUnit = 20;
        let expItem = this.props.expItem;
        let symbol = this.symbols[expItem.priority];
        let marginVal = marginUnit * expItem.priority;
        let marginStyle = {marginLeft:marginVal+"px"}
        let symbolContainer =
                <div className={classnames(styles.symbolContainer)}>
                     {symbol}
                </div>
        
        return(
            <div className={styles.flex}>
                <div style={marginStyle}> {symbolContainer} </div>
                <div className={styles.text}> {expItem.text} </div>
            </div>
        )
    }

    
}

export default Point;
