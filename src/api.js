import axios from 'axios';

const BASE_URL = 'https://64bceb4c2320b36433c73f74.mockapi.io/api/v1/contacts';

export const fetchContacts = async () => {
  const response = await axios.get(`${BASE_URL}/contacts`);
  return response.data;
};

export const addContact = async contact => {
  const { name, phone } = contact;
  const response = await axios.post(`${BASE_URL}/contacts`, { name, phone });
  return response.data;
};

export const deleteContact = async id => {
  const response = await axios.delete(`${BASE_URL}/contacts/${id}`);
  return response.data;
};
