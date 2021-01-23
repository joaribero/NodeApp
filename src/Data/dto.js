const pool = require('../database');

module.exports = {
    linksByUser(id){
        return pool.query('SELECT * FROM links WHERE user_id = ?',[id]);
    },

    insertLinks(newLink){
        return pool.query('INSERT INTO links set ?',[newLink]);
    },

    deleteLinks(id){
        return pool.query('DELETE FROM links WHERE ID = ?',[id]);
    },

    linkData(id){
        return pool.query('SELECT * FROM links WHERE id = ?', [id]);
    },

    updateLink(id, newLink){
        return pool.query('UPDATE links SET ? where id = ?',[newLink, id]);
    }
};
