import 'isomorphic-fetch';

export default function retrieve(req) {
  const zipCode = req.body.zipCode ? req.body.zipCode : '94549';
  console.log(req);
  console.log(req.body, 'weather action');
  console.log(zipCode);
  const query = `q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="${zipCode}")`;
  return fetch(`https://query.yahooapis.com/v1/public/yql?${query}&format=json`)
    .then((response) => {
      return response.json();
    });
}
