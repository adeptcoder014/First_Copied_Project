import {Grid, Box, Typography, makeStyles, CircularProgress } from '@material-ui/core';
import Card from '../component/card';


// Adding css in functioal base component
const useStyles = makeStyles({
    container: {
        color: 'green',
        fontSize: 25
    },
    component: {
        margin: '50px 0'
    }
})
//this is called as destructuring the data
const Cards = ({ data: { confirmed, deaths, recovered, lastUpdate } }) => {
    const classes = useStyles();

    if (!confirmed) {
        return <CircularProgress />
    }

    return (
        <Box className={classes.component}>
            <Typography variant="h4" gutterBottom className={classes.container}>Corona virus cases globally</Typography>
            <Grid container spacing={3} justify='center'>
                <Card />
                <Card />
                <Card />
            </Grid>
        </Box>
    );
}

export default Cards;