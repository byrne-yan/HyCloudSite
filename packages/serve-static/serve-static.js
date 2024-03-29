// Write your package code here!
var contentDisposition = Npm.require('content-disposition');
var finalhandler = Npm.require('finalhandler');
var serveStatic = Npm.require('serve-static');


// Serve up public/ftp folder
var downloadsFolder = Meteor.settings.DownloadsRoot || process.env['DownloadsRoot'];

var serve = serveStatic(downloadsFolder, {
    'index': false,
    'setHeaders': setHeaders
});

var prefix = '/sharebj/release';
console.log('downloads root:'+downloadsFolder+prefix);
// Set header to force download
function setHeaders(res, path) {
    console.log('serve file:'+path);
    res.setHeader('Content-Disposition', contentDisposition(path))
}

WebApp.rawConnectHandlers.use(prefix,function(req, res, next){
    //补回前缀
    req.url = prefix + req.url;
    var done = finalhandler(req, res);
    serve(req, res, done)
});


