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