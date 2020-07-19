import React from 'react';
import Header from "../Header/Header";
import './style.css';
import Card from '../Card/Card';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import { pink } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    margin: '5% 0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 700,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));


function Community() {
    const classes = useStyles();
    return (
        <div className="community-main">
            <Header/>
            <section className="searchbar">
                <Paper component="form" className={classes.root}>
                    <InputBase
                        className={classes.input}
                        placeholder="Search Fact Checker"
                        inputProps={{ 'aria-label': 'search fact checker', style: { textAlign: 'center', justifyContent: 'center', display: 'flex' }}}
                    />
                    <Divider className={classes.divider} orientation="vertical" />
                    <IconButton type="submit" className={classes.iconButton} aria-label="search">
                        <SearchIcon style={{ color: pink[500] }}/>
                    </IconButton>

                </Paper>               
            </section>
            <section className="card">
                <Card/>
            </section>
           
        </div>
    );
}

export default Community;
