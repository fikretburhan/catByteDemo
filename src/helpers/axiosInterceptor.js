import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://dummyjson.com/',
});

axiosInstance.interceptors.request.use(
  config => {
    return config;
  },
  err => {
    return Promise.reject(err);
  },
);

axiosInstance.interceptors.response.use(
  response => {
    return new Promise((resolve, reject) => {
      if (response.status === 201 || response.status === 200) {
        return resolve(response);
      } else {
        return reject('Error occured');
      }
    });
  },
  err => {
    return Promise.reject(err);
  },
);
