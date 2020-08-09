
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
import FactCheckAPI from "../../Services/FactCheckAPI";
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
    const [data, setData] = useState([]);


    async function onClick() {
        console.log(searchTerm);
        setData(await FactCheckAPI.search(searchTerm));
        console.log('DATA HERE',data);
    }

    function onChange(event){
        setsearchTerm(event.target.value)
    }
    
    
    async function onSubmit(e) {
        e.preventDefault();
        setData(await FactCheckAPI.search(searchTerm));
    }
    
    return (
        <div className="community-main">
            <Header/>
            <div className="searchbar">
                <section>
                    <Paper component="form"
                           className={classes.root}
                           onSubmit={onSubmit}
                    >
                        <InputBase
                            id="searchTerm"
                            className={classes.input}
                            placeholder="Search Fact Checker"
                            inputProps={{ 'aria-label': 'search fact checker', style: { textAlign: 'center', justifyContent: 'center', display: 'flex' }}}
                            
                            onChange={ onChange }
                            
                        />
                        <Divider className={classes.divider} orientation="vertical" />
                        <IconButton className={classes.iconButton} aria-label="search" onClick={ onClick }>
                            <SearchIcon style={{ color: pink[500] }}/>
                        </IconButton>

                    </Paper>
                </section>
            </div>


            {data.map((article, index) => (
                <section className="card" key={index}>
                    <Card
                        key={article}
                        claimant={article.claimant || "Unknown"}
                        text={article.text || "Claim being made"}
                        publisher={article.claimReview[0].publisher.name}
                        textualRating={article.claimReview[0].textualRating}
                        url={article.url || "article url"}
                        title={article.claimReview[0].title || "Article title"}
                    />
                </section>
            ))
            }


        </div>
    );
}

export default Community;
