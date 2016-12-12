module.exports.topObject = {
    data: {
        passed: true
    }
};

module.exports.topArray = {
    data: []
};

module.exports.nested = {
    first: {
        data: {
            passed: true
        }
    },
    second: {
        data: []
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
    bottom: [
        {
            data: []
        },
        {
            data: []
        }
    ]
};

