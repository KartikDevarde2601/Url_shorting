const express = require('express');
const app = express();
const urlRoutes = require('./routes/url');
const connect = require('./connect');
const { URL } = require('./model/url');

app.get('/:shortUrl', async (req, res) => {
    const shortUrl = req.params.shortUrl;
   const entry  = await URL.findOneAndUpdate({
        short_url: shortUrl
    },{$push: {visitHistory: {timestamp: Date.now()}}});
    if (!entry){
        return res.status(404).json({msg: 'URL not found'});
    }

    res.redirect(entry.redirect_url);
});

app.get('/api/v1/analytics/:shortUrl', async (req, res) => {
  const shortUrl = req.params.shortUrl;
    const entry = await URL.findOne({
        short_url: shortUrl
    });
    if (!entry){
        return res.status(404).json({msg: 'URL not found'});
    }
    res.json({Numbervisit: entry.visitHistory.length});
});

connect();
app.use(express.json());
app.use('/api/v1/url', urlRoutes);




app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
