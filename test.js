// hoistingCheck()
// function hoistingCheck(){
//     console.log("Working");
// }

// //dynamically changing of type
// var a = 23
// var a = false
// console.log(a);

// check()
// const check = ()=>{
//     console.log("Not working");
// }



// const varKeyword = ()=>{
//     var name = "ritul"
//     console.log(name);
//     var name = "jain"
//     console.log(name);

//     let username = "rituljain"
    
// //     console.log(username);
// //     // let username = "jain ritul"
// // }


// (function(){
//    console.log('Db connected');
// })();

// const tryIIFE = () =>{
//     console.log('Db connecteds');
// }
// tryIIFE()


// const thisKeyword = function(){
//     console.log(this);
// }
// thisKeyword()

// (function(){
//     console.log("hello");
// })();

// const regex = /very/g
// const text = "Ritul is very very very hard working and focused person";
// console.log(text.replace(regex,"Good"));

// const string = "ac"
// const pattern = /ab/;
// console.log(pattern.test(string));
// console.log(pattern.exec(string));
// console.log(string.match(pattern));


// function add(a){
//     return function(b){
//         return function(c){
//             return a+b+c;
//         }
//     }
// }
// console.log(add(3)(3)(2));

// const sendEmail = (to) => (subject) => (body) =>
//     `Sending email to ${to} which has subject ${subject} : ${body}`
// let step1 = sendEmail("rituljain@google.com")
// let step2 = step1("Order Confirmation")
// console.log(step2("Hey! beauty , there is something awesome for you"))


// function check(){
//     function checkScope(){
//             console.log("check");
//     }
//     checkScope()
// }
// check()

// function closure(){
//     let name = "ritul"
//     function displayName(){
//         console.log(name);
//     }

//     return displayName
// }
// const myFun = closure()
// myFun()


// console.log(Object.getOwnPropertyDescriptor(Math,'PI'));


// function getData (num,getNextdata){
//     setTimeout(()=>{
//         console.log("data",num);
//         if(getNextdata){
//            getNextdata();
//         }
//     },2000);
     
// }

// getData(1,()=>{
//     console.log("caputring data 2....");
//     getData(2,()=>{
//         console.log("caputring data 3");
//         getData(3,()=>{
//             getData(4);
//         });
//     });

// });


// const getPromise = ()=>{
//     return new Promise((resolve,reject)=>{
//         console.log("Data");
//         reject("error")
//     })
// }

// getPromise()
// .then((data)=>{
//     console.log(data);
// })
// .catch((e)=>{
//    console.log("error");
// })


// const  getGithubData = ()=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             let res = fetch("https://api.github.com/users/hiteshchoudhary")
//             console.log(res);
//             if(res){
//                 resolve(res)
//             }
//             else{
//                 reject("some error occured")
//             }
//         },4000)
//     })
// }
// getGithubData().then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// })


// function fact(n){
//     if(n== 0 || n==1) {
//          return 1
//     }

//     return n * fact(n-1) ;
// }
// console.log(fact(5))

// function ConstFun(name,age){
//     this.name = name;
//     this.age=age
// }

// const person1 =new ConstFun("ritul",3)
// console.log(person1);
// const person2 =new  ConstFun("rit",0)
// console.log(person2);


// const arro = {
//     name :"ritul",
//     age:12,
//     getName : ()=>{
//         console.log(this);
//         console.log(this.name);
//     },
    
// }
// console.log(this);
// console.log(arro.getName());

// function varVsLetFunction(){
//     let awesomeCar1 = "Audi";
//     var awesomeCar2 = "Mercedes";
//   }
  
// //   console.log(awesomeCar1); // Throws an error
//   console.log(awesomeCar2); // Throws an error

// const bike =[1,2,3]
// const e =[1,2,3]

// const newOne = [...bike,...e]
// console.log(newOne);

a = 2
console.log(a);
let a;