
Template.sharebj.events({
    'click #download': function (event) {
        //var plat = FlowRouter.getQueryParam('platform');
        var plat = 'android';
        var r = Releases.findOne({platform:plat},{sort:{releaseAt:-1}});
        var downloadurl = FlowRouter.path('release/:filename',{filename:r.filename});
        console.log(downloadurl);
        //FlowRouter.go( downloadurl);
        window.location = Meteor.absoluteUrl(downloadurl,{replaceLocalhost:true});
    }
});