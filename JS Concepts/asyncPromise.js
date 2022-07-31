let wakeUp = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Wake Up Successfully"),1000)
  });
//   wakeUp.then(function(out){
//     return(out);
// })

let jogging = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Going for a jog"),2000)
  });
//   jogging.then(function(out){
//     return(out);
// })

async function personA(){
    var wake = await wakeUp;
    setTimeout(()=>console.log("person A"+ wake));
    var jog = await jogging;
    setTimeout(()=>console.log("person A"+ jog));
}

async function personB(){
    var wake = await wakeUp;
    console.log("person B"+wake);
    
    console.log("Going to college");
}

personA();
personB();
console.log("Dreaming");