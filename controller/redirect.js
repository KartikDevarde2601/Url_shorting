const {URL} = require('../model/url')

const getRedirect = async (req, res) => {
    const shortUrl = req.params.shortUrl;
   const entry  = await URL.findOneAndUpdate({
        short_url: shortUrl
    },{$push: {visitHistory: {timestamp: Date.now()}}});
    if (!entry){
        return res.status(404).json({msg: 'URL not found'});
    }

    res.redirect(entry.redirect_url); 
}

module.exports = { getRedirect }