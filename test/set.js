'use strict';

let expect = require('expect'),
    json = require('./data/json'),
    lib = require('../index');

/**********************************
 * Section for setBooleansByKey() *
 **********************************/

describe('setBooleansByKey()', function () {
    it('should set boolean property to new value', function (done) {
        lib.setBooleansByKey('data', json.topBoolean, true, function (err, modified) {
            expect(modified.data).toBeAn('boolean');
            expect(modified.data).toBe(true);
            done();
        });
    });
    it('should get error for passing non-boolean new value', function (done) {
        lib.setBooleansByKey('data', json.topBoolean, [], function (err, modified) {
            expect(err).toExist();
            expect(modified).toNotExist();
            done();
        });
    });
    it('should set nested boolean properties to new value', function (done) {
        lib.setBooleansByKey('data', json.nested, true, function (err, modified) {
            expect(modified.bool.data).toBe(true);
            expect(modified.bool.level2.data).toBe(true);
            expect(modified.bool.level2.level3.data).toBe(true);
            done();
        });
    });
    it('should set boolean properties in array to new value', function (done) {
        lib.setBooleansByKey('data', json.inArray, true, function (err, modified) {
            expect(modified.bool[0].data).toBe(true);
            expect(modified.bool[1].data).toBe(true);
            done()
        });
    })
});

/*********************************
 * Section for setObjectsByKey() *
 *********************************/

describe('setObjectsByKey()', function () {
    it('should set top level property to new value', function (done) {
        lib.setObjectsByKey('data', json.topObject, { frank: true}, function (err, modified) {
            expect(modified.data).toEqual({frank: true});
            done();
        });
    });
    it('should get error for not passing in object as new value', function (done) {
        lib.setObjectsByKey('data', json.topObject, [], function (err, modified) {
            expect(err).toExist();
            expect(modified).toNotExist();
            done()
        });
    });
    it('should set nested properties to new value', function (done) {
        lib.setObjectsByKey('data', json.nested, { modified: true}, function (err, modified) {
            expect(modified.obj.data).toEqual({modified: true});
            expect(modified.obj.level2.data).toEqual({modified: true});
            done();
        });
    });
    it('should set properties in array to new value', function (done) {
        lib.setObjectsByKey('data', json.inArray, {modified: true}, function (err, modified) {
            expect(modified.obj[0].data).toEqual({modified: true});
            expect(modified.obj[1].data).toEqual({modified: true});
            done();
        });
    });
});

/*****************************************
 * Section for setArraysByKey() function *
 *****************************************/

describe('setArraysByKey()', function () {
    it('should set top level property to new value', function (done) {
        lib.setArraysByKey('data', json.topArray, [{modified: true}], function (err, modified) {
            expect(modified.data[0]).toEqual({modified: true});
            done();
        });
    });
    it('should get error not passing in array as new value', function (done) {
        lib.setArraysByKey('data', json.topArray, {modified: true}, function (err, modified) {
            expect(err).toExist();
            expect(modified).toNotExist();
            done();
        });
    });
    it('should set nested properties to new value', function (done) {
        lib.setArraysByKey('data', json.nested, [{modified: true}], function (err, modified) {
            expect(modified.arry.data[0]).toEqual({modified: true});
            expect(modified.arry.level2.data[0]).toEqual({modified: true});
            done();
        });
    });
    it('should set properties in array to new value', function (done) {
        lib.setArraysByKey('data', json.inArray, [{modified: true}], function (err, modified) {
            expect(modified.data[0]).toEqual({modified: true});
            done();
        });
    });
});

/*****************************************
 * Section for setStringsByKey() function *
 *****************************************/

describe('setStringsByKey()', function () {
    it('should set top level property to new value', function (done) {
        lib.setStringsByKey('data', json.topString, 'ruby', function (err, modified) {
            expect(modified.data).toEqual('ruby');
            done();
        });
    });
    it('should get an error not passing in a string as a new value', function (done) {
        lib.setStringsByKey('data', json.topString, {}, function (err, modified) {
            expect(err).toExist();
            expect(modified).toNotExist();
            done();
        });
    });
    it('should set nested properties to new value', function (done) {
        lib.setStringsByKey('data', json.nested, 'ruby', function (err, modified) {
            expect(modified.str.data).toEqual('ruby');
            expect(modified.str.level2.data).toEqual('ruby');
            expect(modified.str.level2.level3.data).toEqual('ruby');
            done();
        });
    });
    it('should set properties in array to new value', function (done) {
        lib.setStringsByKey('data', json.inArray, 'ruby', function (err, modified) {
            expect(modified.str[0].data).toEqual('ruby');
            expect(modified.str[1].data).toEqual('ruby');
            done();
        });
    });
});

/*****************************************
 * Section for setNumbersByKey() function *
 *****************************************/

describe('setNumbersByKey()', function () {
    it('should set top level property to new value', function (done) {
        lib.setNumbersByKey('data', json.topNumber, 42, function (err, modified) {
            expect(modified.data).toEqual(42);
            done();
        });
    });
    it('should get an error not passing in number as new value', function (done) {
        lib.setNumbersByKey('data', json.topNumber, false, function (err, modified) {
            expect(err).toExist();
            expect(modified).toNotExist();
            done();
        });
    });
    it('should set nested properties to new value', function (done) {
        lib.setNumbersByKey('data', json.nested, 42, function (err, modified) {
            expect(modified.num.data).toEqual(42);
            expect(modified.num.level2.data).toEqual(42);
            expect(modified.num.level2.level3.data).toEqual(42);
            done();
        });
    });
    it('should set properties in array to new value', function (done) {
        lib.setNumbersByKey('data', json.inArray, 42, function (err, modified) {
            expect(modified.num[0].data).toEqual(42);
            expect(modified.num[1].data).toEqual(42);
            done();
        });
    });
});