//console.log(10)
//console.log(20)
//.setTimeout(()=>{
 //   console.log(30)//will run after a while and it lets the other lines execute 
//},5000)
//console.log(40)
//setInterval(()=>{
  //  document.writeln('MRU')},1500)

//API fetching

function fetchUsers(){
    let res = window.fetch("https://api.github.com/users")
    //console.log(res);
    res.then(val=>{
        console.log(val)
        console.log(val.js)
    })
    }
    fetchUsers()