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
        console.log(platform,version);
        var relDir = 'sharebj/release/';
        var dir = path.join(this.root,'sharebj/release/');
        if(!platform || platform.match(/^android$/i)){
            relDir += 'android/';
            dir = path.join(dir,'android/');

            var n = parseFloat(version);
            if(n < 4.4){
                relDir += 'crosswalk/';
                dir = path.join(dir,'crosswalk/');
            }
        }

        console.log(dir,relDir);
        var apks = fs.readdirSync(dir);
        var l = _.reduce(apks,function(latest,file){
                console.log(file);

                var p = path.join(dir, file);
                var s = fs.statSync(p);

                if(!s.isFile() ||( latest.time && latest.time >= s.mtime) )
                    return  latest;
                return {time:s.mtime,filename:file};
            },
            {time:undefined,filename:undefined}
        );
        console.log(l);
        return relDir + l.filename;
    }
}


Releases = new ReleasesReader();
