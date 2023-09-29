class Pokemon {
    constructor(name, attack, defense, hp, luck) {
      this.name = name;
      this.attack = attack;
      this.defense = defense;
      this.hp = hp;
      this.luck = luck;
    }
  
    isLucky() {
      return Math.random() < this.luck / 100;
    }
  
    attackPokemon(target) {
      if (this.isLucky()) {
        const damage = this.attack - target.defense;
        if (damage > 0) {
          target.hp -= damage;
          console.log(`${this.name} attaque ${target.name} et inflige ${damage} points de dégâts.`);
        } else {
          console.log(`${this.name} attaque ${target.name} mais ne fait aucun dégât.`);
        }
      } else {
        console.log(`${this.name} attaque ${target.name} mais rate.`);
      }
    }
  }
  
  // Création de deux instances de Pokémon
  const leviator = new Pokemon('Leviator', 25, 10, 100, 80);
  const salameche = new Pokemon('Salameche', 30, 8, 100, 75);
  
  // Boucle de combat
  while (leviator.hp > 0 && salameche.hp > 0) {
    // Leviator attaque Salameche
    leviator.attackPokemon(salameche);
    console.log(`${salameche.name} a ${salameche.hp} points de vie restants.`);
  
    if (salameche.hp <= 0) {
      console.log(`${salameche.name} est KO. ${leviator.name} est le vainqueur !`);
      break;
    }
  
    // Salameche attaque Leviator
    salameche.attackPokemon(leviator);
    console.log(`${leviator.name} a ${leviator.hp} points de vie restants.`);
  
    if (leviator.hp <= 0) {
      console.log(`${leviator.name} est KO. ${salameche.name} est le vainqueur !`);
      break;
    }
  }
  