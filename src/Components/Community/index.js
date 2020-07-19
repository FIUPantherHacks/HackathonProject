import React, {useState} from 'react';
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
import MenuItem from "@material-ui/core/MenuItem";

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
    const [searchTerm, setsearchTerm] = useState('');
    const [data, setData] = useState([{}]);


    function onChange(event, value) {
        console.log("E", event);
        console.log("V", value);

    }

    return (
        <div className="community-main">
            <Header/>
            <div className="searchbar">
                <section>
                    <Paper component="form" className={classes.root} >
                        <InputBase
                            id="searchTerm"
                            className={classes.input}
                            placeholder="Search Fact Checker"
                            inputProps={{ 'aria-label': 'search fact checker', style: { textAlign: 'center', justifyContent: 'center', display: 'flex' }}}
                            onClick={onChange}
                        />
                        <Divider className={classes.divider} orientation="vertical" />
                        <IconButton className={classes.iconButton} aria-label="search">
                            <SearchIcon style={{ color: pink[500] }}/>
                        </IconButton>

                    </Paper>
                </section>
            </div>


            {data.map((article) => (
                <section className="card">
                    <Card
                        key={article}
                        claimant={article.claimant || "Martyn"}
                        text={article.text || "Claim being made"}
                        textualRating={article.textualRating || 'The real facts'}
                        url={article.url || "article url"}
                        title={article.title || "Article title"}
                    />
                </section>
            ))}

           
        </div>
    );
}

export default Community;
