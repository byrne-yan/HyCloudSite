Meteor.methods({
    'getReleaseApkUrl': function(plat,ver){
        var agent = this.connection.httpHeaders['user-agent'];
        var parts = agent && agent.match(/(Android)\s(.*);/);

        console.log(agent);
        var platform = plat || (parts && parts[1]) ,version = ver || (parts && parts[2]);
        var url = Releases.getLatest(platform,version);
        Downloads.insert({client:this.connection.clientAddress,
            agent:agent,time:new Date(),file:url,status:url?'OK':'FAIL'});

        return url;
    }
})