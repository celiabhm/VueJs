//On stock les éléments HTML dans des variables
const leButton = document.querySelector('button');
const leinput = document.querySelector('input');
const laListe = document.querySelector('ul');

function ajouterTask() {
    //Dans inputContent on stock ce que l'utilisateur tape dans l'input
    const inputContent = leinput.value;
    //Création d'un élément <li></li>
    const listElement = document.createElement('li');
    //Complétion du texte de l'élément <li></li>
    listElement.textContent = inputContent;
    //Ajout du <li></li> dans la <ul></ul> (laListe)
    laListe.append(listElement);
    //Bonus : après avoir ajouté une Task, on vide l'input
    leinput.value = '';
};
leButton.addEventListener('click', ajouterTask);