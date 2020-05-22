function add(a,b){
    return a + b
}
console.log('Kata 1:', add(2,4));
function multiply(x,y){
    let currentValue=0
    for(let i = 0;i<y;i+=1){
        z=add(x,0)
        currentValue=add(z,currentValue)
        
    }return currentValue
}
console.log('kata 2:', multiply(6,4))
function power(m,n){
    let currentValue=1
    for(let i = 0;i<n;i+=1){
        z=multiply(m,1)
        currentValue=multiply(z,currentValue)
        
    }return currentValue
}
console.log('kata 3:',power(2,8))
console.log('kata 3:',power(3,4))

function factorial(x){
    let currentValue=1
    let exponet=x
    for(let i = 0;i<x;i+=1){

       
        z=multiply(exponet,1)
        currentValue=multiply(z,currentValue)
        exponet=add(exponet,-1)
        
    }return currentValue
}
console.log('kata 4:',factorial(5))
console.log('kata 4:',factorial(4))
