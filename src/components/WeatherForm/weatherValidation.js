import memoize from 'lru-memoize';
import {createValidator, required, maxLength} from 'utils/validation';

const WeatherValidation = createValidator({
  zipCode: [required, maxLength(10)],
});
export default memoize(10)(WeatherValidation);
