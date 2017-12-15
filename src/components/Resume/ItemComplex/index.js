import React from 'react'
import Section from '../Section'
import styles from './styles.css'
import Item from '../Item';

class ItemComplex extends React.Component{
    render(){
        return(
            <Item label={this.props.label}>
                <div className={styles.container}>
                    <div className={styles.title}>
                        {this.props.title}
                    </div>
                    <div  className={styles.location}>
                        {this.props.location}
                    </div>
                </div>
            
                <div>
                    <div>
                        {this.props.children}
                    </div>
                </div>
            </Item>

        )
    }
}

export default ItemComplex;