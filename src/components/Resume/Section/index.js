import React from 'react';
import styles from './styles.css';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
  } from 'material-ui/Table';

class Section extends React.Component{

    render(){
        
        return(
            <div>
                <div className={styles.caption}> {this.props.caption} </div>
                {this.props.children}
            </div>
        )
    }
}

export default Section;