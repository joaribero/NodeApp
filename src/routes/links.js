const { request } = require('express');
const express = require('express');
const router = express.Router();

const pool = require ('../database');

router.get('/add',(req,res) => {
    res.render('links/add');
});

router.post('/add',async (req,res) => {
    const {title, url, description} = req.body;
    const newLink = {
        title,
        url,
        description
    };
    await pool.query('INSERT INTO links set ?',[newLink]);
    req.flash('success','Link saved succesfully');
    res.redirect('/links');
});

router.get('/', async (req,res) => {
    const links = await pool.query('SELECT * FROM links');
    res.render('links/list',{links: links});
});

router.get('/delete/:id', async (req,res)=> {
    const {id} = req.params;
    await pool.query('DELETE FROM links WHERE ID = ?',[id]);
    req.flash('success','Links removed successfully');
    res.redirect('/links');
});

router.get('/edit/:id', async(req,res) => {
    const {id} = req.params;
    const links = await pool.query('SELECT * FROM links where id = ?', [id]);
    res.render('links/edit',{link: links[0]});
    console.log(links[0]);
});

router.post('/edit/:id', async(req,res) => {
    const {id} = req.params;
    const {title,description,url} = req.body;
    const newLink = {
        title,
        description,
        url
    };
    await pool.query('UPDATE links SET ? where id = ?',[newLink, id]);
    req.flash('success','Link updated successfully');
    res.redirect('/links');
});

module.exports = router;