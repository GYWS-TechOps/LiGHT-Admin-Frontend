import axios from 'axios';

const API_BASE = import.meta.env.VITE_API_BASE_URL || 'http://localhost:4000';

// Create a shared axios instance with cookie credentials
const api = axios.create({
  baseURL: API_BASE,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Generic API helper with auth (cookie-based)
export const apiRequest = async (endpoint, options = {}) => {
  const response = await api({
    url: endpoint,
    ...options,
  });
  return response.data;
};

// Events API
export const eventsApi = {
  list: (featured) => apiRequest(`/api/events${featured !== undefined ? `?featured=${featured}` : ''}`),
  get: (slug) => apiRequest(`/api/events/${slug}`),
  create: (data) => apiRequest('/api/events', { method: 'POST', data }),
  update: (id, data) => apiRequest(`/api/events/${id}`, { method: 'PUT', data }),
  delete: (id) => apiRequest(`/api/events/${id}`, { method: 'DELETE' }),
};

// Media API
export const mediaApi = {
  list: () => apiRequest('/api/media-coverages'),
  get: (slug) => apiRequest(`/api/media-coverages/${slug}`),
  create: (data) => apiRequest('/api/media-coverages', { method: 'POST', data }),
  update: (id, data) => apiRequest(`/api/media-coverages/${id}`, { method: 'PUT', data }),
  delete: (id) => apiRequest(`/api/media-coverages/${id}`, { method: 'DELETE' }),
};

// Gallery API
export const galleryApi = {
  list: (category) => apiRequest(`/api/gallery${category ? `?category=${category}` : ''}`),
  get: (id) => apiRequest(`/api/gallery/${id}`),
  create: (data) => apiRequest('/api/gallery', { method: 'POST', data }),
  update: (id, data) => apiRequest(`/api/gallery/${id}`, { method: 'PUT', data }),
  delete: (id) => apiRequest(`/api/gallery/${id}`, { method: 'DELETE' }),
};

// Members API
export const membersApi = {
  list: () => apiRequest('/api/members'),
  get: (slug) => apiRequest(`/api/members/${slug}`),
  create: (data) => apiRequest('/api/members', { method: 'POST', data }),
  update: (id, data) => apiRequest(`/api/members/${id}`, { method: 'PUT', data }),
  delete: (id) => apiRequest(`/api/members/${id}`, { method: 'DELETE' }),
};

// Centers API
export const centersApi = {
  list: () => apiRequest('/api/centers'),
  get: (slug) => apiRequest(`/api/centers/${slug}`),
  create: (data) => apiRequest('/api/centers', { method: 'POST', data }),
  update: (id, data) => apiRequest(`/api/centers/${id}`, { method: 'PUT', data }),
  delete: (id) => apiRequest(`/api/centers/${id}`, { method: 'DELETE' }),
};

// SEMS API
export const semsApi = {
  list: () => apiRequest('/api/sems'),
  get: (id) => apiRequest(`/api/sems/${id}`),
  create: (name) => apiRequest('/api/sems', { method: 'POST', data: { name } }),
  update: (id, name) => apiRequest(`/api/sems/${id}`, { method: 'PUT', data: { name } }),
  delete: (id) => apiRequest(`/api/sems/${id}`, { method: 'DELETE' }),
};

// Upload API
export const uploadApi = {
  uploadImage: async (file, folder = 'light-website') => {
    const formData = new FormData();
    formData.append('image', file);
    formData.append('folder', folder);

    const response = await api.post('/api/upload', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });

    return response.data;
  },

  deleteImage: (publicId) => apiRequest(`/api/upload/${publicId}`, { method: 'DELETE' }),
};

// Awards API
export const awardsApi = {
  list: () => apiRequest('/api/awards'),
  get: (id) => apiRequest(`/api/awards/${id}`),
  create: (data) => apiRequest('/api/awards', { method: 'POST', data }),
  update: (id, data) => apiRequest(`/api/awards/${id}`, { method: 'PUT', data }),
  delete: (id) => apiRequest(`/api/awards/${id}`, { method: 'DELETE' }),
};

// Samavesh API
export const samaveshApi = {
  list: () => apiRequest('/api/samavesh'),
  get: (id) => apiRequest(`/api/samavesh/${id}`),
  create: (data) => apiRequest('/api/samavesh', { method: 'POST', data }),
  update: (id, data) => apiRequest(`/api/samavesh/${id}`, { method: 'PUT', data }),
  delete: (id) => apiRequest(`/api/samavesh/${id}`, { method: 'DELETE' }),
};
