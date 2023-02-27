const axios = require("axios");
const { API_SERVER, API_KEY } = process.env;

const getNews = async (req, res) => {
  const {
    query = "ukraine",
    pageSize = 30,
    page = 1,
    language = "en",
  } = req.query;

  const options = {
    method: "GET",
    url: API_SERVER,
    params: {
      q: query,
      pageNumber: page,
      pageSize,
      apiKey: API_KEY,
      language,
    },
  };

  try {
    const dynamicNews = await axios.request(options);
    res.json(dynamicNews.data);
  } catch (error) {
    res.status(400);
  }
};

module.exports = getNews;
