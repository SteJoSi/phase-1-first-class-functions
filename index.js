
function receivesAFunction(callback) {
    callback();
}

function returnsANamedFunction() {
    return function silver() {
    }
}

function returnsAnAnonymousFunction() {
    return function() {
    }
}