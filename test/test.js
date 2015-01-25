var ANSIState = require('../main');

exports['Exported Properly'] = function(test) {
    test.expect(2);

    var state = new ANSIState();

    test.equal(typeof ANSIState, 'function');
    test.equal(typeof state, 'object');

    // process.stdout.pipe(state);
    state.pipe(process.stdout);
    state.write('Hi');
    state.write('Hello');
    state.write('\033[31mIn Red Now....');
    state.write('\033[32mIn green Now....');    
    state.reset().restore();
    state.write('\n');

    test.done();
};

exports['tearDown'] = function(done) {
    done();
};
