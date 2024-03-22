const User = require('../model/user')
const bcrypt = require('bcrypt');
const { v4 : uuidv4 } = require('uuid')
const {setUser, getUser} = require('../service/session')

const handleSign = async(req, res) => {
        try {
            const { name, email, password } = req.body;
            return await User.create({ name, email, password })
                .then(() => {
                    res.redirect('/page/home');
                })
                .catch((error) => {
                    console.error(error);
                    res.status(500).send('An error occurred');
                });
        } catch (error) {
            console.error(error);
            res.status(500).send('An error occurred');
        }
    }


const handleLogin = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({email:email})
    if(!user){
        console.log('user not found')
        return res.redirect('/')
    }
 
    if(password != user.password){
        console.log('password is not correct')
        return res.redirect('/')
    }

    const sessionID = uuidv4();
    setUser(sessionID,user);

     res.cookie("uuid",sessionID)
   return  res.redirect('/page/home');
}

module.exports ={handleSign, handleLogin}