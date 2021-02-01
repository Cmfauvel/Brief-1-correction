// cette première instruction signifie que toute action sera possible après le chargement de la page HTML
window.onload = function() {
  let hiders = document.querySelectorAll('[data-js="hide"]');

Array.prototype.forEach.call(hiders, function (hider) {
	let hiderID = hider.getAttribute('href');
  let hiderTarget = document.querySelector(hiderID);
  
  hider.addEventListener('click', function (event) {
  	event.preventDefault();
    
    hiderTarget.classList.toggle('-visible');
  });
});
    
 //   var listApprenant = ['Farima','Abdoulaye','Adil','Alexis','Alicia','Asad','Ayoub','Bamba','Caroline','Charles','David','Denis','Elyesse','Flora','Gaëlle','lobna','Jonathan','Lyes','Maëlys','Mohamed','Muhammad','Kevin','Nasser','Fodié'];
//  console.log(listApprenant);

   // var btnRandom = document.getElementById('btn-random')
 //   console.log(btnRandom);
  //  btnRandom.addEventListener('click', function tirageAleatoire() {
  //      console.log(listApprenant);
  //      if
  //      listApprenant.sort();

  //  } )


}
// Rq : getElementById permet une liaison avec le document HTML, on peut utiliser document.querySelector aussi avec différentes écritures selon class ou id sélectionnés 
// 1. Créer un tableau avec le nom des apprenantsn ['Lyes', 'Kevin'] etc...
// 2. Mettre une variable pour aller chercher le btn-random dans le document HTML
// Rq : console log permet de se repérer dans la console de l'inspecteur 
// 3. On ajoute un événement au bouton random voir documentation, événement = fonction, ici on choisit click comme valeur/nom voir liste des valeurs
// 4. function après click représente ce qu'on veut déclencher après l'événement
// 5. Ici la liste s'affiche
// Finir pour qu'un seul nom choisi au hasard s'affiche
// Scope local ou général : notion à voir