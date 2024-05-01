import API from './api.js';

export function getUsers() {
  return API.get('/users');
}
export function getUser(id) {
  return API.get(`/users/${id}`);
}
