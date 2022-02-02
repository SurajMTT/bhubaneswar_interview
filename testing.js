function a(num){
     return new Promise(resolve => {
         setTimeout(() => {
            var sum = num+3
            resolve(sum);
          }, 5000);
     })
  
}
async function runingProgram() {
    var x = await a(10)
    console.log(x);
}
runingProgram();
