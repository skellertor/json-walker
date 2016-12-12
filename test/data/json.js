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

module.exports.nested = {
    first: {
        data: {
            passed: true
        },
        level2: {
            data: {
                passed: true
            }
        }
    },
    second: {
        data: [],
        level2: {
            data: []
        }
    },
    third: {
        data: 'js',
        level2: {
            data: 'js',
            level3: {
                data: 'js'
            }
        }
    }
};

module.exports.inArray = {
    top: [
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
    bottom: [
        {
            data: 'js'
        },
        {
            data: 'js'
        }
    ]
};

module.exports.undefined = function () {
    var undef;
    return undef;
};

module.exports.null = null;