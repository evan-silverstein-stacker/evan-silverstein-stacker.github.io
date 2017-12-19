import React from 'react'
import styles from './styles.css'
import classnames from 'classnames'

class Icon extends React.Component{
    render(){
        return(
            <i className={classnames(styles.icon, this.props.text)} aria-hidden="true"></i>
        )
    }
}

export default Icon;