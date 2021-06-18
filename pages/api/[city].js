let axios = require("axios").default;
const apikey = process.env.REACT_APP_RAPID_API_KEY;

export default async function handler(req, res) {
    const city = req.url.split("/")[2]
    console.log(city)
    let options = {
        method: 'GET',
        url: 'https://community-open-weather-map.p.rapidapi.com/forecast',
        params: {q: city},
        headers: {
            'x-rapidapi-key': `${apikey}`,
            'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com'
        }
    };

    axios.request(options).then(function (response) {
        res.json(response.data);
    }).catch(function (error) {
        console.log(error.response.data)
        if (error.response.data && error.response.data.message.includes("city")) {
            res.json({error: "City not found"})
        } else {
            res.json({error: "There is a problem with api"})

        }
    });
}