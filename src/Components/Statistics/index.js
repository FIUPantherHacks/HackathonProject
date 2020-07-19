import React, {useEffect, useState} from 'react';
import Header from "../Header/Header";
import API from "../../Services/API"

import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Chart from "./Chart";

let dataD = [
    {
        "regionName": "United States",
        "casesCount": 3781985,
        "recoveredCount": 1108518,
        "deceasedCount": 142229,
        "regionFlagUrl": "//upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/23px-Flag_of_the_United_States.svg.png"
    }
];

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));

function  Statistics() {
    const classes = useStyles();
    const [age, setAge] = React.useState('');
  
    const handleChange = (event) => {
      setAge(event.target.value);
    };
  
    const [data, setdata] = useState(dataD);
    useEffect(() => {
        async function getNewData() {
            let newdata = await API.globalData();
            console.log("NEW DATA", newdata)
            setdata(newdata.data);
        }

        getNewData();
    }, []);
    return <>
    <Header/>
    <FormControl className={classes.formControl}>
    <InputLabel id="demo-simple-select-helper-label">Country</InputLabel>
    <Select
      labelId="demo-simple-select-helper-label"
      id="demo-simple-select-helper"
      value={age}
      onChange={handleChange}
    >
      <MenuItem value="">
        <em>None</em>
      </MenuItem>
        {data.map((country) => (
            <MenuItem value={`$\{country.regionName}`}>{country.regionName}</MenuItem>
        ))}
    </Select>
    <FormHelperText>Choose a Country</FormHelperText>
  </FormControl>
    <Chart country1={1} country2={1} country1Name={`Martyn`} country2Name={`Jessica`} />/>
    </>;
}

export default Statistics;
