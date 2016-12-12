module.exports.topObject = {
    data: {
        passed: true
    }
};

module.exports.topArray = {
    data: []
};

module.exports.topString = {
    data: 'js'
};

module.exports.topNumber = {
    data: 15
};

module.exports.nested = {
    obj: {
        data: {
            passed: true
        },
        level2: {
            data: {
                passed: true
            }
        }
    },
    arry: {
        data: [],
        level2: {
            data: []
        }
    },
    str: {
        data: 'js',
        level2: {
            data: 'js',
            level3: {
                data: 'js'
            }
        }
    },
    num: {
        data: 15,
        level2: {
            data: 15,
            level3: {
                data: 15
            }
        }
    }
};

module.exports.inArray = {
    obj: [
        {
            data: {
                passed: true
            }
        },
        {
            data: {
                passed: true
            }
        }
    ],
    data: [
        {
            data: []
        },
        {
            data: []
        }
    ],
    str: [
        {
            data: 'js'
        },
        {
            data: 'js'
        }
    ],
    num: [
        {
            data: 15
        },
        {
            data: 15
        }
    ]

};

module.exports.undefined = function () {
    var undef;
    return undef;
};

module.exports.null = null;