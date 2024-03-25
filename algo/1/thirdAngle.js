/*
Écris une fonction qui, étant donné deux angles d'un triangle, renverra la valeur du troisième.
(Rappel : la somme des valeurs des trois angles dans un triangle est **toujours** 180°)
Ex: 
thirdAngle(90, 30) doit retourner 60
thirdAngle(20, 80) doit retourner 80
*/

function thirdAngle(a, b) {
    if (a < 0 || a > 180 || b < 0 || b > 180) {
        return "Erreur : Les angles doivent être compris entre 0 et 180";
    } else {
        return 180 - a - b;
    }
}

module.exports = thirdAngle;
