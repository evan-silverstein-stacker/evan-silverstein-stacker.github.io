import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import styles from './styles.css';
import Icon from 'ui/Icon';


class MyCard extends React.Component{
  render(){
    return(
      <Card>
        <CardHeader
          actAsExpander={true}
          showExpandableButton={true}
        />
        <CardMedia>
        <a href={this.props.link} target="_blank">
          <div className={styles.iconWrapper}>
            <Icon text={this.props.img}/>
          </div>
          {/* <img className={styles.poster} src={this.props.img}/> */}
        </a>
        </CardMedia>
        <CardTitle style={{textAlign:'center'}} title={this.props.title} subtitle={this.props.subtitle} />
        <CardText expandable={true}>
            {this.props.text}
        </CardText >
    </Card>
    )
  }
}


export default MyCard;