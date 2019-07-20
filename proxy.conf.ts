require('dotenv').config();

const PROXY_CONFIG = [
  {
    context: '/api',
    target: process.env.API_URL,
    secure: false,
    "pathRewrite": {
      "^/api": ""
    },
  }
]

module.exports = PROXY_CONFIG