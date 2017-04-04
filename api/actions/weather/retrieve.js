import 'isomorphic-fetch';

export default function retrieve(req) {
  console.log(req.body);
  console.log('abc');
  const query = `q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="${req.body.zipCode}")`;
  return fetch(`https://query.yahooapis.com/v1/public/yql?${query}`)
    .then((response) => {
      return response.json();
    });
}
