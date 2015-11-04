
Meteor.startup(function(){
    Releases.setRoot(Meteor.settings.DownloadsRoot || process.env['DownloadsRoot']);
});
