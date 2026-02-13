//#logic
//we need const  array of valid card
//we need const length  of valid
//all used number on one array
//emptey to used number max is 3 then 2  (3 times) then 1  infinity then =>{ create.conter((1|3))=>{firstnum,secondnum}}

//#functions
//main
//get one random num of  all number array
//searchengine()  #explanation : pick random number from 0 to 9 first array we dont find number !== randomnumber  ?  pick it up : i+=1;
//test if that all validcard doesnt match the new const array's 100% ? create new array : return result
//check and update of emptey number
//entrypoint for first num and second num

const ValidCard = [
  { 0: "9942629644461006" },
  { 1: "3510179894223166" },
  { 2: "0601042289361473" },
  { 3: "2797951870589684" },
  { 4: "9922621632669537" },
  { 5: "7197933484649693" },
];

const lengthcard = 16;
let i = 0;
let first = false;
let second = false;
let firstnum = 1;
let secondnum = 3;
