import React from 'react';

import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';
import { fetchData } from './api';
import coronaImages from './images/image.png'
import { AppBar, Button, Link } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import { shadows } from '@material-ui/system';
class App extends React.Component {
  state = {
    data: {},
    country: ''
  }

  async componentDidMount () {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData })
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({ data: fetchedData, country: country })
  }

  render () {
    const { data, country } = this.state
    return (
      <div className={styles.wrapper}>

        <header>
          <Button

            size="large"
            startIcon={<GitHubIcon />}>
            <Link target="_blank" color="inherit" href="https://github.com/alirezahamid/covid-19-reactJs">Github</Link>

          </Button>
        </header>

        <div className={styles.container}>

          <img className={styles.image} src={coronaImages} alt="COVID - 19" />
          <Cards data={data} />
          <CountryPicker handleCountryChange={this.handleCountryChange} />
          <Chart data={data} country={country} />


        </div></div>
    );
  }
}

export default App;
