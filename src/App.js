import { Component } from 'react';
import { Typography, Box, withStyles } from '@material-ui/core';
import logo from '../src/images/COVID19.jpg';
import Cards from '../src/component/Cards';
import { fetchData } from '../src/service/api';

const style =
{
  container: {
    display: 'flex',
    background: "#708090",
    alignItems: 'center',
    justifyContent: 'center',
    margin: -9,
    marginBottom: 10,
    flexDirection: 'column'
  },
  header: {
    width: 300,
    background: 'gray',
    fontSize: 30,
    textAlign: 'center',
    padding: 10,
    margin: 10,
    color: 'white',
  },
  banner: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  lastUpdate :{
    color :"white",
    fontSize:16
  }

}


class App extends Component {
  state = {
    data: {}
  }
  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData })
    console.log(fetchedData);
  }
  render() {
    const { data } = this.state;
    return (
      <>
        <Box className={this.props.classes.container}>
          <Box className={this.props.classes.header}>  COVID-19 Live Tracker
          </Box>
          <Typography className={this.props.classes.lastUpdate}>Last updated: {data.lastUpdate && new Date(data.lastUpdate).toDateString()}</Typography>
        </Box>
       
        <Box className={this.props.classes.banner}>
          <img style={{ width: 350 }} src={logo} alt='covid' />
        </Box>
        <Box className={this.props.classes.banner}>
          <Cards data={data}/>
        </Box>
      </>
      )

  }

}

export default withStyles(style)(App);