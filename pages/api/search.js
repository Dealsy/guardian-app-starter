import axios from 'axios';

const searchHandler = async(req, res) => {
  const searchTerm = req.query.term;
  const searchResults = await axios.get(`https://content.guardianapis.com/search?q=${searchTerm}&order-by=relevance`, {
    params: {
      'api-key': process.env.GUARDIAN_API_KEY,
    }
  })

  const apiResults = searchResults.data.response.results.map(result => {
    return {
      title: result.webTitle,
      url: result.webUrl,
      id: result.id,
    }
  })

  res.status(200).json(apiResults);
}

export default searchHandler;