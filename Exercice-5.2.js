const readlineSync = require("readline-sync");

function askTvSerie()
{
    let serie={
        name:'',
        productionYears:'',
        members:[],

    };

    let Name = readlineSync.question("Name ");
    let productionYears = readlineSync.question(" production ? ");
    let members = [];
    continuer = 'true';
    while (continuer=='true')
    {
        members.push(readlineSync.question(" members ? "));
        continuer =readlineSync.question(" continuer ? ");
    }

    serie.name = Name;
    serie.productionYears = productionYears;
    serie.members = members;

    return serie;

}


function randomizeCast(tvSerie)
{
    let aleatoire = Math.ceil(Math.random()*tvSerie.members.length-1)
    return tvSerie.members[aleatoire];
}



let tvSerie=askTvSerie();

console.log(randomizeCast(tvSerie))