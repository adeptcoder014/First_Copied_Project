import { Grid, Box, Typography, makeStyles, CircularProgress } from '@material-ui/core';
import Card from '../component/card';


// Adding css in functioal base component
const useStyles = makeStyles({
    container: {
        color: 'green',
        fontSize: 25,
        marginBottom: 15,
        display: 'flex',
        margin: '10px 0',
        flexdirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },

    component: {
        margin: '50px 0',
    }
})
//this is called as destructuring the data
const Cards = ({ data: { confirmed, deaths, recovered, lastUpdate } }) => {
    const classes = useStyles();
    // console.log(lastUpdate)

    if (!confirmed) {
        return <CircularProgress />
    }

    return (
        <Box >
            <Typography variant="h4" gutterBottom className={classes.container}>Corona virus cases globally</Typography>
            <Grid container spacing={3} justify='center'>
                <Card
                    cardTitle='Infected'
                    value={confirmed.value}
                    desc="Number of infected people"
                    lastUpdate={lastUpdate}
                />
                <Card
                    cardTitle='Recovered'
                    value={recovered.value}
                    desc="Number of recovered people"
                    lastUpdate={lastUpdate}
                />
                <Card
                    cardTitle='Deaths'
                    value={deaths.value}
                    desc="Number of dead people"
                    lastUpdate={lastUpdate}
                />
            </Grid>
        </Box>
    )   
}

export default Cards;