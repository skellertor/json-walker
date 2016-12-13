'use strict';

let permitted = function (tag) {
    if(typeof tag !== 'string'){
        return false;
    }
    return true;
};

module.exports.findObjectsByKey =  function(tag, json, done, results) {
    results = results || [];
    if(!permitted(tag)){
        return done(new Error('First argument must be a string'), null);
    }
    let keys,
        type = typeof json;
    try {
        if(type === 'string' || type === 'number' || type === 'function'){
            throw new Error('Second argument must be an Array or Object');
        }
        keys = Object.keys(json);
    } catch (err) {
        return done(err, null);
    }
    for (let i = 0; i < keys.length; i++) {
        if (typeof json[keys[i]] === 'object') {
            if (!(json[keys[i]] instanceof Array) && keys[i] === tag) {
                results.push(json[keys[i]])
            }
            this.findObjectsByKey(tag, json[keys[i]], function (err, res) {}, results)
        }
    }
    done(null, results);

};

module.exports.findArraysByKey = function(tag, json, done, results) {
    results = results || [];
    if(!permitted(tag)){
        return done(new Error('First argument must be a string'), null);
    }
    let keys,
        type = typeof json;
    try {
        if(type === 'string' || type === 'number' || type === 'function'){
            throw new Error('Second argument must be an Array or Object');
        }
        keys = Object.keys(json);
    } catch (err) {
        return done(err, null);
    }
    for (let i = 0; i < keys.length; i++) {
        if (typeof json[keys[i]] === 'object') {
            if (json[keys[i]] instanceof Array && keys[i] === tag) {
                results.push(json[keys[i]])
            }
            this.findArraysByKey(tag, json[keys[i]], function (err, res) {}, results)
        }
    }
    done(null, results);
};

module.exports.findStringsByKey = function (tag, json, done, results) {
    results = results || [];
    if(!permitted(tag)){
        return done(new Error('First argument must be a string'), null);
    }
    let keys,
        type = typeof json;
    try {
        if(type === 'string' || type === 'number' || type === 'function'){
            throw new Error('Second argument must be an Array or Object');
        }
        keys = Object.keys(json);
    } catch (err){
        return done(err, null);
    }
    for (let i = 0; i < keys.length; i++) {
        let temp = json[keys[i]];
        if (typeof temp === 'object') {
            this.findStringsByKey(tag, json[keys[i]], function (err, res) {}, results)
        } else if((typeof temp === 'string') && keys[i] === tag){
            results.push(json[keys[i]]);
        }
    }
    done(null, results);
};

module.exports.findNumbersByKey = function (tag, json, done, results) {
    results = results || [];
    if(!permitted(tag)){
        return done(new Error('First argument must be a string'), null);
    }
    let keys,
        type = typeof json;
    try {
        if(type === 'string' || type === 'number' || type === 'function'){
            throw new Error('Second argument must be an Array or Object');
        }
        keys = Object.keys(json);
    } catch (err){
        return done(err, null);
    }
    for (let i = 0; i < keys.length; i++) {
        let temp = json[keys[i]];
        if (typeof temp === 'object') {
            this.findNumbersByKey(tag, json[keys[i]], function (err, res) {}, results)
        } else if((typeof temp === 'number') && keys[i] === tag){
            results.push(json[keys[i]]);
        }
    }
    done(null, results);
};

// module.exports.findAllByKey = function(tag, json, results, done) {
//     let keys;
//     try {
//         keys = Object.keys(json);
//     } catch (err){
//         return done(err, null);
//     }
//     for (let i = 0; i < keys.length; i++) {
//         if(keys[i] === tag){
//             results.push(json[keys[i]])
//         }
//         let temp = json[keys[i]];
//         if (typeof temp === 'object') {
//             this.findAllByKey(tag, json[keys[i]], results, function (err, res) {})
//         }
//     }
//     done(null, results);
// };
