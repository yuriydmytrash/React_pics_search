import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 48ca5e8e8dbbd8ad2a6f76117ab206f03cc1f9219d3991289318ddf3cf49b619'
  }
});