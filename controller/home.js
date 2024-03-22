const {URL} = require('../model/url')

const homepage = async (req,res)=>{
  const allurl = await URL.find({})
  return res.render("home", {urls:allurl})
}

module.exports={homepage}