const mongoose = require('mongoose');


async function connect(){
    try{
        await mongoose.connect('mongodb://localhost:27017/url-shortener', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connected to the database');
    }catch(err){
        console.log('Error connecting to the database', err);
    }
};

module.exports = connect;