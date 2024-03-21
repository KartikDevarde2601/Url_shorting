
const getAnalytics = async (req, res) => {
    const shortUrl = req.params.shortUrl;
    const entry = await URL.findOne({
        short_url: shortUrl
    });
    if (!entry){
        return res.status(404).json({msg: 'URL not found'});
    }
    res.json({Numbervisit: entry.visitHistory.length});
}