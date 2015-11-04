Meteor.methods({
    'getReleaseApkUrl': function(){
        var agent = this.connection.httpHeaders['user-agent'];
        var parts = agent && agent.match(/(Android)\s(.*);/);

        var platform = parts && parts[1] ,version = parts && parts[2];
        var url = Releases.getLatest(platform,version);
        Downloads.insert({client:this.connection.clientAddress,
            agent:agent,time:new Date(),file:url,status:url?'OK':'FAIL'});

        return url;
    }
})