var mongoose = require("../DBSchema/DBConfig");
var UserSchema = mongoose.model('User');


//create controller class and create functions in it
var Controller = function () {
    this.insertUser = function (data) {
        //to create asynchronous behavoir we use promises
       return new Promise(function (resolve,reject) {
           var User = new UserSchema({
               name: data.name,
               address: data.address,
               password: data.password

           });
           //save user details. save function in schema model
           User.save().then(function () {
               resolve({status: 200, message: "User inseted successfully!"});
           }).catch(function (err) {
               reject({status: 500, message: "Error: "+ err});
           })
       })
    }

    this.getAll = function () {
        return new Promise(function (resolve, reject) {
            UserSchema.find().exec().then(function (data) {
                resolve({status: 200, Userdata: data});
            }).catch(function (err) {
                reject({status: 404, message: "No data"});
            })

        })

    }

    this.getUser = function (id) {
        return new Promise(function (resolve, reject) {
            UserSchema.find({_id: id}).exec().then(function (data) {
                resolve({status: 200, userSearched: data});
            }).catch(function (err) {
                reject({status: 404, message: "No data"});
            })
        })
    }

    this.updateUser = function (id, data) {
        return new Promise(function (resolve, reject) {
            UserSchema.update({_id: id}, data ).exec().then(function () {
                resolve({status: 200, message: "User updated!"});
            }).catch(function (err) {
                reject({status: 500, message: "Error: "+ err});
            })
        })
    }

    this.deleteUser = function (id) {
        return new Promise(function (resolve, reject) {
            UserSchema.remove({_id: id}).then(function () {
                resolve({status: 200, message: "User deleted!"});
            }).catch(function (err) {
                reject({status: 404, message: "User not found"});
            })
        })
    }
}
            //controller is a class. so create a instance and export it
module.exports = new Controller();