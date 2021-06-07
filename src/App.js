//import logo from './logo.svg';
import './App.css';
import React from 'react';
import {Cards, Chart, CountryPicker, ContactsFooter} from './components';
import styles from './App.module.css';
import {fetchData} from './api';
import CoronaImage from './images/image (2).png';

class App extends React.Component{

  state = { 
    data: {},
    country: '',
  }

  async componentDidMount(){
    const fetchedData = await fetchData();
    this.setState({data:fetchedData});
  }
  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({data: fetchedData, country: country});
  }
  render(){
    const { data, country } = this.state;
    return (
      <div className={styles.container}>
        <img className={styles.image} src={CoronaImage} alt='Logo'/>
        <Cards data ={ data }/>
        <CountryPicker handleCountryChange = { this.handleCountryChange }/>
        <Chart data={ data } country ={ country }/>
        <ContactsFooter />
      </div>
    );
  }
}

export default App;
