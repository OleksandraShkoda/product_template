// task 1  Shkoda
function makeNegative(num){
    return (num <= 0)?num:num*-1;
  }
//   task 2 Shkoda
function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
    return +laLigaGoals + +copaDelReyGoals+ +championsLeagueGoals;
   }
// task 3 Shkoda
function move (position, roll) {
    return position+ +roll*2;
  }
  //task 4 Shkoda
  function greet (name, owner) {
    return (name===owner)?"Hello boss":"Hello guest";
   }
   //task 5 Shkoda
   function litres(time){
    return Math.floor(0.5*time);
  }
  //task 6 Shkoda
  function lovefunc(flower1, flower2){
    return(+flower1%2 !== +flower2%2)?true:false;
  }

// 24.09.2022 1)https://www.codewars.com/kata/find-the-smallest-integer-in-the-array/train/javascript

class SmallestIntegerFinder {
  findSmallestInt = args => Math.min(...args);
  }

//2)https://www.codewars.com/kata/geometry-basics-circle-circumference-in-2d/train/javascript
 const circleCircumference = circle => 2 * Math.PI *circle.radius;
