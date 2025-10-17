# BMVU - Block Manuel de Voie Unique Simulation

## 📋 À Propos du Projet

Ce projet est une **simulation interactive** du système BMVU (Block Manuel de Voie Unique) utilisé par l'ONCF (Office National des Chemins de Fer du Maroc). Il s'agit d'une application éducative développée en tant que **projet de stage** à **ONCF AGDAL** sous la supervision d'ingénieurs ferroviaires expérimentés.

### 🎯 Objectif

L'application vise à simuler fidèlement le fonctionnement du système de signalisation ferroviaire BMVU, permettant aux étudiants et aux stagiaires de comprendre les procédures de sécurité et de coordination entre les gares dans un environnement de voie unique.

## 🏢 Contexte du Stage

**Stage effectué à :** ONCF AGDAL - Rabat, Maroc  
**Période :** [2023/2024]  
**Encadrement :** Ingénieurs et techniciens spécialisés en signalisation ferroviaire  
**Institution académique :** EST (École Supérieure de Technologie)

### 📚 Objectifs du Stage
- Comprendre le fonctionnement des systèmes de signalisation ferroviaire
- Développer une application de simulation interactive
- Acquérir des compétences en développement d'applications desktop
- Appliquer les connaissances théoriques dans un contexte professionnel réel

## ⚡ Fonctionnalités

### 🚂 Simulation Réaliste
- Interface fidèle au système BMVU utilisé par l'ONCF
- Simulation des procédures de communication entre gares
- Gestion des autorités de circulation
- Système de sémaphores et signalisation
- <img width="1913" height="856" alt="image" src="https://github.com/user-attachments/assets/fc590ad5-e5fc-41a1-a31b-8385276632db" />
<img width="1915" height="868" alt="image" src="https://github.com/user-attachments/assets/1b103dd5-f027-418e-8b74-197997228027" />

### 🎮 Fonctionnalités Interactives
- **Gestion des Blocs** : Activation/désactivation des systèmes de blocage
- **Tests de Voie** : Simulation des tests de continuité
- **Sémaphores** : Contrôle des feux de signalisation
- **Communication** : Système d'annonces entre gares
- **Détection de Trains** : Simulation des pédales de voie

### 🎛️ Interface Utilisateur
- Interface graphique intuitive
- Raccourcis clavier pour une utilisation efficace
- Messages d'alerte et d'information en temps réel
- Mode plein écran disponible
- Effets sonores réalistes

## 🛠️ Technologies Utilisées

| Technologie | Usage |
|-------------|-------|
| **HTML5** | Structure de l'interface utilisateur |
| **CSS3** | Styles et animations |
| **JavaScript** | Logique métier et interactions |
| **Bootstrap 5** | Framework CSS responsive |
| **Electron.js** | Application desktop multiplateforme |

## 📁 Structure du Projet

```
BMVU/
├── src/
│   ├── home.html          # Page d'accueil
│   ├── BMVU.html          # Interface principale de simulation
│   ├── about.html         # Page à propos
│   ├── index.js           # Point d'entrée Electron
│   ├── preload.js         # Script de préchargement
│   └── assets/
│       ├── css/           # Feuilles de style
│       ├── js/            # Scripts JavaScript
│       ├── images/        # Images et icônes
│       └── audio/         # Effets sonores
├── bootstrap-5.0.2-dist/ # Framework Bootstrap
├── package.json           # Configuration npm
└── README.md             # Documentation
```

## 🚀 Installation et Utilisation

### Prérequis
- Node.js (version 14 ou supérieure)
- npm ou yarn

### Installation
```bash
# Cloner le repository
git clone https://github.com/votre-username/BMVU.git

# Naviguer vers le dossier
cd BMVU

# Installer les dépendances
npm install

# Lancer l'application
npm start
```

### Utilisation
1. Lancez l'application
2. Cliquez sur "Commencer" pour accéder à la simulation
3. Utilisez les boutons ou les raccourcis clavier pour interagir
4. Consultez les messages d'information pour les procédures

## ⌨️ Raccourcis Clavier

### Gare A (Station A)
- `Ctrl + T` : Test
- `Ctrl + S` : Sémaphore
- `Ctrl + A` : Annonce
- `Ctrl + B` : Blocage
- `Ctrl + R` : Rédition
- `Ctrl + F` : Sonnerie

### Gare B (Station B)
- `Alt + T` : Test
- `Alt + S` : Sémaphore
- `Alt + A` : Annonce
- `Alt + B` : Blocage
- `Alt + R` : Rédition
- `Alt + F` : Sonnerie

### Contrôles Généraux
- `F` : Mode plein écran
- `R` : Redémarrer la simulation
- `S` : Afficher/masquer les raccourcis

## 📖 Guide d'Utilisation

### Procédure Standard BMVU
1. **Activation du Test** : La gare expéditrice active le test de voie
2. **Ouverture du Sémaphore** : Autorisation de circulation accordée
3. **Passage du Train** : Détection par les pédales de voie
4. **Fermeture Automatique** : Le système se remet en sécurité

### Règles de Sécurité Simulées
- Une seule gare peut avoir l'autorité à la fois
- Le sémaphore ne peut être ouvert sans test préalable
- Les conflits de circulation sont détectés et signalés

## 🎓 Valeur Pédagogique

Cette simulation permet de :
- **Comprendre** les principes de sécurité ferroviaire
- **Pratiquer** les procédures de coordination entre gares
- **Visualiser** l'impact des actions sur la sécurité
- **Apprendre** sans risque sur du matériel réel

## 🔧 Développement

### Scripts Disponibles
```bash
npm start          # Lancer l'application
npm run build      # Construire l'application
npm run package    # Créer un package distributable
npm test           # Lancer les tests
```

### Contribution
Les contributions sont les bienvenues ! Veuillez suivre ces étapes :
1. Fork le projet
2. Créer une branche pour votre fonctionnalité
3. Commit vos changements
4. Push vers la branche
5. Ouvrir une Pull Request

## 📞 Contact

**Développeur** : Zakariae Bakkari  
**Email** : [votre-email@example.com]  
**LinkedIn** : [Votre profil LinkedIn]  
**GitHub** : [Votre profil GitHub]

**Institution** : EST (École Supérieure de Technologie)  
**Entreprise de Stage** : ONCF AGDAL - Rabat, Maroc

## 📄 Licence

Ce projet est développé dans un cadre pédagogique en collaboration avec l'ONCF. Tous droits réservés.

## 🙏 Remerciements

- **ONCF AGDAL** pour l'opportunité de stage et l'accès aux systèmes réels
- **EST** pour l'encadrement académique
- **Équipe d'ingénieurs ONCF** pour leur expertise et leurs conseils
- **Superviseurs de stage** pour leur accompagnement

---

*Développé avec ❤️ lors du stage à ONCF AGDAL - 2025*
