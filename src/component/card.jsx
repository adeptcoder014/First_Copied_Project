import { Card, Grid, Box, CardContent, Typography, makeStyles } from '@material-ui/core';
import CountUp from 'react-countup';

const useStyle = makeStyles({
    header: {
        background: 'gray',
        padding: 10
    }
})
const CardComponent = ({ cardTitle, value, desc, lastUpdate }) => {
    const classes = useStyle();
    return (
        <Grid component={Card} style={{ margin: 20, borderBottom: '10px solid yellow' }}>
            <Box className={classes.header}>
                <Typography variant="h5" color="textSecondary">{cardTitle}</Typography>
            </Box>
            <CardContent>
                <Typography variant="h5">
                    <CountUp start={0} end={value} duration={3} separator="," />
                    <Typography color="textSecondary">{desc}</Typography>
                    <Typography>{new Date(lastUpdate).toDateString()}</Typography>
                </Typography>
            </CardContent>
        </Grid>
    );
}
export default CardComponent;