function namedFunction() {
    console.log('namedFunction')
}

let anonymousFunction = function () {
    console.log('anonymousFunction')
}

let notExactlyAnonymousFunction = function anotherNamedFunction() {
    console.log('notExactlyAnonymousFunction')
}

namedFunction();
anonymousFunction();
notExactlyAnonymousFunction();