import axios from 'axios';

export const fetchTeslaNews = () => async (dispatch) => {
  try {
    dispatch({ type: 'FETCH_TESLA_NEWS_REQUEST' });
    const response = await axios.get(
      'https://newsapi.org/v2/everything?q=tesla&from=2023-08-29&sortBy=publishedAt&apiKey=79b64826704b4542882286b0a9a744f6'
    );
    dispatch({ type: 'FETCH_TESLA_NEWS_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'FETCH_TESLA_NEWS_FAILURE', error: error.message });
  }
};
