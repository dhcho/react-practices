const mysql = require('mysql2');
const util = require('util');

const dbconn = require('./dbconn');

module.exports = {
    findAll: async function() {
        const conn = dbconn();

        const query = util.promisify(conn.query).bind(conn);

        try{
            const results = await query("select no, name, message, date_format(reg_date, '%Y/%m/%d %H:%i:%s') as regDate from guestbook order by no desc limit 5", []);
            return results;
        } catch(e) {
            console.error(e);
        } finally {
            conn.end();
        }
    },
    findIndex: async function() {
        const conn = dbconn();

        const query = util.promisify(conn.query).bind(conn);

        try{
            const results = await query("select no, name, message, date_format(reg_date, '%Y/%m/%d %H:%i:%s') as regDate from guestbook where no < ? and no > ?-5 order by no desc limit 0, 5", Object.values(guestbook));
            return results;
        } catch(e) {
            console.error(e);
        } finally {
            conn.end();
        }
    },
    insert: async function(guestbook) {
        const conn = dbconn();
        const query = util.promisify(conn.query).bind(conn);

        try{
            return await query(
                "insert into guestbook values(null, ?, ?, ?, now())", 
                Object.values(guestbook)
            );
        } catch(e) {
            console.error(e);
        } finally {
            conn.end();
        }
    },
    delete: async function(guestbook) {
        const conn = dbconn();
        const query = util.promisify(conn.query).bind(conn);

        try{
            return await query(
                "delete from guestbook where no = ? and password = ?", 
                Object.values(guestbook)
            );
        } catch(e) {
            console.error(e);
        } finally {
            conn.end();
        }
    }
}