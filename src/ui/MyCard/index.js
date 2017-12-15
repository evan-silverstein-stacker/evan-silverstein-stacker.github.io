import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';


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
          <img src={this.props.img} width="200" height="200" />
        </a>
        </CardMedia>
        <CardTitle title={this.props.title} subtitle={this.props.subtitle} />
        <CardText expandable={true}>
            {this.props.text}
        </CardText >
    </Card>
    )
  }
}


export default MyCard;