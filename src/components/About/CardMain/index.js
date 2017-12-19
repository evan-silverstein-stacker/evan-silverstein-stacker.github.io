import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import headshot from 'public/headshot.jpg';
import classnames from 'classnames';
import styles from './styles.css';


const CardMain = (props) => (
  <Card>
    {/* <CardHeader
      title={props.headerTitle}
      subtitle={props.headerSubtitle}
      //avatar={headshot}
    /> */}
    {/* <CardTitle title={props.cardTitle} subtitle={props.cardSubtitle} /> */}
    <div className={styles.container}>
      <CardText>
        <div className={styles.imgContainer}>
          <img className={styles.image} src={props.img} />
        </div>
      </CardText>
      {/* <CardTitle title={props.cardTitle} subtitle={props.cardSubtitle} /> */}
      <div className={styles.textContainer}>
      <CardText>
          {props.cardContent}
      </CardText>
      </div>
    </div>
  </Card>
);


export default CardMain;