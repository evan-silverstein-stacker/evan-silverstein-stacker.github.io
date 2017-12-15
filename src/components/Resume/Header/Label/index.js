import React from 'react'
import styles from './styles.css'

class Label extends React.Component{
    render(){
        return(
            <div className={styles.container}>
                <div className={styles.caption}> {this.props.caption} </div>
                <div> {this.props.children} </div>
            </div>
        )
    }
}

export default Label;