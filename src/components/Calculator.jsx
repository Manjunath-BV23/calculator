import React, { useState } from "react";
import {
    Button,
    Grid,
    Paper,
    Typography,
    makeStyles,
} from "@material-ui/core";
import "./Cal.css"

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing(2),
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: "center",
        color: theme.palette.text.secondary,
    },
    history: {
        marginTop: theme.spacing(2),
    },
}));

export const Calculator = () => {
    const [result, setResult] = useState("");
    const [history, setHistory] = useState([]);
    const [showHistory, setShowHistory] = useState(false);


    const classes = useStyles();

    const handleButtonClick = (value) => {
        setResult(result + value);
    };

    const handleCalculate = () => {
        try {
            const calculatedResult = eval(result);
            setResult(calculatedResult);
            setHistory([...history, result + " = " + calculatedResult]);
            
        } catch (error) {
            setResult("Error");
        }
    };

    const handleHistory = () => {
        if(showHistory) {
            setShowHistory(false)
        }
        else {
            setShowHistory(true)
        }
    }

    const handleClear = () => {
        setResult("")
    }

    return (
        <div className="main">
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <Typography variant="h5">History: {showHistory ? history : ""}</Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <Typography variant="h6">Result: {result}</Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Grid container spacing={2}>
                                    <Grid item xs={3}>
                                        <Button onClick={() => handleClear()} style={{backgroundColor:"grey"}}>C</Button>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Button style={{backgroundColor: "grey"}}>+/-</Button>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Button style={{backgroundColor: "grey"}}>%</Button>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Button onClick={() => handleButtonClick("/")} style={{backgroundColor: "green"}}>/</Button>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Button onClick={() => handleButtonClick("7")} style={{backgroundColor:"orange"}}>7</Button>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Button onClick={() => handleButtonClick("8")} style={{backgroundColor: "orange"}}>8</Button>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Button onClick={() => handleButtonClick("9")} style={{backgroundColor: "orange"}}>9</Button>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Button onClick={() => handleButtonClick("*")} style={{backgroundColor: "green"}}>*</Button>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Button onClick={() => handleButtonClick("4")} style={{backgroundColor: "orange"}}>4</Button>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Button onClick={() => handleButtonClick("5")} style={{backgroundColor: "orange"}}>5</Button>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Button onClick={() => handleButtonClick("6")} style={{backgroundColor: "orange"}}>6</Button>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Button onClick={() => handleButtonClick("-")} style={{backgroundColor: "green"}}>-</Button>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Button onClick={() => handleButtonClick("1")} style={{backgroundColor: "orange"}}>1</Button>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Button onClick={() => handleButtonClick("2")} style={{backgroundColor: "orange"}}>2</Button>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Button onClick={() => handleButtonClick("3")} style={{backgroundColor: "orange"}}>3</Button>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Button onClick={() => handleButtonClick("+")} style={{backgroundColor: "green"}}>+</Button>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Button onClick={() => handleButtonClick("0")} style={{backgroundColor: "orange"}}>0</Button>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Button onClick={() => handleButtonClick(".")} style={{backgroundColor: "orange"}}>.</Button>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Button onClick={() => handleHistory()} style={{backgroundColor: "grey"}}>H</Button>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Button onClick={() => handleCalculate()} style={{backgroundColor: "green"}}>=</Button>
                                    </Grid>
                                    {/* <Grid item xs={3}>
                                        <Button onClick={() => handleButtonClick(".")}>.</Button>
                                    </Grid> */}
                                </Grid>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}