const model = require('../models/guestbook');

module.exports = {
    index: async function(req, res){
        try {
            const results = await model.findAll();
            res.status(200)
            .send({
                result: 'success',
                data: results || [],
                message: null
            });
        } catch(err) {
            next(err);
        }
    },
    findIndex: async function(req, res){
        try {
            const results = await model.findIndex(req.body);
            res.status(200)
            .send({
                result: 'success',
                data: results || [],
                message: null
            });
        } catch(err) {
            next(err);
        }
    },
    form: function(req, res){
        res.render('form');
    },
    add: async function(req, res){
        try {
            const results = await model.insert(req.body);
            res.status(200)
               .send({
                   result: 'success',
                   data: results,
                   message: null
               });
        } catch(err) {
            next(err);
        }
    },
    deleteform: function(req, res){
        res.render('deleteform', {
            no: req.params.no || 0
        });
    },
    delete: async function(req, res){
        const results = await model.delete(req.body);
        res.redirect("/");
    }
}