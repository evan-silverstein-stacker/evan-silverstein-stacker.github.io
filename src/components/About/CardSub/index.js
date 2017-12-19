import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import headshot from 'public/headshot.jpg';
import classnames from 'classnames';
import styles from './styles.css';


const CardSub = (props) => (
  <Card style={{height:"100%"}}>
    {/* <CardHeader
      title={props.headerTitle}
      subtitle={props.headerSubtitle}
    /> */}

    <CardTitle style={{textAlign:"center"}} title={props.cardTitle} subtitle={props.cardSubtitle} />

    <div class={styles.iconWrapper}>
      <i className={classnames(styles.icon, props.icon)} aria-hidden="true"></i>
    </div>
    <CardText>
        {props.cardContent}
    </CardText>

  </Card>
);



export default CardSub;