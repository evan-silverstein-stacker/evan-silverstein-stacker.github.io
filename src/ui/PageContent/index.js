import React from 'react'
import styles from './styles.css'

class PageContent extends React.Component{
    render(){
        return(
            <div className={styles.container}>
                {this.props.children}
            </div>
        )
    }
}

export default PageContent;