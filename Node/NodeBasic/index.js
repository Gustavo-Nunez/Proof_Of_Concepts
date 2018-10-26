const asyncAwait = require("./src/asyncAwait");

asyncAwait.greet("Gustavo Nunez");

asyncAwait.withPromise("Gustavo", "Nunez")
.then(n => console.log(n));

async function asyncAwaitF() {
    const name = await asyncAwait.withPromise("Gustavo", "Nunez");
    console.log(name);
}

asyncAwaitF();
// const call = require("./src/call");
// const add = require("./src/addition");
// const intensive = require("./src/intensive");

// console.log(call.sync("Gustavo Nunez"));

// call.withCallback("Gustavo Nunez", call.sync);

// call.withPromise("Gustavo Nunez")
// .then(name => console.log(name));

// add.asyncSum(2,4);
// add.syncSum(1,2);

// intensive.simulateSync();
// intensive.simulateAsync();
