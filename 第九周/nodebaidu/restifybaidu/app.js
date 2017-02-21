var restify = require('restify');
var orm = require("orm");
var fs = require("fs");

var db = orm.connect("mysql://root:@localhost/baidunews");
var News = db.define("news", {
    id: { type: 'serial', key: true },
    newstitle: String,
    newsimg: String,
    newstype: String,
    newssrc: String,
    newstime: Date
});


function FindAllNews(req, res, next) {
    News.find({}, function(err, news) {
        res.charSet('utf-8');
        res.json(news);
        // console.log(news);
    });
}


function InsertOneNews(req, res, next) {
    var data = strToJson(req.body);
    console.log(data.newstype);
    News.create([{
        newstitle: data.newstitle,
        newsimg: data.newsimg,
        newstype: data.newstype,
        newssrc: data.newssrc,
        newstime: data.newstime
    }], function(err, success) {
        console.log('Response success: ' + success);
        console.log('Response error: ' + err);
        if (success) {
            res.send(201);
            return next();
        } else {
            return next(err);
        }
    });
}

function GetOneNews(req, res, next) {
    News.find({ id: req.params.id }, function(err, news) {
        res.charSet('utf-8');
        console.log('Response success: ' + news);
        console.log('Response error: ' + err);
        if (news) {
            res.send(200, news);
            return next();
        }
        return next(err);
        // console.log(news);
    });
}

function UpdateOneNews(req, res, next) {
	var data = strToJson(req.body);
    News.get(data.id, function(err, news) {
        news.newstitle = data.newstitle;
        news.newsimg = data.newsimg;
        news.newstype = data.newstype;
        news.newssrc = data.newssrc;
        news.newstime = data.newstime;
        news.save(function(err, success) {
            console.log('Response success: ' + success);
            console.log('Response error: ' + err);
            if (success) {
                res.send(201);
                return next();
            } else {
                return next(err);
            }
        });
    });
}


function DeleteOneNews(req, res, next) {
    News.get(req.params.id, function(err, news) {
        news.remove(function(err, success) {
            console.log('Response success: ' + success);
            console.log('Response error: ' + err);
            if (success) {
                res.send(204);
                return next();
            } else {
                return next(err);
            }
        });
    });
}


function FindOneTypeNews(req, res, next) {
    News.find({ newstype: req.params.type }, function(err, news) {
        res.charSet('utf-8');
        console.log('Response success: ' + news);
        console.log('Response error: ' + err);
        if (news) {
            res.send(200, news);
            return next();
        }
        return next(err);
    });
}

function indexHTML(req, res, next) {
    fs.readFile(__dirname + '/public/index.html', function(err, data) {
        if (err) {
            next(err);
            return;
        }

        res.setHeader('Content-Type', 'text/html');
        res.writeHead(200);
        res.end(data);
        next();
    });
}


function adminHTML(req, res, next) {
    fs.readFile(__dirname + '/public/admin.html', function(err, data) {
        if (err) {
            next(err);
            return;
        }

        res.setHeader('Content-Type', 'text/html');
        res.writeHead(200);
        res.end(data);
        next();
    });
}


function strToJson(string) {
    var result = {};
    string.split('&').map(function(i) {
        return i.split('=')
    }).forEach(function(j) {
        result[j[0].trim()] = j[1]
    });
    return result;
}

var server = restify.createServer();
server.use(restify.bodyParser());
server.get('/', indexHTML);
server.get('/admin', adminHTML);
server.get('/news', FindAllNews);
server.post('/news', InsertOneNews);
server.get('/news/:id', GetOneNews);
server.post('/news/:id', UpdateOneNews);
server.del('/news/:id', DeleteOneNews);
server.get('/news/type/:type', FindOneTypeNews);
server.get(/\/public\/?.*/, restify.serveStatic({
    directory: __dirname
}));

server.listen(3900, function() {
    console.log('%s listening at %s', server.name, server.url);
});
