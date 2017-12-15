import React from 'react'
import Section from '../Section'
import styles from './styles.css'
import classnames from 'classnames'

class Item extends React.Component{
    render(){
        return(
            <div className={styles.container}>
                <div className={classnames(styles.col1)}>
                    {this.props.label}
                </div>
                <div className={classnames(styles.col2)}>
                     {this.props.children}
                </div>
         
            </div>
        )
    }
}

export default Item;