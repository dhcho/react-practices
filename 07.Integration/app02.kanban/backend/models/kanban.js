const fs = require('fs');
const util = require('util');
const path = require('path');

module.exports = {
    findAllCards: async function() {
        // const query = (sql, data) => new Promise((resolve, reject) => conn.query(sql, data, (error, results, field) => error ? reject(error):resolve(rows))); 
        try {
            const readFile = util.promisify(fs.readFile).bind(fs);
            const data = await readFile(path.resolve('.', 'backend', 'models', 'json', 'data.json'), 'utf8');
            
            return JSON.parse(data);
        } catch(e) {
            console.error(e);
        } 
    },
    insertTask: async function() {
    }
}