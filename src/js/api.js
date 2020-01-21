const api_key = 'CS08H6C-4JHMYPF-NXW3HF3-MV9F4NM';
const myInit = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        'X-API-KEY': api_key
    }
}

const api = () => {
    return {
        getShows: async text => {
            try {
                const URL = `https://beerflix-api.herokuapp.com/api/v1/beers?search=${text}&limit=10`;
                const response = await fetch(URL, myInit);
                if (!response.ok) {
                    throw new Error('Error retrievong shows');
                }
                const data = await response.json();
                const beers = data.beers;
                return beers;
            } catch (err) {
                console.error(err.message);
                throw err;
            }
        },

        getShowsByDate: async () => {
            try {
                const URL = `https://beerflix-api.herokuapp.com/api/v1/beers?`;
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

        getShowDetails: id => {
            return fetch(`https://beerflix-api.herokuapp.com/api/v1/beers/${id}`, myInit)
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`Error retrieving show ${id}`)
                    }
                    return response.json();
                })
                .catch(err => {
                    console.error(err.message);
                    throw err;
                })
        }
    }
};

export default api;