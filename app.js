//00.EXO
//--------------------------------------------------
/*const countTrue = (givenArray) => {
    //definir la somme avec itération en partant de zéro (empty array sera donc 0)
    let sum = 0;
    //Pour chaque élément de l'array givenArray => si la valeur est true, itération +1 stocké dans sum
    givenArray.forEach((value) => {
        if (value === true) {
            sum += 1;
        }
    });
    //print de la somme des true(s) dans un array donné
    console.log(sum);
   
};
countTrue([true, false, false, true, false]) // ➞ 2

countTrue([false, false, false, false]) // ➞ 0

countTrue([]) // ➞ 0
*/
//01.EXO
//--------------------------------------------------
/*const possibleBonus = (myPosition, friendPosition) =>{
    if (myPosition < friendPosition && (friendPosition - myPosition) <= 6 && (friendPosition - myPosition) > 1) {
        console.log(true)
    } else {
        console.log(false)
    }
    
}

possibleBonus(3, 7) //➞ true

possibleBonus(1, 9) //➞ false

possibleBonus(5, 3) //➞ false
*/
//02.EXO
//---------------------------------------------------
/*const num_of_digits = (num) => {
    // let's transform the num first in a string after that we can split it in an array with ('') to split 1 by 1 
    let splittedNum = num.toString().split('');
    console.log(splittedNum.length)

} 
num_of_digits(1000) //➞ 4

num_of_digits(12) //➞ 2

num_of_digits(1305981031) //➞ 10

num_of_digits(0) //➞ 1*/
//03.EXO
//-----------------------------------------------------
/*function toArray(something){ 
    console.log(Object.keys(something).map(key => [key, something[key]]));
}*/
/*function toArray(something){
    console.log(Object.entries(something));
}

toArray({ a: 1, b: 2 }) // ➞ [["a", 1], ["b", 2]]

toArray({ shrimp: 15, tots: 12 }) // ➞ [["shrimp", 15], ["tots", 12]]

toArray({}) // ➞ []*/
//04.EXO
//-----------------------------------------------------
/*const arrayOfMultiples = (num1, num2) => {
    //create an empty array we will use to push the numbers inside
    const mult = [];
    // iterate the number of times(num2) its going to multiply and stock num1(first*1 then * the "length" of num2 (iteration of num2))
    for (let i=0; i<num2 ; i ++){
        //push num1 ++ num1 times num2
         mult.push(num1 * i);
    } 
    console.log(mult);
}
arrayOfMultiples(7, 5) //➞ [7, 14, 21, 28, 35]

arrayOfMultiples(12, 10) //➞ [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]

arrayOfMultiples(17, 6) //➞ [17, 34, 51, 68, 85, 102]*/
//05.EXO
//-------------------------------------------------------
/*removeLeadingTrailing= (n) => {
    let numberToChange = parseFloat(n).toString()
    //numberToChange = numberToChange.toString()
    console.log(numberToChange);
    console.log(typeof(numberToChange));
    }
removeLeadingTrailing("230.000") //➞ "230"
removeLeadingTrailing("00402") //➞ "402"
removeLeadingTrailing("03.1400") //➞ "3.14"
removeLeadingTrailing("30") //➞ "30"
removeLeadingTrailing("00000.000000")*/
//06.EXO
//---------------------------------------------------------
/*const sortIt = (numsInArray) =>{
    let sortedArray = numsInArray.sort(function(a, b) { return a - b; })
    console.log(sortedArray);
}
sortIt([4, 1, 3]) //➞ [1, 3, 4]

sortIt([[4], [1], [3]]) //➞ [[1], [3], [4]]

sortIt([4, [1], 3]) //➞ [[1], 3, 4]

sortIt([[4], 1, [3]]) //➞ [1, [3], [4]]

sortIt([[3], 4, [2], [5], 1, 6]) //➞ [1, [2], [3], 4, [5], 6]*/
//07.EXO
//-----------------------------------------------------------
/*const calculator = (num1, operator, num2) => {
    //transform the operation into a string with template literals 
   let calculation = `${num1} ${operator} ${num2}`
   //use the string eval() function to return values
   console.log(eval(calculation));
} 
calculator(2, "+", 2) //➞ 4

calculator(2, "*", 2) //➞ 4

calculator(4, "/", 2) //➞ 2*/
//08.EXO   
//-------------------------------------------------------------
/*const areaOfCountry = (country, area) =>{
    let percentWorldMass =((area / 148940000) * 100).toFixed(2);
    console.log(`${country} is ${percentWorldMass}% of the world's landmass`)
}

areaOfCountry("Russia", 17098242) //➞ "Russia is 11.48% of the total world's landmass"

areaOfCountry("USA", 9372610) //=> "USA is 6.29% of the total world's landmass"

areaOfCountry("Iran", 1648195) //➞ "Iran is 1.11% of the total world's landmass"
Notes
The total world's landmass is 148,940,000 [Km^2]
Round the result to two decimal places.*/
//09.EXO
//----------------------------------------------------------------
/*function reverseWords(text) {
    //trim before and after, split into different words... now filter to get rid of extra spaces 
    let str = text.trim().split(" ").filter(word => word !== "");
    console.log(str)
    str.reverse();
    console.log(str.join(" "));
}
reverseWords(" the sky is blue") //➞ "blue is sky the"

reverseWords("hello   world!  ") //➞ "world! hello"

reverseWords("a good example") //➞ "example good a"*/
