Q.What is the output of the following Java program?
=>class Test   
{  
    public static void main (String args[])   
    {  
        System.out.println(10 + 20 + ""cookie"");   
        System.out.println(""you want cookie"" + 10 + 20);  
    }  
}  "

Q.What is NaN property in JavaScript?
=>Not a Number

Is '123' NaN? false
Is 'Hello' NaN? true
Is '2005/12/12' NaN? true



Q.isNaN(undefined)
=>True

Q.isNaN("undefined")
=>False

Q.Hositing in JS?

Q.Explain passed by value and passed by reference.

Q.Explain Higher Order Functions in javascript.

Q.Explain “this” keyword

Q.Print out name?
var obj = {
    name:  "vivek",
    getName: function(){
    console.log();
  }
}
        
obj.getName();
=>

Q.Explian diffrent types of DataTypes?
=>In JavaScript, a primitive (primitive value, primitive data type) is data that is not an object and has no methods.
There are 7 primitive data types: string, number, bigint, boolean, undefined, symbol, and null.

Q.Explain call(), apply() and, bind() methods?
=>https://medium.com/@omergoldberg/javascript-call-apply-and-bind-e5c27301f7bb

Q.What is recursion in a programming language?

Q.Find the palindromes in this sentence "Madam Arora is an expert in Malayalam" and print the longest palindrome 

let a = "Madam Arora is an Expert";
let b =[];

let c = b.push(a);


function palimdrome(){

    let d = [];

    for(let i = 0; i<c.length; i++){

        if(c[i].length = c[i].length - 1){
            console.log("Its a palimdrome");
            let e = d.push(c[i]);
        }
        else{
            console.log("Its not a palimdrome")
        }
    }

    let f = max(e[i]);
    console.log("f")

}
