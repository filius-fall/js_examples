// function identity(){
//     return this.name.toUpperCase()
// }

// function new_1(){
//     var greet="hello i am"+" " + identity.call(this);
//     console.log(greet)
// }

// var me={
//     name:"Me"
// }

// var you={
//     name:"You"
// }

// identity.call(you);
// identity.call(me);

// new_1.call(you);
// new_1.call(me);


// function foo(){
//     var a=2;
//     bar();
// }

// function bar(){
//     console.log(this.a);
// }
//  foo();


// function test01(){
//     let b=1;
//     console.log('This is inside test01');
//     return b
// }
// var c=2;
// var myPromise = new Promise(function(resolve,reject){
//     let a=1;
//     if(a==1){
//         resolve(test01())

//     }else{
//         reject("hey")
//     }

// })


// myPromise.then((res)=>{
//     res+=1;
//     console.log('Inside then ' +res);
//     console.log(res.a);
// })
// var x=5;
// let try_promise= new Promise(function try_pfunc(resolve,reject){
//     resolve(x);

//     reject("rejected");
// })


// try_promise.then(
//     function add(z){
//         z = z+1;
//         console.log('resolved with x= ',z);
//     },

//     function rej(msg){
//         console.log(msg);
//     }
// );




// const request=indexedDB.open("notes");

// console.log("inside matrix");


// var promise = new Promise(function(resolve, reject) { 
//     const x = "geeksforgeeks"; 
//     const y = "geeksforgeeks"
//     if(x === y) { 
//         resolve(); 
//     } else { 
//         reject(); 
//     } 
//     }); 
    
//     promise. 
//         then(function () { 
//             console.log('Success, You are a GEEK'); 
//         }). 
//         catch(function () { 
//             console.log('Some error has occured'); 
//         });					


console.log(name);