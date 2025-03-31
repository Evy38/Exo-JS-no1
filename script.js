let nom = "Cécile"
let age = 32
let ville ="Grenoble"
ville = "Lyon"

let utilisateur = {
    "nom" : nom,
    "age" : age,
    "ville" : ville,
}

utilisateur.ville = "Marseille"

utilisateur.email = "mon.email@email.com"
utilisateur.amis = ["Pierre", "Paul", "Jacques"]

console.log(utilisateur.amis)

let amisARetirer = "Jacques"
utilisateur.amis = utilisateur.amis.filter(amis => amis !== amisARetirer)


utilisateur.amis.push("Harry")


let amisARemplacer = "Paul"
let nvoPote = "Jessica"

utilisateur.amis = utilisateur.amis.map(amis => amis === amisARemplacer ? nvoPote : amis)


utilisateur.amis.forEach(function(ami) {console.log(ami)})


if(utilisateur.age < 18) {
    console.log("Mineur")
}else if(utilisateur.age > 18 && utilisateur.age < 25){
    console.log("Jeune adulte")
}else{
    console.log("Adulte")
}
//--------------------------------------------------------------------------------------------------------------


//fonction Simple
function saluerUtilisateur(){
    console.log(`Salut ${utilisateur.nom}`)
}

//fonction avec retour
function anneeNaissance(age) {
        let anneeNaissance = 2025-age
        return anneeNaissance
}
console.log(anneeNaissance(utilisateur.age))

//fonction avec condition
function verifierMajorite(age){
        if(age > 18){
            return true
        }
}
console.log(verifierMajorite(utilisateur.age))

//fonction qui manipule un Objet
function afficherProfil(utilisateur) {
    console.log(`Profil de l'utilisateur :`);
    console.log(`Nom : ${utilisateur.nom}`);
    console.log(`Ville : ${utilisateur.ville}`);
    console.log(`Âge : ${utilisateur.age}`);
    console.log(`Email : ${utilisateur.email}`);
}
console.log(afficherProfil(utilisateur))

// BONUS : fonction ajouter amis

function ajouterAmi(utilisateur, ami) {
    utilisateur.amis.push(ami)
    return utilisateur.amis
}
console.log(ajouterAmi(utilisateur, "James"))