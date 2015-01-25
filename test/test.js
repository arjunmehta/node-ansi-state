var ANSIState = require('../main');

exports['Exported Properly'] = function(test) {
    test.expect(2);

    var state = new ANSIState();

    test.equal(typeof ANSIState, 'function');
    test.equal(typeof state, 'object');

    state.write('Hi');
    state.write('Hello');
    state.write('\033[31mIn Red Now....');
    state.write('\033[32mIn green Now....');

    test.done();
};

exports['tearDown'] = function(done) {
    done();
};
