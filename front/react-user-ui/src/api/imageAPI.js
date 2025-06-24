import axios from 'axios';

const API_BASE = 'http://localhost:8080/api/v1';

export const generateFromImage = async (image, prompt) => {
  const formData = new FormData();
  formData.append('image', image);
  formData.append('prompt', prompt);

  return axios.post(`${API_BASE}/generate`, formData, {
    responseType: 'arraybuffer',
  });
};


export const generateFromText = async (prompt, style) => {
  return axios.post(`${API_BASE}/generate-from-text`, { prompt, style }, {
    responseType: 'arraybuffer',
  });
};
