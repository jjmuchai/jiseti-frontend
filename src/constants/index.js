// Base API URL: used for all backend calls
export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';

// Record types used in form submission or record classification
export const RECORD_TYPES = {
  RED_FLAG: 'red-flag',
  INTERVENTION: 'intervention',
  INCIDENT: 'incident',
  COMPLAINT: 'complaint',
  SUGGESTION: 'suggestion',
  EMERGENCY: 'emergency'
};

// Backend status values — must match exactly with your backend strings
export const RECORD_STATUS = {
  DRAFT: 'draft',
  INVESTIGATING: 'under-investigation', // ✅ Matches backend format
  RESOLVED: 'resolved',
  REJECTED: 'rejected'
};

// Types of votes users can submit for records
export const VOTE_TYPES = {
  SUPPORT: 'support',
  URGENT: 'urgent'
};

// Urgency levels shown in reports or dashboards
export const URGENCY_LEVELS = {
  LOW: 'low',
  MEDIUM: 'medium',
  HIGH: 'high',
  CRITICAL: 'critical'
};

// App routes used with React Router
export const ROUTES = {
  HOME: '/',
  RECORDS: '/records',
  MAP: '/map',
  REPORT: '/report',
  LOGIN: '/login',
  REGISTER: '/register',
  DASHBOARD: '/dashboard',
  ADMIN: '/admin'
};

// Display names for each record status (used in UI)
export const STATUS_DISPLAY_NAMES = {
  'draft': 'Draft',
  'under-investigation': 'Under Investigation',
  'resolved': 'Resolved',
  'rejected': 'Rejected'
};

// Helper: Get display name for a status (fallback to raw backend value if missing)
export const getStatusDisplayName = (backendStatus) => {
  return STATUS_DISPLAY_NAMES[backendStatus] || backendStatus;
};
