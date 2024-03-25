/*
Écris une fonction qui, étant donné deux angles d'un triangle, renverra la valeur du troisième.
(Rappel : la somme des valeurs des trois angles dans un triangle est **toujours** 180°)
Ex: 
thirdAngle(90, 30) doit retourner 60
thirdAngle(20, 80) doit retourner 80
*/

function thirdAngle(a, b) {
  // Your code here !
  if (typeof a !== "number" || typeof b !== "number")
    return false;

  let totalAngles = 180;
  let sum = a + b;

  if (sum > totalAngles)
    return false;
  else 
    return totalAngles - sum;

  return 180 - (a + b);
}

module.exports = thirdAngle;
