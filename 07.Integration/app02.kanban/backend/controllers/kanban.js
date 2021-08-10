const { response } = require('express');
const model = require('../models/kanban');

module.exports = {
    readAllCards: async function(req, res, next) {
        try {
            const results = await model.findAllCards();
            res
                .status(200)
                .send({
                    result: 'success',
                    data: results,
                    message: null
                });
        } catch(err){
            next(err);
        }
    },
    createTask: async function(req, res, next) {
        try {
            const cardNo = req.params['cardNo'];
            const task = req.body;

            // model.insertTask(...) 성공했다 치고~
            task.no = Date.now();
            res
                .status(200)
                .send({
                    result: 'success',
                    data: task,
                    message: null
                });
        } catch(err) {
            next(err);
        }
    }
}