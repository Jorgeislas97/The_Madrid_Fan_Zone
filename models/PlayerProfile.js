const mongoose = require('mongoose');
const { stringify } = require('querystring');

const Schema = mongoose.Schema;

const playerSchema = new Schema ({
    playerName: String,
    goals: Number,
    assists: Number,
    cleanSheets: Number,
    takeOns: Number,
    blocks: Number,  
},{
    timestamps: true
});

module.exports = mongoose.model('PlayerProfile', playerSchema);

