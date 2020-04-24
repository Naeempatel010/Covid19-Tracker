import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
// import CountUp from 'react-count-up';
import CountTo from "react-count-to";
import styles from "./Cards.module.css";
import cx from "classnames"
const Cards = ({ data : {confirmed, recovered, deaths, lastUpdate } }) => {
    if(!confirmed){
        return 'Loading..';
    }
    return(
        <div className = {styles.container}>
            <Grid container spacing={3} justify="center">
                 <Grid item component={Card} xs = {12} md = {3} className = {cx(styles.card,styles.infected)}>
                     <CardContent >            
                        <Typography color="textSecondary" gutterBottom >confirmed</Typography>
                        <Typography variant="h5">
                         <CountTo from ={0} speed = {2500} to={confirmed.value}/>
                        </Typography>
                        <Typography color = "textSecondary" >{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant = "body2">Number of confirmed cases of COVID-19 Cases</Typography>                        
                     </CardContent>
                 </Grid>
                 <Grid item component={Card} xs = {12} md = {3} className = {cx(styles.card,styles.active)}>
                     <CardContent >            
                        <Typography color="textSecondary" gutterBottom >Active</Typography>
                        <Typography variant="h5">
                         <CountTo from ={0} speed = {2500} to={confirmed.value - recovered.value - deaths.value}/>
                        </Typography>
                        <Typography color = "textSecondary" >{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant = "body2">Number of active cases of COVID-19 Cases</Typography>                        
                     </CardContent>
                 </Grid>
            
                 <Grid item component={Card} xs = {12} md = {3} className = {cx(styles.card,styles.recovered)}>
                     <CardContent >
                        <Typography color="textSecondary" gutterBottom >Recovered</Typography>
                        <Typography variant="h5">
                        <CountTo from ={0} speed = {2500} to={recovered.value}/>
                        </Typography>
                        <Typography color = "textSecondary" >{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant = "body2">Number of Recoveries from COVID-19</Typography>                        
                     </CardContent>
                </Grid>
                     <Grid item component={Card} xs = {12} md = {3} className = {cx(styles.card,styles.deaths)}>
                      <CardContent >
                        <Typography color="textSecondary" gutterBottom >Deaths</Typography>
                        <Typography variant="h5">
                        <CountTo from ={0} speed = {2500} to={deaths.value}/>
                            </Typography>
                        <Typography color = "textSecondary" >{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant = "body2">Number of deaths caused due to COVID-19</Typography>                        
                     </CardContent>
                 </Grid>
            </Grid>
        </div>
    )
}

export default Cards;