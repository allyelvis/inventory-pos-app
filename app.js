const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const compression = require('compression');

app.use(helmet());
app.use(compression());

// Rate Limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // Limit each IP to 100 requests per window
});
app.use(limiter);
