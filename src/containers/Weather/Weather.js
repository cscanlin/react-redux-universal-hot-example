import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import Helmet from 'react-helmet';
import {initialize} from 'redux-form';
import {WeatherForm} from 'components';
import * as WeatherActions from 'redux/modules/weather';

@connect(
  state => ({
    loading: state.weather.loading,
    loaded: state.weather.loaded,
    data: state.weather.data,
    error: state.weather.error,
  }),
  {...WeatherActions, initialize })

export default class Weather extends Component {
  static propTypes = {
    error: PropTypes.string,
    loading: PropTypes.bool,
    initialize: PropTypes.func.isRequired,
    retrieve: PropTypes.func.isRequired,
  };
  handleSubmit = (data) => {
    console.log('submit');
    console.log(data);
    this.props.initialize('weather', {});
    this.props.retrieve(data.zipCode);
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
