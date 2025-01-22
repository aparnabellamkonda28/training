console.log(10);
console.log(20);
setTimeout(()=>{
    console.log(30);
}, 5000)
console.log(40);
console.log(50);
setInterval(() => {
    document.writeln("MRU")   
}, 5000);


//! promise
let p1 = new Promise((resolve ,reject)=>{});
console.log(p1);

let p2 = new Promise((resolve ,reject)=>{
    resolve("Success");
});
console.log(p2);
p2.then((response)=>
{
    console.log(response);
    }).catch((error)=>{
        console.log(error);
    }).finally(()=>console.log("finaly printing for both"))


//console.log(window);

function fetchUsers()
{
    let x = fetch("http://jsoplaceholder.typicode.com/users");
    //console.log(x);
    x
    .then((response)=>{
        //console.log(response)
        //console.log(response.json());
        return response.json().then(data=>{
            console.log(data);
        })
    })
    .catch(err=>console.log(err))
}
fetchUsers();