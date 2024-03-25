/*
Écris une fonction qui, étant donné deux angles d'un triangle, renverra la valeur du troisième.
(Rappel : la somme des valeurs des trois angles dans un triangle est **toujours** 180°)
Ex: 
thirdAngle(90, 30) doit retourner 60
thirdAngle(20, 80) doit retourner 80
*/

function ThirdAngle(a, b) {
  // Your code here !

  if (typeof a !== 'number' || typeof b !== 'number') {
      return "Les valeurs des angles doivent être des nombres.";
  }
  var thirdAngle = 180 - (a + b);

  return thirdAngle;
}

let angleA = 60;
let angleB = 45;
let thirdAngle = ThirdAngle(angleA, angleB);
console.log("Le troisième angle est : " + thirdAngle + " degrés.");


module.exports = thirdAngle;

