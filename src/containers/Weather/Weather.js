import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import Helmet from 'react-helmet';
import {initialize} from 'redux-form';
import {WeatherForm} from 'components';

@connect(
  () => ({}),
  {initialize})
export default class Weather extends Component {
  static propTypes = {
    initialize: PropTypes.func.isRequired
  }

  handleSubmit = (data) => {
    console.log('submit');
    window.alert('Data submitted! ' + JSON.stringify(data));
    this.props.initialize('weather', {});
  }

  render() {
    return (
      <div className="container">
        <h1>Weather</h1>
        <Helmet title="Weather"/>
        <WeatherForm onSubmit={this.handleSubmit}/>
      </div>
    );
  }
}
