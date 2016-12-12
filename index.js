'use strict';

module.exports.findObjectsByKey =  function(tag, json, results, done) {
    let keys;
    try {
        keys = Object.keys(json);
    } catch (err) {
        return done(err, null);
    }
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
    let keys;
    try {
        keys = Object.keys(json);
    } catch (err) {
        return done(err, null);
    }
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

module.exports.findStringsByKey = function (tag, json, results, done) {
    let keys;
    try {
        keys = Object.keys(json);
    } catch (err){
        return done(err, null);
    }
    for (let i = 0; i < keys.length; i++) {
        let temp = json[keys[i]];
        if (typeof temp === 'object') {
            this.findStringsByKey(tag, json[keys[i]], results, function (err, res) {})
        } else if((typeof temp === 'string') && keys[i] === tag){
            results.push(json[keys[i]]);
        }
    }
    done(null, results);
};

module.exports.findAllByKey = function(tag, json, results, done) {
    let keys;
    try {
        keys = Object.keys(json);
    } catch (err){
        return done(err, null);
    }
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
