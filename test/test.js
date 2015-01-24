var ANSIState = require('../main');

exports['Exported Properly'] = function(test) {
    test.expect(2);

    var state = new ANSIState();

    test.equal(typeof ANSIState, 'function');
    test.equal(typeof state, 'object');

    test.done();
};

exports['tearDown'] = function(done) {
    done();
};
