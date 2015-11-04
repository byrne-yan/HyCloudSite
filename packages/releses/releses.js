var fs = Npm.require('fs');
var path = Npm.require('path');

class ReleasesReader{
    constructor(root){
        this.root = root;
    }
    setRoot(root){
        this.root = root;
    }
    getLatest(platform,version){
        var dir = path.join(this.root,'sharebj/release');
        var apks = fs.readdirSync(dir);
        var l = _.reduce(apks,function(latest,file){
                var p = path.join(dir, file);
                var s = fs.statSync(p);
                if(latest.time && latest.time >= s.mtime)
                    return  latest;
                return {time:s.mtime,filename:file};
            },
            {time:undefined,filename:undefined}
        );
        return 'sharebj/release/' + l.filename;
    }
}


Releases = new ReleasesReader();
