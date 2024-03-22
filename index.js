const express = require('express');
const path = require('path')
const app = express();
const cookieParser = require('cookie-parser')
const UrlRoutes = require('./routes/url');
const RedirectRoutes = require('./routes/redirect');
const AnalyticsRoutes = require('./routes/analytics');
const homeRoutes = require('./routes/home');
const Signup = require('./routes/user')
const connect = require('./connect');
const {restricToLoging} = require('./middleware/restricUser')


connect();


app.set('view engine', 'ejs');
app.set('views',path.resolve('./views'))

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/auth',Signup)
app.use('/page', homeRoutes);
app.use('/api/url', restricToLoging, UrlRoutes);
app.use('/api/redirect', RedirectRoutes);
app.use('/api/analytics', AnalyticsRoutes);

app.use('/login',function(req,res){
    res.render("login")
})

app.use('/',function(req,res){
    res.render("signup")
})

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
