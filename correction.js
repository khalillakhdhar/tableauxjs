function ex1()
{
    var semaine = new Array('lun', 'mra', 'mer', 'jeu', 'ven', 'Sam','ddi');
    semaine.pop();//Retirer le dernière valeur du tableau jours
    //Afficher les valeurs du tableau en utilisant la méthodeconsole.log
    for(var i in semaine)
       {
          console.log(semaine[i]+' ');
       }
   semaine.push("dim");//Ajouter la valeur ‘dim’ à la fin du tableau
   semaine[1]="mar";//Remplacer la valeur ‘mra’ par ‘mar’
   //Afficher le nombre de valeurs du tableau en utilisant la méthodeconsole.log 
  console.log( "La taille du tableau est " + semaine.length );
   //Afficher la troisième valeur du tableau
  console.log( "La troisième élément du tableau est " + semaine[2] );
  console.log("last table updates: ");
  for(var i in semaine)
  {
     console.log(semaine[i]+' ');
  }
}

ex1();