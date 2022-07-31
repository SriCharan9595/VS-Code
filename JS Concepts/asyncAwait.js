let makeCake = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Make the cake"),5000)
  });
  makeCake.then(function(result1){
    console.log(result1);
})

let makeBurger = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Make the Burger"),500)
  });
  makeBurger.then(function(result1){
    console.log(result1);
})

async function burgerFunction(){
  let buyBurger = await makeBurger;
    console.log("Burger ready");
    let result =  await buyBurger;
    console.log("Bought the burger.Promise fulfilled.");
    console.log('Eat the burger');
}

 async function cakeFunction() {  
  try{
    let buyCake = await makeCake;
    console.log("Cake ready");
    let result =  await buyCake;
    console.log("Bought the cake.Promise fulfilled.")
  }
  catch{
    console.log("error");
  }
  
  console.log('Eat the cake');
}

cakeFunction();
burgerFunction();

Promise.race([burgerFunction,cakeFunction]).then((value) => {
    console.log(value);
  });
  