// somme de N premiers nombre entier naturel

let s = 0;
const n1 = prompt('Veuillez insérer un nombre : ');
for(let i = 1; i < n1; i++) {
    s=s+i;
}
alert('La somme des ' + n1 + ' premiers nombres est: ' + s);

//Algorithme MaxMin
let tab = [], min = 0, max = 0;
const n2 = prompt('Donnez un nombre N>0: ');
for(let i = 0; i < n2; i++) {
    let a = prompt('Entrer le nombre n° ' + (i+1) + ': ');
    if (i===0) { min = a; max = a; }
    if (a > max ) max = a;
    if (a < min ) min = a;
}
alert('Le Minimun des valeurs est: '+min+'\nle Maximum est : '+max)

// Quotient et reste de A et B

let a = prompt('Entrez A : ');
let b = prompt('Entrez B : ');
let q=a, r=a%b;
alert('Le Quotient de A/B est : ' + q + '\nLe reste de A/B est : ' + r);

// Produit de deux entier

let a1 = prompt('Entrez un entier A : ');
let b1 = prompt('Entrez un entier B : ');
let somme = 0;
if (a1===0 && b1===0) {
    alert('Le produit '+a1+'*'+b1+' est : ' + 0);
}else {
    for(let i = 0; i < b1; i++) {
        somme = somme+a1;
    }
    alert('Le produit '+a1+'*'+b1+' est : ' +somme);
}

//Détermination si A est disible par B

let a2 = prompt("Entrez un entier A : ");
let b2 = prompt("Entrez un entier B : ");

if (a2 % b2 === 0) alert(a2 + " est divisible par " + b2);
else alert(a2 + " n 'est divisible par " + b2);

//Determiner tous les diviseurs d'un entier X
let x = prompt("Entrez un entier X : ");
tab = []
for (let i = 1; i <= x; i++) {
  if (x%i===0) tab.push(i);
}
alert('Les diviseurs de ' +x+ ' sont: '+tab);

//Nombre premier
let nbr = prompt('Entrer un nombre entier: ');
for(let i = 2; i < nbr; i++) {
    if(nbr%i === 0) {alert(nbr + ' n\'est pas premier'); break; }
    else {alert(nbr + ' est premier'); break; }
}
 
    
