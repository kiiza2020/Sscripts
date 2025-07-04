// src/services/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: '/api/',      // Matches Flask's /api prefix (relative path for dev & prod)
  withCredentials: true, // Enables auth/session cookies
});

// Auth-related APIs (example)
export const login = (credentials) => api.post('auth/login', credentials);
export const logout = () => api.post('auth/logout');
export const getCurrentUser = () => api.get('auth/user');

// Bulk upload APIs
export const uploadBulkFiles = (formData, onUploadProgress) => {
  // formData should contain files under key 'files' or zipped file
  return api.post('student/bulk-upload', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    onUploadProgress,
  });
};

// Fetch submission result including feedback overlays
export const fetchSubmissionResult = (submissionId) => {
  return api.get(`student/submissions/${submissionId}`);
};

// Submit feedback for a particular submission or answer
export const submitFeedback = (submissionId, feedbackData) => {
  // feedbackData could be: { answerId, comment, overrideGrade, overlayType, ... }
  return api.post(`teacher/submissions/${submissionId}/feedback`, feedbackData);
};

// Fetch teacher review list with analytics (example)
export const fetchTeacherReviewList = (params) => {
  // params can include pagination, filters etc.
  return api.get('teacher/review', { params });
};

// Submit manual grade override
export const submitManualOverride = (submissionId, overrideData) => {
  // overrideData: { answerId, newGrade, comments }
  return api.post(`teacher/submissions/${submissionId}/override`, overrideData);
};

export default api;
