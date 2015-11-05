
Template.sharebj.events({
    'click #download': function (event) {
        Meteor.call('getReleaseApkUrl',function(err,downloadurl){
            if(!err)
            {
                window.location = Meteor.absoluteUrl(downloadurl,{replaceLocalhost:true});
            }else{
                console.log(err);
            }
        });
    },
    'click #download2': function (event) {
        Meteor.call('getReleaseApkUrl','android','4.0',function(err,downloadurl){
            if(!err)
            {
                window.location = Meteor.absoluteUrl(downloadurl,{replaceLocalhost:true});
            }else{
                console.log(err);
            }
        });
    }

});