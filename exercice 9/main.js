let users = ["Stephanie", "gaia", "etienne","michel","roberto","julie"]

function countCharacter (value)  {
    return value.lenght
}

users.forEach (users => {
if (countCharacter(users) < 5) { 
console.log ( "C'est un prenom long de 5 lettres") 

} else {
console.log ("Ce n'est pas du tout un prénom long")

}
})