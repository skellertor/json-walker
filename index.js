'use strict';

module.exports.findObjectsByKey =  function(tag, json, results, done) {
    let keys = Object.keys(json);
    for (let i = 0; i < keys.length; i++) {
        if (typeof json[keys[i]] === 'object') {
            if (!(json[keys[i]] instanceof Array) && keys[i] === tag) {
                results.push(json[keys[i]])
            }
            this.findObjectsByKey(tag, json[keys[i]], results, function (err, res) {})
        }
    }
    done(null, results);
};

module.exports.findArraysByKey = function(tag, json, results, done) {
    let keys = Object.keys(json);
    for (let i = 0; i < keys.length; i++) {
        if (typeof json[keys[i]] === 'object') {
            if (json[keys[i]] instanceof Array && keys[i] === tag) {
                results.push(json[keys[i]])
            }
            this.findArraysByKey(tag, json[keys[i]], results, function (err, res) {})
        }
    }
    done(null, results);
};

module.exports.findAllByKey = function(tag, json, results, done) {
    let keys = Object.keys(json);
    for (let i = 0; i < keys.length; i++) {
        if(keys[i] === tag){
            results.push(json[keys[i]])
        }
        let temp = json[keys[i]];
        if (typeof temp === 'object') {
            this.findAllByKey(tag, json[keys[i]], results, function (err, res) {})
        }
    }
    done(null, results);
};
