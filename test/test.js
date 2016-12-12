'use strict';

let expect = require('expect'),
    json = require('./data/json'),
    lib = require('../index');

describe('findObjectsByKey()', function () {
    describe('Top level', function () {
        it('should find all objects with the `data` prop', function (done) {
            lib.findObjectsByKey('data', json.topObject, [], function (err, results) {
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
        it('should find object with `data` prop nested in object', function (done) {
            lib.findObjectsByKey('data', json.nested, [], function (err, results) {
                console.log('ONE',results);
                results.forEach(function (obj) {
                    expect(obj).toBeAn(Object);
                    expect(obj).toNotBeAn(Array);
                });
                expect(results.length).toBeLessThanOrEqualTo(1);
                done()
            });
        });
        it('should find object with `data` prop in array', function (done) {
            lib.findObjectsByKey('data', json.inArray, [], function (err, results) {
                console.log('TWO',results)
                results.forEach(function (obj) {
                    expect(obj).toBeAn(Object);
                    expect(obj).toNotBeAn(Array);
                });
                expect(results.length).toBeLessThanOrEqualTo(2);
                done()
            });
        });
    });
});

describe('findArraysByKey', function () {
    describe('Top level', function () {
        it('should find array with `data` prop', function (done) {
            lib.findArraysByKey('data', json.topArray, [], function (err, results) {
                results.forEach(function (arry) {
                    expect(arry).toBeAn(Array);
                });
                expect(results.length).toBeLessThanOrEqualTo(1);
                done();
            });
        });
    });
    describe('Nested', function () {
        it('should find array with `data` prop nested in object', function (done) {
            lib.findArraysByKey('data', json.nested, [], function (err, results) {
                results.forEach(function (arry) {
                    expect(arry).toBeAn(Array);
                });
                expect(results.length).toBeLessThanOrEqualTo(1);
                done();
            });
        })
    });
});