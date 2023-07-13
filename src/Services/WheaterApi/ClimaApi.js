import axios from 'axios';

const API_KEY = '02b6e78af0d7fa711bc434b543ad8d77';

export const getWeatherData = async (lat, lon) => {
  const API_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;

  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
