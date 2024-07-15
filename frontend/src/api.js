import axios from 'axios';

const api = axios.create({
    baseURL: 'https://online-book-store-app.onrender.com/',  // Adjust the base URL as needed
});

api.interceptors.request.use(config => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
        config.headers.Authorization = `Bearer ${user.token}`;
    }
    return config;
});

export default api;
