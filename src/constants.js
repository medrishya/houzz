export const API_URL = (page) =>
  `https://api.punkapi.com/v2/beers?page=${page + 1}&per_page=10`;
