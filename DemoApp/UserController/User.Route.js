var Express = require("express");
var router = Express.Router();
var Controller = require("./Controller");

router.post('/', function (req, res) {
    //.then use because og insertUser return a promise instance
    Controller.insertUser(req.body).then(function (data) {
        res.status(data.status).send({message: data.message});
    }).catch(function (err) {
        res.status(data.status).send({message: err.message});
    })
})

router.get('/', function (req, res) {
    Controller.getAll().then(function (data) {
        res.status(data.status).send({data: data.Userdata});
    })
})

router.get('/:id', function (req, res) {
    Controller.getUser(req.params.id).then(function (data) {
        res.status(data.status).send({data: data.userSearched});
    })
})

router.put('/:id', function (req, res) {
    Controller.updateUser(req.params.id, req.body).then(function (data) {
        res.status(data.status).send({message: data.message});
    })
})

router.delete('/:id', function (req, res) {
    Controller.deleteUser(req.params.id).then(function (data) {
        res.status(data.status).send({message: data.message});
    })
})


module.exports = router;
