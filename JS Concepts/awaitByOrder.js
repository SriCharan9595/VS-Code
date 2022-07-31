let make = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Make the "),1000)
  });
  make.then(function(out){
    return(out);
})
let ready = new Promise((resolve, reject) => {
    setTimeout(() => resolve(" ready"),1000)
  });
  ready.then(function(out){
    return(out);
})
let buy = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Bought the "),1000)
  });
  buy.then(function(out){
    return(out);
})
let eat = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Eat the "),1000)
  });
  eat.then(function(out){
    return(out);
})
async function burgerFunction(){
    var makeBurger = await make;
    setTimeout(()=>console.log(makeBurger+ "burger"));
    var burgerReady = await ready;
    setTimeout(()=>console.log("Burger" + burgerReady));
    var buyBurger = await buy;
    setTimeout(()=>console.log(buyBurger + "Burger"));
    var eatBurger = await eat;
    setTimeout(()=>console.log(eatBurger + "Burger"));
}
async function cakeFunction() {
     var makeCake = await make;
    setTimeout(()=>console.log(makeCake+ "Cake"));
    var cakeReady = await ready;
    setTimeout(()=>console.log("Cake" + cakeReady));
    var buyCake = await buy;
    setTimeout(()=>console.log(buyCake + "Cake"));
    var eatCake = await eat;
    setTimeout(()=>console.log(eatCake + "Cake"));
 }
cakeFunction();
burgerFunction();