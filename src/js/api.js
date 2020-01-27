const apiKey = 'CS08H6C-4JHMYPF-NXW3HF3-MV9F4NM';
const myInit = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'X-API-KEY': apiKey,
  },
};

const api = () => ({
  getShows: async (text) => {
    try {
      const URL = `https://beerflix-api.herokuapp.com/api/v1/beers?search=${text}&limit=10`;
      const response = await fetch(URL, myInit);
      if (!response.ok) {
        throw new Error('Error retrievong shows');
      }
      const data = await response.json();
      const { beers } = data;
      return beers;
    } catch (err) {
      console.error(err.message);
      throw err;
    }
  },

  getShowsByDate: async () => {
    try {
      const URL = 'https://beerflix-api.herokuapp.com/api/v1/beers?';
      const response = await fetch(URL, myInit);
      if (!response.ok) {
        throw new Error('Error retrievong shows');
      }
      const filterData = await response.json();
      const filterBeers = filterData.beers;
      return filterBeers;
    } catch (err) {
      console.error(err.message);
      throw err;
    }
  },

  getShowDetails: (id) => fetch(`https://beerflix-api.herokuapp.com/api/v1/beers/${id}`, myInit)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Error retrieving show ${id}`);
      }
      return response.json();
    })
    .catch((err) => {
      console.error(err.message);
      throw err;
    }),

  createComment: (id, text) => fetch(`https://beerflix-api.herokuapp.com/api/v1/beers/${id}/comment`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-API-KEY': apiKey,
    },
    body: JSON.stringify({ comment: text }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Error retrieving show ${id}`);
      }
      return response.json();
    })
    .catch((err) => {
      console.error(err.message);
      throw err;
    }),

  createLike: (id) => fetch(`https://beerflix-api.herokuapp.com/api/v1/beers/${id}/like`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-API-KEY': apiKey,
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Error retrieving show ${id}`);
      }
      return response.json();
    })
    .catch((err) => {
      console.error(err.message);
      throw err;
    }),

  createLogin: (email) => fetch('https://beerflix-api.herokuapp.com/api/v1/user/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-API-KEY': apiKey,
    },
    body: JSON.stringify({
      email,
    }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Error retrieving shows ${email}`);
      }
      return response.json();
    })
    .catch((err) => {
      console.error(err.message);
      throw err;
    }),
});

export default api;
