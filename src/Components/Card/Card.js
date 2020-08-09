import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
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
          Claim by {props.claimant}:
        </Typography>

        <Typography className={classes.pos} component="h2">
          {props.text}
        </Typography>
        <br/>
        <Typography component="h2">
          <b>{props.publisher}</b>  rating: <b>{props.textualRating}</b>
        </Typography>        
        <Typography variant="body2" component="p" style={{color: '#ff6295'}}>
          <a href={props.url}>{props.title}</a>
          <br />
        </Typography>
        <Typography color="textSecondary" >
          {props.claimDate}
        </Typography>     
        {/*<Typography color="textSecondary" >*/}
        {/*  {props.reviewDate}*/}
        {/*</Typography>        */}

      </CardContent>
    </Card>
  );
}
