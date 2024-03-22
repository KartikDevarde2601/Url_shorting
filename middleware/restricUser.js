const {setUser,getUser} = require('../service/session')

async function restricToLoging(req,res,next){
const userUUID = req.cookies.uuid;


 if(!userUUID) return res.redirect('/login')
  
 const user = getUser(userUUID)

 console.log(user)

 if(!user) return res.redirect('/login')

 req.user = user
 next()
}

module.exports = { restricToLoging}