// console.log("i am student");

// var name=prompt("i am taking input")
// console.log(name);

// for(let i=1;i<=10;i++){
//   console.log(i*2);
// }

// let n=1;
// while(n<=10){
 //   console.log(n);
 //   n++;
// }

// let n=prompt("Give me number");
// if(n%2==0){
//  console.log("I am Even");
// }
// else{
//     console.log("I am Odd");
// }

// let marks=prompt("Enter your marks");
// if(marks>80 && marks<=90){
//     console.log("A Grade");
// }

// else if(marks>70 && marks<=80){
//     console.log("B Grade");
// }
   
// else if(marks>60 && marks<=70){
//         console.log("C Grade");
//     }

//     else{
//         console.log("D Grade");
//     }

// let fname=prompt("Give fname");
// let lname=prompt("Give lname");
// let msg="Hello"+fname+" "+lname+"You are using JS!!"
// alert(msg);


//    Guess the movie

const favMovie="avengers";
let guess=prompt("Guess my favourite");

while((guess!=favMovie) && (guess=="quit")){
    guess=prompt("Wrong Answer!! Please try again!!");
}

if(guess==favMovie){
     console.log("Congrats Buddy!!");
}

else{
    console.log("You Quited");
}
