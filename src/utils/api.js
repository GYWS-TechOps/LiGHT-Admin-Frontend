import axios from 'axios';

const rawApiBase = import.meta.env.VITE_API_BASE_URL;
const API_BASE_URL = typeof rawApiBase === 'string' ? rawApiBase.replace(/^['"]|['"]$/g, '') : undefined;

export const buildApiUrl = (path) => {
  // If no base is provided, fall back to relative path so same-origin requests work in dev
  if (!API_BASE_URL) {
    return path;
  }

  // Remove any trailing slash from base to avoid double-slashes
  const base = API_BASE_URL.replace(/\/$/, '');
  return `${base}${path}`;
};

// Create a shared axios instance for public API calls
const publicApi = axios.create({
  baseURL: API_BASE_URL || '',
});

export const getJson = async (path) => {
  const response = await publicApi.get(path);
  return response.data;
};

export const postJson = async (path, payload) => {
  try {
    const response = await publicApi.post(path, payload);
    return response.data;
  } catch (error) {
    if (error.response) {
      const errorBody = error.response.data || {};
      throw new Error(errorBody.message || `Request failed with status ${error.response.status}`);
    }
    throw error;
  }
};
