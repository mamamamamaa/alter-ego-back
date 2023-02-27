const axios = require("axios");
const { API_SERVER, API_KEY } = process.env;

const getNews = async (req, res) => {
  const { query, pageSize, page, language } = req.query;

  const options = {
    method: "GET",
    url: API_SERVER,
    params: {
      q: query || "ukraine",
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
