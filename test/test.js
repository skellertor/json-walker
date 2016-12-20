'use strict';

let expect = require('expect'),
    json = require('./data/json'),
    lib = require('../index');

/*******************************************
 * Section for findObjectsByKey() function *
 *******************************************/

describe('findObjectsByKey()', function () {
    describe('Top level', function () {
        it('should find object with the property name === `data`', function (done) {
            lib.findObjectsByKey('data', json.topObject, function (err, results) {
                results.forEach(function (obj) {
                    expect(obj).toBeAn(Object);
                    expect(obj).toNotBeAn(Array);
                });
                expect(results.length).toBeLessThanOrEqualTo(1);
                done();
            });
        });
    });
    describe('Nested', function () {
        it('should find nested objects with the property name === `data`', function (done) {
            lib.findObjectsByKey('data', json.nested, function (err, results) {
                results.forEach(function (obj) {
                    expect(obj).toBeAn(Object);
                    expect(obj).toNotBeAn(Array);
                });
                expect(results.length).toBeLessThanOrEqualTo(2);
                done()
            });
        });
        it('should find objects within an array with the property name === `data`', function (done) {
            lib.findObjectsByKey('data', json.inArray, function (err, results) {
                results.forEach(function (obj) {
                    expect(obj).toBeAn(Object);
                    expect(obj).toNotBeAn(Array);
                });
                expect(results.length).toBeLessThanOrEqualTo(2);
                done()
            });
        });
    });
    describe('json object undefined', function () {
        it('should return error', function (done) {
            lib.findObjectsByKey('data', json.undefined(), function (err, results) {
                expect(err).toBeTruthy();
                expect(results).toBeFalsy();
                done();
            });
        });
    });
    describe('json object null', function () {
        it('should return error', function (done) {
            lib.findObjectsByKey('data', json.null, function (err, results) {
                expect(err).toBeTruthy();
                expect(results).toBeFalsy();
                done();
            });
        });
    });
    describe('json object a number', function () {
        it('should return error', function (done) {
            lib.findObjectsByKey('data', 2, function (err, results) {
                expect(err).toBeTruthy();
                expect(results).toBeFalsy();
                done();
            });
        });
    });

    describe('json object a string', function () {
        it('should return error', function (done) {
            lib.findObjectsByKey('data', '', function (err, results) {
                expect(err).toBeTruthy();
                expect(results).toBeFalsy();
                done();
            });
        });
    });
});

/******************************************
 * Section for findArraysByKey() function *
 ******************************************/

describe('findArraysByKey()', function () {
    describe('Top level', function () {
        it('should find array with the property name === `data`', function (done) {
            lib.findArraysByKey('data', json.topArray, function (err, results) {
                results.forEach(function (arry) {
                    expect(arry).toBeAn(Array);
                });
                expect(results.length).toBeLessThanOrEqualTo(1);
                done();
            });
        });
    });
    describe('Nested', function () {
        it('should find nested arrays with the property name === `data`', function (done) {
            lib.findArraysByKey('data', json.nested, function (err, results) {
                results.forEach(function (arry) {
                    expect(arry).toBeAn(Array);
                });
                expect(results.length).toBeLessThanOrEqualTo(2);
                done();
            });
        });
        it('should find arrays within an array with the property name === `data`', function (done) {
            lib.findArraysByKey('data', json.inArray, function (err, results) {
                results.forEach(function (arry) {
                    expect(arry).toBeAn(Array);
                });
                expect(results.length).toBeLessThanOrEqualTo(3);
                done();
            });
        });
    });
    describe('json object undefined', function () {
        it('should return error', function (done) {
            lib.findArraysByKey('data', json.undefined(),  function (err, results) {
                expect(err).toBeTruthy();
                expect(results).toBeFalsy();
                done();
            });
        });
    });
    describe('json object null', function () {
        it('should return error', function (done) {
            lib.findArraysByKey('data', json.null,  function (err, results) {
                expect(err).toBeTruthy();
                expect(results).toBeFalsy();
                done();
            });
        });
    });
});

/*******************************************
 * Section for findStringsByKey() function *
 *******************************************/

describe('findStringsByKey()', function () {
    describe('Top level', function () {
        it('should find a string with the property name === `data`', function (done) {
            lib.findStringsByKey('data', json.topString,  function (err, results) {
                results.forEach(function (str) {
                    expect(str).toBeAn('string');
                    expect(str).toMatch(/js/);
                });
                expect(results.length).toBeLessThanOrEqualTo(1);
                done();
            });
        });
    });
    describe('Nested', function () {
        it('should find nested strings with the property type === `data`', function (done) {
            lib.findStringsByKey('data', json.nested,  function (err, results) {
                results.forEach(function (str) {
                    expect(str).toBeAn('string');
                    expect(str).toMatch(/js/);
                });
                expect(results.length).toBeLessThanOrEqualTo(3);
                done();
            });
        });
        it('should find string within an array with the property type === `data`', function (done) {
            lib.findStringsByKey('data', json.inArray,  function (err, results) {
                results.forEach(function (str) {
                    expect(str).toBeAn('string');
                });
                expect(results.length).toBeLessThanOrEqualTo(2);
                done();
            });
        });
    });

    describe('json object undefined', function () {
        it('should return error', function (done) {
            lib.findStringsByKey('data', json.undefined(),  function (err, results) {
                expect(err).toBeTruthy();
                expect(results).toBeFalsy();
                done();
            });
        });
    });
    describe('json object null', function () {
        it('should return error', function (done) {
            lib.findStringsByKey('data', json.null,  function (err, results) {
                expect(err).toBeTruthy();
                expect(results).toBeFalsy();
                done();
            });
        });
    });
});

