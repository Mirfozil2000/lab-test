import axios from 'axios';

const BASE_URL = 'https://newsapi.org/v2/everything';

export const getBlogPosts = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/?q=tesla&from=2023-08-29&sortBy=publishedAt&apiKey=79b64826704b4542882286b0a9a744f6`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
