const express = require('express');
const path = require('path')
const app = express();
const UrlRoutes = require('./routes/url');
const RedirectRoutes = require('./routes/redirect');
const AnalyticsRoutes = require('./routes/analytics');
const homeRoutes = require('./routes/home');
const connect = require('./connect');


connect();

app.set('view engine', 'ejs');
app.set('views',path.resolve('./views'))

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/page', homeRoutes);
app.use('/api/v1/url', UrlRoutes);
app.use('api/vi/redirect', RedirectRoutes);
app.use('/api/v1/analytics', AnalyticsRoutes);




app.listen(3001, () => {
    console.log('Server is running on port 3000');
});
