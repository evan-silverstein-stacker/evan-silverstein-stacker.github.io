import React from 'react'
import styles from './styles.css'

class Frame extends React.Component{
    render(){
        return(
            <div className={styles.container}>
                {this.props.children}
                <div className={styles.caption}>
                     {this.props.caption} 
                </div>
            </div>
        )
    }
}

export default Frame;