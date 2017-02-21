var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'baidunews'
});

connection.connect();

/* 获得某种类型的新闻 */
router.get('/news', function(req, res, next) {
	var newstype = req.query.newstype;
	connection.query('SELECT * FROM `news` WHERE `newstype`=?',[newstype], function(err, rows, fields) {
		console.log(rows);
		res.json(rows);
	});
});

module.exports = router;
