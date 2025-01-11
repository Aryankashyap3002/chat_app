const mongoose = require('mongoose');

const connect = async () => {
    await mongoose.connect("mongodb://localhost/socket");
}

module.exports = connect;