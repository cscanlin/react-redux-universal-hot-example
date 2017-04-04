import React, {Component, PropTypes} from 'react';
import {reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
// import WeatherValidation from './weatherValidation';
import * as WeatherActions from 'redux/modules/Weather';

@connect(
  state => ({
    loading: state.weather.loading
  }),
  dispatch => bindActionCreators(WeatherActions, dispatch)
)
@reduxForm({
  form: 'Weather',
  fields: ['zipCode'],
  // validate: WeatherValidation,
})
export default
class WeatherForm extends Component {
  static propTypes = {
    fields: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired,
  }

  render() {
    return (
      <div>
        <form className="form-horizontal" onSubmit={this.props.handleSubmit}>
          <div className="form-group">
            <label htmlFor="zipCode" className="col-sm-2">Zip Code: </label>
            <input name="zipCode" type="text" className="form-control" id="zipCode" {...this.props.fields.zipCode}/>
            <button className="btn btn-success" onClick={this.props.handleSubmit}>
              <i className="fa fa-paper-plane"/> Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}
