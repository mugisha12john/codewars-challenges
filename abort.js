// Implement a timeout for an asynchronous fetch request.
// If the request takes longer than(5 milliseconds) ,
//  it should be aborted.

// https://jsonplaceholder.typicode.com/users
const controller = AbortSignal.timeout(5);
const ftch = fetch("https://jsonplaceholder.typicode.com/users", { signal: controller });
ftch.then(d=>d.json()).then(d=>console.log(d)).catch(console.error)

