function Diviseur(number) {
    var k = 2;
    var diviseur = '1';

    while (k < number){

      if (number % k == 0) {
          diviseur = diviseur + k;

        }
    k++;

    }
    listDiviseur =diviseur.split('');
    listDiviseur.shift()
    return listDiviseur.join('');
}


console.log(Diviseur(12))
