import 'isomorphic-fetch';

export default function retrieve(req) {
  console.log(req);
  const query = `q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="${94549}")`;
  return fetch(`https://query.yahooapis.com/v1/public/yql?${query}&format=json`)
    .then((response) => {
      return response.json();
    });
}
