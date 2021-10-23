const axios = require("axios"); 


module.exports = async function() {
    try {
      const response = await axios.get('https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=${process.env.API_KEY}&pageSize=5');
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };
  