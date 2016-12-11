module.exports.findObjectsByKey =  function(tag, json, results, done) {
    var keys = Object.keys(json);
    for (var i = 0; i < keys.length; i++) {
        if (typeof json[keys[i]] === 'object') {
            if (json[keys[i]] instanceof Object && keys[i] === tag) {
                results.push(json[keys[i]])
            }
            this.findObjectsByKey(tag, json[keys[i]], results, function (err, res) {
            })
        }
    }
    done(null, results);
};

module.exports.findArraysByKey = function(tag, json, results, done) {
    var keys = Object.keys(json);
    for (var i = 0; i < keys.length; i++) {
        if (typeof json[keys[i]] === 'object') {
            if (json[keys[i]] instanceof Array && keys[i] === tag) {
                results.push(json[keys[i]])
            }
            this.findArraysByKey(tag, json[keys[i]], results, function (err, res) {
            })
        }
    }
    done(null, results);
};

module.exports.findAllByKey = function(tag, json, results, done) {
    var keys = Object.keys(json);
    for (var i = 0; i < keys.length; i++) {
        if(keys[i] === tag){
            results.push(json[keys[i]])
        }
        var temp = json[keys[i]];
        if (typeof temp === 'object') {
            this.findAllByKey(tag, json[keys[i]], results, function (err, res) {})
        }
    }
    done(null, results);
};
