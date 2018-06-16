var mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    address: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    }

});

//name of schema, custom schema name
mongoose.model('User', UserSchema);

//demo is the database name. rest mongo db server address
mongoose.connect('mongodb://127.0.0.1:27017/demo', function (err) {
    if(err){
        console.log(err);
        process.exit(-1);
    }
    console.log("Connected to the DB");
});

module.exports = mongoose;