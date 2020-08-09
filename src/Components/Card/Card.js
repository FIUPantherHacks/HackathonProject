import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { pink } from '@material-ui/core/colors';
import './Card.css';
const useStyles = makeStyles({
  root: {
    minWidth: 275,
    marginBottom: 30,
    borderBottom: "3px solid #ff6295"
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {props.claimant}
        </Typography>

        <Typography className={classes.pos} component="h2">
          {props.text}
        </Typography>
        <br/>
        <Typography component="h2">
          Publisher: <b>{props.publisher}</b>
        </Typography>        
        <Typography component="h2">
          Rating: <b>{props.textualRating}</b>
        </Typography>
        <Typography variant="body2" component="p">
          <a href={props.url}>{props.title}</a>
          <br />
        </Typography>
      </CardContent>
    </Card>
  );
}
