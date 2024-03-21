const express = require('express');
const app = express();
const UrlRoutes = require('./routes/url');
const RedirectRoutes = require('./routes/redirect');
const AnalyticsRoutes = require('./routes/analytics');
const connect = require('./connect');


connect();
app.use(express.json());

app.use('/api/v1/url', UrlRoutes);
app.use('api/vi/redirect', RedirectRoutes);
app.use('/api/v1/analytics', AnalyticsRoutes);




app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
