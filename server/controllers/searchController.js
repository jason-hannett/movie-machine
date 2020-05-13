const axios = require("axios");

module.exports = {
    search: (req, res) => {
        let resultsArr = [];
        const {string} = req.query;
        const {page} = req.query;
        // console.log(string)
        // console.log(resultsArr)

        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=b0905bacefecc34fb178a826419bdf12&language=en-US&query=${string}&page=${page}&include_adult=false`)
        .then((response) => {
            // console.log(response.data.results)
            resultsArr = [...response.data.results];
            // console.log(resultsArr)
            res.status(200).send(resultsArr);
        })
        .catch((err) => res.status(500).send(err))
    }
};
