const mongoose = require('mongoose');
const { stringify } = require('querystring');

const Schema = mongoose.Schema;

const playerSchema = new Schema ({
    playerName: String,
    position: String,
    goals: Number,
    assists: Number,
    takeOnsPg: Number,
    blocksPg: Number,  
},{
    timestamps: true
});

module.exports = mongoose.model('Player', playerSchema);

