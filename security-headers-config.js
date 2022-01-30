const csp = {
  "default-src": ["'self'"],
  "connect-src": ["'self'", "lighthouse-dot-webdotdevsite.appspot.com", "securityheaders.com", "vitals.vercel-insights.com", "webkvalitet.api.alheimsins.net"],
  "script-src": ["'self'", "'unsafe-eval'"],
  "style-src": ["'self'", "blob:", "'unsafe-inline'", "fonts.googleapis.com"],
  "font-src": ["'self'", "data:", "fonts.gstatic.com"],
  "frame-src": ["'self'"],
  "img-src": ["'self'", "data:"],
};

const stringifiedCSP = Object.entries(csp)
  .map((entry) => `${entry[0]} ${entry[1].join(" ")}`)
  .join("; ");

const headers = [
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  {
    key: "Content-Security-Policy",
    value: stringifiedCSP,
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block'
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN'
  },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()'
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  },
  {
    key: 'Referrer-Policy',
    value: 'no-referrer-when-downgrade'
  }
];

module.exports = headers;
