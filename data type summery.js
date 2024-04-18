// primitive

// 7 type : number, string, boolean, null, undefined, symbol, BigInt 



// reference (Non primitive ) : array , object , function , 



// **********************************************



// stack (primitive) , heap (Non-Primitive)

// jab bhi stack mamory use hoti hai to wo variable ki  copy return karti hai to orignal value me koi changes nhi hota 

// jab bhi  heap mamory use hoti hai to wo reference return karti hai orignal value ka to jo bhi changes hoge wo orignal me bhi change hoga

//  this is stack

// let a = "danish"; 
// let b = a

// b = "sonu"

// console.log(a )
// console.log(b ) 


/* this is heap 
let user = {
     name :"Sonu", 
     	age:22, 	
    gender:"Male"
}

let user2 = user;

user2.name="danish";
console.log(user) */