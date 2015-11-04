
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
    }
});