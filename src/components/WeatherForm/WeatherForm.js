import React, {Component, PropTypes} from 'react';
import {reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
// import WeatherValidation from './weatherValidation';
import * as WeatherActions from 'redux/modules/Weather';

function asyncValidate(data, dispatch, {isValidZip}) {
  if (!data.email) {
    return Promise.resolve({});
  }
  return isValidZip(data);
}
@connect(() => ({}),
  dispatch => bindActionCreators(WeatherActions, dispatch)
)
@reduxForm({
  form: 'Weather',
  fields: ['zipCode'],
  // validate: WeatherValidation,
  asyncValidate,
})
export default
class WeatherForm extends Component {
  static propTypes = {
    fields: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired,
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <form className="form-horizontal" onSubmit={this.props.handleSubmit}>
          <div className="form-group">
            <label htmlFor="zipCode" className="col-sm-2">Zip Code: </label>
            <input type="text" className="form-control" id="zipCode" />
          </div>
          <div className="form-group">
            <div className="col-sm-offset-2 col-sm-10">
              <button className="btn btn-success" onClick={this.props.handleSubmit}>
                <i className="fa fa-paper-plane"/> Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
