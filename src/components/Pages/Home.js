import React from 'react';
import Reviews from './HomePageComponents/ReviewsCarousel'
import Form from './HomePageComponents/ContactForm'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
 herotext: {
  fontFamily: 'Italianno',
  fontSize: 152,
  wordSpacing: 4,
  fontWeight: 100
 },
 subherotext: {
  fontFamily: 'Raleway Dots',
  fontSize: 60,
  wordSpacing: 4,
 }
})

export default function Home() {
 const classes = useStyles();

 return (
  <div>
   <Grid>

    <GridList>
     <Typography
      variant="h1"
      align="center"
      className={classes.herotext}
     >
      Michael J.H. Taggart
          </Typography>
    </GridList>
    <GridList>
     <Typography
      variant="h2"
      align="center"
      className={classes.subherotext}
     >
      Full Stack Web Developer
          </Typography>
    </GridList>
    <Reviews />

    <Form />


   </Grid>

  </div>
 )
}
