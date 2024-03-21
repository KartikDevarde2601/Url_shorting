const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const urlSchema = new Schema({
    short_url: {
        type: String,
        unique: true
    },
    redirect_url:{
        type: String,
        unique: true
    },
   visitHistory: [{
       timestamp: {
              type: Date,
              default: Date.now
       }
   }]
});

const URL = mongoose.model('URL', urlSchema);
module.exports = { URL };