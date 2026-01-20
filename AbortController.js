const url="https://jsonplaceholder.typicode.com/todos/1";
const conctroller = new AbortController()
const signal = conctroller.signal

async function getData(){
    try{
        let result = await fetch(url, {signal})
        let data = await result.json()
        console.log(data)
    }catch(error){
        if(error.name === 'AbortError'){
            console.log("Operation is cancled because "+signal.reason)
        }
        else{
            console.log('failed to fetch api')
        }
    }
}
getData()
// conctroller.abort("user request not found")
conctroller.abort(new DOMException("user exits the app", "AbortError"))

// using AbortSignal with timeout 
// const signal =AbortSignal.timeout(200)
// async function getRecords(){
//     try{
//         let result = await fetch(url,{signal})
//         let data = await result.json()
//         console.log(data)
//     }
//     catch(error){
//         if(error.name = 'AbortError'){
//             console.log("task is stop immediately because")
//         }
//         else{
//             console.log(error)
//         }
//     }
// }
// getRecords()