/*******************************************
 * Section for findNumbersByKey() function *
 *******************************************/

describe('findNumbersByKey()', function () {
    describe('Top level', function () {
        it('should find a number with the property name === `data`', function (done) {
            lib.findNumbersByKey('data', json.topNumber,  function (err, results) {
                results.forEach(function (num) {
                    expect(num).toBeAn('number');
                    expect(num).toMatch(15);
                });
                expect(results.length).toBeLessThanOrEqualTo(1);
                done();
            });
        });
    });
    describe('Nested', function () {
        it('should find nested numbers with the property type === `data`', function (done) {
            lib.findNumbersByKey('data', json.nested,  function (err, results) {
                results.forEach(function (num) {
                    expect(num).toBeAn('number');
                    expect(num).toMatch(15);
                });
                expect(results.length).toBeLessThanOrEqualTo(3);
                done();
            });
        });
        it('should find number within an array with the property type === `data`', function (done) {
            lib.findNumbersByKey('data', json.inArray,  function (err, results) {
                results.forEach(function (num) {
                    expect(num).toBeAn('number');
                });
                expect(results.length).toBeLessThanOrEqualTo(2);
                done();
            });
        });
    });

    describe('json object undefined', function () {
        it('should return error', function (done) {
            lib.findNumbersByKey('data', json.undefined(),  function (err, results) {
                expect(err).toBeTruthy();
                expect(results).toBeFalsy();
                done();
            });
        });
    });
    describe('json object null', function () {
        it('should return error', function (done) {
            lib.findNumbersByKey('data', json.null,  function (err, results) {
                expect(err).toBeTruthy();
                expect(results).toBeFalsy();
                done();
            });
        });
    });
});

/********************************************
 * Section for findBooleansByKey() function *
 ********************************************/

describe('findBooleansByKey()', function () {
    describe('Top level', function () {
        it('should find a boolean with the property name === `data`', function (done) {
            lib.findBooleansByKey('data', json.topBoolean,  function (err, results) {
                results.forEach(function (bool) {
                    expect(bool).toBe(false);
                });
                expect(results.length).toBeLessThanOrEqualTo(1);
                done();
            });
        });
    });
    describe('Nested', function () {
        it('should find nested booleans with the property type === `data`', function (done) {
            lib.findBooleansByKey('data', json.nested,  function (err, results) {
                results.forEach(function (bool) {
                    expect(bool).toBe(false);
                });
                expect(results.length).toBeLessThanOrEqualTo(3);
                done();
            });
        });
        it('should find booleans within an array with the property type === `data`', function (done) {
            lib.findBooleansByKey('data', json.inArray,  function (err, results) {
                results.forEach(function (bool) {
                    expect(bool).toBe(false);
                });
                expect(results.length).toBeLessThanOrEqualTo(2);
                done();
            });
        });
    });

    describe('json object undefined', function () {
        it('should return error', function (done) {
            lib.findBooleansByKey('data', json.undefined(),  function (err, results) {
                expect(err).toBeTruthy();
                expect(results).toBeFalsy();
                done();
            });
        });
    });
    describe('json object null', function () {
        it('should return error', function (done) {
            lib.findBooleansByKey('data', json.null,  function (err, results) {
                expect(err).toBeTruthy();
                expect(results).toBeFalsy();
                done();
            });
        });
    });
});

/***************************************
 * Section for findAllByKey() function *
 ***************************************/

describe('findAllByKey()', function () {
    describe('Top level and nested', function () {
        it('should find all properties with the property name === `data`', function (done) {
            lib.findAllByKey('data', json.nested, function (err, results) {
                expect(results.length).toBeLessThanOrEqualTo(13);
                done();
            });
        });
    });
});

/**********************************
 * Section for setBooleansByKey() *
 **********************************/

describe('setBooleansByKey', function () {
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

describe('setObjectsByKey', function () {
    it('should set top level property to new value', function (done) {
        lib.setObjectsByKey('data', json.topObject, { frank: true}, function (err, modified) {
            expect(modified.data).toEqual({frank: true});
            done();
        });
    });
    it('should get error for not passing in object as new value', function (done) {
        lib.setObjectsByKey('data', json.topObject, [], function (err, modified) {
            expect(err).toExist();
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
        })
    });
});