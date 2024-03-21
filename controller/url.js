
const {URL} = require('../model/url');


function generateRandomString() {
    let result = '';
    for (let i = 0; i < 7; i++) {
        let charType = Math.floor(Math.random() * 3);
        if (charType === 0) {
            // Generate a digit
            result += String.fromCharCode(Math.floor(Math.random() * 10) + 48);
        } else if (charType === 1) {
            // Generate an uppercase letter
            result += String.fromCharCode(Math.floor(Math.random() * 26) + 65);
        } else {
            // Generate a lowercase letter
            result += String.fromCharCode(Math.floor(Math.random() * 26) + 97);
        }
    }
    return result;
}

const GenerateShortUrl= async (req,res)=>{
     const body = req.body;
     if (!body.url){
        return res.status(400).json({ msg: 'You must provide a URL'})
     }
    let ShortID = generateRandomString();
    await URL.create({
        short_url: ShortID,
        redirect_url: body.url
    })
 res.status(201).json({short_url: {ShortID}})
}

module.exports = { GenerateShortUrl}