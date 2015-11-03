// Write your package code here!
var contentDisposition = Npm.require('content-disposition');
var finalhandler = Npm.require('finalhandler');
//var http = Npm.require('http');
var serveStatic = Npm.require('serve-static');

// Serve up public/ftp folder
var downloadsFolder = Meteor.settings.DownloadsRoot || process.env['DownloadsRoot'];
console.log(downloadsFolder);
debugger;
var serve = serveStatic(downloadsFolder, {
    'index': false,
    'setHeaders': setHeaders
});

// Set header to force download
function setHeaders(res, path) {
    console.log(path);
    res.setHeader('Content-Disposition', contentDisposition(path))
}

WebApp.connectHandlers.use('/releases',function(req, res, next){
    console.log(req.originalUrl);
    var done = finalhandler(req, res);
    //debugger;
    serve(req, res, done)
});