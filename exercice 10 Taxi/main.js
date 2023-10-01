// Définition du personnage Adam
const Adam = {
    santeMentale: 10,
  };
  
  // Liste de musiques possibles
  const musiques = [
    "Anissa - Wejdene",
    "Chief Keef - I Don't Like",
    "Stromae - Papaoutai",
    "Pnl - Le Monde ou Rien",
    "Baby Shark",
  ];
  
  // Générer un trajet avec 30 feux rouges
  const trajet = Array.from({ length: 30 }, () => {
    // Sélectionner une musique aléatoire
    const musiqueAleatoire = musiques[Math.floor(Math.random() * musiques.length)];
  
    // Afficher la musique et le nombre de feux restants
    console.log(`Musique : ${musiqueAleatoire} | Feux restants : ${30 - (trajet.indexOf(musiqueAleatoire) + 1)}`);
  
    // Vérifier si la musique est "Anissa - Wejdene" (la musique détestée par Adam)
    if (musiqueAleatoire === "Anissa - Wejdene") {
      // Réduire la santé mentale d'Adam de 1
      Adam.santeMentale -= 1;
  
      // Vérifier si sa santé mentale est tombée à 0
      if (Adam.santeMentale <= 0) {
        console.log("Explosion");
        return; // Arrêter le trajet en cas d'explosion
      }
  
      // Changer de taxi
      console.log("Changement de taxi");
    }
  });
  
  // Vérifier la fin du trajet
  if (Adam.santeMentale > 0) {
    console.log(`Adam est bien arrivé à destination avec ${30 - Adam.santeMentale} changements de taxi.`);
  }
  