var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var xss = require('xss');

var connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'baidunews'
});

/* 获得所有新闻 */
router.get('/getnews', function(req, res) {
    connection.query('SELECT * FROM `news` order by id desc', function(err, rows, fields) {
        res.json(rows);
    });
});

// 新增新闻
router.post('/insert', function(req, res) {
    var newstitle = xss(req.body.newstitle),
        newsimg = xss(req.body.newsimg),
        newstype = xss(req.body.newstype),
        newstime = xss(req.body.newstime),
        newssrc = xss(req.body.newssrc);
    connection.query('INSERT  INTO `news` \
    	(`newstitle`,`newsimg`,`newstype`,`newstime`,`newssrc`) VALUES (?,?,?,?,?)', 
    	[newstitle, newsimg, newstype, newstime, newssrc], function(err, result) {
    		if(!err){
    			res.json(result.insertId);
    		}
    });
});

// 修改新闻
router.post('/update', function(req, res) {
    var newstitle = xss(req.body.newstitle),
        newsimg = xss(req.body.newsimg),
        newstype = xss(req.body.newstype),
        newstime = xss(req.body.newstime),
        newssrc = xss(req.body.newssrc),
        newsid = xss(req.body.id);
    connection.query('UPDATE `news` \
    	SET `newstitle`=?,`newsimg`=?,`newstype`=?,`newstime`=?,`newssrc`=? WHERE `id`=?', 
    	[newstitle, newsimg, newstype, newstime, newssrc, newsid], function(err, result) {
        	res.json(result.changedRows);
    });
});

// 删除新闻
router.post('/delete', function(req, res) {
    var newsid = req.body.newsid;
    connection.query('DELETE FROM `news` WHERE `news`.`id`=?',[newsid], function(err, rows) {
        res.json(rows.affectedRows);
    });
});


// 模态框
router.get('/curnews', function(req, res) {
    var newsid=req.query.newsid;
     connection.query('SELECT * FROM `news` WHERE `news`.`id`=?',[newsid],function(err, rows, fields) {
    	res.json(rows);
    });
});

module.exports = router;
